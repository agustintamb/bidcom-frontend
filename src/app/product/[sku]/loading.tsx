import { Skeleton } from '@/components/ui'

const Loading = () => {
  return (
    <div className="flex max-w-4xl flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Skeleton className="h-80 w-full md:h-96" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <Skeleton className="h-4 w-1/3" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-1/2" />
          </div>
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-24 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <Skeleton className="h-6 w-48" />
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-28 w-full" />
        ))}
      </div>
    </div>
  )
}

export default Loading
