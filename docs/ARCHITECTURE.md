# Architecture

## Folder Structure

```
src/
├── app/                          # Next.js App Router — routing only
│   ├── layout.tsx                # RootLayout: Header + main
│   ├── page.tsx                  # Home → product listing
│   ├── not-found.tsx             # Global 404
│   ├── error.tsx                 # Global error boundary (use client)
│   ├── loading.tsx               # Global loading state
│   ├── search/
│   │   ├── page.tsx
│   │   └── loading.tsx
│   └── product/
│       └── [sku]/
│           ├── page.tsx
│           ├── loading.tsx
│           └── not-found.tsx
│
├── features/
│   └── products/                 # Self-contained feature
│       ├── components/
│       │   ├── ProductCard/
│       │   ├── ProductGrid/
│       │   └── EmptyState/
│       ├── hooks/
│       │   └── useSearch.ts
│       ├── lib/
│       │   ├── api.ts            # searchProducts, getProductBySku, getCategories
│       │   └── types.ts          # Product, Category interfaces
│       └── index.ts              # Public API of this feature
│
├── components/
│   ├── ui/                       # Design system → all have .stories.tsx
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Skeleton/
│   │   ├── Typography/
│   │   └── index.ts
│   └── app/                      # Business components → no Storybook
│       ├── Header/
│       ├── SearchBar/
│       └── index.ts
│
├── lib/                          # Global, no feature owner
│   ├── constants.ts
│   └── utils/
│       └── format.ts
│
└── hooks/                        # Global hooks (if needed)
```

## Dependency Rules

```
app/pages → features/          ✅
app/pages → components/        ✅
features/ → components/ui/     ✅
features/ → lib/               ✅
components/ui/ → (nothing)     ✅

features/X → features/Y        ❌
components/ui/ → features/     ❌
```

## Data Flow

```
URL → app/page.tsx (Server Component)
    → features/products/lib/api.ts (fetch)
    → DummyJSON API
    → Product[] (typed)
    → features/products/components/ProductGrid
    → components/ui/Card
```

## When to create what

| What | Where |
|---|---|
| New page | src/app/ |
| Product-related component | src/features/products/components/ |
| Reusable UI primitive | src/components/ui/ |
| Business component | src/components/app/ |
| Global helper/util | src/lib/utils/ |
| New feature | src/features/newfeature/ |

## Adding a new feature (e.g. checkout)

1. Create src/features/checkout/
2. Add components/, hooks/, lib/, index.ts inside it
3. Add pages to src/app/checkout/
4. Do NOT import from src/features/products/
5. Share types via src/lib/ if needed across features