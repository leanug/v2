import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

import { Header, Footer, ThemeController, ThemeWrapper } from '@/components'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leandro Ubilla Gonzalez - Web developer',
  description: `Hi, I&apos;m a web developr from Uruguay, 
  i build websites and web apps with Next.js, MongoDB, 
  WordPress and Webflow.`
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
          <div className={`flex flex-col min-h-screen font-inter`}>
            <Header action={<ThemeController />} />
            <main className={`flex-1`}>{children}</main>
            <Footer />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  )
}
