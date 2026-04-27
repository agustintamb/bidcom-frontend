import { Badge, Typography } from '@/components/ui'
import { calculateOriginalPrice, formatDiscount, formatPrice } from '@/lib/utils/format'

export interface ProductPricingProps {
  price: number
  discountPercentage: number
}

export const ProductPricing = ({ price, discountPercentage }: ProductPricingProps) => {
  const hasDiscount = discountPercentage > 0
  const originalPrice = calculateOriginalPrice(price, discountPercentage)

  return (
    <div className="flex flex-col gap-1 border-t border-gray-100 pt-4">
      {hasDiscount && (
        <div className="flex items-center gap-2">
          <Typography variant="body-sm" className="text-gray-400 line-through">
            {formatPrice(originalPrice)}
          </Typography>
          <Badge variant="success">{formatDiscount(discountPercentage)}</Badge>
        </div>
      )}
      <Typography variant="h2" weight="bold" className="text-black">
        {formatPrice(price)}
      </Typography>
    </div>
  )
}
