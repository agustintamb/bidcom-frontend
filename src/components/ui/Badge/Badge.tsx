import type { ReactNode } from 'react'

export type BadgeVariant =
  | 'success'
  | 'sale'
  | 'warranty'
  | 'used'
  | 'recommended'
  | 'outline'

export interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-success text-white',
  sale: 'bg-sale text-white',
  warranty: 'bg-warranty text-white',
  used: 'bg-used text-white',
  recommended: 'bg-recommended text-white',
  outline: 'border border-gray-100 text-gray-600 bg-white',
}

export const Badge = ({
  variant = 'outline',
  children,
  className = '',
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
