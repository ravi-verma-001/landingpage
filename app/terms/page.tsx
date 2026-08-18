import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions — ArvianMarketing',
  description: 'Terms & Conditions for ArvianMarketing digital marketing agency.',
}

export default function TermsAndConditions() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', color: '#0F172A' }}>
      {/* Topbar */}
      <div className="wrap" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="topbar">
          <Link href="/" className="brand" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="Arvian Marketing Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <Link className="top-cta-blast" href="/#growth-plan">
            Get Free Growth Plan
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="wrap" style={{ padding: '60px 24px', maxWidth: '800px', lineHeight: '1.7' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '10px' }}>Terms &amp; Conditions</h1>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '40px', fontSize: '14px' }}>Last updated: August 18, 2026</p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>1. Agreement to Terms</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            By accessing our website (<strong>https://arvianmarketing.shop</strong>) or submitting your details via our lead forms, you agree to comply with and be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>2. Description of Services</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '12px' }}>
            ArvianMarketing is a digital marketing agency providing services including, but not limited to:
          </p>
          <ul style={{ color: 'var(--ink-soft)', paddingLeft: '20px', marginBottom: '16px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '6px' }}>Custom Website Design and Development</li>
            <li style={{ marginBottom: '6px' }}>Search Engine Optimization (SEO)</li>
            <li style={{ marginBottom: '6px' }}>Meta Ads Management (Facebook and Instagram Ads)</li>
            <li style={{ marginBottom: '6px' }}>Video Shoot and Creative Production Services</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>3. Payments and Retainers</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            For client engagements, specific pricing, payment schedules, and billing cycles are agreed upon in advance via written proposal, contract, or invoice. All ad spends (budget spent directly on Facebook/Instagram platforms) are the client's responsibility and are billed directly by Meta, unless explicitly stated otherwise in our agreement.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>4. No Guarantee of Specific Results</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            While we apply industry best practices, optimization strategies, and our best efforts to scale campaigns, <strong>ArvianMarketing does not guarantee specific figures regarding leads, sales, followers, or conversion rates.</strong> Marketing performance depends on external factors, including market demand, platform algorithm changes, client product/service pricing, and competitor activity.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>5. Limitation of Liability</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            To the maximum extent permitted by law, ArvianMarketing and its team shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services, website downtime, advertising performance drops, or algorithm updates on third-party platforms (like Meta/Google).
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>6. Termination of Services</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Either party may terminate a monthly ongoing engagement by providing notice according to the timeline defined in our project agreement (typically 14 to 30 days written notice).
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>7. Contact Information</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '12px' }}>
            For any queries or concerns regarding these terms, please reach out to us:
          </p>
          <ul style={{ color: 'var(--ink-soft)', paddingLeft: '20px', listStyleType: 'none' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/919711190678" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                +91 9711190678
              </a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:bookings@arvianmarketing.shop" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                bookings@arvianmarketing.shop
              </a>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <p style={{ marginBottom: '12px' }}>
            ArvianMarketing — Websites, Social Media &amp; Ads for growing businesses.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a className="footer-wa" href="https://wa.me/919711190678" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            <span style={{ color: 'var(--line)' }}>|</span>
            <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link>
            <span style={{ color: 'var(--line)' }}>|</span>
            <Link href="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
