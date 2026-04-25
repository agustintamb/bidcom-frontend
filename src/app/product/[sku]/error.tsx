'use client'

import { Button } from '@/components/ui'

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
    <div className="flex flex-col items-center gap-6 py-24 text-center">
      <h2 className="text-2xl font-bold text-black">Algo salió mal</h2>
      <p className="text-gray-600">{error.message ?? 'Error inesperado'}</p>
      <Button variant="primary" onClick={reset}>
        Reintentar
      </Button>
    </div>
  )
}

export default Error
