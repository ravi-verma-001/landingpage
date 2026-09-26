'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export interface WorkItem {
  id: string
  src: string
  alt: string
  badge: string
  title: string
  desc: string
  width: number
  height: number
}

const workItems: WorkItem[] = [
  {
    id: 'work1',
    src: '/work/work1.webp',
    alt: 'Meta Ads Campaign Dashboard',
    badge: 'Campaign Lead Generation',
    title: 'Lead Campaign (ANUSHKA)',
    desc: 'Delivered 2,767 messaging conversion results at ₹23.52 per lead with budget optimization.',
    width: 1024,
    height: 576,
  },
  {
    id: 'work2',
    src: '/work/work2.webp',
    alt: 'Facebook Ads Manager Conversions',
    badge: 'Audience & Conversion Scaling',
    title: 'Conversions Campaign (DEVKI)',
    desc: '149k reach results delivered for active custom audience segments starting at ₹200/day budget.',
    width: 1024,
    height: 576,
  },
  {
    id: 'work3',
    src: '/work/work3.webp',
    alt: 'Meta Ad Sets Operations',
    badge: 'Ongoing Optimization',
    title: 'Active Campaign Manager',
    desc: 'Real-time client scaling dashboard demonstrating consistent low cost-per-result across 22 active campaigns.',
    width: 1024,
    height: 576,
  },
  {
    id: 'proof1',
    src: '/work/PROOF1.webp',
    alt: 'Meta Ads Result Proof 1',
    badge: 'Verified ROI',
    title: 'ROAS & Conversion Proof',
    desc: 'High-conversion marketing campaign showing verified ROI and low cost per acquisition.',
    width: 1000,
    height: 416,
  },
  {
    id: 'proof2',
    src: '/work/PROOF2.webp',
    alt: 'Meta Ads Result Proof 2',
    badge: 'Lead Generation',
    title: 'Ad Spend Optimization',
    desc: 'Daily budget allocation proof generating a steady flow of high-intent local business leads.',
    width: 1000,
    height: 491,
  },
  {
    id: 'proof3',
    src: '/work/PROOF3.webp',
    alt: 'Meta Ads Result Proof 3',
    badge: 'Messaging Leads',
    title: 'Targeted Messaging Campaigns',
    desc: 'Audience segmentation results yielding verified contact details and direct bookings.',
    width: 1000,
    height: 486,
  },
  {
    id: 'proof4',
    src: '/work/PROOF4.webp',
    alt: 'Meta Ads Result Proof 4',
    badge: 'Scalability',
    title: 'Sales Conversion Proof',
    desc: 'Account dashboard demonstrating consistent monthly scalability and campaign stability.',
    width: 1000,
    height: 478,
  },
  {
    id: 'proof5',
    src: '/work/PROOF5.webp',
    alt: 'Meta Ads Result Proof 5',
    badge: 'Verification',
    title: 'Meta Ads Account Performance',
    desc: 'Verified tracking data showing optimal CTR and cost-per-lead optimization metrics.',
    width: 1000,
    height: 474,
  },
]

export default function WorkGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const activeItem = selectedIndex !== null ? workItems[selectedIndex] : null

  const handleClose = useCallback(() => {
    setSelectedIndex(null)
  }, [])

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : workItems.length - 1))
  }, [])

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setSelectedIndex((prev) => (prev !== null && prev < workItems.length - 1 ? prev + 1 : 0))
  }, [])

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIndex === null) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, handleClose, handlePrev, handleNext])

  return (
    <>
      <div className="work-grid">
        {workItems.map((item, index) => (
          <div
            key={item.id}
            className="work-card work-card-clickable"
            onClick={() => setSelectedIndex(index)}
            title="Click to enlarge dashboard"
          >
            <div className="work-image-container">
              <Image
                src={item.src}
                alt={item.alt}
                className="work-img"
                width={item.width}
                height={item.height}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="work-zoom-overlay">
                <span className="work-zoom-badge">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  Click to Enlarge
                </span>
              </div>
            </div>
            <div className="work-info">
              <span className="work-badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && selectedIndex !== null && (
        <div
          className="lightbox-overlay animate-fade-in"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Top Control Bar */}
          <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-title-info">
              <span className="lightbox-counter">
                {selectedIndex + 1} / {workItems.length}
              </span>
              <span className="lightbox-title">{activeItem.title}</span>
            </div>
            <button
              className="lightbox-close-btn"
              onClick={handleClose}
              aria-label="Close modal (Esc)"
              title="Close (Esc)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            {/* Prev Button */}
            <button
              className="lightbox-nav-btn lightbox-prev"
              onClick={handlePrev}
              aria-label="Previous dashboard image"
              title="Previous (Left Arrow)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Image Container */}
            <div className="lightbox-image-wrap">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                className="lightbox-image"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              className="lightbox-nav-btn lightbox-next"
              onClick={handleNext}
              aria-label="Next dashboard image"
              title="Next (Right Arrow)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Bottom Caption & WhatsApp Bar */}
          <div className="lightbox-bottom-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-caption">
              <span className="lightbox-badge">{activeItem.badge}</span>
              <p className="lightbox-desc">{activeItem.desc}</p>
            </div>
            <a
              href="https://wa.me/919711190678?text=Hi%20Ravi%2C%20I%20saw%20your%20campaign%20results%20on%20your%20website%20and%20want%20similar%20lead%20results%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="lightbox-wa-btn"
            >
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              Get These Results on WhatsApp &rarr;
            </a>
          </div>
        </div>
      )}
    </>
  )
}
