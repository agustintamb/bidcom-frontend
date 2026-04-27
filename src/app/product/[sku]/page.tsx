import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Badge, Breadcrumb, Typography } from '@/components/ui'
import { getProductBySku } from '@/features/products'
import { ProductPricing } from './components/ProductPricing'
import { ProductShipping } from './components/ProductShipping'
import { ProductSpecs } from './components/ProductSpecs'
import { ProductStock } from './components/ProductStock'
import { ReviewCard } from './components/ReviewCard'
import { ReviewsAnchor } from './components/ReviewsAnchor'

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

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative h-80 w-full overflow-hidden rounded-md border border-gray-100 bg-white md:h-120">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

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

          <ProductPricing
            price={price}
            discountPercentage={discountPercentage}
          />

          <div className="flex flex-col gap-1">
            <ProductStock
              stock={stock}
              availabilityStatus={availabilityStatus}
            />
          </div>

          <Typography
            variant="body-sm"
            className="border-t border-gray-100 pt-4 leading-relaxed text-gray-600"
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

          <ProductShipping
            shippingInformation={shippingInformation}
            returnPolicy={returnPolicy}
          />
        </div>
      </div>

      <ProductSpecs
        sku={sku}
        warrantyInformation={warrantyInformation}
        weight={weight}
        dimensions={dimensions}
      />

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
