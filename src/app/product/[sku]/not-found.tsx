import Link from 'next/link'
import { Button } from '@/components/ui'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-24 text-center">
      <h2 className="text-2xl font-bold text-black">Producto no encontrado</h2>
      <p className="text-gray-600">
        El producto que buscás no existe o fue removido.
      </p>
      <Link href="/">
        <Button variant="primary">Ver todos los productos</Button>
      </Link>
    </div>
  )
}

export default NotFound
