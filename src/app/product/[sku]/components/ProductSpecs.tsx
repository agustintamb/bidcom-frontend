import { Typography } from '@/components/ui'
import type { Product } from '@/features/products/lib/types'

export interface ProductSpecsProps {
  sku: string
  warrantyInformation: string
  weight: number
  dimensions: Product['dimensions']
}

export const ProductSpecs = ({ sku, warrantyInformation, weight, dimensions }: ProductSpecsProps) => {
  const specs = [
    { label: 'SKU', value: sku },
    { label: 'Garantía', value: warrantyInformation },
    { label: 'Dimensiones', value: `${dimensions.width} x ${dimensions.height} x ${dimensions.depth} cm` },
    { label: 'Peso', value: `${weight} kg` },
  ]

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h4" weight="semibold" className="text-black">
        Especificaciones
      </Typography>
      <div className="grid grid-cols-1 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white sm:grid-cols-2 sm:divide-y-0">
        {specs.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-0.5 px-4 py-3">
            <Typography variant="caption" className="tracking-wide text-gray-400 uppercase">
              {label}
            </Typography>
            <Typography variant="body-sm" weight="semibold" className="text-gray-700">
              {value}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
