import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'link'],
      description: 'Estilo visual del botón',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón (no aplica a secondary)',
    },
    disabled: { control: 'boolean', description: 'Deshabilita el botón' },
    children: { control: 'text' },
  },
  args: { children: 'Botón', onClick: () => {} },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { variant: 'primary', size: 'md', children: 'Botón' },
}

export const Primary: Story = {
  args: { variant: 'primary', children: 'Comprar ahora' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Ver más' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Cancelar' },
}

export const Link: Story = {
  args: { variant: 'link', children: '3 opiniones' },
}

export const Disabled: Story = {
  args: { variant: 'primary', children: 'Sin stock', disabled: true },
}

export const Sizes: Story = {
  args: { children: '' },
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="sm">Pequeño</Button>
      <Button variant="primary" size="md">Mediano</Button>
      <Button variant="primary" size="lg">Grande</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  args: { children: '' },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
}
