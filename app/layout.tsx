import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/wrappers/Providers'

const opensans = Open_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Das Atelier',
  description: 'Community for creators.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <Providers>
        <div className='border-2 rounded-[6px] border-muted flex max-h-screen overflow-hidden h-screen w-screen flex-col justify-between items-start'>
        <Header />
        <div className='flex-grow w-full bg-transparent'>
        {children}
        </div>
        <Footer />
        </div>
        </Providers>
        </body>
    </html>
  )
}
