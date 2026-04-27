'use client'

import { Button, Rating } from '@/components/ui'

export interface ReviewsAnchorProps {
  value: number
  count: number
}

export const ReviewsAnchor = ({ value, count }: ReviewsAnchorProps) => {
  const handleClick = () =>
    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="flex items-center gap-2">
      <Rating value={value} showValue={false} />
      {count > 0 && (
        <Button variant="link" onClick={handleClick}>
          {count} {count === 1 ? 'opinión' : 'opiniones'}
        </Button>
      )}
    </div>
  )
}
