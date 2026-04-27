import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { useSearch } from './useSearch'

const mockPush = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

describe('useSearch', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('initializes with an empty value', () => {
    const { result } = renderHook(() => useSearch())
    expect(result.current.value).toBe('')
  })

  it('updates value when setValue is called', () => {
    const { result } = renderHook(() => useSearch())
    act(() => {
      result.current.setValue('iphone')
    })
    expect(result.current.value).toBe('iphone')
  })

  it('navigates to search page on submit', () => {
    const { result } = renderHook(() => useSearch())
    act(() => {
      result.current.setValue('iphone')
    })
    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() })
    })
    expect(mockPush).toHaveBeenCalledWith('/search?s=iphone')
  })

  it('URL-encodes the search query', () => {
    const { result } = renderHook(() => useSearch())
    act(() => {
      result.current.setValue('smart phone')
    })
    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() })
    })
    expect(mockPush).toHaveBeenCalledWith('/search?s=smart%20phone')
  })

  it('trims whitespace before navigating', () => {
    const { result } = renderHook(() => useSearch())
    act(() => {
      result.current.setValue('  iphone  ')
    })
    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() })
    })
    expect(mockPush).toHaveBeenCalledWith('/search?s=iphone')
  })

  it('does not navigate when value is empty', () => {
    const { result } = renderHook(() => useSearch())
    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() })
    })
    expect(mockPush).not.toHaveBeenCalled()
  })

  it('does not navigate when value is only whitespace', () => {
    const { result } = renderHook(() => useSearch())
    act(() => {
      result.current.setValue('   ')
    })
    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() })
    })
    expect(mockPush).not.toHaveBeenCalled()
  })

  it('resets the value to empty string after navigating', () => {
    const { result } = renderHook(() => useSearch())
    act(() => {
      result.current.setValue('iphone')
    })
    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() })
    })
    expect(result.current.value).toBe('')
  })
})
