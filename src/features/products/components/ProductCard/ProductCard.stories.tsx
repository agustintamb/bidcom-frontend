import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import type { Product } from '../../lib/types'
import { ProductCard } from './ProductCard'

const baseProduct: Product = {
  id: 1,
  sku: 'RCH45Q1A',
  title: 'iPhone 9',
  brand: 'Apple',
  category: 'smartphones',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  thumbnail: 'https://cdn.dummyjson.com/product-images/phones/iphone-9/thumbnail.webp',
  images: [],
  tags: ['smartphone', 'apple'],
  weight: 0.3,
  dimensions: { width: 7.5, height: 15.0, depth: 0.8 },
  warrantyInformation: '1 Year Warranty',
  shippingInformation: 'Ships in 1 month',
  availabilityStatus: 'In Stock',
  reviews: [],
  returnPolicy: '30 days return policy',
  minimumOrderQuantity: 1,
}

const meta = {
  title: 'Features/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: { appDirectory: true },
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const WithDiscount: Story = {
  args: { product: baseProduct },
}

export const WithoutDiscount: Story = {
  args: {
    product: { ...baseProduct, discountPercentage: 0 },
  },
}

export const OutOfStock: Story = {
  args: {
    product: { ...baseProduct, stock: 0, availabilityStatus: 'Out of Stock' },
  },
}

export const LongTitle: Story = {
  args: {
    product: {
      ...baseProduct,
      title: 'MacBook Pro 16" M3 Max con pantalla Liquid Retina XDR y chip M3 Max',
      brand: 'Apple',
      price: 3499,
      discountPercentage: 5,
    },
  },
}

export const HighRating: Story = {
  args: {
    product: { ...baseProduct, rating: 5.0, discountPercentage: 0 },
  },
}

export const LowRating: Story = {
  args: {
    product: { ...baseProduct, rating: 1.5, discountPercentage: 0 },
  },
}
