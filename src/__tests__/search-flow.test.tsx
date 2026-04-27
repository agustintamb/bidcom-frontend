/**
 * Integration test: flujo de búsqueda y navegación al detalle de producto
 *
 * Simula:
 * 1. Usuario escribe en el SearchBar y presiona Enter → router.push('/search?s=...')
 * 2. Se renderizan los resultados (ProductGrid) con productos mockeados
 * 3. Usuario hace click en una card → el link apunta a /product/{sku}
 */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { SearchBar } from '@/components/app/SearchBar/SearchBar'
import { ProductGrid } from '@/features/products/components/ProductGrid/ProductGrid'
import type { Product } from '@/features/products/lib/types'

// ── Mocks ────────────────────────────────────────────────────────────────────

const mockPush = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    className,
  }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}))

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}))

// ── Mock data ─────────────────────────────────────────────────────────────────

const mockProducts: Product[] = [
  {
    id: 1,
    sku: 'RCH45Q1A',
    title: 'iPhone 9',
    brand: 'Apple',
    category: 'smartphones',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    thumbnail: 'https://cdn.dummyjson.com/product-images/phones/iphone-9/thumbnail.webp',
    images: [],
    tags: ['smartphone'],
    weight: 0.3,
    dimensions: { width: 7.5, height: 15.0, depth: 0.8 },
    warrantyInformation: '1 Year Warranty',
    shippingInformation: 'Ships in 1 month',
    availabilityStatus: 'In Stock',
    reviews: [],
    returnPolicy: '30 days return policy',
    minimumOrderQuantity: 1,
  },
  {
    id: 2,
    sku: 'SAM-S21-BLK',
    title: 'Samsung Galaxy S21',
    brand: 'Samsung',
    category: 'smartphones',
    description: 'Samsung flagship smartphone',
    price: 799,
    discountPercentage: 0,
    rating: 4.2,
    stock: 50,
    thumbnail: 'https://cdn.dummyjson.com/product-images/phones/samsung-galaxy-s21/thumbnail.webp',
    images: [],
    tags: ['smartphone'],
    weight: 0.4,
    dimensions: { width: 7.2, height: 15.1, depth: 0.8 },
    warrantyInformation: '1 Year Warranty',
    shippingInformation: 'Ships in 2 weeks',
    availabilityStatus: 'In Stock',
    reviews: [],
    returnPolicy: '30 days return policy',
    minimumOrderQuantity: 1,
  },
]

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('Flujo de búsqueda y detalle de producto', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  describe('SearchBar — búsqueda de producto', () => {
    it('navega a /search?s=... al escribir y presionar el botón de búsqueda', async () => {
      render(<SearchBar />)

      const input = screen.getByPlaceholderText('¿Qué estás buscando?')
      await userEvent.type(input, 'iphone')
      await userEvent.click(screen.getByRole('button', { name: 'Buscar' }))

      expect(mockPush).toHaveBeenCalledWith('/search?s=iphone')
    })

    it('navega al presionar Enter dentro del input', async () => {
      render(<SearchBar />)

      const input = screen.getByPlaceholderText('¿Qué estás buscando?')
      await userEvent.type(input, 'samsung{Enter}')

      expect(mockPush).toHaveBeenCalledWith('/search?s=samsung')
    })

    it('no navega si el campo está vacío', async () => {
      render(<SearchBar />)

      await userEvent.click(screen.getByRole('button', { name: 'Buscar' }))

      expect(mockPush).not.toHaveBeenCalled()
    })

    it('limpia el input después de navegar', async () => {
      render(<SearchBar />)

      const input = screen.getByPlaceholderText('¿Qué estás buscando?')
      await userEvent.type(input, 'iphone')
      await userEvent.click(screen.getByRole('button', { name: 'Buscar' }))

      expect(input).toHaveValue('')
    })
  })

  describe('ProductGrid — resultados de búsqueda', () => {
    it('renderiza todos los productos del resultado', () => {
      render(<ProductGrid products={mockProducts} />)

      expect(screen.getByText('iPhone 9')).toBeInTheDocument()
      expect(screen.getByText('Samsung Galaxy S21')).toBeInTheDocument()
    })

    it('cada card apunta al detalle del producto correcto', () => {
      render(<ProductGrid products={mockProducts} />)

      const links = screen.getAllByRole('link')
      const skus = mockProducts.map((p) => p.sku)

      skus.forEach((sku) => {
        const link = links.find((l) => l.getAttribute('href') === `/product/${sku}`)
        expect(link).toBeInTheDocument()
      })
    })

    it('el link del primer producto apunta a /product/RCH45Q1A', () => {
      render(<ProductGrid products={mockProducts} />)

      const firstLink = screen.getAllByRole('link')[0]
      expect(firstLink).toHaveAttribute('href', '/product/RCH45Q1A')
    })
  })
})
