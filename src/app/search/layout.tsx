import type { ReactNode } from 'react'

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>
}

export default SearchLayout
