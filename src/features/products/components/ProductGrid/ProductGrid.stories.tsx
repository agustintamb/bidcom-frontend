import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import type { Product } from '../../lib/types'
import { ProductGrid, ProductGridSkeleton } from './ProductGrid'

const makeProduct = (overrides: Partial<Product> & Pick<Product, 'id' | 'sku' | 'title' | 'brand' | 'price'>): Product => ({
  category: 'smartphones',
  description: 'Descripción del producto',
  discountPercentage: 0,
  rating: 4.0,
  stock: 50,
  thumbnail: 'https://cdn.dummyjson.com/product-images/phones/iphone-9/thumbnail.webp',
  images: [],
  tags: [],
  weight: 0.5,
  dimensions: { width: 10, height: 20, depth: 5 },
  warrantyInformation: '1 Year Warranty',
  shippingInformation: 'Ships in 1 month',
  availabilityStatus: 'In Stock',
  reviews: [],
  returnPolicy: '30 days return policy',
  minimumOrderQuantity: 1,
  ...overrides,
})

const mockProducts: Product[] = [
  makeProduct({ id: 1, sku: 'SKU001', title: 'iPhone 9', brand: 'Apple', price: 549, discountPercentage: 12.96, rating: 4.69 }),
  makeProduct({ id: 2, sku: 'SKU002', title: 'Samsung Galaxy S21', brand: 'Samsung', price: 799, rating: 4.2 }),
  makeProduct({ id: 3, sku: 'SKU003', title: 'MacBook Pro 14"', brand: 'Apple', price: 1999, discountPercentage: 8, rating: 4.9 }),
  makeProduct({ id: 4, sku: 'SKU004', title: 'Sony WH-1000XM5', brand: 'Sony', price: 349, rating: 4.8, stock: 0, availabilityStatus: 'Out of Stock' }),
  makeProduct({ id: 5, sku: 'SKU005', title: 'iPad Air M2', brand: 'Apple', price: 699, discountPercentage: 5, rating: 4.7 }),
  makeProduct({ id: 6, sku: 'SKU006', title: 'Xiaomi Redmi Note 13', brand: 'Xiaomi', price: 249, rating: 4.1 }),
  makeProduct({ id: 7, sku: 'SKU007', title: 'Dell XPS 15', brand: 'Dell', price: 1799, discountPercentage: 15, rating: 4.5 }),
  makeProduct({ id: 8, sku: 'SKU008', title: 'AirPods Pro 2da generación', brand: 'Apple', price: 249, rating: 4.6 }),
]

const meta = {
  title: 'Features/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    nextjs: { appDirectory: true },
  },
} satisfies Meta<typeof ProductGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { products: mockProducts },
}

export const SingleProduct: Story = {
  args: { products: mockProducts.slice(0, 1) },
}

export const FewProducts: Story = {
  args: { products: mockProducts.slice(0, 3) },
}

export const Skeleton: Story = {
  render: () => <ProductGridSkeleton />,
}
