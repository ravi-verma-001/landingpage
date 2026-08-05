'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
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

      // Success! Immediately redirect to the calendar page
      router.push(`/book-call?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&business=${encodeURIComponent(formData.business)}`)
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please check your connection.')
      setLoading(false)
    }
  }

  return (
    <>
      <div className="hero-blast-wrapper">
        <div className="wrap">
          <div className="topbar">
            <div className="brand"><span className="brand-dot"></span>ArvianMarketing</div>
            <a className="top-cta-blast" href="#growth-plan">Get Free Growth Plan</a>
          </div>

          <div className="hero-blast-grid">
            <div className="hero-blast-left animate-fade-in">
              <img src="/founder_portrait.jpg" alt="ArvianMarketing Founder" className="hero-blast-img" />
            </div>

            <div className="hero-blast-right animate-fade-in delay-1">
              <h1>Get a website, a social media presence, and paying clients — <span>without hiring three agencies.</span></h1>
              <p className="sub">We build your website, run your Instagram &amp; Facebook page, and manage Meta Ads that bring real leads — all handled by one partner who actually replies.</p>
              
              <a className="blast-cta-btn" href="#growth-plan">Get My Free Growth Plan →</a>

              <div className="trustpilot-widget">
                <span>Excellent</span>
                <div className="trustpilot-stars">
                  <div className="trustpilot-star">★</div>
                  <div className="trustpilot-star">★</div>
                  <div className="trustpilot-star">★</div>
                  <div className="trustpilot-star">★</div>
                  <div className="trustpilot-star">★</div>
                </div>
                <span>Trustpilot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal gradient shapes */}
        <div className="blast-shapes-container">
          <div className="blast-shape blast-shape-1"></div>
          <div className="blast-shape blast-shape-2"></div>
          <div className="blast-shape blast-shape-3"></div>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: '40px' }}>
        <div className="ticker animate-fade-in delay-3">
          <div className="ticker-row">
            <div className="ticker-item">
              <div className="ticker-num mono">120+</div>
              <div className="ticker-label">Leads generated for clients</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">3.1x</div>
              <div className="ticker-label">Avg. follower growth in 60 days</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">15+</div>
              <div className="ticker-label">Websites launched</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">₹500</div>
              <div className="ticker-label">Avg. ad spend/day to start</div>
            </div>
          </div>
        </div>
      </div>


      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">What you get</span>
            <h2>Three things every growing business needs</h2>
            <p>Most agencies sell you one piece. We handle the full loop — the site, the page, and the ads that drive people to both.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Website Design</h3>
              <p>A fast, mobile-first site built to convert visitors — not just look nice.</p>
              <ul className="service-list">
                <li>Built with modern tools (fast load times)</li>
                <li>Mobile-first, since most of your traffic is on phones</li>
                <li>Basic SEO setup included from day one</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Social Media Handling</h3>
              <p>Your Instagram &amp; Facebook page, managed and posted consistently.</p>
              <ul className="service-list">
                <li>Content calendar &amp; regular posting</li>
                <li>Page setup, bio, and highlights optimized</li>
                <li>Engagement tracked monthly</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Meta Ads Management</h3>
              <p>Lead &amp; engagement campaigns built and optimized for your budget.</p>
              <ul className="service-list">
                <li>Campaign setup on Instagram &amp; Facebook</li>
                <li>Works with budgets starting ₹300–500/day</li>
                <li>Weekly performance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">How it works</span>
            <h2>From first message to first lead</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-num">01</div>
              <h3>Discovery call</h3>
              <p>15 minutes on Zoom or phone to understand your business and what "more clients" looks like for you.</p>
            </div>
            <div className="process-step">
              <div className="process-num">02</div>
              <h3>Build &amp; launch</h3>
              <p>Your site goes live, your page gets set up properly, and your first ad campaign starts running.</p>
            </div>
            <div className="process-step">
              <div className="process-num">03</div>
              <h3>Track &amp; grow</h3>
              <p>Weekly updates on leads, followers, and spend — so you always know what's working.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="work" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Our Work &amp; Results</span>
            <h2>Proven results we've delivered for clients</h2>
            <p>Active Meta Ads dashboards displaying campaign metrics, reach, and cost-per-lead optimization.</p>
          </div>

          <div className="work-grid">
            <div className="work-card">
              <div className="work-image-container">
                <img src="/work/work1.jpg" alt="Meta Ads Campaign Dashboard" className="work-img" />
              </div>
              <div className="work-info">
                <span className="work-badge">Campaign Lead Generation</span>
                <h3>Lead Campaign (ANUSHKA)</h3>
                <p>Delivered 2,767 messaging conversion results at ₹23.52 per lead with budget optimization.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <img src="/work/work2.jpg" alt="Facebook Ads Manager Conversions" className="work-img" />
              </div>
              <div className="work-info">
                <span className="work-badge">Audience &amp; Conversion Scaling</span>
                <h3>Conversions Campaign (DEVKI)</h3>
                <p>149k reach results delivered for active custom audience segments starting at ₹200/day budget.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <img src="/work/work3.jpg" alt="Meta Ad Sets Operations" className="work-img" />
              </div>
              <div className="work-info">
                <span className="work-badge">Ongoing Optimization</span>
                <h3>Active Campaign Manager</h3>
                <p>Real-time client scaling dashboard demonstrating consistent low cost-per-result across 22 active campaigns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
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
      </div>

      <footer>
        <div className="wrap">
          ArvianMarketing — Websites, Social Media &amp; Ads for growing businesses.<br />
          Prefer to just chat? <a className="footer-wa" href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
        </div>
      </footer>
    </>
  )
}
