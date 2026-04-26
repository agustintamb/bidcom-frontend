import type { ReactNode } from 'react'

export interface NavbarProps {
  children: ReactNode
  className?: string
}

export const Navbar = ({ children, className = '' }: NavbarProps) => {
  return (
    <nav className={`w-full border-b border-gray-100 bg-white ${className}`}>
      <div className="relative mx-auto flex max-w-7xl items-center gap-6 px-4 py-2">
        {children}
      </div>
    </nav>
  )
}
