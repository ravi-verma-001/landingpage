import { NextResponse } from 'next/server'
import { addLead } from '@/lib/db'
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
    const { getLeads, saveLeads } = require('@/lib/db')
    const leads = getLeads()
    const index = leads.findIndex((l: any) => l.email.toLowerCase() === email.toLowerCase())
    if (index !== -1) {
      leads[index].emailsSent.push('email1')
      leads[index].lastSequenceTime = new Date().toISOString()
      saveLeads(leads)
    }

    return NextResponse.json({ success: true, lead })
  } catch (error: any) {
    console.error('Error handling lead submission:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
