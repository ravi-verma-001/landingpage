import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PixelGrowth — Websites, Social Media & Meta Ads That Bring Clients',
  description: 'We build your website, run your Instagram & Facebook page, and manage Meta Ads that bring real leads — all handled by one partner.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
