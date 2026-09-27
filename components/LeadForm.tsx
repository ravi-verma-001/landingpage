'use client'

import React, { useState } from 'react'

export default function LeadForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    businessType: 'Local Service Business',
    budget: '₹10k–₹25k',
    lookingFor: 'More Leads',
  })

  const waNumber = '919711190678'
  const waDisplayNumber = '+91 97111 90678'
  
  const waPreSubmitUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hi Ravi, I have a few questions before submitting the Meta Ads growth form.')}`
  
  const waPostSubmitUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hi Ravi, I just submitted the Meta Ads growth form for ${formData.business || formData.name}. Looking forward to discussing our strategy!`
  )}`

  const handleFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true)
      if (typeof window !== 'undefined') {
        if ((window as any).fbq) {
          (window as any).fbq('trackCustom', 'FormStart')
        }
        if ((window as any).gtag) {
          (window as any).gtag('event', 'form_start', {
            form_name: 'meta_ads_qualification',
          })
        }
      }
    }
  }

  const handleWhatsAppClick = (source: string) => {
    if (typeof window !== 'undefined') {
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Contact', { content_name: `WhatsApp Click - ${source}` })
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'contact', {
          method: 'whatsapp',
          source: source,
        })
      }
    }
  }

  const handleStrategyCallClick = () => {
    if (typeof window !== 'undefined') {
      if ((window as any).fbq) {
        (window as any).fbq('trackCustom', 'StrategyCallClick')
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'book_call_click', {
          lead_name: formData.name,
          business: formData.business,
        })
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError('Please enter your full name.')
      return
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '')
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit WhatsApp number.')
      return
    }

    if (!formData.business.trim() || formData.business.trim().length < 2) {
      setError('Please enter your business or company name.')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Something went wrong. Please check your connection or message us on WhatsApp.')
      }

      // Fire custom GA4 event for lead conversion tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          phone: formData.phone,
          name: formData.name,
          business: formData.business,
          budget: formData.budget,
          looking_for: formData.lookingFor,
        })
      }

      // Fire custom Meta Pixel event for lead conversion tracking
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Meta Ads Growth Plan',
          currency: 'INR',
        })
      }

      setSubmitted(true)
      setLoading(false)
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again or message Ravi directly on WhatsApp.')
      setLoading(false)
    }
  }

  const bookCallUrl = `/book-call?name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&business=${encodeURIComponent(formData.business)}`

  return (
    <div className="qualification-section-wrap" id="growth-plan">
      <div className="qualification-card">
        {submitted ? (
          <div className="success-state-container animate-fade-in">
            <div className="success-badge-icon">✓</div>
            <h3 className="success-heading">Thanks! Your Growth Request Has Been Received.</h3>
            <p className="success-subtext">
              We&apos;ve received your business details for <strong>{formData.business}</strong>. We&apos;ll review your requirements and contact you shortly on WhatsApp (<strong>{formData.phone}</strong>).
            </p>

            <div className="next-step-card">
              <span className="next-step-tag">RECOMMENDED NEXT STEP</span>
              <h4 className="next-step-title">Book Your 1-on-1 Strategy Call</h4>
              <p className="next-step-desc">
                Lock in a 30-minute private strategy session with Ravi to review your Meta Ads roadmap, creative angles, and budget structure.
              </p>
              
              <div className="success-action-group">
                <a
                  href={bookCallUrl}
                  className="btn-book-strategy"
                  onClick={handleStrategyCallClick}
                >
                  Book My Strategy Call &rarr;
                </a>

                <a
                  href={waPostSubmitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-secondary"
                  onClick={() => handleWhatsAppClick('Post-Submit Success')}
                >
                  <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="qualification-layout">
            <div className="qualification-info-side">
              <span className="qualification-tag">🎯 META ADS QUALIFICATION</span>
              <h2 className="qualification-title">Let&apos;s Grow Your Business With Meta Ads</h2>
              <p className="qualification-desc">
                Submit your business details and advertising goals below. We&apos;ll analyze your target audience, identify the ideal conversion funnel, and deliver your free growth roadmap.
              </p>

              <div className="qualification-perks">
                <div className="perk-item">
                  <span className="perk-icon">✓</span>
                  <div>
                    <strong>Custom Campaign Blueprint</strong>
                    <p>Funnel recommendation tailored to your specific service or product.</p>
                  </div>
                </div>
                <div className="perk-item">
                  <span className="perk-icon">✓</span>
                  <div>
                    <strong>Practical Budget Sizing</strong>
                    <p>Realistic ad spend calculation based on your local market &amp; target cost-per-lead.</p>
                  </div>
                </div>
                <div className="perk-item">
                  <span className="perk-icon">✓</span>
                  <div>
                    <strong>No High-Pressure Sales Tactics</strong>
                    <p>Transparent advice from an experienced Meta Ads practitioner.</p>
                  </div>
                </div>
              </div>

              {/* Sub-card: Secondary WhatsApp Alternative */}
              <div className="form-secondary-wa-box">
                <div className="sec-wa-text">
                  <span className="sec-wa-title">Have questions before submitting?</span>
                  <p className="sec-wa-sub">Chat directly with Ravi on WhatsApp ({waDisplayNumber})</p>
                </div>
                <a
                  href={waPreSubmitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sec-wa-btn"
                  onClick={() => handleWhatsAppClick('Pre-Submit Inquiry')}
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="qualification-form-side">
              <form onSubmit={handleSubmit} className="qualification-form" onFocus={handleFormStart}>
                <div className="form-fields-grid">
                  {/* Field 1: Name */}
                  <div className="form-field">
                    <label htmlFor="q-name">
                      1. Your Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="q-name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Field 2: WhatsApp Number */}
                  <div className="form-field">
                    <label htmlFor="q-phone">
                      2. WhatsApp Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="q-phone"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Field 3: Business Name */}
                  <div className="form-field">
                    <label htmlFor="q-business">
                      3. Business Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="q-business"
                      required
                      placeholder="e.g. Acme Interiors / Dental Care"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    />
                  </div>

                  {/* Field 4: Business Type */}
                  <div className="form-field">
                    <label htmlFor="q-business-type">
                      4. Business Type <span className="req">*</span>
                    </label>
                    <select
                      id="q-business-type"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    >
                      <option value="Local Service Business">Local Service Business (Clinic, Salon, Repair, etc.)</option>
                      <option value="Real Estate & Interior Design">Real Estate &amp; Interior Design</option>
                      <option value="E-Commerce / D2C Brand">E-Commerce / D2C Brand</option>
                      <option value="Healthcare / Dental / Wellness">Healthcare / Dental / Wellness</option>
                      <option value="Coaching, Consulting & B2B">Coaching, Consulting &amp; Education</option>
                      <option value="Other">Other Business</option>
                    </select>
                  </div>
                </div>

                {/* Field 5: Monthly Ad Budget */}
                <div className="form-field" style={{ marginTop: '16px' }}>
                  <label>
                    5. Monthly Ad Budget <span className="req">*</span>
                  </label>
                  <div className="budget-options-grid">
                    {['₹5k–₹10k', '₹10k–₹25k', '₹25k–₹50k', '₹50k+'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`option-pill ${formData.budget === opt ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, budget: opt })}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 6: What are you looking for? */}
                <div className="form-field" style={{ marginTop: '16px' }}>
                  <label>
                    6. What are you looking for? <span className="req">*</span>
                  </label>
                  <div className="looking-options-grid">
                    {['More Leads', 'WhatsApp Leads', 'Sales', 'Website Conversions'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`option-pill ${formData.lookingFor === opt ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, lookingFor: opt })}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {error && <div className="form-error-banner">{error}</div>}

                <button
                  type="submit"
                  disabled={loading}
                  className="qualification-submit-btn"
                >
                  {loading ? 'Submitting Your Details...' : 'Get My Free Growth Plan →'}
                </button>

                <p className="qualification-privacy-text">
                  🔒 100% Privacy Guaranteed &bull; Your details are strictly kept confidential and only used to share your growth plan.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
