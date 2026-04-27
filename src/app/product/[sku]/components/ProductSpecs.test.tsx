import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ProductSpecs } from './ProductSpecs'

const defaultProps = {
  sku: 'RCH45Q1A',
  warrantyInformation: '1 Year Warranty',
  weight: 0.3,
  dimensions: { width: 7.5, height: 15.0, depth: 0.8 },
}

describe('ProductSpecs', () => {
  it('renders the "Especificaciones" heading', () => {
    render(<ProductSpecs {...defaultProps} />)
    expect(screen.getByText('Especificaciones')).toBeInTheDocument()
  })

  it('renders the SKU label and value', () => {
    render(<ProductSpecs {...defaultProps} />)
    expect(screen.getByText('SKU')).toBeInTheDocument()
    expect(screen.getByText('RCH45Q1A')).toBeInTheDocument()
  })

  it('renders the warranty information', () => {
    render(<ProductSpecs {...defaultProps} />)
    expect(screen.getByText('Garantía')).toBeInTheDocument()
    expect(screen.getByText('1 Year Warranty')).toBeInTheDocument()
  })

  it('renders the dimensions formatted as W x H x D cm', () => {
    render(<ProductSpecs {...defaultProps} />)
    expect(screen.getByText('7.5 x 15 x 0.8 cm')).toBeInTheDocument()
  })

  it('renders the weight in kg', () => {
    render(<ProductSpecs {...defaultProps} />)
    expect(screen.getByText('0.3 kg')).toBeInTheDocument()
  })

  it('renders all four spec rows', () => {
    render(<ProductSpecs {...defaultProps} />)
    expect(screen.getByText('SKU')).toBeInTheDocument()
    expect(screen.getByText('Garantía')).toBeInTheDocument()
    expect(screen.getByText('Dimensiones')).toBeInTheDocument()
    expect(screen.getByText('Peso')).toBeInTheDocument()
  })

  it('renders a different SKU correctly', () => {
    render(<ProductSpecs {...defaultProps} sku="SAM-S21-BLK" />)
    expect(screen.getByText('SAM-S21-BLK')).toBeInTheDocument()
  })
})
