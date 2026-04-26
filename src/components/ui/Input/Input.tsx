import type { InputHTMLAttributes, ReactNode } from 'react'

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  error?: string
  hint?: string
  inputSize?: InputSize
  className?: string
}

const sizeStyles: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base',
}

export const Input = ({
  label,
  leftIcon,
  rightIcon,
  error,
  hint,
  inputSize = 'md',
  className = '',
  id,
  disabled,
  ...props
}: InputProps) => {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          disabled={disabled}
          className={`focus:border-primary w-full rounded-sm border bg-white text-black transition-colors placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 ${sizeStyles[inputSize]} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-100'} ${className} `}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          {rightIcon}
        </div>
      </div>

      {hint && !error && <p className="text-xs text-gray-400">{hint}</p>}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
