import { NextResponse } from 'next/server'
import { addLead, getLeads, saveLeads } from '@/lib/db'
import { sendEmail, getEmail1Content } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const { name, business, phone, email, needs } = await request.json()

    if (!name || !business || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save lead to local db
    const lead = addLead({ name, business, phone, email, needs })

    // Generate custom booking calendar link to prefill their details
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const calendarLink = `${baseUrl}/book-call?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&business=${encodeURIComponent(business)}`

    // Trigger Email 1 (Immediate Safety Net)
    const emailBody = getEmail1Content(name, calendarLink)
    await sendEmail({
      to: email,
      subject: 'Next steps for your growth strategy',
      body: emailBody,
    })

    // Log tracking for email sequence
    const leads = getLeads()
    const index = leads.findIndex((l: any) => l.email.toLowerCase() === email.toLowerCase())
    if (index !== -1) {
      leads[index].emailsSent.push('email1')
      leads[index].lastSequenceTime = new Date().toISOString()
      saveLeads(leads)
    }

    // Dispatch notification email to the owner
    const ownerEmail = process.env.OWNER_EMAIL || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    await sendEmail({
      to: ownerEmail,
      subject: `[New Lead Alert] ${name} from ${business}`,
      body: `You have a new lead!

Details:
Name: ${name}
Business Name: ${business}
WhatsApp: ${phone}
Email: ${email}
Selected Services: ${needs.length ? needs.join(', ') : 'Not specified'}

A safety net email (Email 1) has been sent to the client with the strategy session scheduler link.
`,
    })

    // Dispatch webhook to Google Sheets / Zapier if configured
    const webhookUrl = process.env.WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'lead_captured',
            name,
            business,
            phone,
            email,
            needs: needs.join(', '),
            createdAt: new Date().toISOString()
          })
        })
        console.log(`[WEBHOOK SUCCESS] Lead dispatched to ${webhookUrl}`)
      } catch (webhookError) {
        console.error('[WEBHOOK ERROR]', webhookError)
      }
    }

    return NextResponse.json({ success: true, lead })
  } catch (error: any) {
    console.error('Error handling lead submission:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}

