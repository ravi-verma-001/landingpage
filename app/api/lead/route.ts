import { NextResponse } from 'next/server'
import { addLead, getLeads, saveLeads } from '@/lib/db'
import { sendEmail, getEmail1Content } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const { 
      name, 
      phone, 
      business = '', 
      businessType = '', 
      budget = '', 
      lookingFor = '', 
      email = '', 
      needs = [] 
    } = await request.json()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Please provide both your name and WhatsApp number.' }, { status: 400 })
    }

    // Save lead to local db
    const lead = addLead({ 
      name, 
      business, 
      businessType, 
      budget, 
      lookingFor, 
      phone, 
      email, 
      needs 
    })

    // Generate custom booking calendar link if email or booking parameter is needed
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://arvianmarketing.shop')
    const calendarLink = `${baseUrl}/book-call?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&business=${encodeURIComponent(business)}`

    if (email) {
      // Trigger Email 1 (Immediate Safety Net)
      const emailBody = getEmail1Content(name, calendarLink)
      await sendEmail({
        to: email,
        subject: 'Next steps for your growth strategy',
        body: emailBody,
      }).catch(err => console.warn('Could not send client email:', err))

      // Log tracking for email sequence
      const leads = getLeads()
      const index = leads.findIndex((l: any) => l.email && l.email.toLowerCase() === email.toLowerCase())
      if (index !== -1) {
        leads[index].emailsSent.push('email1')
        leads[index].lastSequenceTime = new Date().toISOString()
        saveLeads(leads)
      }
    }

    // Dispatch notification email to the owner
    const ownerEmail = process.env.OWNER_EMAIL || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    await sendEmail({
      to: ownerEmail,
      subject: `[Meta Ads Lead] ${name} - ${business || 'Business'} (${budget || 'Budget N/A'})`,
      body: `You have a new qualified Meta Ads inquiry!

Details:
• Name: ${name}
• WhatsApp Number: ${phone}
• Business Name: ${business || 'Not specified'}
• Business Type: ${businessType || 'Not specified'}
• Monthly Ad Budget: ${budget || 'Not specified'}
• Looking For: ${lookingFor || 'Meta Ads Growth'}
• Email: ${email || 'Not specified'}
• Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
`,
    }).catch(err => console.warn('Could not send owner alert email:', err))

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
            phone,
            business,
            businessType,
            budget,
            lookingFor,
            email,
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

