import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Card } from './Card'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    onClick: { description: 'Si se pasa, la card es clickeable y muestra cursor pointer' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="p-4">
        <p className="font-semibold text-black">Título del producto</p>
        <p className="text-sm text-gray-600">Descripción breve del contenido de la card.</p>
      </div>
    ),
  },
}

export const Clickable: Story = {
  args: {
    onClick: () => alert('Card clickeada'),
    children: (
      <div className="p-4">
        <p className="font-semibold text-black">Card clickeable</p>
        <p className="text-sm text-gray-600">Hace click para ver el efecto.</p>
      </div>
    ),
  },
}

export const WithCustomContent: Story = {
  args: {
    className: 'w-64',
    children: (
      <div className="flex flex-col gap-2 p-4">
        <div className="h-32 w-full rounded bg-gray-100" />
        <p className="font-semibold text-black">Producto de ejemplo</p>
        <p className="text-sm text-gray-400">Marca</p>
        <span className="text-xl font-bold">$549.00</span>
      </div>
    ),
  },
}
