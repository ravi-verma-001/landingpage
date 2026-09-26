import React from 'react'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'

const waNumber = '919711190678'
const waDisplayNumber = '+91 97111 90678'
const waPreFilledUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hi Ravi, I saw your landing page & Meta Ads offer (starting ₹2,999) and want to get more leads for my business.')}`

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
                width={200} 
                height={52} 
                style={{ objectFit: 'contain', width: 'auto', height: '48px' }} 
                priority 
              />
            </div>
            <a 
              className="top-cta-wa" 
              href={waPreFilledUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              Message on WhatsApp
            </a>
          </div>

          {/* Hero Banner Section */}
          <div className="hero-banner-wrapper animate-fade-in">
            <a 
              href={waPreFilledUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-banner-link" 
              title="Click to Chat on WhatsApp with Ravi Verma"
            >
              <Image 
                src="/hero-banner.webp" 
                alt="Ravi Verma - Meta Ads Expert & Web Designer" 
                className="hero-banner-img" 
                width={1200} 
                height={675} 
                priority 
                sizes="100vw"
              />
            </a>

            {/* Campaign Offer & Primary WhatsApp CTA Box */}
            <div className="hero-offer-box animate-fade-in delay-1">
              <div className="hero-offer-top">
                <span className="hero-offer-badge">🎯 CAMPAIGN SPECIAL OFFER</span>
                <span className="hero-urgency-pill">
                  ⚡ Only 5 slots available this week (3 already booked!)
                </span>
              </div>

              <div className="hero-offer-headline">
                High-Converting Landing Pages starting at <span>₹2,999</span> &bull; Targeted Meta Ads from <span>₹4,999</span>
              </div>
              <p className="hero-offer-sub">
                Stop wasting ad spend on slow websites that bounce visitors. Get a custom mobile-first landing page and profitable Meta lead campaigns built to generate paying clients from day one.
              </p>

              <div className="hero-cta-group">
                <a 
                  href={waPreFilledUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-primary-wa-btn"
                >
                  <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  Chat on WhatsApp ({waDisplayNumber}) &rarr;
                </a>
                <a href="#growth-plan" className="hero-secondary-btn">
                  Request a Free Callback &rarr;
                </a>
              </div>

              <div className="hero-trust-row">
                <div className="hero-trust-item">
                  <span>✓</span> Delivered in 48 Hours
                </div>
                <div className="hero-trust-item">
                  <span>✓</span> 100% Mobile Optimized
                </div>
                <div className="hero-trust-item">
                  <span>✓</span> Unlimited Revisions Until Launch
                </div>
                <div className="hero-trust-item">
                  <span style={{ color: '#F59E0B' }}>★★★★★</span> 4.9/5 Trustpilot Rating
                </div>
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

      {/* Live Growth Snapshot Ticker */}
      <div className="wrap" style={{ marginTop: '40px' }}>
        <div className="ticker animate-fade-in delay-3">
          <div className="ticker-row">
            <div className="ticker-item">
              <div className="ticker-num mono">120+</div>
              <div className="ticker-label">Leads generated for clients</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">48 Hrs</div>
              <div className="ticker-label">Avg. landing page turnaround</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">₹2,999</div>
              <div className="ticker-label">Starting landing page price</div>
            </div>
            <div className="ticker-item">
              <div className="ticker-num mono">₹300</div>
              <div className="ticker-label">Min. daily ad budget to test</div>
            </div>
          </div>
        </div>
      </div>

      {/* Proven Results / Proof Section */}
      <section className="section" id="work" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Proven Results</span>
            <h2>Real campaign dashboards delivered for clients</h2>
            <p>Live Meta Ads Manager proof showing lead numbers, reach, and optimized cost-per-lead.</p>
          </div>

          <div className="work-grid">
            <div className="work-card">
              <div className="work-image-container">
                <Image 
                  src="/work/work1.webp" 
                  alt="Meta Ads Campaign Dashboard" 
                  className="work-img" 
                  width={1000} 
                  height={562} 
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
                  width={1000} 
                  height={562} 
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
                  width={1000} 
                  height={562} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="work-info">
                <span className="work-badge">Ongoing Optimization</span>
                <h3>Active Campaign Manager</h3>
                <p>Real-time client scaling dashboard demonstrating consistent low cost-per-result across 22 active campaigns.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <Image 
                  src="/work/PROOF1.webp" 
                  alt="Meta Ads Result Proof 1" 
                  className="work-img" 
                  width={1000} 
                  height={416} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="work-info">
                <span className="work-badge">Verified ROI</span>
                <h3>ROAS &amp; Conversion Proof</h3>
                <p>High-conversion marketing campaign showing verified ROI and low cost per acquisition.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <Image 
                  src="/work/PROOF2.webp" 
                  alt="Meta Ads Result Proof 2" 
                  className="work-img" 
                  width={1000} 
                  height={491} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="work-info">
                <span className="work-badge">Lead Generation</span>
                <h3>Ad Spend Optimization</h3>
                <p>Daily budget allocation proof generating a steady flow of high-intent local business leads.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <Image 
                  src="/work/PROOF3.webp" 
                  alt="Meta Ads Result Proof 3" 
                  className="work-img" 
                  width={1000} 
                  height={486} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="work-info">
                <span className="work-badge">Messaging Leads</span>
                <h3>Targeted Messaging Campaigns</h3>
                <p>Audience segmentation results yielding verified contact details and direct bookings.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <Image 
                  src="/work/PROOF4.webp" 
                  alt="Meta Ads Result Proof 4" 
                  className="work-img" 
                  width={1000} 
                  height={478} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="work-info">
                <span className="work-badge">Scalability</span>
                <h3>Sales Conversion Proof</h3>
                <p>Account dashboard demonstrating consistent monthly scalability and campaign stability.</p>
              </div>
            </div>

            <div className="work-card">
              <div className="work-image-container">
                <Image 
                  src="/work/PROOF5.webp" 
                  alt="Meta Ads Result Proof 5" 
                  className="work-img" 
                  width={1000} 
                  height={474} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="work-info">
                <span className="work-badge">Verification</span>
                <h3>Meta Ads Account Performance</h3>
                <p>Verified tracking data showing optimal CTR and cost-per-lead optimization metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Client Testimonials Section */}
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

      {/* Mid-Page WhatsApp CTA Banner */}
      <div className="wrap">
        <div className="mid-page-wa-banner">
          <div className="mid-wa-content">
            <span className="mid-wa-tag">DIRECT 1-ON-1 PARTNERSHIP</span>
            <h3 className="mid-wa-title">Want the same high-converting results for your business?</h3>
            <p className="mid-wa-desc">
              We take only 5 new projects per week to guarantee personal attention and 48-hour delivery. Chat directly with Ravi on WhatsApp to get your plan and live quote.
            </p>
          </div>
          <a 
            href={waPreFilledUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mid-wa-btn"
          >
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            Message on WhatsApp ({waDisplayNumber}) &rarr;
          </a>
        </div>
      </div>

      {/* Services & Transparent Pricing */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Clear Pricing &bull; No Hidden Fees</span>
            <h2>Select the package that fits your goals</h2>
            <p>Transparent pricing, 48-hour delivery, and direct communication without bureaucratic agency layers.</p>
          </div>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Landing Page Design</h3>
              <div className="service-price-box">
                <span className="service-price">₹2,999</span>
                <span className="service-price-cycle">one-time</span>
              </div>
              <p>A lightning-fast, mobile-first landing page crafted specifically to turn paid ad traffic into WhatsApp inquiries.</p>
              <ul className="service-list">
                <li>Built for 1-second load times</li>
                <li>Direct WhatsApp lead buttons &amp; tracking</li>
                <li>48-hour delivery with unlimited revisions</li>
                <li>Meta Pixel &amp; Google Analytics integrated</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Meta Ads Management</h3>
              <div className="service-price-box">
                <span className="service-price">₹4,999</span>
                <span className="service-price-cycle">/month</span>
              </div>
              <p>High-converting lead and sales campaigns built and actively optimized on Instagram &amp; Facebook.</p>
              <ul className="service-list">
                <li>High-intent audience research &amp; setup</li>
                <li>Ad copy, creative guidance &amp; A/B testing</li>
                <li>Works with starting budgets from ₹300-500/day</li>
                <li>Weekly WhatsApp performance updates</li>
              </ul>
            </div>

            {/* Service 3 (Popular) */}
            <div className="service-card" style={{ borderColor: 'var(--accent)', position: 'relative' }}>
              <span className="service-badge-popular">MOST POPULAR</span>
              <div className="service-icon">🚀</div>
              <h3>Complete Growth Package</h3>
              <div className="service-price-box">
                <span className="service-price">₹6,999</span>
                <span className="service-price-cycle">setup + 1st month ads</span>
              </div>
              <p>The full loop: We build your high-converting landing page and run the targeted Meta Ads driving traffic to it.</p>
              <ul className="service-list">
                <li>Custom High-Converting Landing Page</li>
                <li>Full Meta Ads Setup &amp; Monthly Management</li>
                <li>End-to-end conversion tracking (Pixel + GA4)</li>
                <li>Priority 24/7 direct WhatsApp support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Simple Process</span>
            <h2>From first message to live leads in 48 hours</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-num">01</div>
              <h3>15-Min WhatsApp Chat</h3>
              <p>Send us a quick WhatsApp message. We review your business, audience, and target cost-per-lead.</p>
            </div>
            <div className="process-step">
              <div className="process-num">02</div>
              <h3>48-Hour Build &amp; Launch</h3>
              <p>Your landing page is designed, written, and deployed. Your Meta ad campaigns go live with proper tracking.</p>
            </div>
            <div className="process-step">
              <div className="process-num">03</div>
              <h3>Receive Inquiries &amp; Scale</h3>
              <p>Start receiving direct WhatsApp leads. We review and optimize weekly so your cost-per-lead decreases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our pricing, timelines, and guarantees before starting.</p>
          </div>

          <div className="faq-grid">
            {/* FAQ 1 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                What is the exact pricing for a landing page and Meta Ads?
              </div>
              <p className="faq-answer">
                Our high-converting landing pages start at just ₹2,999 (one-time fee). Meta Ads setup and ongoing campaign management starts at ₹4,999/month. We also offer a bundled Growth Package (Landing Page + Ads Setup) at ₹6,999. There are zero hidden fees or locked contracts.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                How fast will my landing page and Meta Ads be live?
              </div>
              <p className="faq-answer">
                Your custom landing page will be fully built and ready for your review within 48 hours of onboarding. Once you approve the design and copy, we configure the tracking and can have your Meta ad campaigns live within 24 hours.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                What if I need changes or revisions?
              </div>
              <p className="faq-answer">
                We offer unlimited revisions until you are 100% satisfied with your landing page before launch. If for any reason we cannot deliver your project to your satisfaction as promised, we offer a full refund guarantee.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="faq-card">
              <div className="faq-question">
                <span className="faq-q-icon">Q.</span>
                How much daily ad budget do I need on Meta?
              </div>
              <p className="faq-answer">
                You do not need thousands to start. We design campaigns that test and generate real leads with budgets starting at just ₹300 to ₹500/day on Instagram and Facebook. As leads convert into paying clients, you can comfortably scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Lead Section (WhatsApp Primary + Short Callback Form) */}
      <div className="wrap">
        <LeadForm />
      </div>

      {/* Footer */}
      <footer>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div>
            ArvianMarketing &bull; High-Converting Landing Pages &amp; Meta Ads for Growing Businesses.
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
            <a 
              className="footer-wa" 
              href={waPreFilledUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Message us on WhatsApp ({waDisplayNumber})
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="/terms" style={{ textDecoration: 'underline' }}>Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Bubble */}
      <a
        href={waPreFilledUrl}
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
