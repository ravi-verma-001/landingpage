import React from 'react'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'

export default function Home() {
  return (
    <>
      <div className="hero-blast-wrapper">
        <div className="wrap">
          <div className="topbar">
            <div className="brand">
              <Image 
                src="/logo.webp" 
                alt="Arvian Marketing Logo" 
                width={232} 
                height={60} 
                style={{ objectFit: 'contain' }} 
                priority 
              />
            </div>
            <a className="top-cta-blast" href="#growth-plan">Get Free Growth Plan</a>
          </div>

          <div className="hero-blast-grid">
            <div className="hero-blast-left animate-fade-in">
              <Image 
                src="/founder_portrait.webp" 
                alt="ArvianMarketing Founder" 
                className="hero-blast-img" 
                width={440} 
                height={587} 
                priority 
                sizes="(max-width: 768px) 100vw, 440px"
              />
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
                <Image 
                  src="/work/work1.webp" 
                  alt="Meta Ads Campaign Dashboard" 
                  className="work-img" 
                  width={1024} 
                  height={576} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="work-info">
                <span className="work-badge">Campaign Lead Generation</span>
                <h3>Lead Campaign (ANUSHKA)</h3>
                <p>Delivered 2,767 messaging conversion results at ₹23.52 per lead with budget optimization.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <Image 
                  src="/work/work2.webp" 
                  alt="Facebook Ads Manager Conversions" 
                  className="work-img" 
                  width={1024} 
                  height={576} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="work-info">
                <span className="work-badge">Audience &amp; Conversion Scaling</span>
                <h3>Conversions Campaign (DEVKI)</h3>
                <p>149k reach results delivered for active custom audience segments starting at ₹200/day budget.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <Image 
                  src="/work/work3.webp" 
                  alt="Meta Ad Sets Operations" 
                  className="work-img" 
                  width={1024} 
                  height={576} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
        <LeadForm />
      </div>

      <footer>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div>
            ArvianMarketing — Websites, Social Media &amp; Ads for growing businesses.
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a className="footer-wa" href="https://wa.me/919711190678" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="/terms" style={{ textDecoration: 'underline' }}>Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Bubble */}
      <a
        href="https://wa.me/919711190678"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 16 16" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>
    </>
  )
}
