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

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = date.getUTCFullYear()
  return `${day}/${month}/${year}`
}
