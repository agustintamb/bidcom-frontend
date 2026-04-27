import Image from 'next/image'
import Link from 'next/link'

import { Button, Typography } from '@/components/ui'
import type { Category } from '../../lib/types'

export interface EmptyStateProps {
  categories: Category[]
}

export const EmptyState = ({ categories }: EmptyStateProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex min-h-100 flex-col items-center gap-6 rounded-md p-6 md:flex-row md:gap-8">
        <Image
          src="https://d1blmgc4psac6k.cloudfront.net/images/vector/error-404-icon.svg"
          alt="No se encontraron resultados"
          width={452}
          height={276}
          priority
        />

        <div className="flex flex-col gap-4">
          <Typography variant="h3" weight="bold" className="text-primary">
            No se encontró ningún producto.
          </Typography>
          <div className="flex flex-col gap-3">
            <Typography variant="body-sm" weight="semibold" className="text-gray-600">
              Te recomendamos buscar estas categorías:
            </Typography>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/search?category=${encodeURIComponent(category)}`}
                >
                  <Button variant="secondary">{category}</Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
