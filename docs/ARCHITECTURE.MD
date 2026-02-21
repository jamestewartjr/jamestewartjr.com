# Architecture

## Bird's-Eye View
`jamestewartjr.com` is a single-package Next.js 16 App Router project.
Primary runtime and content layers:
- UI routes, layouts, and metadata routes in `app/`
- Blog content in MDX files under `app/blog/posts/`
- Shared UI primitives and profile components in `app/components/`
- Configuration and constants under `app/config/`
- Static assets in `public/`

## Runtime Boundaries
- `app/`: Next.js entrypoints (`page.tsx`, `layout.tsx`, metadata routes, API routes).
- `app/api/subscribe/route.ts`: server-only API boundary for subscribe/contact behavior.
- `app/blog/[slug]/page.tsx`: dynamic route boundary for MDX post rendering.
- `components/analytics/`: cross-cutting client analytics integration.

## Content and Metadata Flow
- Blog metadata and content parsing is centralized in `app/blog/utils.ts`.
- Post files in `app/blog/posts/` provide frontmatter + MDX body.
- The blog index and per-post pages depend on the filename/frontmatter contract.

## Operational Invariants
- Node runtime requirement is `>=24` (see `package.json`).
- Package manager is `npm` with lockfile source of truth (`package-lock.json`).
- Baseline verification commands:
  - `npm run lint`
  - `npm run test:functions`
  - `npm test`
  - `npm run build`

## Documentation Boundaries
- Agent navigation and conventions live in `AGENTS.md`.
- Plan process and lifecycle rules live in `docs/plans/README.md`.
