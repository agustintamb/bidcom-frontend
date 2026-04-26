'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

export const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const resolvedItems: BreadcrumbItem[] = items ?? [
    { label: 'Home', href: '/' },
  ]

  if (!resolvedItems.length) return null

  return (
    <nav
      aria-label="breadcrumb"
      className={`flex items-center gap-2 text-sm ${className}`}
    >
      {resolvedItems.map((item, index) => {
        const isLast = index === resolvedItems.length - 1
        return (
          <div
            key={`${item.href}-${index}`}
            className="flex items-center gap-2"
          >
            {index > 0 && <span className="text-gray-400">›</span>}
            {isLast ? (
              <span className="font-semibold text-gray-700">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary text-gray-400 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
