import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders its children', () => {
    render(<Navbar>Contenido</Navbar>)
    expect(screen.getByText('Contenido')).toBeInTheDocument()
  })

  it('renders as a <nav> element', () => {
    render(<Navbar>Contenido</Navbar>)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('applies border-b class', () => {
    render(<Navbar>Contenido</Navbar>)
    expect(screen.getByRole('navigation')).toHaveClass('border-b')
  })

  it('applies a custom className', () => {
    render(<Navbar className="bg-primary">Contenido</Navbar>)
    expect(screen.getByRole('navigation')).toHaveClass('bg-primary')
  })

  it('renders multiple children', () => {
    render(
      <Navbar>
        <span>Item 1</span>
        <span>Item 2</span>
      </Navbar>,
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })
})
