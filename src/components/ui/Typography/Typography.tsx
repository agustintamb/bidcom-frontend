import type { ElementType, ReactNode } from 'react'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'price'

export type TypographyWeight =
  | 'light'
  | 'normal'
  | 'semibold'
  | 'bold'
  | 'black'

export interface TypographyProps {
  variant?: TypographyVariant
  weight?: TypographyWeight
  children: ReactNode
  className?: string
  as?: ElementType
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'text-4xl leading-tight',
  h2: 'text-3xl leading-tight',
  h3: 'text-2xl leading-snug',
  h4: 'text-xl leading-snug',
  body: 'text-base leading-relaxed',
  'body-sm': 'text-sm leading-relaxed',
  caption: 'text-xs leading-normal',
  label: 'text-sm leading-none',
  price: 'text-2xl leading-none',
}

const weightStyles: Record<TypographyWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
  black: 'font-black',
}

const defaultTags: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  label: 'span',
  price: 'span',
}

const defaultWeights: Record<TypographyVariant, TypographyWeight> = {
  h1: 'bold',
  h2: 'bold',
  h3: 'semibold',
  h4: 'semibold',
  body: 'normal',
  'body-sm': 'normal',
  caption: 'normal',
  label: 'semibold',
  price: 'bold',
}

export const Typography = ({
  variant = 'body',
  weight = defaultWeights[variant],
  children,
  className = '',
  as,
}: TypographyProps) => {
  const Component = as ?? defaultTags[variant]
  const resolvedWeight = weight ?? defaultWeights[variant]

  return (
    <Component
      className={`${variantStyles[variant]} ${weightStyles[resolvedWeight]} ${className}`}
    >
      {children}
    </Component>
  )
}
