import { NextResponse } from 'next/server'
import { markLeadAsBooked } from '@/lib/db'
import { sendEmail, getBookingConfirmationContent } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const { email, name, date, time } = await request.json()

    if (!email || !date || !time) {
      return NextResponse.json({ error: 'Missing booking details' }, { status: 400 })
    }

    const updated = markLeadAsBooked(email, date, time)

    if (updated) {
      console.log(`[BOOKING SUCCESS] ${name || email} booked for ${date} at ${time}`)
      
      // Dispatch booking confirmation email to the client
      const body = getBookingConfirmationContent(name || 'there', date, time)
      await sendEmail({
        to: email,
        subject: 'Strategy Session Confirmed — PixelGrowth',
        body,
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'Lead not found for email: ' + email }, { status: 404 })
    }
  } catch (error: any) {
    console.error('Error handling booking request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

