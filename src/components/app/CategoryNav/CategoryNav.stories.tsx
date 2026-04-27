import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import type { CategoryItem } from '@/features/products/lib/types'

import { CategoryNav } from './CategoryNav'

const mockCategories: CategoryItem[] = [
  { slug: 'smartphones', name: 'Smartphones', url: '/products/category/smartphones' },
  { slug: 'laptops', name: 'Laptops', url: '/products/category/laptops' },
  { slug: 'tablets', name: 'Tablets', url: '/products/category/tablets' },
  { slug: 'mobile-accessories', name: 'Accesorios mobile', url: '/products/category/mobile-accessories' },
  { slug: 'fragrances', name: 'Fragancias', url: '/products/category/fragrances' },
  { slug: 'beauty', name: 'Belleza', url: '/products/category/beauty' },
  { slug: 'skin-care', name: 'Cuidado de la piel', url: '/products/category/skin-care' },
  { slug: 'home-decoration', name: 'Decoración del hogar', url: '/products/category/home-decoration' },
  { slug: 'kitchen-accessories', name: 'Accesorios de cocina', url: '/products/category/kitchen-accessories' },
  { slug: 'sports-accessories', name: 'Accesorios deportivos', url: '/products/category/sports-accessories' },
]

const meta = {
  title: 'App/CategoryNav',
  component: CategoryNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: { appDirectory: true },
  },
} satisfies Meta<typeof CategoryNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { categories: mockCategories },
}

export const FewCategories: Story = {
  args: { categories: mockCategories.slice(0, 3) },
}

export const ManyCategories: Story = {
  args: {
    categories: [
      ...mockCategories,
      { slug: 'furniture', name: 'Muebles', url: '/products/category/furniture' },
      { slug: 'vehicle', name: 'Vehículos', url: '/products/category/vehicle' },
      { slug: 'motorcycle', name: 'Motos', url: '/products/category/motorcycle' },
      { slug: 'lighting', name: 'Iluminación', url: '/products/category/lighting' },
    ],
  },
}
