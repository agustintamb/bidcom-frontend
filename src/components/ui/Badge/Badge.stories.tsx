import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Badge } from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'sale', 'warranty', 'used', 'recommended', 'outline'],
      description: 'Estilo visual del badge',
    },
    children: { control: 'text', description: 'Contenido del badge' },
  },
  args: { children: 'Badge' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { variant: 'outline', children: 'Badge' },
}

export const Success: Story = {
  args: { variant: 'success', children: '15% OFF' },
}

export const Sale: Story = {
  args: { variant: 'sale', children: 'Oferta' },
}

export const Warranty: Story = {
  args: { variant: 'warranty', children: 'Garantía' },
}

export const Used: Story = {
  args: { variant: 'used', children: 'Sin stock' },
}

export const Recommended: Story = {
  args: { variant: 'recommended', children: 'Recomendado' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'smartphone' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success">15% OFF</Badge>
      <Badge variant="sale">Oferta</Badge>
      <Badge variant="warranty">Garantía</Badge>
      <Badge variant="used">Sin stock</Badge>
      <Badge variant="recommended">Recomendado</Badge>
      <Badge variant="outline">smartphone</Badge>
    </div>
  ),
}
