import { BreadcrumbSkeleton, Skeleton } from '@/components/ui'

const Loading = () => {
  return (
    <div className="flex flex-col gap-8">
      <BreadcrumbSkeleton items={3} />

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Imagen */}
        <Skeleton className="h-80 w-full md:h-[480px]" />

        {/* Info */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-3/4" />
          </div>

          {/* Rating */}
          <Skeleton className="h-4 w-36" />

          {/* Precio */}
          <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-40" />
          </div>

          {/* Stock */}
          <Skeleton className="h-4 w-32" />

          {/* Descripción */}
          <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>

          {/* Envío y devoluciones */}
          <Skeleton className="h-20 w-full" />
        </div>
      </div>

      {/* Especificaciones */}
      <div className="flex flex-col gap-4">
        <Skeleton className="h-6 w-48" />
        <div className="grid grid-cols-1 gap-0 rounded-md border border-gray-100 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1 px-4 py-3">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="flex flex-col gap-4">
        <Skeleton className="h-6 w-32" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-md border border-gray-100 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-20" />
              </div>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loading
