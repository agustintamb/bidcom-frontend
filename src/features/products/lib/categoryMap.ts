export const categoryMap: Record<string, string> = {
  beauty: 'Belleza',
  fragrances: 'Fragancias',
  furniture: 'Muebles',
  groceries: 'Almacén',
  'home-decoration': 'Decoración del hogar',
  'kitchen-accessories': 'Accesorios de cocina',
  laptops: 'Notebooks',
  'mens-shirts': 'Ropa masculina',
  'mens-shoes': 'Zapatos masculinos',
  'mens-watches': 'Relojes masculinos',
  'mobile-accessories': 'Accesorios móviles',
  motorcycle: 'Motos',
  'skin-care': 'Cuidado de la piel',
  smartphones: 'Smartphones',
  'sports-accessories': 'Accesorios deportivos',
  sunglasses: 'Lentes de sol',
  tablets: 'Tablets',
  tops: 'Tops',
  vehicle: 'Vehículos',
  'womens-bags': 'Carteras',
  'womens-dresses': 'Vestidos',
  'womens-jewellery': 'Joyería',
  'womens-shoes': 'Zapatos femeninos',
  'womens-watches': 'Relojes femeninos',
}

export const translateCategory = (category: string): string => {
  return categoryMap[category] ?? category.replace(/-/g, ' ')
}
