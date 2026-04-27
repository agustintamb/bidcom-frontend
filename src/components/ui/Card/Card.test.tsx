import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Card } from './Card'

describe('Card', () => {
  it('renders its children', () => {
    render(<Card>Contenido</Card>)
    expect(screen.getByText('Contenido')).toBeInTheDocument()
  })

  it('applies border and rounded classes by default', () => {
    const { container } = render(<Card>Contenido</Card>)
    expect(container.firstChild).toHaveClass('rounded-md', 'border', 'border-gray-100')
  })

  it('applies a custom className', () => {
    const { container } = render(<Card className="p-4">Contenido</Card>)
    expect(container.firstChild).toHaveClass('p-4')
  })

  it('applies cursor-pointer when onClick is provided', () => {
    const { container } = render(<Card onClick={() => {}}>Clickeable</Card>)
    expect(container.firstChild).toHaveClass('cursor-pointer')
  })

  it('does not apply cursor-pointer when onClick is not provided', () => {
    const { container } = render(<Card>No clickeable</Card>)
    expect(container.firstChild).not.toHaveClass('cursor-pointer')
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Card onClick={handleClick}>Clickeable</Card>)
    await userEvent.click(screen.getByText('Clickeable'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies hover shadow class', () => {
    const { container } = render(<Card>Contenido</Card>)
    expect(container.firstChild).toHaveClass('hover:shadow-md')
  })
})
