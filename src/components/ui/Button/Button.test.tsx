import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('renders its children', () => {
    render(<Button>Comprar</Button>)
    expect(screen.getByRole('button', { name: 'Comprar' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when the disabled prop is set', () => {
    render(<Button disabled>Deshabilitado</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Deshabilitado</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies the primary variant class by default', () => {
    const { container } = render(<Button>Primary</Button>)
    expect(container.firstChild).toHaveClass('bg-primary')
  })

  it('applies the secondary variant class', () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>)
    expect(container.firstChild).toHaveClass('border-primary')
  })

  it('applies the ghost variant class', () => {
    const { container } = render(<Button variant="ghost">Ghost</Button>)
    expect(container.firstChild).toHaveClass('bg-transparent')
  })

  it('applies the link variant class', () => {
    const { container } = render(<Button variant="link">Link</Button>)
    expect(container.firstChild).toHaveClass('underline')
  })

  it('applies a disabled opacity class when disabled', () => {
    const { container } = render(<Button disabled>Disabled</Button>)
    expect(container.firstChild).toHaveClass('disabled:opacity-50')
  })
})
