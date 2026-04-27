# Bidcom Frontend

Evaluación técnica frontend para **Bidcom**. Aplicación e-commerce construida con Next.js 16 App Router, consumiendo la API pública de [DummyJSON](https://dummyjson.com) como fuente de datos de productos.

## Stack

| Tecnología               | Versión | Uso                            |
| ------------------------ | ------- | ------------------------------ |
| Next.js                  | 16      | Framework (App Router)         |
| React                    | 19      | UI + React Compiler habilitado |
| TypeScript               | 5       | Tipado estricto                |
| Tailwind CSS             | 4       | Estilos                        |
| Vitest + Testing Library | 4 / 16  | Tests unitarios e integración  |
| Storybook                | 10      | Documentación de Design System |
| lucide-react             | 1       | Íconos                         |

## Funcionalidades

- **Home** — listado de productos usando el endpoint de búsqueda (límite 20)
- **Búsqueda** — `/search?s=termino` con resultados y estado vacío con 5 categorías sugeridas
- **Detalle de producto** — `/product/:sku` con precio, stock, specs, envío y reseñas
- **Skeleton loading** — estados de carga para cada ruta, sin layout shift
- **Responsive** — mobile-first, grid adaptable de 1 a 4 columnas

## Arquitectura

```
src/
├── app/                        # App Router (páginas y layouts)
│   ├── (home)/                 # Route group — scopes el Suspense de la home
│   ├── search/
│   └── product/[sku]/
│       └── components/         # Componentes exclusivos de la página
├── components/
│   ├── ui/                     # Design System (Badge, Button, Card, Input, ...)
│   └── app/                    # Componentes de aplicación (Navbar, Header)
├── features/
│   └── products/               # Feature de productos
│       ├── components/         # ProductCard, ProductGrid, EmptyState
│       ├── hooks/              # useSearch
│       ├── lib/                # api.ts (fetchers)
│       └── types/              # product.ts
└── lib/
    └── utils/                  # format.ts (precio, fecha, dimensiones)
```

La arquitectura sigue **Clean Architecture** por capas:
- `lib/api.ts` — acceso a datos (Server Components únicamente)
- `features/` — lógica de negocio y presentación de dominio
- `components/ui/` — Design System agnóstico al dominio
- `app/` — páginas como orquestadores delgados, sin lógica inline

## Guía de inicio

### Requisitos

- Node.js >= 20
- npm >= 10

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### Storybook

```bash
npm run storybook
```

Abre [http://localhost:6006](http://localhost:6006)

Documenta todos los componentes del Design System y los componentes de features con sus variantes, props y estados.

### Tests

```bash
# Modo watch (desarrollo)
npm run test

# Cobertura
npm run test:coverage
```

Los tests incluyen:
- **Unitarios** — cada componente de UI y de features (`Badge`, `Button`, `Rating`, `ProductCard`, `ProductPricing`, `ProductStock`, etc.)
- **Integración** — flujo de búsqueda y estado vacío con categorías sugeridas (`src/__tests__/`)

### Build de producción

```bash
npm run build
npm run start
```

## API

Base URL: `https://dummyjson.com`

| Endpoint                                  | Uso                   |
| ----------------------------------------- | --------------------- |
| `GET /products/search?q={query}&limit=20` | Búsqueda de productos |
| `GET /products/{id}`                      | Detalle de producto   |
| `GET /products/category-list`             | Listado de categorías |
