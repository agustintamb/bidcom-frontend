import {
  EmptyState,
  ProductGrid,
  getCategories,
  searchProducts,
  searchProductsByCategory,
} from '@/features/products'
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

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={breadcrumbItems} />
      {products.length ? (
        <ProductGrid products={products} />
      ) : (
        <EmptyState categories={categories} />
      )}
    </div>
  )
}

export default SearchPage
