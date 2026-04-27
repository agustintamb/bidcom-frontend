import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ProductPricing } from './ProductPricing'

describe('ProductPricing', () => {
  it('renders the current price', () => {
    render(<ProductPricing price={549} discountPercentage={0} />)
    expect(screen.getByText(/549/)).toBeInTheDocument()
  })

  it('shows the discount badge when discountPercentage > 0', () => {
    render(<ProductPricing price={549} discountPercentage={13} />)
    expect(screen.getByText('13% OFF')).toBeInTheDocument()
  })

  it('shows the original (crossed-out) price when there is a discount', () => {
    render(<ProductPricing price={549} discountPercentage={10} />)
    // There should be two prices: original and current
    const allPrices = screen.getAllByText(/\d{3}/)
    expect(allPrices.length).toBeGreaterThanOrEqual(2)
  })

  it('does not show the discount badge when discountPercentage is 0', () => {
    render(<ProductPricing price={549} discountPercentage={0} />)
    expect(screen.queryByText(/% OFF/)).not.toBeInTheDocument()
  })

  it('does not show the original price when discountPercentage is 0', () => {
    render(<ProductPricing price={549} discountPercentage={0} />)
    // Only one price should be shown
    expect(screen.getAllByText(/\d+/)).toHaveLength(1)
  })

  it('rounds the discount percentage in the badge', () => {
    render(<ProductPricing price={549} discountPercentage={12.96} />)
    expect(screen.getByText('13% OFF')).toBeInTheDocument()
  })
})
