import {
  EmptyState,
  ProductGrid,
  getCategories,
  searchProducts,
} from '@/features/products'
import { searchProductsByCategory } from '@/features/products/lib/api'
import { Breadcrumb } from '@/components/ui'

interface SearchPageProps {
  searchParams: Promise<{ s?: string; category?: string }>
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { s: query = '', category } = await searchParams

  const [products, categories] = await Promise.all([
    category ? searchProductsByCategory(category) : searchProducts(query),
    getCategories(),
  ])

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...(category
      ? [
          {
            label: category.toUpperCase(),
            href: `/search?category=${encodeURIComponent(category)}`,
          },
        ]
      : query
        ? [
            {
              label: `"${query}"`,
              href: `/search?s=${encodeURIComponent(query)}`,
            },
          ]
        : []),
  ]

  if (!products.length) {
    return (
      <div className="flex flex-col gap-4">
        <Breadcrumb items={breadcrumbItems} />
        <EmptyState categories={categories} />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={breadcrumbItems} />
      <ProductGrid products={products} />
    </div>
  )
}

export default SearchPage
