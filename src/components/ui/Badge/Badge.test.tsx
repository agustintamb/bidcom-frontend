import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Badge } from './Badge'

describe('Badge', () => {
  it('renders its children', () => {
    render(<Badge>15% OFF</Badge>)
    expect(screen.getByText('15% OFF')).toBeInTheDocument()
  })

  it('defaults to the outline variant', () => {
    const { container } = render(<Badge>outline</Badge>)
    expect(container.firstChild).toHaveClass('border-gray-100')
  })

  it('applies the success variant class', () => {
    const { container } = render(<Badge variant="success">éxito</Badge>)
    expect(container.firstChild).toHaveClass('bg-success')
  })

  it('applies the sale variant class', () => {
    const { container } = render(<Badge variant="sale">oferta</Badge>)
    expect(container.firstChild).toHaveClass('bg-sale')
  })

  it('applies the used variant class', () => {
    const { container } = render(<Badge variant="used">sin stock</Badge>)
    expect(container.firstChild).toHaveClass('bg-used')
  })

  it('applies a custom className', () => {
    const { container } = render(<Badge className="w-fit">custom</Badge>)
    expect(container.firstChild).toHaveClass('w-fit')
  })

  it('renders as an inline element', () => {
    render(<Badge>test</Badge>)
    expect(screen.getByText('test').tagName).toBe('SPAN')
  })
})
