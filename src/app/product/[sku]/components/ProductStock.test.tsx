import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ProductStock } from './ProductStock'

describe('ProductStock', () => {
  describe('when stock is 0 (sin stock)', () => {
    it('renders the "Sin stock" badge', () => {
      render(<ProductStock stock={0} availabilityStatus="Out of Stock" />)
      expect(screen.getByText('Sin stock')).toBeInTheDocument()
    })

    it('does not render the availability status text', () => {
      render(<ProductStock stock={0} availabilityStatus="Out of Stock" />)
      expect(screen.queryByText('Out of Stock')).not.toBeInTheDocument()
    })

    it('does not render the units count', () => {
      render(<ProductStock stock={0} availabilityStatus="Out of Stock" />)
      expect(screen.queryByText(/unidades/)).not.toBeInTheDocument()
    })
  })

  describe('when stock is greater than 0 (in stock)', () => {
    it('renders the availability status', () => {
      render(<ProductStock stock={94} availabilityStatus="In Stock" />)
      expect(screen.getByText('In Stock')).toBeInTheDocument()
    })

    it('renders the stock count in parentheses', () => {
      render(<ProductStock stock={94} availabilityStatus="In Stock" />)
      expect(screen.getByText('(94 unidades)')).toBeInTheDocument()
    })

    it('does not render the "Sin stock" badge', () => {
      render(<ProductStock stock={94} availabilityStatus="In Stock" />)
      expect(screen.queryByText('Sin stock')).not.toBeInTheDocument()
    })

    it('renders the green indicator dot', () => {
      const { container } = render(
        <ProductStock stock={10} availabilityStatus="In Stock" />,
      )
      expect(container.querySelector('.bg-success')).toBeInTheDocument()
    })
  })
})
