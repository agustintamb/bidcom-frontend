import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Breadcrumb } from './Breadcrumb'

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

describe('Breadcrumb', () => {
  it('renders all item labels', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Smartphones', href: '/search?category=smartphones' },
          { label: 'iPhone 9', href: '/product/RCH45Q1A' },
        ]}
      />,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Smartphones')).toBeInTheDocument()
    expect(screen.getByText('iPhone 9')).toBeInTheDocument()
  })

  it('renders the last item as a plain span (not a link)', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'iPhone 9', href: '/product/RCH45Q1A' },
        ]}
      />,
    )
    expect(screen.getByText('iPhone 9').tagName).toBe('SPAN')
    expect(screen.getByText('iPhone 9')).not.toHaveAttribute('href')
  })

  it('renders non-last items as links with the correct href', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'iPhone 9', href: '/product/RCH45Q1A' },
        ]}
      />,
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('href', '/')
  })

  it('renders separators between items', () => {
    const { container } = render(
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Producto', href: '/product/sku' },
        ]}
      />,
    )
    expect(container.textContent).toContain('›')
  })

  it('returns null when items array is empty', () => {
    const { container } = render(<Breadcrumb items={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('defaults to a single Home item when no items are provided', () => {
    render(<Breadcrumb />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders a nav element with the correct aria-label', () => {
    render(<Breadcrumb items={[{ label: 'Home', href: '/' }]} />)
    expect(screen.getByRole('navigation', { name: 'breadcrumb' })).toBeInTheDocument()
  })
})
