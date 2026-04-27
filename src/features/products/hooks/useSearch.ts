'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const useSearch = () => {
  const router = useRouter()
  const [value, setValue] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (trimmed) {
      router.push(`/search?s=${encodeURIComponent(trimmed)}`)
      setValue('')
    }
  }

  return { value, setValue, handleSubmit }
}
