'use client'

import { Search } from 'lucide-react'

import { Input } from '@/components/ui'
import { useSearch } from '@/features/products/hooks/useSearch'

export const SearchBar = () => {
  const { value, setValue, handleSubmit } = useSearch()

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <Input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="¿Qué estás buscando?"
        rightIcon={
          <button type="submit" className="cursor-pointer" aria-label="Buscar">
            <Search size={18} />
          </button>
        }
      />
    </form>
  )
}
