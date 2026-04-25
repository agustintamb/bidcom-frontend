import { API_BASE_URL, CATEGORIES_LIMIT, PRODUCTS_LIMIT } from '@/lib/constants'

import type { Category, Product, ProductsResponse } from './types'

export async function searchProducts(query: string): Promise<Product[]> {
  const url = query
    ? `${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}&limit=${PRODUCTS_LIMIT}`
    : `${API_BASE_URL}/products?limit=${PRODUCTS_LIMIT}`

  const res = await fetch(url, { cache: 'no-store' })

  if (!res.ok) throw new Error('Failed to fetch products')

  const data: ProductsResponse = await res.json()
  return data.products
}

export async function getProductBySku(sku: string): Promise<Product | null> {
  const res = await fetch(
    `${API_BASE_URL}/products/search?q=${encodeURIComponent(sku)}&limit=10`,
    { cache: 'no-store' }
  )

  if (!res.ok) throw new Error('Failed to fetch product')

  const data: ProductsResponse = await res.json()
  return data.products.find((p) => p.sku === sku) ?? null
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE_URL}/products/category-list`, {
    cache: 'force-cache',
  })

  if (!res.ok) throw new Error('Failed to fetch categories')

  const data: Category[] = await res.json()
  return data.slice(0, CATEGORIES_LIMIT)
}
