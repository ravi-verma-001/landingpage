import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — ArvianMarketing',
  description: 'Privacy Policy for ArvianMarketing digital marketing agency.',
}

export default function PrivacyPolicy() {
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
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '10px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '40px', fontSize: '14px' }}>Last updated: August 18, 2026</p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>1. Introduction</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Welcome to ArvianMarketing (<strong>https://arvianmarketing.shop</strong>). We are a digital marketing agency offering website design, SEO, Meta Ads management, and video shoot services. We respect your privacy and are committed to protecting the personal data you share with us.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>2. Data We Collect</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '12px' }}>
            When you request a free growth plan or submit an inquiry on our website, we collect the following personal information via our lead form:
          </p>
          <ul style={{ color: 'var(--ink-soft)', paddingLeft: '20px', marginBottom: '16px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '6px' }}><strong>Name:</strong> To address you personally.</li>
            <li style={{ marginBottom: '6px' }}><strong>Business Name:</strong> To research your brand and build a custom strategy.</li>
            <li style={{ marginBottom: '6px' }}><strong>WhatsApp Number:</strong> To quickly reach out, discuss details, or schedule sessions.</li>
            <li style={{ marginBottom: '6px' }}><strong>Email Address:</strong> To send you updates, calendar invitations, and growth proposals.</li>
            <li style={{ marginBottom: '6px' }}><strong>Services of Interest:</strong> To understand what digital marketing support your business needs.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>3. Why We Collect Your Data</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            We collect and use your details to contact you regarding your free growth plan, answer your queries, and coordinate strategy sessions. If you choose to work with us, we also use this data to onboard you as a client and deliver our services.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>4. How Your Data is Used &amp; Shared</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '12px' }}>
            Your information is kept strictly internal. <strong>We do not sell, rent, or trade your personal information with third parties.</strong>
          </p>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            We only share your information with trusted service providers necessary to operate our website and services. This includes Netlify (for hosting our site) and our secure databases or automation tools used for receiving contact notifications.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>5. Cookies and Advertising Pixels</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            We may use cookies and tracking tools like the Meta Pixel or Google Analytics on our website. These tools help us measure the performance of our advertising campaigns, analyze site traffic, and optimize your browsing experience.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>6. Data Retention</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            We retain your lead information only for as long as necessary to fulfill the purposes outlined in this policy—such as contacting you for a strategy audit or managing our ongoing business relationship.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>7. Your Rights</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            You have full control over your data. You can request to view, correct, or completely delete your personal information from our system at any time by messaging us on WhatsApp or sending us an email.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>8. Contact Us</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '12px' }}>
            If you have any questions or would like to request changes to your data, feel free to reach out:
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
            <Link href="/terms" style={{ textDecoration: 'underline' }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
