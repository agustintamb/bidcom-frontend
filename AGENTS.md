# Project-specific agent instructions

## This project uses feature modules architecture
See ARCHITECTURE.md for full folder structure and dependency rules.
See CLAUDE.md for stack, conventions, and API details.

## Before creating any file, ask:
1. Is this a page? → src/app/
2. Is this product-related? → src/features/products/
3. Is this a reusable UI primitive? → src/components/ui/
4. Is this a business component? → src/components/app/

## Always
- Default to Server Components
- Add barrel export to index.ts when creating a new component
- Export props interface alongside the component
- Use @/ path aliases, never relative paths across features

---

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->