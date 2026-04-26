import { getCategoryItems } from '@/features/products/lib/api'

import { CategoryNav } from './CategoryNav'

export const CategoryNavServer = async () => {
  const categories = await getCategoryItems()
  return <CategoryNav categories={categories} />
}
