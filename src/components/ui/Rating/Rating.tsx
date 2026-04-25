import { Typography } from '../Typography/Typography'

export interface RatingProps {
  value: number
  max?: number
  showValue?: boolean
  className?: string
}

export const Rating = ({
  value,
  max = 5,
  showValue = true,
  className = '',
}: RatingProps) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={i < Math.round(value) ? 'text-sale' : 'text-gray-100'}
        >
          ★
        </span>
      ))}
      {showValue && (
        <Typography variant="caption" className="text-gray-400">
          {value.toFixed(1)}
        </Typography>
      )}
    </div>
  )
}
