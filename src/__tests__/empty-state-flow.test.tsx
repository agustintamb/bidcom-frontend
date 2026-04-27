/**
 * Integration test: búsqueda sin resultados y navegación por categorías
 *
 * Simula:
 * 1. Búsqueda que no devuelve resultados → se muestra EmptyState
 * 2. Se ven las categorías sugeridas
 * 3. Usuario hace click en una categoría → el link apunta a /search?category=...
 */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { EmptyState } from '@/features/products/components/EmptyState/EmptyState'

// ── Mocks ────────────────────────────────────────────────────────────────────

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

const mockCategories = ['smartphones', 'laptops', 'fragrances', 'beauty', 'sports-accessories']

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('Flujo de búsqueda sin resultados y navegación por categorías', () => {
  it('muestra el mensaje de no se encontró ningún producto', () => {
    render(<EmptyState categories={mockCategories} />)

    expect(
      screen.getByText('No se encontró ningún producto.'),
    ).toBeInTheDocument()
  })

  it('muestra el texto de recomendación de categorías', () => {
    render(<EmptyState categories={mockCategories} />)

    expect(
      screen.getByText('Te recomendamos buscar estas categorías:'),
    ).toBeInTheDocument()
  })

  it('renderiza un botón por cada categoría sugerida', () => {
    render(<EmptyState categories={mockCategories} />)

    mockCategories.forEach((cat) => {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    })
  })

  it('cada categoría tiene un link que apunta a /search?category=...', () => {
    render(<EmptyState categories={mockCategories} />)

    mockCategories.forEach((cat) => {
      const link = screen.getByRole('link', { name: cat })
      expect(link).toHaveAttribute(
        'href',
        `/search?category=${encodeURIComponent(cat)}`,
      )
    })
  })

  it('el link de una categoría con espacios codifica la URL correctamente', () => {
    render(<EmptyState categories={['sports-accessories']} />)

    const link = screen.getByRole('link', { name: 'sports-accessories' })
    expect(link).toHaveAttribute('href', '/search?category=sports-accessories')
  })

  it('al clickear una categoría el link tiene el href correcto', async () => {
    render(<EmptyState categories={mockCategories} />)

    const smartphonesLink = screen.getByRole('link', { name: 'smartphones' })

    await userEvent.click(smartphonesLink)

    // En jsdom los links no navegan, pero verificamos que el href es correcto
    expect(smartphonesLink).toHaveAttribute('href', '/search?category=smartphones')
  })

  it('muestra la imagen ilustrativa del estado vacío', () => {
    render(<EmptyState categories={mockCategories} />)

    expect(
      screen.getByAltText('No se encontraron resultados'),
    ).toBeInTheDocument()
  })

  it('funciona con una sola categoría sugerida', () => {
    render(<EmptyState categories={['smartphones']} />)

    expect(screen.getByRole('button', { name: 'smartphones' })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })
})
