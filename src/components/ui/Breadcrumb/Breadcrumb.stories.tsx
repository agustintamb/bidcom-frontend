import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Breadcrumb } from './Breadcrumb'

const meta = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    items: { description: 'Lista de ítems del breadcrumb. Si se omite, muestra solo "Home".' },
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Solo Home',
  args: {
    items: [{ label: 'Home', href: '/' }],
  },
}

export const TwoItems: Story = {
  name: '2 ítems — Home > Categoría',
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'SMARTPHONES', href: '/search?category=smartphones' },
    ],
  },
}

export const ThreeItems: Story = {
  name: '3 ítems — Home > Categoría > Producto',
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'SMARTPHONES', href: '/search?category=smartphones' },
      { label: 'iPhone 9', href: '/product/RCH45Q1A' },
    ],
  },
}

export const SearchResult: Story = {
  name: 'Resultado de búsqueda',
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: '"iphone"', href: '/search?s=iphone' },
    ],
  },
}
