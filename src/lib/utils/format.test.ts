import { describe, expect, it } from 'vitest'

import {
  calculateOriginalPrice,
  formatDate,
  formatDiscount,
  formatPrice,
} from './format'

describe('formatPrice', () => {
  it('includes the numeric value in the output', () => {
    expect(formatPrice(549)).toContain('549')
  })

  it('includes two decimal places', () => {
    expect(formatPrice(100)).toMatch(/100[,.]00/)
  })

  it('formats zero correctly', () => {
    expect(formatPrice(0)).toContain('0')
  })
})

describe('calculateOriginalPrice', () => {
  it('calculates the price before a discount', () => {
    // price = original * (1 - discount/100) → original = price / (1 - discount/100)
    const result = calculateOriginalPrice(87, 13)
    expect(result).toBeCloseTo(100, 0)
  })

  it('returns the same price when discount is 0', () => {
    expect(calculateOriginalPrice(100, 0)).toBe(100)
  })

  it('handles fractional discount percentages', () => {
    const result = calculateOriginalPrice(549, 12.96)
    expect(result).toBeGreaterThan(549)
  })
})

describe('formatDiscount', () => {
  it('rounds a fractional percentage and appends OFF', () => {
    expect(formatDiscount(12.96)).toBe('13% OFF')
  })

  it('handles integer percentages', () => {
    expect(formatDiscount(20)).toBe('20% OFF')
  })

  it('rounds down when fraction is below .5', () => {
    expect(formatDiscount(12.4)).toBe('12% OFF')
  })
})

describe('formatDate', () => {
  it('formats a UTC date as DD/MM/YYYY', () => {
    expect(formatDate('2024-01-15T00:00:00.000Z')).toBe('15/01/2024')
  })

  it('pads single-digit day and month with a leading zero', () => {
    expect(formatDate('2024-03-05T00:00:00.000Z')).toBe('05/03/2024')
  })

  it('handles December correctly', () => {
    expect(formatDate('2024-12-31T00:00:00.000Z')).toBe('31/12/2024')
  })
})
