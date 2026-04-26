import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Badge, Rating, Typography } from '@/components/ui'
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
  //const id = Number(sku.split('-')[0])
  //const product = await getProductById(id)
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
    tags,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    minimumOrderQuantity,
    reviews,
    availabilityStatus,
  } = product

  const originalPrice = calculateOriginalPrice(price, discountPercentage)
  const hasDiscount = discountPercentage > 0
  const isOutOfStock = stock === 0

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8">
      {/* Main info */}
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
          <div className="flex flex-col gap-1">
            <Typography variant="label" className="text-gray-600 capitalize">
              {category}
            </Typography>
            <Typography variant="h3" weight="bold" className="text-black">
              {title}
            </Typography>
            <Typography variant="body-sm" className="text-gray-400">
              {brand}
            </Typography>
          </div>

          <Rating value={rating} />

          <div className="flex flex-col gap-1">
            {hasDiscount && (
              <div className="flex items-center gap-2">
                <Typography
                  variant="body-sm"
                  className="text-gray-400 line-through"
                >
                  {formatPrice(originalPrice)}
                </Typography>
                <Badge variant="success">
                  {formatDiscount(discountPercentage)}
                </Badge>
              </div>
            )}
            <Typography variant="h3" weight="black" className="text-black">
              {formatPrice(price)}
            </Typography>
          </div>

          {isOutOfStock ? (
            <Badge variant="used" className="w-fit">
              Sin stock
            </Badge>
          ) : (
            <Typography
              variant="body-sm"
              weight="semibold"
              className="text-success"
            >
              {availabilityStatus} — {stock} unidades
            </Typography>
          )}

          <Typography
            variant="body-sm"
            className="leading-relaxed text-gray-600"
          >
            {description}
          </Typography>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1 rounded-md border border-gray-100 bg-white p-4">
          <Typography
            variant="label"
            weight="semibold"
            className="text-gray-700"
          >
            Envío
          </Typography>
          <Typography variant="body-sm" className="text-gray-600">
            {shippingInformation}
          </Typography>
        </div>

        <div className="flex flex-col gap-1 rounded-md border border-gray-100 bg-white p-4">
          <Typography
            variant="label"
            weight="semibold"
            className="text-gray-700"
          >
            Garantía
          </Typography>
          <Typography variant="body-sm" className="text-gray-600">
            {warrantyInformation}
          </Typography>
        </div>

        <div className="flex flex-col gap-1 rounded-md border border-gray-100 bg-white p-4">
          <Typography
            variant="label"
            weight="semibold"
            className="text-gray-700"
          >
            Devoluciones
          </Typography>
          <Typography variant="body-sm" className="text-gray-600">
            {returnPolicy}
          </Typography>
        </div>

        <div className="flex flex-col gap-1 rounded-md border border-gray-100 bg-white p-4">
          <Typography
            variant="label"
            weight="semibold"
            className="text-gray-700"
          >
            Cantidad mínima de compra
          </Typography>
          <Typography variant="body-sm" className="text-gray-600">
            {minimumOrderQuantity} unidades
          </Typography>
        </div>
      </div>

      {/* Reviews */}
      {reviews.length > 0 && (
        <div className="flex flex-col gap-4">
          <Typography variant="h4" weight="semibold" className="text-black">
            Opiniones del producto
          </Typography>
          <div className="flex flex-col gap-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 rounded-md border border-gray-100 bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <Typography
                    variant="label"
                    weight="semibold"
                    className="text-black"
                  >
                    {review.reviewerName}
                  </Typography>
                  <Typography variant="caption" className="text-gray-400">
                    {new Date(review.date).toLocaleDateString('es-AR')}
                  </Typography>
                </div>
                <Rating value={review.rating} />
                <Typography variant="body-sm" className="text-gray-600">
                  {review.comment}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
