import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { siteConfig } from '../config/site'
import './globals.css'

import { Header } from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { ThemeController } from '@/components/theme-controller'
import { ThemeWrapper } from '@/components/theme-wrapper'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <ThemeWrapper>
          <div className="flex flex-col min-h-screen font-spaceGrotesk">
            <Header action={<ThemeController />} />
            <main className={`flex-1`}>{children}</main>
            <Footer />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  )
}
