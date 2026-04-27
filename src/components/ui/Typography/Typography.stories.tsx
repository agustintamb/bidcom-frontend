import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Typography } from './Typography'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'body-sm', 'caption', 'label', 'price'],
      description: 'Variante tipográfica — define tamaño y tag HTML por defecto',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'semibold', 'bold', 'black'],
      description: 'Peso de la fuente (sobreescribe el default de cada variante)',
    },
    as: { control: 'text', description: 'Tag HTML que renderiza (sobreescribe el default)' },
    children: { control: 'text' },
  },
  args: { children: 'Texto de ejemplo' },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { variant: 'body', children: 'Texto de ejemplo' },
}

export const AllVariants: Story = {
  args: { children: '' },
  render: () => (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">H1 — Título principal</Typography>
      <Typography variant="h2">H2 — Título secundario</Typography>
      <Typography variant="h3">H3 — Título de sección</Typography>
      <Typography variant="h4">H4 — Subtítulo</Typography>
      <Typography variant="body">Body — Texto de párrafo con tamaño base y line-height relajado.</Typography>
      <Typography variant="body-sm">Body SM — Texto secundario, descripciones y etiquetas.</Typography>
      <Typography variant="label">Label — Etiqueta de formulario</Typography>
      <Typography variant="caption">Caption — Texto auxiliar, fechas, metadatos</Typography>
      <Typography variant="price">$549.99</Typography>
    </div>
  ),
}

export const H1: Story = { args: { variant: 'h1', children: 'Título H1' } }
export const H2: Story = { args: { variant: 'h2', children: 'Título H2' } }
export const H3: Story = { args: { variant: 'h3', children: 'Título H3' } }
export const H4: Story = { args: { variant: 'h4', children: 'Título H4' } }
export const Body: Story = { args: { variant: 'body', children: 'Texto de párrafo estándar.' } }
export const BodySm: Story = { args: { variant: 'body-sm', children: 'Texto secundario más pequeño.' } }
export const Caption: Story = { args: { variant: 'caption', children: '27/04/2026' } }
export const Label: Story = { args: { variant: 'label', children: 'Envío' } }
export const Price: Story = { args: { variant: 'price', children: '$549.99' } }

export const Weights: Story = {
  args: { children: '' },
  render: () => (
    <div className="flex flex-col gap-3">
      {(['light', 'normal', 'semibold', 'bold', 'black'] as const).map((w) => (
        <Typography key={w} variant="body" weight={w}>
          {w.charAt(0).toUpperCase() + w.slice(1)} — El zorro marrón rápido salta sobre el perro perezoso
        </Typography>
      ))}
    </div>
  ),
}

export const CustomTag: Story = {
  args: { variant: 'body-sm', as: 'span', children: 'Renderizado como <span> en lugar de <p>' },
}
