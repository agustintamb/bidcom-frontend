import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Rating } from './Rating'

const meta = {
  title: 'UI/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 10, step: 0.1 }, description: 'Valor numérico del rating' },
    max: { control: { type: 'number', min: 1, max: 10 }, description: 'Cantidad de estrellas máximas' },
    showValue: { control: 'boolean', description: 'Muestra el número junto a las estrellas' },
  },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: 4.2, max: 5, showValue: true },
}

export const Perfect: Story = {
  args: { value: 5, showValue: true },
}

export const High: Story = {
  args: { value: 4.5, showValue: true },
}

export const Average: Story = {
  args: { value: 2.5, showValue: true },
}

export const Low: Story = {
  args: { value: 1.2, showValue: true },
}

export const WithoutValue: Story = {
  args: { value: 4.2, showValue: false },
}

export const AllValues: Story = {
  args: { value: 0 },
  render: () => (
    <div className="flex flex-col gap-3">
      {[5, 4, 3, 2, 1].map((v) => (
        <div key={v} className="flex items-center gap-4">
          <span className="w-4 text-sm text-gray-400">{v}</span>
          <Rating value={v} />
        </div>
      ))}
    </div>
  ),
}
