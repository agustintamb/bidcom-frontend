'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
        className={`mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 transition-all duration-500 ease-in-out md:flex-nowrap ${
          isSticky ? 'py-3' : 'py-6'
        }`}
      >
        <Link href="/" aria-label="Ir al inicio" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Bidcom"
            width={163}
            height={64}
            priority
          />
        </Link>

        <div className="w-full md:flex-1">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
