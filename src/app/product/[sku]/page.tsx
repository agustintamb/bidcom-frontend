import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui'
import { getProductBySku } from '@/features/products'
import {
  calculateOriginalPrice,
  formatDiscount,
  formatPrice,
} from '@/lib/utils/format'

interface ProductPageProps {
  params: Promise<{ sku: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { sku } = await params
  const product = await getProductBySku(sku)

  if (!product) notFound()

  const {
    title,
    brand,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    category,
  } = product

  const originalPrice = calculateOriginalPrice(price, discountPercentage)
  const hasDiscount = discountPercentage > 0
  const isOutOfStock = stock === 0

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-md border border-gray-100 bg-white md:h-96">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-600 capitalize">
              {category}
            </p>
            <h1 className="text-2xl font-bold text-black">{title}</h1>
            <p className="text-sm text-gray-400">{brand}</p>
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.round(rating) ? 'text-sale' : 'text-gray-100'
                }
              >
                ★
              </span>
            ))}
            <span className="text-sm text-gray-400">{rating.toFixed(1)}</span>
          </div>

          <div className="flex flex-col gap-1">
            {hasDiscount && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(originalPrice)}
                </span>
                <Badge variant="success">
                  {formatDiscount(discountPercentage)}
                </Badge>
              </div>
            )}
            <p className="text-3xl font-black text-black">
              {formatPrice(price)}
            </p>
          </div>

          {isOutOfStock ? (
            <Badge variant="used" className="w-fit">
              Sin stock
            </Badge>
          ) : (
            <p className="text-success text-sm font-semibold">
              Stock disponible ({stock} unidades)
            </p>
          )}

          <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
