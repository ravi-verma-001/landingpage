import { NextResponse } from 'next/server'
import { markLeadAsBooked } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { email, name, date, time } = await request.json()

    if (!email || !date || !time) {
      return NextResponse.json({ error: 'Missing booking details' }, { status: 400 })
    }

    const updated = markLeadAsBooked(email, date, time)

    if (updated) {
      console.log(`[BOOKING SUCCESS] ${name || email} booked for ${date} at ${time}`)
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'Lead not found for email: ' + email }, { status: 404 })
    }
  } catch (error: any) {
    console.error('Error handling booking request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
