import type { Metadata } from 'next'

import { Header, CategoryNavServer } from '@/components/app'

import './globals.css'

export const metadata: Metadata = {
  title: 'Bidcom',
  description: 'Electrónica y tecnología al mejor precio',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="es">
      <body className="bg-off-white min-h-screen font-sans">
        <div className="sticky top-0 z-50">
          <Header />
          <CategoryNavServer />
        </div>
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
