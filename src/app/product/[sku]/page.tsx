import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Badge, Breadcrumb, Typography } from '@/components/ui'
import { getProductBySku } from '@/features/products'
import {
  calculateOriginalPrice,
  formatDiscount,
  formatPrice,
} from '@/lib/utils/format'
import { ReviewsAnchor } from './components/ReviewsAnchor'
import { ReviewCard } from './components/ReviewCard'

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
    tags,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    minimumOrderQuantity,
    reviews,
    availabilityStatus,
    weight,
    dimensions,
  } = product

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    {
      label: category.toUpperCase(),
      href: `/search?category=${encodeURIComponent(category)}`,
    },
    { label: title, href: `/product/${sku}` },
  ]

  const originalPrice = calculateOriginalPrice(price, discountPercentage)
  const hasDiscount = discountPercentage > 0
  const isOutOfStock = stock === 0

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Imagen */}
        <div className="relative h-80 w-full overflow-hidden rounded-md border border-gray-100 bg-white md:h-[480px]">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Info principal */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <Typography
              variant="body-sm"
              weight="semibold"
              className="text-gray-400 uppercase"
            >
              {brand}
            </Typography>
            <Typography variant="h3" weight="bold" className="text-black">
              {title}
            </Typography>
          </div>

          <ReviewsAnchor value={rating} count={reviews.length} />

          {/* Precio */}
          <div className="flex flex-col gap-1 border-t border-gray-100 pt-4">
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
            <Typography variant="h2" weight="bold" className="text-black">
              {formatPrice(price)}
            </Typography>
          </div>

          {/* Stock */}
          <div className="flex flex-col gap-1">
            {isOutOfStock ? (
              <Badge variant="used" className="w-fit">
                Sin stock
              </Badge>
            ) : (
              <div className="flex items-center gap-2">
                <span className="bg-success h-2 w-2 rounded-full" />
                <Typography
                  variant="body-sm"
                  weight="semibold"
                  className="text-success"
                >
                  {availabilityStatus}
                </Typography>
                <Typography variant="body-sm" className="text-gray-400">
                  ({stock} unidades)
                </Typography>
              </div>
            )}
          </div>

          {/* Descripción */}
          <Typography
            variant="body-sm"
            className="border-t border-gray-100 pt-4 leading-relaxed text-gray-600"
          >
            {description}
          </Typography>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Envío y devolución destacados */}
          <div className="bg-off-white grid grid-cols-2 gap-3 rounded-md border border-gray-100 p-4">
            <div className="flex flex-col gap-0.5">
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
            <div className="flex flex-col gap-0.5 border-l border-gray-100 pl-3">
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
          </div>
        </div>
      </div>

      {/* Especificaciones */}
      <div className="flex flex-col gap-4">
        <Typography variant="h4" weight="semibold" className="text-black">
          Especificaciones
        </Typography>
        <div className="grid grid-cols-1 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white sm:grid-cols-2 sm:divide-y-0">
          {[
            { label: 'SKU', value: sku },
            { label: 'Garantía', value: warrantyInformation },
            {
              label: 'Dimensiones',
              value: `${dimensions.width} x ${dimensions.height} x ${dimensions.depth} cm`,
            },
            { label: 'Peso', value: `${weight} kg` },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5 px-4 py-3">
              <Typography
                variant="caption"
                className="tracking-wide text-gray-400 uppercase"
              >
                {label}
              </Typography>
              <Typography
                variant="body-sm"
                weight="semibold"
                className="text-gray-700"
              >
                {value}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      {reviews.length > 0 && (
        <div id="reviews" className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Typography variant="h4" weight="semibold" className="text-black">
              Opiniones
            </Typography>
            <Badge variant="outline">{reviews.length}</Badge>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
