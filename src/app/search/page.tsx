import {
  EmptyState,
  ProductGrid,
  getCategories,
  searchProducts,
} from '@/features/products'
import { searchProductsByCategory } from '@/features/products/lib/api'

interface SearchPageProps {
  searchParams: Promise<{ s?: string; category?: string }>
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { s: query = '', category } = await searchParams

  const [products, categories] = await Promise.all([
    category ? searchProductsByCategory(category) : searchProducts(query),
    getCategories(),
  ])

  if (!products.length) {
    return <EmptyState categories={categories} />
  }

  return <ProductGrid products={products} />
}

export default SearchPage
