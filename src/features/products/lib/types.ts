export interface Product {
  id: number
  sku: string
  title: string
  brand: string
  category: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  thumbnail: string
  images: string[]
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export type Category = string
