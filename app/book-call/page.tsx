'use client'

import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

function BookCallContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const name = searchParams?.get('name') || ''
  const phone = searchParams?.get('phone') || ''
  const email = searchParams?.get('email') || ''
  const business = searchParams?.get('business') || ''

  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [validationError, setValidationError] = useState<string>('')
  const [serverError, setServerError] = useState<string>('')
  
  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<{ date: string; time: string } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  // Generate next 5 business days
  const getDates = () => {
    const dates: Date[] = []
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

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // Keyboard navigation (Escape closes modal)
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, handleCloseModal])

  const handleBooking = async () => {
    setValidationError('')
    setServerError('')

    // Validation: Ensure both date and time are selected
    if (!selectedDate || !selectedTime) {
      setValidationError('Please select a date and time to continue.')
      return
    }

    if (loading) return // Prevent multiple duplicate clicks

    setLoading(true)

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          business,
          date: selectedDate,
          time: selectedTime,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        const booked = { date: selectedDate, time: selectedTime }
        setConfirmedBooking(booked)
        setIsModalOpen(true)
        setIsCompleted(true)
        setLoading(false)

        // Conversion tracking
        if (typeof window !== 'undefined') {
          if ((window as any).fbq) {
            (window as any).fbq('trackCustom', 'StrategyCallConfirmed', {
              date: selectedDate,
              time: selectedTime,
            })
          }
          if ((window as any).gtag) {
            (window as any).gtag('event', 'strategy_call_confirmed', {
              date: selectedDate,
              time: selectedTime,
              lead_name: name,
            })
          }
        }
      } else {
        setServerError(data.error || 'Something went wrong. Your booking could not be confirmed. Please try again.')
        setLoading(false)
      }
    } catch (err: any) {
      setServerError('Something went wrong. Your booking could not be confirmed. Please try again.')
      setLoading(false)
    }
  }

  const waNumber = '919711190678'
  const waPreFilledUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hi Ravi, I just scheduled a strategy call for ${confirmedBooking?.date || selectedDate} at ${confirmedBooking?.time || selectedTime}. Looking forward to connecting!`
  )}`

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A', fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
      <div className="wrap" style={{ padding: '48px 20px', maxWidth: '820px' }}>
        {/* Header Branding */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <div style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '24px', fontWeight: '800', color: '#7C3AED', marginBottom: '8px' }}>
              ArvianMarketing
            </div>
          </Link>
          <h1 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '32px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
            Meta Ads Strategy Session
          </h1>
          <p style={{ color: '#475569', fontSize: '15.5px' }}>
            30-minute 1-on-1 strategy session with Ravi for {name ? <strong>{name}</strong> : 'your business'}
          </p>
        </div>

        {/* Main Card */}
        {isCompleted && !isModalOpen ? (
          /* Post-Done Clean State */
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '48px 36px',
            textAlign: 'center',
            border: '1.5px solid rgba(124, 58, 237, 0.2)',
            boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.06)'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#10B981',
              color: '#FFFFFF',
              fontSize: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
            }}>
              ✓
            </div>
            <h2 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '26px', fontWeight: '800', color: '#0F172A', marginBottom: '10px' }}>
              Your Call Is Scheduled ✓
            </h2>
            <p style={{ fontSize: '15.5px', color: '#475569', marginBottom: '24px', maxWidth: '520px', margin: '0 auto 24px' }}>
              We look forward to reviewing your Meta Ads roadmap with Ravi on:
            </p>

            {/* Selected summary */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '18px 24px',
              maxWidth: '440px',
              margin: '0 auto 28px',
              display: 'flex',
              justifyContent: 'space-around',
              textAlign: 'center'
            }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Date</span>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A', marginTop: '4px' }}>
                  {confirmedBooking?.date}
                </div>
              </div>
              <div style={{ width: '1px', background: '#CBD5E1' }}></div>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Time</span>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#7C3AED', marginTop: '4px' }}>
                  {confirmedBooking?.time}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#64748B', marginBottom: '28px' }}>
              Meeting details will be shared with you shortly.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => router.push('/')}
                style={{
                  background: '#0F172A',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '13px 24px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '15px',
                  transition: 'all 0.2s'
                }}
              >
                Back to Home &rarr;
              </button>

              <a
                href={waPreFilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#FFFFFF',
                  color: '#15803D',
                  border: '1.5px solid #86EFAC',
                  padding: '13px 22px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '14.5px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          /* Interactive Date & Time Picker */
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1.5px solid rgba(124, 58, 237, 0.2)',
            boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.06)',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              minHeight: '420px'
            }}>
              {/* Left Column: Date Select */}
              <div style={{ padding: '32px 28px', borderRight: '1px solid rgba(15, 23, 42, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>1. Select Date</h3>
                  {selectedDate && (
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#7C3AED', background: '#F5F3FF', padding: '3px 8px', borderRadius: '6px' }}>
                      Selected
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {availableDates.map((date) => {
                    const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
                    const isSelected = selectedDate === dateStr
                    return (
                      <button
                        key={dateStr}
                        type="button"
                        onClick={() => {
                          setSelectedDate(dateStr)
                          setValidationError('')
                          setServerError('')
                        }}
                        style={{
                          padding: '13px 16px',
                          borderRadius: '10px',
                          border: isSelected ? '1.5px solid #7C3AED' : '1px solid #E2E8F0',
                          textAlign: 'left',
                          background: isSelected ? 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)' : '#F8FAFC',
                          color: isSelected ? '#FFFFFF' : '#0F172A',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '14.5px',
                          transition: 'all 0.15s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <span>{dateStr}</span>
                        {isSelected && <span style={{ fontSize: '14px' }}>✓</span>}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right Column: Time Select & Confirm */}
              <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>2. Select Time</h3>
                    {selectedTime && (
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#7C3AED', background: '#F5F3FF', padding: '3px 8px', borderRadius: '6px' }}>
                        Selected
                      </span>
                    )}
                  </div>

                  {!selectedDate ? (
                    <div style={{
                      background: '#F8FAFC',
                      border: '1px dashed #CBD5E1',
                      borderRadius: '10px',
                      padding: '24px 16px',
                      textAlign: 'center',
                      color: '#64748B',
                      fontSize: '14px'
                    }}>
                      👈 Please choose a date first to view available time slots
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '10px' }}>
                      {timeSlots.map((time) => {
                        const isSelected = selectedTime === time
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => {
                              setSelectedTime(time)
                              setValidationError('')
                              setServerError('')
                            }}
                            style={{
                              padding: '12px 10px',
                              borderRadius: '10px',
                              border: isSelected ? '1.5px solid #7C3AED' : '1px solid #E2E8F0',
                              background: isSelected ? 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)' : '#F8FAFC',
                              color: isSelected ? '#FFFFFF' : '#0F172A',
                              cursor: 'pointer',
                              fontWeight: '600',
                              fontSize: '14px',
                              textAlign: 'center',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            {time}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Validation and Action Area */}
                <div style={{ marginTop: '28px' }}>
                  {/* Validation Error Message */}
                  {validationError && (
                    <div style={{
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      color: '#B91C1C',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      marginBottom: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>⚠️</span>
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Server Error Message with Retry */}
                  {serverError && (
                    <div style={{
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      color: '#B91C1C',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      marginBottom: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>✕</span>
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Selected Preview Line */}
                  {selectedDate && selectedTime && (
                    <div style={{
                      fontSize: '13px',
                      color: '#475569',
                      marginBottom: '12px',
                      textAlign: 'center'
                    }}>
                      Selected: <strong>{selectedDate}</strong> at <strong style={{ color: '#7C3AED' }}>{selectedTime}</strong>
                    </div>
                  )}

                  {/* Confirm Button */}
                  <button
                    type="button"
                    onClick={handleBooking}
                    disabled={loading}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '10px',
                      fontWeight: '700',
                      fontSize: '16px',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.7 : 1,
                      boxShadow: '0 8px 20px rgba(124, 58, 237, 0.35)',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {loading ? 'Confirming...' : 'Confirm Call Details →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================
          SUCCESS CONFIRMATION MODAL POPUP
          ======================================================== */}
      {isModalOpen && confirmedBooking && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={handleCloseModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            padding: '20px',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '480px',
              width: '100%',
              padding: '36px 30px',
              textAlign: 'center',
              boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.3)',
              border: '1.5px solid rgba(124, 58, 237, 0.2)',
              position: 'relative',
              animation: 'scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Close Button / X */}
            <button
              onClick={handleCloseModal}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#F1F5F9',
                border: 'none',
                color: '#64748B',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E2E8F0'
                e.currentTarget.style.color = '#0F172A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F1F5F9'
                e.currentTarget.style.color = '#64748B'
              }}
            >
              ✕
            </button>

            {/* Success Checkmark Icon */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#10B981',
                color: '#FFFFFF',
                fontSize: '32px',
                fontWeight: '900',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                boxShadow: '0 10px 24px rgba(16, 185, 129, 0.35)'
              }}
            >
              ✓
            </div>

            {/* Heading */}
            <h2
              id="modal-title"
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '26px',
                fontWeight: '800',
                color: '#0F172A',
                marginBottom: '8px',
                lineHeight: 1.25
              }}
            >
              Call Booked Successfully!
            </h2>

            {/* Message */}
            <p style={{ fontSize: '15px', color: '#475569', marginBottom: '22px', lineHeight: 1.5 }}>
              Your strategy call has been scheduled with Ravi Verma.
            </p>

            {/* Dynamic Booking Details */}
            <div
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '20px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                textAlign: 'left'
              }}
            >
              <div style={{ borderRight: '1px solid #E2E8F0', paddingRight: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
                  Date
                </span>
                <span style={{ fontSize: '15.5px', fontWeight: '800', color: '#0F172A' }}>
                  {confirmedBooking.date}
                </span>
              </div>
              <div style={{ paddingLeft: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
                  Time
                </span>
                <span style={{ fontSize: '15.5px', fontWeight: '800', color: '#7C3AED' }}>
                  {confirmedBooking.time}
                </span>
              </div>
            </div>

            {/* Post-Details Note */}
            <p style={{ fontSize: '13.5px', color: '#64748B', marginBottom: '24px' }}>
              Meeting details will be shared with you shortly.
            </p>

            {/* Primary Action Button: Done */}
            <button
              onClick={handleCloseModal}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(124, 58, 237, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 12px 26px rgba(124, 58, 237, 0.45)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(124, 58, 237, 0.35)'
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Modal Keyframe Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default function BookCall() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A', fontFamily: 'sans-serif' }}>
        Loading Booking Experience...
      </div>
    }>
      <BookCallContent />
    </Suspense>
  )
}
