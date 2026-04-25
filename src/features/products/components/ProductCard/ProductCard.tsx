import Image from 'next/image'
import Link from 'next/link'

import { Badge, Card, Rating, Typography } from '@/components/ui'
import {
  calculateOriginalPrice,
  formatDiscount,
  formatPrice,
} from '@/lib/utils/format'

import type { Product } from '../../lib/types'

export interface ProductCardProps {
  product: Product
  priority?: boolean
}

export const ProductCard = ({
  product,
  priority = false,
}: ProductCardProps) => {
  const {
    sku,
    title,
    brand,
    price,
    discountPercentage,
    rating,
    thumbnail,
    stock,
  } = product

  const originalPrice = calculateOriginalPrice(price, discountPercentage)
  const hasDiscount = discountPercentage > 0
  const isOutOfStock = stock === 0

  return (
    <Link href={`/product/${sku}`} className="block h-full">
      <Card className="relative flex h-full flex-col p-4">
        {isOutOfStock && (
          <Badge variant="used" className="absolute top-3 left-3">
            Sin stock
          </Badge>
        )}

        <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
          />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <Typography
            variant="body-sm"
            weight="semibold"
            className="text-gray-600"
          >
            {brand}
          </Typography>
          <Typography
            variant="body-sm"
            weight="normal"
            className="line-clamp-2 text-black"
          >
            {title}
          </Typography>

          <Rating value={rating} />

          <div className="mt-auto pt-2">
            {hasDiscount && (
              <div className="flex items-center gap-2">
                <Typography
                  variant="caption"
                  className="text-gray-400 line-through"
                >
                  {formatPrice(originalPrice)}
                </Typography>
                <Badge variant="success">
                  {formatDiscount(discountPercentage)}
                </Badge>
              </div>
            )}
            <Typography variant="price" className="text-black">
              {formatPrice(price)}
            </Typography>
          </div>
        </div>
      </Card>
    </Link>
  )
}
