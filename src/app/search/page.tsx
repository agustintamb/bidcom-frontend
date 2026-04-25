import {
  EmptyState,
  ProductGrid,
  getCategories,
  searchProducts,
} from '@/features/products'

interface SearchPageProps {
  searchParams: Promise<{ s?: string }>
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { s: query = '' } = await searchParams

  const [products, categories] = await Promise.all([
    searchProducts(query),
    getCategories(),
  ])

  if (!products.length)
    return <EmptyState categories={categories} query={query} />

  return <ProductGrid products={products} />
}

export default SearchPage
