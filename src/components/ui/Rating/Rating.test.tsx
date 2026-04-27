import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Rating } from './Rating'

describe('Rating', () => {
  it('renders the correct total number of stars', () => {
    const { container } = render(<Rating value={3} max={5} showValue={false} />)
    // Each star is a <span> with ★
    const stars = container.querySelectorAll('span')
    expect(stars).toHaveLength(5)
  })

  it('fills the correct number of stars based on value', () => {
    const { container } = render(<Rating value={3} max={5} showValue={false} />)
    const filled = container.querySelectorAll('.text-sale')
    expect(filled).toHaveLength(3)
  })

  it('renders no filled stars when value is 0', () => {
    const { container } = render(<Rating value={0} max={5} showValue={false} />)
    const filled = container.querySelectorAll('.text-sale')
    expect(filled).toHaveLength(0)
  })

  it('fills all stars when value equals max', () => {
    const { container } = render(<Rating value={5} max={5} showValue={false} />)
    const filled = container.querySelectorAll('.text-sale')
    expect(filled).toHaveLength(5)
  })

  it('rounds the value to determine filled stars', () => {
    const { container } = render(<Rating value={3.5} max={5} showValue={false} />)
    const filled = container.querySelectorAll('.text-sale')
    expect(filled).toHaveLength(4)
  })

  it('shows the numeric value when showValue is true', () => {
    render(<Rating value={4.2} showValue />)
    expect(screen.getByText('4.2')).toBeInTheDocument()
  })

  it('hides the numeric value when showValue is false', () => {
    render(<Rating value={4.2} showValue={false} />)
    expect(screen.queryByText('4.2')).not.toBeInTheDocument()
  })

  it('respects a custom max value', () => {
    const { container } = render(<Rating value={7} max={10} showValue={false} />)
    const allStars = container.querySelectorAll('span')
    const filled = container.querySelectorAll('.text-sale')
    expect(allStars).toHaveLength(10)
    expect(filled).toHaveLength(7)
  })
})
