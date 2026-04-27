import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ReviewCard } from './ReviewCard'

const mockReview = {
  rating: 4,
  comment: 'Excelente producto, muy recomendable.',
  date: '2024-05-15T00:00:00.000Z',
  reviewerName: 'María García',
  reviewerEmail: 'maria@ejemplo.com',
}

describe('ReviewCard', () => {
  it('renders the reviewer name', () => {
    render(<ReviewCard review={mockReview} />)
    expect(screen.getByText('María García')).toBeInTheDocument()
  })

  it('renders the formatted date as DD/MM/YYYY', () => {
    render(<ReviewCard review={mockReview} />)
    expect(screen.getByText('15/05/2024')).toBeInTheDocument()
  })

  it('renders the review comment', () => {
    render(<ReviewCard review={mockReview} />)
    expect(screen.getByText('Excelente producto, muy recomendable.')).toBeInTheDocument()
  })

  it('renders the correct number of filled stars for the rating', () => {
    const { container } = render(<ReviewCard review={mockReview} />)
    const filledStars = container.querySelectorAll('.text-sale')
    expect(filledStars).toHaveLength(4)
  })

  it('renders correctly with a rating of 1', () => {
    render(<ReviewCard review={{ ...mockReview, rating: 1 }} />)
    const { container } = render(<ReviewCard review={{ ...mockReview, rating: 1 }} />)
    expect(container.querySelectorAll('.text-sale')).toHaveLength(1)
  })

  it('renders correctly with a rating of 5', () => {
    const { container } = render(<ReviewCard review={{ ...mockReview, rating: 5 }} />)
    expect(container.querySelectorAll('.text-sale')).toHaveLength(5)
  })
})
