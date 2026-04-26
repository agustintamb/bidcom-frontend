import type { Metadata } from 'next'

import { Header, CategoryNavServer } from '@/components/app'

import './globals.css'

export const metadata: Metadata = {
  title: 'Bidcom',
  description: 'Electrónica y tecnología al mejor precio',
  icons: {
    icon: 'https://d1blmgc4psac6k.cloudfront.net/images/vector/favicon.svg?v=0.1',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="bg-off-white min-h-screen font-sans">
        <Header />
        <CategoryNavServer />
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
