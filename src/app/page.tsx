import {
  EmptyState,
  ProductGrid,
  getCategories,
  searchProducts,
} from '@/features/products'

const HomePage = async () => {
  const [products, categories] = await Promise.all([
    searchProducts(''),
    getCategories(),
  ])

  if (!products.length) return <EmptyState categories={categories} />

  return <ProductGrid products={products} />
}

export default HomePage
