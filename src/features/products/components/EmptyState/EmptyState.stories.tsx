import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { EmptyState } from './EmptyState'

const meta = {
  title: 'Features/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    nextjs: { appDirectory: true },
  },
  argTypes: {
    categories: { description: 'Lista de categorías sugeridas al usuario' },
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    categories: ['smartphones', 'laptops', 'fragrances', 'beauty', 'sports-accessories'],
  },
}

export const FewCategories: Story = {
  args: {
    categories: ['smartphones', 'laptops'],
  },
}

export const ManyCategories: Story = {
  args: {
    categories: [
      'smartphones', 'laptops', 'tablets', 'fragrances',
      'beauty', 'sports-accessories', 'home-decoration', 'kitchen-accessories',
    ],
  },
}
