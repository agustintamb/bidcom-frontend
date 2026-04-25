'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from '../SearchBar/SearchBar'

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-primary sticky top-0 z-50 w-full shadow-md">
      <div
        className={`mx-auto flex max-w-7xl items-center gap-8 px-4 transition-all duration-500 ease-in-out ${
          isSticky ? 'py-3' : 'py-8'
        }`}
      >
        <Link href="/" aria-label="Ir al inicio" className="shrink-0">
          <Image
            style={{ width: '163px', height: '64px' }}
            src="https://static.bidcom.com.ar/images/vector/logo_bidcom.svg?v=0.1"
            alt="Bidcom"
            width={163}
            height={64}
            priority
          />
        </Link>

        <div className="flex-1">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
