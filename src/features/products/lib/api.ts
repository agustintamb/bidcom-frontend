import { API_BASE_URL, CATEGORIES_LIMIT, PRODUCTS_LIMIT } from '@/lib/constants'

import type { Category, CategoryItem, Product, ProductsResponse } from './types'

export const searchProducts = async (query: string): Promise<Product[]> => {
  const url = query
    ? `${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}&limit=${PRODUCTS_LIMIT}`
    : `${API_BASE_URL}/products?limit=${PRODUCTS_LIMIT}`

  const res = await fetch(url, { cache: 'no-store' })

  if (!res.ok) throw new Error('Failed to fetch products')

  const data: ProductsResponse = await res.json()
  return data.products
}

export const getProductBySku = async (sku: string): Promise<Product | null> => {
  // No API endpoint for fetching by SKU, so we fetch a larger list and find it client-side
  const res = await fetch(`${API_BASE_URL}/products?limit=300`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch product')

  const data: ProductsResponse = await res.json()
  return data.products.find((p) => p.sku === sku) ?? null
}

export const getProductById = async (id: number): Promise<Product | null> => {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) return null

  return res.json()
}

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_BASE_URL}/products/category-list`, {
    cache: 'force-cache',
  })
  if (!res.ok) throw new Error('Failed to fetch categories')
  const data: Category[] = await res.json()
  const shuffled = [...data].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, CATEGORIES_LIMIT)
}

export const getCategoryItems = async (): Promise<CategoryItem[]> => {
  const res = await fetch(`${API_BASE_URL}/products/categories`, {
    cache: 'force-cache',
  })
  if (!res.ok) throw new Error('Failed to fetch category items')
  return res.json()
}

export const searchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const res = await fetch(
    `${API_BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${PRODUCTS_LIMIT}`,
    { cache: 'no-store' }
  )
  if (!res.ok) throw new Error('Failed to fetch products by category')
  const data: ProductsResponse = await res.json()
  return data.products
}
