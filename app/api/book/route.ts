import { NextResponse } from 'next/server'
import { markLeadAsBooked } from '@/lib/db'
import { sendEmail, getBookingConfirmationContent } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const { email = '', phone = '', name = '', business = '', date, time } = await request.json()

    if (!date || !time) {
      return NextResponse.json({ error: 'Please select both a date and time to continue.' }, { status: 400 })
    }

    const updated = markLeadAsBooked({ email, phone, name, business }, date, time)

    if (updated) {
      console.log(`[BOOKING SUCCESS] ${name || phone || email} booked for ${date} at ${time}`)
      
      // Dispatch booking confirmation email to the client if email was provided
      if (email) {
        const body = getBookingConfirmationContent(name || 'there', date, time)
        await sendEmail({
          to: email,
          subject: 'Strategy Session Confirmed — ArvianMarketing',
          body,
        }).catch(err => console.warn('Could not send client booking confirmation email:', err))
      }

      // Dispatch booking notification to the owner
      const ownerEmail = process.env.OWNER_EMAIL || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
      await sendEmail({
        to: ownerEmail,
        subject: `[Strategy Call Booked] ${name || 'Lead'} (${date} at ${time})`,
        body: `A lead has scheduled their 1-on-1 Strategy Session!

Details:
• Name: ${name || 'Not provided'}
• WhatsApp / Phone: ${phone || 'Not provided'}
• Business: ${business || 'Not provided'}
• Email: ${email || 'Not provided'}
• Selected Date: ${date}
• Selected Time: ${time}
• Booked At: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
`,
      }).catch(err => console.warn('Could not send owner booking notification email:', err))

      // Dispatch webhook to Google Sheets / Zapier if configured
      const webhookUrl = process.env.WEBHOOK_URL
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              event: 'booking_confirmed',
              name: name || 'N/A',
              phone: phone || 'N/A',
              business: business || 'N/A',
              email: email || 'N/A',
              date,
              time,
              confirmedAt: new Date().toISOString()
            })
          })
          console.log(`[WEBHOOK SUCCESS] Booking dispatched to ${webhookUrl}`)
        } catch (webhookError) {
          console.error('[WEBHOOK ERROR]', webhookError)
        }
      }

      return NextResponse.json({ success: true, booking: { name, phone, date, time } })
    } else {
      return NextResponse.json({ error: 'Could not record booking. Please try again.' }, { status: 500 })
    }
  } catch (error: any) {
    console.error('Error handling booking request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

