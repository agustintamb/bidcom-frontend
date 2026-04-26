export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price)
}

export const calculateOriginalPrice = (
  price: number,
  discountPercentage: number
): number => {
  return price / (1 - discountPercentage / 100)
}

export const formatDiscount = (discountPercentage: number): string => {
  return `${Math.round(discountPercentage)}% OFF`
}
