import { NextResponse } from 'next/server'
import { getLeads, saveLeads } from '@/lib/db'
import { sendEmail, getEmail2Content, getEmail3Content } from '@/lib/email'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const simulate = searchParams.get('simulate') === 'true'

    const leads = getLeads()
    const processed: string[] = []

    const now = new Date()
    const MS_PER_HOUR = 60 * 60 * 1000
    const TIME_FOR_EMAIL_2 = simulate ? 0 : 24 * MS_PER_HOUR
    const TIME_FOR_EMAIL_3 = simulate ? 0 : 3 * 24 * MS_PER_HOUR

    for (let i = 0; i < leads.length; i++) {
      const lead = leads[i]

      // Ignore booked or finished sequence leads
      if (lead.booked || lead.sequenceStatus !== 'pending') {
        continue
      }

      const createdTime = new Date(lead.createdAt).getTime()
      const timeElapsed = now.getTime() - createdTime

      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
      const calendarLink = `${baseUrl}/book-call?name=${encodeURIComponent(lead.name)}&email=${encodeURIComponent(lead.email)}&business=${encodeURIComponent(lead.business)}`

      // 1. Send Email 2 (after 24 hours) if it hasn't been sent yet
      if (!lead.emailsSent.includes('email2')) {
        if (timeElapsed >= TIME_FOR_EMAIL_2) {
          const body = getEmail2Content(lead.name, calendarLink)
          await sendEmail({
            to: lead.email,
            subject: 'Why most ad traffic bounces (and how to fix it)',
            body,
          })
          lead.emailsSent.push('email2')
          lead.lastSequenceTime = now.toISOString()
          processed.push(`${lead.email} (Email 2 sent)`)
        }
      } 
      // 2. Send Email 3 (after 3 days) if Email 2 has been sent but Email 3 hasn't
      else if (!lead.emailsSent.includes('email3')) {
        const lastSentTime = lead.lastSequenceTime ? new Date(lead.lastSequenceTime).getTime() : createdTime
        const elapsedSinceLast = now.getTime() - lastSentTime

        if (elapsedSinceLast >= TIME_FOR_EMAIL_3 || (simulate && timeElapsed >= TIME_FOR_EMAIL_3)) {
          const body = getEmail3Content(lead.name, calendarLink)
          await sendEmail({
            to: lead.email,
            subject: 'Closing out your request',
            body,
          })
          lead.emailsSent.push('email3')
          lead.lastSequenceTime = now.toISOString()
          lead.sequenceStatus = 'completed' // Finished sequence
          processed.push(`${lead.email} (Email 3 sent - Sequence Completed)`)
        }
      }
    }

    saveLeads(leads)

    return NextResponse.json({
      success: true,
      simulationMode: simulate,
      processedLeads: processed,
      message: processed.length > 0 
        ? `Successfully processed ${processed.length} sequences.` 
        : 'No leads currently pending sequence triggers.'
    })
  } catch (error: any) {
    console.error('Error running follow-up cron:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
