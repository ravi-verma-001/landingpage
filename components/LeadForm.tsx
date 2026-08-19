'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LeadForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    needs: [] as string[]
  })

  const handleCheckboxChange = (need: string) => {
    setFormData(prev => {
      const needs = prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
      return { ...prev, needs }
    })
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
          business_name: formData.business,
          email: formData.email,
          services: formData.needs.join(', ')
        })
      }

      // Fire custom Meta Pixel event for lead conversion tracking
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead')
      }

      // Success! Immediately redirect to the calendar page
      router.push(`/book-call?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&business=${encodeURIComponent(formData.business)}`)
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please check your connection.')
      setLoading(false)
    }
  }

  return (
    <div className="form-section" id="growth-plan">
      <div className="form-side">
        <h2>Get your free growth plan</h2>
        <p>Tell us a bit about your business. We'll reply within a few hours with a plan — no obligation.</p>
        <div className="form-note">✓ No cost, no pressure — just a plan you can use, even if you don't hire us.</div>
        <div className="form-note">✓ Tailored strategy mapped out personally by our founder.</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            placeholder="e.g. Ravi Sharma"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="business">Business name</label>
          <input
            type="text"
            id="business"
            required
            placeholder="e.g. Sharma Skincare"
            value={formData.business}
            onChange={e => setFormData({ ...formData, business: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="phone">WhatsApp number</label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="e.g. 98765 43210"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            required
            placeholder="e.g. ravi@example.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="field">
          <label>What do you need help with?</label>
          <div className="checks">
            <label>
              <input
                type="checkbox"
                checked={formData.needs.includes('Website')}
                onChange={() => handleCheckboxChange('Website')}
              />{' '}
              Website Design
            </label>
            <label>
              <input
                type="checkbox"
                checked={formData.needs.includes('Social Media')}
                onChange={() => handleCheckboxChange('Social Media')}
              />{' '}
              Social Media Handling
            </label>
            <label>
              <input
                type="checkbox"
                checked={formData.needs.includes('Meta Ads')}
                onChange={() => handleCheckboxChange('Meta Ads')}
              />{' '}
              Meta Ads Management
            </label>
          </div>
        </div>

        {error && <div style={{ color: '#FF7A45', fontSize: '14px', marginBottom: '12px' }}>{error}</div>}

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Sending Details...' : 'Continue to Strategy Session →'}
        </button>
      </form>
    </div>
  )
}
