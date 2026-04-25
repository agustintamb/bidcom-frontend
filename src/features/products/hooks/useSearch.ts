'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { type SyntheticEvent, useState } from 'react'

export function useSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [value, setValue] = useState(searchParams.get('s') ?? '')

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault()
    const trimmed = value.trim()
    if (trimmed) router.push(`/search?s=${encodeURIComponent(trimmed)}`)
  }

  return { value, setValue, handleSubmit }
}
