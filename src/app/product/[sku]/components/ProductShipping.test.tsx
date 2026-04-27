import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ProductShipping } from './ProductShipping'

describe('ProductShipping', () => {
  it('renders the "Envío" section label', () => {
    render(
      <ProductShipping
        shippingInformation="Ships in 1 month"
        returnPolicy="30 days return policy"
      />,
    )
    expect(screen.getByText('Envío')).toBeInTheDocument()
  })

  it('renders the "Devoluciones" section label', () => {
    render(
      <ProductShipping
        shippingInformation="Ships in 1 month"
        returnPolicy="30 days return policy"
      />,
    )
    expect(screen.getByText('Devoluciones')).toBeInTheDocument()
  })

  it('renders the shipping information text', () => {
    render(
      <ProductShipping
        shippingInformation="Ships in 1 month"
        returnPolicy="30 days return policy"
      />,
    )
    expect(screen.getByText('Ships in 1 month')).toBeInTheDocument()
  })

  it('renders the return policy text', () => {
    render(
      <ProductShipping
        shippingInformation="Ships in 1 month"
        returnPolicy="30 days return policy"
      />,
    )
    expect(screen.getByText('30 days return policy')).toBeInTheDocument()
  })

  it('renders both sections in a 2-column grid', () => {
    const { container } = render(
      <ProductShipping
        shippingInformation="Ships fast"
        returnPolicy="No returns"
      />,
    )
    expect(container.firstChild).toHaveClass('grid-cols-2')
  })
})
