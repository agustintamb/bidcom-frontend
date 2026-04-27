import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { SearchBar } from './SearchBar'

const meta = {
  title: 'App/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: { appDirectory: true },
  },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-primary w-[600px] p-6">
        <Story />
      </div>
    ),
  ],
}
