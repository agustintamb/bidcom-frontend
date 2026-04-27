import { Rating, Typography } from '@/components/ui'
import type { ProductReview } from '@/features/products/lib/types'
import { formatDate } from '@/lib/utils/format'

export interface ReviewCardProps {
  review: ProductReview
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <Typography variant="label" weight="semibold" className="text-black">
          {review.reviewerName}
        </Typography>
        <Typography variant="caption" className="text-gray-400">
          {formatDate(review.date)}
        </Typography>
      </div>
      <Rating value={review.rating} />
      <Typography variant="body-sm" className="text-gray-600">
        {review.comment}
      </Typography>
    </div>
  )
}
