'use client'

import React, { useState } from 'react'

export default function LeadForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const waNumber = '919711190678'
  const waDisplayNumber = '+91 97111 90678'
  const waPreFilledUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hi Ravi, I saw your landing page offer (starting ₹2,999) and want to discuss a Landing Page & Meta Ads for my business.')}`

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', { content_name: 'WhatsApp Click' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        throw new Error('Something went wrong. Please try again.')
      }

      // Fire custom GA4 event for lead conversion tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          phone: formData.phone,
          name: formData.name
        })
      }

      // Fire custom Meta Pixel event for lead conversion tracking
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead')
      }

      setSubmitted(true)
      setLoading(false)
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please check your connection or message us directly on WhatsApp.')
      setLoading(false)
    }
  }

  return (
    <div className="form-section" id="growth-plan">
      {/* Primary WhatsApp Card */}
      <div className="wa-primary-card">
        <div className="wa-card-header">
          <span className="wa-pulse-dot"></span>
          <span className="wa-card-tag">FASTEST RESPONSE</span>
        </div>
        <h3>Chat Directly with Ravi on WhatsApp</h3>
        <p>Skip filling forms! Message us directly on WhatsApp to get live examples, transparent pricing, and your custom growth plan in under 15 minutes.</p>

        <a 
          href={waPreFilledUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="wa-btn-big"
          onClick={handleWhatsAppClick}
        >
          <svg viewBox="0 0 16 16" className="wa-btn-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
          Message on WhatsApp ({waDisplayNumber})
        </a>

        <div className="wa-card-footer">
          <span>⚡ Replies typically within 10-15 minutes</span>
          <span>•</span>
          <span>No spam or high pressure</span>
        </div>
      </div>

      {/* Secondary Quick Callback Option */}
      <div className="secondary-form-card">
        <div className="secondary-form-head">
          <span className="secondary-tag">OR PREFER A CALLBACK?</span>
          <h4>Leave your name &amp; WhatsApp number</h4>
          <p>We'll message you on WhatsApp with our package options and schedule a quick strategy call.</p>
        </div>

        {submitted ? (
          <div className="form-success-box animate-fade-in">
            <div className="success-icon">✓</div>
            <h4>Thank you, {formData.name}!</h4>
            <p>We received your request. Ravi will WhatsApp you on <strong>{formData.phone}</strong> shortly with your free plan.</p>
            <a 
              href={waPreFilledUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="success-wa-link"
              onClick={handleWhatsAppClick}
            >
              Don't want to wait? Tap here to chat on WhatsApp now →
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="short-form">
            <div className="field">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="e.g. Rahul Verma"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="field">
              <label htmlFor="phone">WhatsApp Number</label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="e.g. 98765 43210"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {error && <div className="form-error-msg">{error}</div>}

            <button type="submit" disabled={loading} className="short-submit-btn">
              {loading ? 'Submitting...' : 'Request Free Callback & Plan →'}
            </button>
            <p className="form-privacy-note">🔒 Your number is 100% private. We only use it to share your free growth plan.</p>
          </form>
        )}
      </div>
    </div>
  )
}
