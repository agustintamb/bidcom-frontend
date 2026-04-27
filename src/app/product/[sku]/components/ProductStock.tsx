import { Badge, Typography } from '@/components/ui'

export interface ProductStockProps {
  stock: number
  availabilityStatus: string
}

export const ProductStock = ({ stock, availabilityStatus }: ProductStockProps) => {
  if (stock === 0) {
    return (
      <Badge variant="used" className="w-fit">
        Sin stock
      </Badge>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <span className="bg-success h-2 w-2 rounded-full" />
      <Typography variant="body-sm" weight="semibold" className="text-success">
        {availabilityStatus}
      </Typography>
      <Typography variant="body-sm" className="text-gray-400">
        ({stock} unidades)
      </Typography>
    </div>
  )
}
