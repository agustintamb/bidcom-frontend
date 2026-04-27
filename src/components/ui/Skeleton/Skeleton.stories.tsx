import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { BreadcrumbSkeleton, Skeleton, SkeletonCard } from './Skeleton'

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: { className: 'h-4 w-48' },
}

export const Sizes: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-3 w-32" />
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-6 w-64" />
      <Skeleton className="h-10 w-80" />
      <Skeleton className="h-48 w-80" />
    </div>
  ),
}

export const Card: Story = {
  args: {},
  render: () => (
    <div className="w-64">
      <SkeletonCard />
    </div>
  ),
}

export const CardGrid: Story = {
  args: {},
  parameters: { layout: 'padded' },
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  ),
}

export const BreadcrumbOne: Story = {
  args: {},
  name: 'Breadcrumb — 1 ítem',
  render: () => <BreadcrumbSkeleton items={1} />,
}

export const BreadcrumbTwo: Story = {
  args: {},
  name: 'Breadcrumb — 2 ítems',
  render: () => <BreadcrumbSkeleton items={2} />,
}

export const BreadcrumbThree: Story = {
  args: {},
  name: 'Breadcrumb — 3 ítems',
  render: () => <BreadcrumbSkeleton items={3} />,
}
