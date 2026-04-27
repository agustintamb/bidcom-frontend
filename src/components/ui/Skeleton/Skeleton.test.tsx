import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { BreadcrumbSkeleton, Skeleton, SkeletonCard } from './Skeleton'

describe('Skeleton', () => {
  it('renders a div with animate-pulse class', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toHaveClass('animate-pulse')
  })

  it('applies a custom className', () => {
    const { container } = render(<Skeleton className="h-4 w-48" />)
    expect(container.firstChild).toHaveClass('h-4', 'w-48')
  })

  it('applies the background color class', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toHaveClass('bg-gray-100')
  })
})

describe('SkeletonCard', () => {
  it('renders multiple skeleton blocks', () => {
    const { container } = render(<SkeletonCard />)
    const blocks = container.querySelectorAll('.animate-pulse')
    expect(blocks.length).toBeGreaterThan(1)
  })

  it('has a border and padding wrapper', () => {
    const { container } = render(<SkeletonCard />)
    expect(container.firstChild).toHaveClass('rounded-md', 'border', 'p-4')
  })
})

describe('BreadcrumbSkeleton', () => {
  it('renders the default of 3 items', () => {
    const { container } = render(<BreadcrumbSkeleton />)
    const blocks = container.querySelectorAll('.animate-pulse')
    // 3 label blocks + 2 separator blocks = 5
    expect(blocks).toHaveLength(5)
  })

  it('renders 1 item with no separator', () => {
    const { container } = render(<BreadcrumbSkeleton items={1} />)
    const blocks = container.querySelectorAll('.animate-pulse')
    expect(blocks).toHaveLength(1)
  })

  it('renders 2 items with 1 separator', () => {
    const { container } = render(<BreadcrumbSkeleton items={2} />)
    const blocks = container.querySelectorAll('.animate-pulse')
    // 2 labels + 1 separator = 3
    expect(blocks).toHaveLength(3)
  })

  it('renders in a flex row', () => {
    const { container } = render(<BreadcrumbSkeleton />)
    expect(container.firstChild).toHaveClass('flex')
  })
})
