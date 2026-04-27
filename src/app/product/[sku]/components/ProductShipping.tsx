import { Typography } from '@/components/ui'

export interface ProductShippingProps {
  shippingInformation: string
  returnPolicy: string
}

export const ProductShipping = ({ shippingInformation, returnPolicy }: ProductShippingProps) => {
  return (
    <div className="bg-off-white grid grid-cols-2 gap-3 rounded-md border border-gray-100 p-4">
      <div className="flex flex-col gap-0.5">
        <Typography variant="label" weight="semibold" className="text-gray-700">
          Envío
        </Typography>
        <Typography variant="body-sm" className="text-gray-600">
          {shippingInformation}
        </Typography>
      </div>
      <div className="flex flex-col gap-0.5 border-l border-gray-100 pl-3">
        <Typography variant="label" weight="semibold" className="text-gray-700">
          Devoluciones
        </Typography>
        <Typography variant="body-sm" className="text-gray-600">
          {returnPolicy}
        </Typography>
      </div>
    </div>
  )
}
