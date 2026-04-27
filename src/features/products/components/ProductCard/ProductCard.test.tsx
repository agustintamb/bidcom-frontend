import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import type { Product } from '../../lib/types'
import { ProductCard } from './ProductCard'

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

const baseProduct: Product = {
  id: 1,
  sku: 'RCH45Q1A',
  title: 'iPhone 9',
  brand: 'Apple',
  category: 'smartphones',
  description: 'Un móvil Apple',
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
}

describe('ProductCard', () => {
  it('renders the product title', () => {
    render(<ProductCard product={baseProduct} />)
    expect(screen.getByText('iPhone 9')).toBeInTheDocument()
  })

  it('renders the brand name', () => {
    render(<ProductCard product={baseProduct} />)
    expect(screen.getByText('Apple')).toBeInTheDocument()
  })

  it('renders the product thumbnail with alt text', () => {
    render(<ProductCard product={baseProduct} />)
    expect(screen.getByAltText('iPhone 9')).toBeInTheDocument()
  })

  it('links to the product detail page using the sku', () => {
    render(<ProductCard product={baseProduct} />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/product/RCH45Q1A')
  })

  it('shows the formatted current price', () => {
    render(<ProductCard product={baseProduct} />)
    expect(screen.getByText(/549/)).toBeInTheDocument()
  })

  it('shows the discount badge when discountPercentage > 0', () => {
    render(<ProductCard product={baseProduct} />)
    expect(screen.getByText('13% OFF')).toBeInTheDocument()
  })

  it('shows the original price crossed out when there is a discount', () => {
    render(<ProductCard product={baseProduct} />)
    // Original price is higher than current price
    const prices = screen.getAllByText(/\d+/)
    expect(prices.length).toBeGreaterThan(1)
  })

  it('does not show a discount badge when discountPercentage is 0', () => {
    render(<ProductCard product={{ ...baseProduct, discountPercentage: 0 }} />)
    expect(screen.queryByText(/% OFF/)).not.toBeInTheDocument()
  })

  it('shows the "Sin stock" badge when stock is 0', () => {
    render(<ProductCard product={{ ...baseProduct, stock: 0 }} />)
    expect(screen.getByText('Sin stock')).toBeInTheDocument()
  })

  it('does not show the "Sin stock" badge when stock > 0', () => {
    render(<ProductCard product={baseProduct} />)
    expect(screen.queryByText('Sin stock')).not.toBeInTheDocument()
  })
})
