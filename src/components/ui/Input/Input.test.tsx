import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Mail } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'

import { Input } from './Input'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders the placeholder text', () => {
    render(<Input placeholder="Buscá un producto" />)
    expect(screen.getByPlaceholderText('Buscá un producto')).toBeInTheDocument()
  })

  it('renders a label when the label prop is provided', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('associates the label with the input via a derived id', () => {
    render(<Input label="Email" />)
    const label = screen.getByText('Email')
    const input = screen.getByRole('textbox')
    expect(label).toHaveAttribute('for', input.id)
  })

  it('uses a custom id when provided', () => {
    render(<Input id="my-input" label="Label" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-input')
  })

  it('renders the error message when error prop is set', () => {
    render(<Input error="Campo requerido" />)
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })

  it('applies the error border class when error is set', () => {
    render(<Input error="Error" />)
    expect(screen.getByRole('textbox')).toHaveClass('border-red-500')
  })

  it('renders the hint when hint prop is set', () => {
    render(<Input hint="Solo letras" />)
    expect(screen.getByText('Solo letras')).toBeInTheDocument()
  })

  it('does not render the hint when there is an error', () => {
    render(<Input hint="Solo letras" error="Error" />)
    expect(screen.queryByText('Solo letras')).not.toBeInTheDocument()
  })

  it('is disabled when the disabled prop is set', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('calls onChange when the user types', async () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'hola')
    expect(handleChange).toHaveBeenCalled()
  })

  it('renders a left icon when leftIcon prop is provided', () => {
    render(<Input leftIcon={<Mail data-testid="left-icon" />} />)
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
  })

  it('renders a right icon when rightIcon prop is provided', () => {
    render(<Input rightIcon={<Mail data-testid="right-icon" />} />)
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
  })

  it('applies additional padding when leftIcon is present', () => {
    render(<Input leftIcon={<Mail />} />)
    expect(screen.getByRole('textbox')).toHaveClass('pl-10')
  })

  it('applies additional padding when rightIcon is present', () => {
    render(<Input rightIcon={<Mail />} />)
    expect(screen.getByRole('textbox')).toHaveClass('pr-10')
  })
})
