import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Navbar } from './Navbar'

const meta = {
  title: 'App/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="flex items-center gap-6">
        <button className="text-sm font-medium text-gray-700">Categorías ▾</button>
        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Ofertas</a>
        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Novedades</a>
      </div>
    ),
  },
}

export const WithSingleItem: Story = {
  args: {
    children: (
      <button className="text-sm font-medium text-gray-700">Categorías ▾</button>
    ),
  },
}
