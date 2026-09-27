import React from 'react'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import WorkGallery from '@/components/WorkGallery'

const waNumber = '919711190678'
const waDisplayNumber = '+91 97111 90678'

const waUrl = (msg: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`

const defaultWaUrl = waUrl('Hi Ravi, I saw your Meta Ads service offer and want to get more qualified leads for my business.')
const questionsWaUrl = waUrl('Hi Ravi, I have a few questions before getting started with Meta Ads.')

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="hero-blast-wrapper">
        <div className="wrap">
          <div className="topbar">
            <div className="brand">
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <Image 
                  src="/logo.webp" 
                  alt="Arvian Marketing Logo" 
                  width={200} 
                  height={52} 
                  style={{ objectFit: 'contain', width: 'auto', height: '44px' }} 
                  priority 
                />
              </a>
            </div>

            <nav className="topbar-nav" aria-label="Main Navigation">
              <a href="#services" className="topbar-nav-link">Services</a>
              <a href="#work" className="topbar-nav-link">Results</a>
              <a href="#how-it-works" className="topbar-nav-link">How It Works</a>
              <a href="#pricing" className="topbar-nav-link">Pricing</a>
              <a href="#faq" className="topbar-nav-link">FAQ</a>
            </nav>

            <div className="topbar-actions">
              <a 
                className="topbar-cta-wa" 
                href={questionsWaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
              >
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <a href="#growth-plan" className="topbar-cta-primary">
                Get Free Growth Plan &rarr;
              </a>
            </div>
          </div>

          {/* Hero Section */}
          <div className="hero-meta-wrapper animate-fade-in">
            <div className="hero-meta-center">
              <span className="hero-eyebrow-badge">
                🎯 Meta Ads Management &amp; Client Acquisition
              </span>

              <h1 className="hero-meta-title">
                Get More Qualified Leads <span>With Meta Ads</span>
              </h1>

              <p className="hero-meta-sub">
                We help businesses generate qualified leads through Meta Ads, high-converting landing pages and conversion-focused campaigns.
              </p>

              <div className="hero-cta-flex">
                <a href="#growth-plan" className="btn-primary-growth">
                  Get My Free Growth Plan &rarr;
                </a>
                
                <a 
                  href={defaultWaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary-wa"
                >
                  <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="hero-trust-bar">
                <div className="hero-trust-item">
                  <span>✓</span> <strong>2,700+</strong> Leads Generated
                </div>
                <div className="hero-trust-item">
                  <span>✓</span> <strong>Conversion-Focused</strong> Funnels
                </div>
                <div className="hero-trust-item">
                  <span>✓</span> <strong>100% Transparent</strong> ROI Tracking
                </div>
                <div className="hero-trust-item">
                  <span style={{ color: '#F59E0B' }}>★★★★★</span> <strong>4.9/5</strong> Client Rating
                </div>
              </div>
            </div>

            {/* Visual Hero Showcase */}
            <div className="hero-preview-box">
              <Image 
                src="/hero-banner.webp" 
                alt="Arvian Marketing - Meta Ads & Conversion Funnel Expert" 
                width={1200} 
                height={675} 
                priority 
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>

        {/* Diagonal gradient shapes */}
        <div className="blast-shapes-container">
          <div className="blast-shape blast-shape-1"></div>
          <div className="blast-shape blast-shape-2"></div>
          <div className="blast-shape blast-shape-3"></div>
        </div>
      </header>

      {/* Live Growth Snapshot Ticker (Preserved Existing Proof Claims) */}
      <div className="wrap" style={{ marginTop: '24px' }}>
        <div className="ticker animate-fade-in delay-2">
          <div className="ticker-row">
            <div className="ticker-item">
              <div className="ticker-num mono">2,767+</div>
              <div className="ticker-label">Leads generated for clients</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">₹23.52</div>
              <div className="ticker-label">Avg. cost per lead achieved</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">149k+</div>
              <div className="ticker-label">Meta campaign audience reach</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">4.2x</div>
              <div className="ticker-label">Client ROAS recorded</div>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Lead Qualification Form - Moved High Up Immediately After Hero/Ticker */}
      <div className="wrap">
        <LeadForm />
      </div>

      {/* Why Meta Ads / Problems We Solve Section */}
      <section className="section" style={{ background: '#fafafc', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Why Meta Ads With Arvian Marketing</span>
            <h2>Why Most Meta Ads Waste Money &mdash; And How We Fix It</h2>
            <p>Most business owners waste budget on boost buttons and broken funnels. Here is how our approach turns ad spend into profitable client acquisition.</p>
          </div>

          <div className="problems-grid">
            <div className="problem-card">
              <div className="problem-bad">
                <span>✕</span>
                <span><strong>The Common Trap:</strong> Boosting posts or running generic lead forms with zero conversion tracking.</span>
              </div>
              <div className="problem-good">
                <span>✓</span>
                <span><strong>Our Approach:</strong> Full-funnel campaign architecture with Meta Pixel, CAPI, and verified conversion events.</span>
              </div>
            </div>

            <div className="problem-card">
              <div className="problem-bad">
                <span>✕</span>
                <span><strong>The Common Trap:</strong> Sending paid traffic to slow, confusing websites that bounce visitors within 2 seconds.</span>
              </div>
              <div className="problem-good">
                <span>✓</span>
                <span><strong>Our Approach:</strong> Lightning-fast 1-second landing pages or direct WhatsApp funnels matched precisely to the ad message.</span>
              </div>
            </div>

            <div className="problem-card">
              <div className="problem-bad">
                <span>✕</span>
                <span><strong>The Common Trap:</strong> Getting flooded with unqualified leads and tire-kickers who never pick up the phone.</span>
              </div>
              <div className="problem-good">
                <span>✓</span>
                <span><strong>Our Approach:</strong> Pre-qualifying ad copy, high-intent audience segmentation, and structured intake questions.</span>
              </div>
            </div>

            <div className="problem-card">
              <div className="problem-bad">
                <span>✕</span>
                <span><strong>The Common Trap:</strong> Traditional agencies that charge high retainers and disappear without optimization.</span>
              </div>
              <div className="problem-good">
                <span>✓</span>
                <span><strong>Our Approach:</strong> Active weekly A/B testing, daily budget adjustments, and direct transparent communication with Ravi.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads Services Section */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Core Services</span>
            <h2>Targeted Meta Ads Built For Business Growth</h2>
            <p>We handle every step of your paid advertising funnel &mdash; from research and campaign setup to landing page optimization and continuous performance tuning.</p>
          </div>

          <div className="services-grid">
            {/* Service 1: Primary Offer */}
            <div className="service-card" style={{ borderColor: 'var(--primary)', position: 'relative' }}>
              <span className="service-badge-popular">PRIMARY SERVICE</span>
              <div className="service-icon">🎯</div>
              <h3>Meta Ads Campaign Management</h3>
              <div className="service-price-box">
                <span className="service-price">₹1,999</span>
                <span className="service-price-cycle">/month</span>
              </div>
              <p>End-to-end Meta Ads campaigns actively managed and scaled on Instagram &amp; Facebook to bring paying clients.</p>
              <ul className="service-list">
                <li>High-intent audience research &amp; competitor analysis</li>
                <li>Conversion ad copy, creative direction &amp; A/B testing</li>
                <li>WhatsApp lead campaigns &amp; instant form setup</li>
                <li>Daily performance monitoring &amp; budget optimization</li>
                <li>Meta Pixel &amp; conversion event verification</li>
                <li>Weekly transparent reporting directly on WhatsApp</li>
              </ul>
            </div>

            {/* Service 2: Growth Funnel Bundle */}
            <div className="service-card" style={{ borderColor: 'var(--accent)', position: 'relative' }}>
              <span className="service-badge-popular">COMPLETE FUNNEL</span>
              <div className="service-icon">🚀</div>
              <h3>Landing Page + Meta Ads (Growth Package)</h3>
              <div className="service-price-box">
                <span className="service-price">₹2,999</span>
                <span className="service-price-cycle">setup + 1st month ads</span>
              </div>
              <p>The complete conversion loop: We build your dedicated high-converting landing page and run the targeted Meta Ads driving traffic to it.</p>
              <ul className="service-list">
                <li>Custom High-Converting Landing Page (1-second speed)</li>
                <li>Full Meta Ads Setup &amp; Monthly Campaign Management</li>
                <li>End-to-end tracking integration (Pixel + GA4 + CAPI)</li>
                <li>Harmonized ad copy and landing page value proposition</li>
                <li>A/B tested headlines and conversion elements</li>
                <li>Priority 1-on-1 strategy support with Ravi</li>
              </ul>
            </div>

            {/* Service 3: Funnel Builder */}
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>High-Converting Landing Page Design</h3>
              <div className="service-price-box">
                <span className="service-price">₹1,999</span>
                <span className="service-price-cycle">one-time</span>
              </div>
              <p>For businesses already running ads who need a fast, mobile-first conversion page to turn existing traffic into clients.</p>
              <ul className="service-list">
                <li>Crafted specifically for mobile ad traffic</li>
                <li>Direct WhatsApp lead buttons &amp; lead form integration</li>
                <li>48-hour delivery with unlimited revisions</li>
                <li>Meta Pixel &amp; Google Analytics tracking integrated</li>
                <li>Clean, persuasive copywriting focused on conversions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results & Verified Dashboards Section */}
      <section className="section" id="work" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Proven Results</span>
            <h2>Real campaign dashboards delivered for clients</h2>
            <p>Live Meta Ads Manager proof showing lead numbers, reach, and optimized cost-per-lead. <strong>(Click any image to enlarge and view details)</strong></p>
          </div>

          <WorkGallery />
        </div>
      </section>

      {/* Real Verified Client Feedback Section (Preserved Existing Claims) */}
      <section className="testimonials-section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Client Feedback</span>
            <h2>What business owners say about working with Ravi</h2>
            <p>Real verified results from business owners who partnered with us for landing pages and Meta Ads.</p>
          </div>

          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div>
                <div className="testimonial-top">
                  <div className="testimonial-stars">★★★★★</div>
                  <span className="testimonial-verified-badge">✓ Verified Client</span>
                </div>
                <div className="testimonial-result-pill">
                  ⚡ 2,767 Leads @ ₹23.52 per lead
                </div>
                <p className="testimonial-quote">
                  &ldquo;Before working with Ravi, we were losing money on Meta ads with almost zero bookings. Ravi designed a fast, mobile-friendly landing page and completely restructured our campaign. Within 30 days, we received over 2,700 direct WhatsApp inquiries at ₹23.52 per lead. Best investment we made!&rdquo;
                </p>
              </div>
              <div className="testimonial-author-box">
                <div className="testimonial-avatar">AS</div>
                <div>
                  <div className="testimonial-author-name">Anushka Sharma</div>
                  <div className="testimonial-author-role">Founder, Anushka Skincare &amp; Aesthetics</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div>
                <div className="testimonial-top">
                  <div className="testimonial-stars">★★★★★</div>
                  <span className="testimonial-verified-badge">✓ Verified Client</span>
                </div>
                <div className="testimonial-result-pill">
                  ⚡ 149,000+ Reach &bull; 4.2x ROAS
                </div>
                <p className="testimonial-quote">
                  &ldquo;Most marketing agencies take weeks just to send an invoice. Ravi had our custom landing page ready in 48 hours and the Meta ads running by day 3. We reached over 149k local customers and our WhatsApp has been buzzing with direct interior inquiries daily.&rdquo;
                </p>
              </div>
              <div className="testimonial-author-box">
                <div className="testimonial-avatar">DN</div>
                <div>
                  <div className="testimonial-author-name">Devki Nandan</div>
                  <div className="testimonial-author-role">Director, Devki Interiors &amp; Modular Homes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section" id="how-it-works">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">How It Works</span>
            <h2>From Business Intake To Live Optimized Campaigns</h2>
            <p>A simple, transparent 4-step framework designed to launch and scale your Meta Ads profitably.</p>
          </div>

          <div className="process-grid-4">
            <div className="process-card-4">
              <span className="process-step-num">01</span>
              <h3>Tell Us About Your Business</h3>
              <p>Submit your business details, target audience, and advertising goals through our quick qualification form.</p>
            </div>

            <div className="process-card-4">
              <span className="process-step-num">02</span>
              <h3>Get Your Growth Plan</h3>
              <p>We review your business, audience, competitive landscape, and current marketing requirements to design your plan.</p>
            </div>

            <div className="process-card-4">
              <span className="process-step-num">03</span>
              <h3>Strategy Call</h3>
              <p>We discuss the right Meta Ads strategy, practical ad budget, campaign structure, and conversion funnel.</p>
            </div>

            <div className="process-card-4">
              <span className="process-step-num">04</span>
              <h3>Launch &amp; Optimize</h3>
              <p>We build, launch, and continuously test and optimize your campaigns to lower cost-per-lead and increase lead quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="section" id="pricing" style={{ background: '#fafafc', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Clear Pricing &bull; No Hidden Fees</span>
            <h2>Select The Partnership That Fits Your Goals</h2>
            <p>Transparent pricing, dedicated execution, and direct communication without agency overhead.</p>
          </div>

          <div className="services-grid">
            {/* Meta Ads Management */}
            <div className="service-card" style={{ borderColor: 'var(--primary)', position: 'relative' }}>
              <span className="service-badge-popular">PRIMARY OFFER</span>
              <div className="service-icon">🎯</div>
              <h3>Meta Ads Management</h3>
              <div className="service-price-box">
                <span className="service-price">₹1,999</span>
                <span className="service-price-cycle">/month</span>
              </div>
              <p>High-converting lead and customer acquisition campaigns on Instagram &amp; Facebook.</p>
              <ul className="service-list">
                <li>High-intent audience research &amp; targeting setup</li>
                <li>Ad copy, creative guidance &amp; A/B testing</li>
                <li>Lead generation &amp; WhatsApp direct campaigns</li>
                <li>Daily performance monitoring &amp; budget tuning</li>
                <li>Works with starting budgets from ₹300&ndash;₹500/day</li>
                <li>Weekly performance updates directly on WhatsApp</li>
              </ul>
              <div style={{ marginTop: '24px' }}>
                <a href="#growth-plan" className="btn-primary-growth" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '13px' }}>
                  Get My Free Growth Plan &rarr;
                </a>
              </div>
            </div>

            {/* Custom Growth Package */}
            <div className="service-card" style={{ borderColor: 'var(--accent)', position: 'relative' }}>
              <span className="service-badge-popular">CUSTOM GROWTH PACKAGE</span>
              <div className="service-icon">🚀</div>
              <h3>Landing Page + Meta Ads</h3>
              <div className="service-price-box">
                <span className="service-price">₹2,999</span>
                <span className="service-price-cycle">setup + 1st month ads</span>
              </div>
              <p>Combined when your campaign requires a dedicated high-converting conversion funnel.</p>
              <ul className="service-list">
                <li>Custom High-Converting Mobile Landing Page</li>
                <li>Full Meta Ads Setup &amp; Monthly Campaign Management</li>
                <li>End-to-end conversion tracking (Pixel + GA4 + CAPI)</li>
                <li>A/B tested ad copy aligned with landing page offer</li>
                <li>Frictionless lead qualification form &amp; WhatsApp buttons</li>
                <li>Priority 1-on-1 strategy communication with Ravi</li>
              </ul>
              <div style={{ marginTop: '24px' }}>
                <a href="#growth-plan" className="btn-primary-growth" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '13px' }}>
                  Get My Free Growth Plan &rarr;
                </a>
              </div>
            </div>

            {/* Standalone Landing Page */}
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Landing Page Design</h3>
              <div className="service-price-box">
                <span className="service-price">₹1,999</span>
                <span className="service-price-cycle">one-time</span>
              </div>
              <p>A fast, conversion-optimized landing page built for businesses that already manage their own advertising.</p>
              <ul className="service-list">
                <li>Built for 1-second load times on mobile devices</li>
                <li>Direct WhatsApp lead buttons &amp; lead intake forms</li>
                <li>48-hour delivery with unlimited revisions</li>
                <li>Meta Pixel &amp; Google Analytics integrated</li>
                <li>Clean, conversion-focused copywriting</li>
              </ul>
              <div style={{ marginTop: '24px' }}>
                <a href="#growth-plan" className="hero-secondary-btn" style={{ display: 'block', textAlign: 'center', fontSize: '14.5px', padding: '12px' }}>
                  Get Landing Page Funnel &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section" id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our Meta Ads services, pricing, and campaign strategy.</p>
          </div>

          <div className="faq-grid">
            {/* Required Question 1 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                Who is this service for?
              </div>
              <p className="faq-answer">
                Our Meta Ads service is designed for businesses that want more leads, enquiries or sales through Facebook and Instagram advertising. Whether you operate a local clinic, interior design studio, e-commerce brand, or B2B consultancy, we build campaigns focused on qualified customer acquisition.
              </p>
            </div>

            {/* Required Question 2 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                Do I need a landing page?
              </div>
              <p className="faq-answer">
                Not always. Depending on your campaign objective, we can use WhatsApp, lead forms or a dedicated landing page. We&apos;ll recommend the right funnel based on your business and campaign requirements.
              </p>
            </div>

            {/* Required Question 3 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                How much should I spend on Meta Ads?
              </div>
              <p className="faq-answer">
                Your ideal ad budget depends on your industry, target audience, offer and campaign objective. We&apos;ll recommend a practical starting budget based on your requirements &mdash; typically starting between ₹300 to ₹500/day for testing before scaling what proves profitable.
              </p>
            </div>

            {/* Existing FAQ 1 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                What is the exact pricing for Meta Ads and landing pages?
              </div>
              <p className="faq-answer">
                Our ongoing Meta Ads campaign management starts at ₹1,999/month. If your business also requires a dedicated landing page, our bundled Growth Package is ₹2,999 (setup + 1st month ads). Standalone landing pages are ₹1,999. Zero hidden fees or long-term contracts.
              </p>
            </div>

            {/* Existing FAQ 2 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                How fast will my Meta Ads and funnel be live?
              </div>
              <p className="faq-answer">
                Your campaign strategy and creative angles are mapped out within 48 hours of onboarding. Once you approve the target audience and messaging, campaigns can go live within 24 to 48 hours with full conversion tracking configured.
              </p>
            </div>

            {/* Existing FAQ 3 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                What if I need changes or creative revisions?
              </div>
              <p className="faq-answer">
                We continuously review performance and optimize ad creatives, headlines, and audience angles. If a landing page is part of your package, we offer unlimited revisions until you are 100% satisfied before launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prefer WhatsApp? (Less Dominant Secondary Prompt) */}
      <div className="wrap">
        <div className="prefer-wa-card">
          <div className="prefer-wa-text">
            <h3>Prefer WhatsApp?</h3>
            <p>Have questions before getting started? Chat directly with Ravi on WhatsApp.</p>
          </div>
          <a 
            href={questionsWaUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="prefer-wa-btn"
          >
            <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            <span>Chat on WhatsApp ({waDisplayNumber})</span>
          </a>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="wrap">
          <div className="final-cta-box">
            <h2>Ready to Grow Your Business With Meta Ads?</h2>
            <p>Tell us about your business and we&apos;ll help you identify the right advertising approach.</p>
            
            <div className="final-cta-buttons">
              <a href="#growth-plan" className="btn-primary-growth">
                Get My Free Growth Plan &rarr;
              </a>
              <a 
                href={defaultWaUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary-wa"
                style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)' }}
              >
                <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div>
            <strong>ArvianMarketing</strong> &bull; Conversion-Focused Meta Ads &amp; Landing Pages That Bring Clients.
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '13px' }}>
            <a href="#services">Services</a>
            <span>&bull;</span>
            <a href="#work">Results</a>
            <span>&bull;</span>
            <a href="#how-it-works">How It Works</a>
            <span>&bull;</span>
            <a href="#pricing">Pricing</a>
            <span>&bull;</span>
            <a href="#faq">FAQ</a>
            <span>&bull;</span>
            <a href="/privacy-policy">Privacy Policy</a>
            <span>&bull;</span>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
          <div style={{ marginTop: '4px' }}>
            <a 
              className="footer-wa" 
              href={defaultWaUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Message Ravi on WhatsApp ({waDisplayNumber})
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Bubble */}
      <a
        href={defaultWaUrl}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 16 16" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>
    </>
  )
}
