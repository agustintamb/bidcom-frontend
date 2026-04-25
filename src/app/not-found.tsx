import Link from 'next/link'
import { Button } from '@/components/ui'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-24 text-center">
      <h1 className="text-6xl font-black text-gray-100">404</h1>
      <h2 className="text-2xl font-bold text-black">Página no encontrada</h2>
      <p className="text-gray-600">
        La página que buscás no existe o fue removida.
      </p>
      <Link href="/">
        <Button variant="primary">Volver al inicio</Button>
      </Link>
    </div>
  )
}

export default NotFound
