'use client'

import Link from 'next/link'
import { useState } from 'react'

import { categoryIconMap } from '@/features/products/lib/categoryMap'
import type { CategoryItem } from '@/features/products/lib/types'
import { Navbar } from '../Navbar/Navbar'

export interface CategoryNavProps {
  categories: CategoryItem[]
}

export const CategoryNav = ({ categories }: CategoryNavProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300"
          onMouseEnter={() => setIsOpen(false)}
        />
      )}

      <Navbar>
        <div
          className="relative z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="hover:text-primary flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors">
            Categorías
            <span
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
              ▾
            </span>
          </button>

          <div
            className={`absolute top-full left-0 z-50 mt-1 w-96 rounded-2xl border border-gray-100 bg-white shadow-xl transition-all duration-300 ${
              isOpen
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-2 opacity-0'
            }`}
          >
            {/* Bridge invisible que cubre el gap entre botón y dropdown */}
            <div className="absolute -top-3 left-0 h-3 w-full" />

            <div className="grid max-h-[70vh] grid-cols-2 overflow-y-auto py-2">
              {categories.map((cat) => {
                const Icon = categoryIconMap[cat.slug]
                return (
                  <Link
                    key={cat.slug}
                    href={`/search?category=${encodeURIComponent(cat.slug)}`}
                    className="hover:text-primary mx-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {Icon && (
                      <Icon size={16} className="shrink-0 text-gray-400" />
                    )}
                    {cat.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  )
}
