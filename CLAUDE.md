# Bidcom Frontend

## Project Overview
E-commerce frontend for Bidcom, built with Next.js 16 App Router.
Consumes DummyJSON API for product data.

## Stack
- Next.js 16 (App Router, React 19, React Compiler enabled)
- TypeScript (strict mode)
- Tailwind CSS 4.2
- Vitest + Testing Library (unit + integration tests)
- Storybook 10 (design system documentation)
- lucide-react (icons)

## Architecture
See docs/ARCHITECTURE.md for full folder structure.

## Key Rules
- Server Components by default. Use 'use client' ONLY when needed (event handlers, useState, useEffect)
- Pages are thin orchestrators — no business logic inline
- Barrel exports in every folder via index.ts
- Props always typed with named exported interfaces
- No business logic in UI components
- Features do NOT import from other features

## Rendering Strategy
- Home (/): Server Component, fetches all products
- Search (/search?s=): Server Component, fetches by query
- Product detail (/product/[sku]): Server Component, fetches by sku
- SearchBar: Client Component (needs input state)

## API — DummyJSON
Base URL: https://dummyjson.com
- Search products: GET /products/search?q={query}&limit=20
- Get product by id: GET /products/{id}
- Get categories: GET /products/categories
Product has: id, title, price, thumbnail, images, sku, category, description, stock, brand, rating

## File Naming Conventions
- Components: PascalCase (ProductCard.tsx)
- Hooks: camelCase with use prefix (useSearch.ts)
- Types: camelCase (product.ts)
- Stories: ComponentName.stories.tsx
- Tests: ComponentName.test.tsx

## Commands
- npm run dev → development server (localhost:3000)
- npm run storybook → storybook server (localhost:6006)
- npm run test → vitest
- npm run build → production build