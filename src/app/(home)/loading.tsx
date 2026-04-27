import { BreadcrumbSkeleton } from '@/components/ui'
import { ProductGridSkeleton } from '@/features/products'

const Loading = () => (
  <div className="flex flex-col gap-4">
    <BreadcrumbSkeleton items={1} />
    <ProductGridSkeleton />
  </div>
)

export default Loading
