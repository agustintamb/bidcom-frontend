import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white rounded-full outline-none transition-all ease-in-out duration-300 focus:outline-none',
  secondary:
    'border border-primary bg-white text-black font-semibold uppercase rounded-full h-10 px-[18px] py-[7px] text-base text-nowrap transition-all ease-in-out duration-300 hover:bg-[#6c6cf0] hover:border-[#6c6cf0] hover:text-white focus:outline-none',
  ghost:
    'bg-transparent text-gray-700 hover:bg-gray-100 font-medium rounded-full transition-all ease-in-out duration-300 focus:outline-none',
  link: 'bg-transparent text-link hover:text-[#6c6cf0] underline font-normal transition-all ease-in-out duration-300',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${variant !== 'secondary' ? sizeStyles[size] : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
