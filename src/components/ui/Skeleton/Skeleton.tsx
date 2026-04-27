export interface SkeletonProps {
  className?: string
}

export const Skeleton = ({ className = '' }: SkeletonProps) => {
  return <div className={`animate-pulse rounded-md bg-gray-100 ${className}`} />
}

export interface BreadcrumbSkeletonProps {
  items?: number
}

export const BreadcrumbSkeleton = ({ items = 3 }: BreadcrumbSkeletonProps) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <Skeleton className="h-4 w-3" />}
          <Skeleton className={`h-4 ${i === 0 ? 'w-12' : i === items - 1 ? 'w-36' : 'w-20'}`} />
        </div>
      ))}
    </div>
  )
}

export const SkeletonCard = () => {
  return (
    <div className="rounded-md border border-gray-100 bg-white p-4">
      <Skeleton className="mb-4 h-48 w-full" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="mb-2 h-4 w-1/2" />
      <Skeleton className="mb-1 h-3 w-1/4" />
      <Skeleton className="h-6 w-1/3" />
    </div>
  )
}
