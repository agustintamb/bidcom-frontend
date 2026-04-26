import {
  EmptyState,
  ProductGrid,
  getCategories,
  searchProducts,
} from '@/features/products'
import { Breadcrumb } from '@/components/ui'

const HomePage = async () => {
  const [products, categories] = await Promise.all([
    searchProducts(''),
    getCategories(),
  ])

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={[{ label: 'Home', href: '/' }]} />
      {!products.length ? (
        <EmptyState categories={categories} />
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  )
}

export default HomePage
