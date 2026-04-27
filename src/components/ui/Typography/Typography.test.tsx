import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Typography } from './Typography'

describe('Typography', () => {
  it('renders its children', () => {
    render(<Typography>Texto de prueba</Typography>)
    expect(screen.getByText('Texto de prueba')).toBeInTheDocument()
  })

  it('renders h1 variant as an <h1> tag', () => {
    render(<Typography variant="h1">Heading 1</Typography>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders h2 variant as an <h2> tag', () => {
    render(<Typography variant="h2">Heading 2</Typography>)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders h3 variant as an <h3> tag', () => {
    render(<Typography variant="h3">Heading 3</Typography>)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  it('renders h4 variant as an <h4> tag', () => {
    render(<Typography variant="h4">Heading 4</Typography>)
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
  })

  it('renders body variant as a <p> tag', () => {
    render(<Typography variant="body">Párrafo</Typography>)
    expect(screen.getByText('Párrafo').tagName).toBe('P')
  })

  it('renders body-sm variant as a <p> tag', () => {
    render(<Typography variant="body-sm">Párrafo pequeño</Typography>)
    expect(screen.getByText('Párrafo pequeño').tagName).toBe('P')
  })

  it('renders caption variant as a <span> tag', () => {
    render(<Typography variant="caption">Caption</Typography>)
    expect(screen.getByText('Caption').tagName).toBe('SPAN')
  })

  it('renders label variant as a <span> tag', () => {
    render(<Typography variant="label">Label</Typography>)
    expect(screen.getByText('Label').tagName).toBe('SPAN')
  })

  it('renders price variant as a <span> tag', () => {
    render(<Typography variant="price">$549</Typography>)
    expect(screen.getByText('$549').tagName).toBe('SPAN')
  })

  it('overrides the HTML tag via the as prop', () => {
    render(<Typography variant="body" as="div">Div</Typography>)
    expect(screen.getByText('Div').tagName).toBe('DIV')
  })

  it('applies the font-bold class for bold weight', () => {
    render(<Typography weight="bold">Bold</Typography>)
    expect(screen.getByText('Bold')).toHaveClass('font-bold')
  })

  it('applies the font-semibold class for semibold weight', () => {
    render(<Typography weight="semibold">Semibold</Typography>)
    expect(screen.getByText('Semibold')).toHaveClass('font-semibold')
  })

  it('applies the font-light class for light weight', () => {
    render(<Typography weight="light">Light</Typography>)
    expect(screen.getByText('Light')).toHaveClass('font-light')
  })

  it('applies a custom className', () => {
    render(<Typography className="text-primary">Colored</Typography>)
    expect(screen.getByText('Colored')).toHaveClass('text-primary')
  })

  it('applies the text-4xl class for h1 variant', () => {
    render(<Typography variant="h1">H1</Typography>)
    expect(screen.getByText('H1')).toHaveClass('text-4xl')
  })

  it('applies the text-xs class for caption variant', () => {
    render(<Typography variant="caption">Caption</Typography>)
    expect(screen.getByText('Caption')).toHaveClass('text-xs')
  })
})
