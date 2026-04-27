import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ReviewsAnchor } from './ReviewsAnchor'

describe('ReviewsAnchor', () => {
  it('renders the rating stars', () => {
    const { container } = render(<ReviewsAnchor value={4} count={3} />)
    expect(container.querySelectorAll('.text-sale')).toHaveLength(4)
  })

  it('shows "N opiniones" when count is greater than 1', () => {
    render(<ReviewsAnchor value={4} count={5} />)
    expect(screen.getByRole('button', { name: '5 opiniones' })).toBeInTheDocument()
  })

  it('shows "1 opinión" (singular) when count is exactly 1', () => {
    render(<ReviewsAnchor value={4} count={1} />)
    expect(screen.getByRole('button', { name: '1 opinión' })).toBeInTheDocument()
  })

  it('does not render the button when count is 0', () => {
    render(<ReviewsAnchor value={4} count={0} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  describe('scroll behavior', () => {
    const scrollIntoViewMock = vi.fn()

    beforeEach(() => {
      vi.spyOn(document, 'getElementById').mockReturnValue({
        scrollIntoView: scrollIntoViewMock,
      } as unknown as HTMLElement)
    })

    afterEach(() => {
      vi.restoreAllMocks()
      scrollIntoViewMock.mockClear()
    })

    it('calls scrollIntoView with smooth behavior when the button is clicked', async () => {
      render(<ReviewsAnchor value={4} count={3} />)
      await userEvent.click(screen.getByRole('button'))
      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
    })

    it('looks for the element with id "reviews"', async () => {
      render(<ReviewsAnchor value={4} count={3} />)
      await userEvent.click(screen.getByRole('button'))
      expect(document.getElementById).toHaveBeenCalledWith('reviews')
    })
  })
})
