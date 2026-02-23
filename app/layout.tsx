import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Quantonix | Software Development Company',
    template: '%s | Quantonix',
  },
  description:
    'Quantonix is a software development company specializing in websites, mobile applications, SEO, and digital marketing.',
  openGraph: {
    title: 'Quantonix',
    description:
      'Responsive software development services for website development, mobile apps, SEO, and digital marketing.',
    url: baseUrl,
    siteName: 'Quantonix',
    locale: 'en_US',
    type: 'website',
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased mx-auto mt-4 w-full max-w-6xl px-4 md:mt-8 md:px-6">
        <main className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
