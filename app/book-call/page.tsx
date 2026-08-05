'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

function BookCallContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const name = searchParams?.get('name') || ''
  const email = searchParams?.get('email') || ''
  const business = searchParams?.get('business') || ''

  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Generate next 5 business days
  const getDates = () => {
    const dates = []
    let current = new Date()
    while (dates.length < 5) {
      current.setDate(current.getDate() + 1)
      const day = current.getDay()
      if (day !== 0 && day !== 6) { // Skip Sat/Sun
        dates.push(new Date(current))
      }
    }
    return dates
  }

  const [availableDates] = useState<Date[]>(getDates())
  const timeSlots = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM']

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return
    setBookingStatus('loading')

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          date: selectedDate,
          time: selectedTime
        })
      })

      if (response.ok) {
        setBookingStatus('success')
      } else {
        setBookingStatus('error')
      }
    } catch (e) {
      setBookingStatus('error')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#040e29', color: '#fff', fontFamily: 'sans-serif' }}>
      <div className="wrap" style={{ padding: '60px 24px', maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#FF5B26', marginBottom: '10px' }}>
            ArvianMarketing
          </div>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
            Divine Code Strategy Session
          </h1>
          <p style={{ color: '#AEBFD1', fontSize: '16px' }}>
            30-minute free growth audit for {name ? <strong>{name}</strong> : 'your business'}
          </p>
        </div>

        {bookingStatus === 'success' ? (
          <div style={{ background: '#08173f', color: '#fff', borderRadius: '16px', padding: '40px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎉</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', marginBottom: '10px' }}>Booking Confirmed!</h2>
            <p style={{ fontSize: '16px', color: '#AEBFD1', marginBottom: '24px' }}>
              We've locked in your strategy session for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
            </p>
            <p style={{ fontSize: '14px', color: '#AEBFD1', background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
              Check your inbox ({email || 'your email'}) for calendar invitation and meeting link.
            </p>
            <button
              onClick={() => router.push('/')}
              style={{ marginTop: '30px', background: '#FF5B26', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div style={{ background: '#08173f', color: '#fff', borderRadius: '16px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '400px', border: '1px solid rgba(255,255,255,0.08)' }}>
            {/* Left side: Date Select */}
            <div style={{ padding: '30px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Select Date</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {availableDates.map((date) => {
                  const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
                  return (
                    <button
                      key={dateStr}
                      onClick={() => { setSelectedDate(dateStr); setSelectedTime(''); }}
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        textAlign: 'left',
                        background: selectedDate === dateStr ? '#FF5B26' : 'rgba(255,255,255,0.04)',
                        color: '#fff',
                        cursor: 'pointer',
                        fontWeight: '500',
                        transition: 'all 0.2s'
                      }}
                    >
                      {dateStr}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right side: Time Select & Confirm */}
            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifycontent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Select Time</h3>
                {!selectedDate ? (
                  <p style={{ color: '#AEBFD1', fontSize: '14px' }}>Please choose a date first</p>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.08)',
                          background: selectedTime === time ? '#FF5B26' : 'rgba(255,255,255,0.04)',
                          color: '#fff',
                          cursor: 'pointer',
                          fontWeight: '500',
                          transition: 'all 0.2s'
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {selectedDate && selectedTime && (
                <div style={{ marginTop: '20px' }}>
                  <button
                    onClick={handleBooking}
                    disabled={bookingStatus === 'loading'}
                    style={{
                      width: '100%',
                      background: '#FF5B26',
                      color: '#fff',
                      border: 'none',
                      padding: '14px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    {bookingStatus === 'loading' ? 'Confirming Booking...' : 'Confirm Call Details →'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default function BookCall() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#123028', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading Scheduler...</div>}>
      <BookCallContent />
    </Suspense>
  )
}
