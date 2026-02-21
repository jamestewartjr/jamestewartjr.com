# Architecture

## Bird's Eye View
jamestewartjr.com is organized as a single-package repository using JavaScript, Python, TypeScript.
Detected frameworks/runtime signals: App Router, Next.js, React.

## Code Map
- `app/about`: active module or boundary in this repository.
- `app/api`: active module or boundary in this repository.
- `app/blog`: active module or boundary in this repository.
- `app/components`: active module or boundary in this repository.
- `app/config`: active module or boundary in this repository.
- `app/global.css`: active module or boundary in this repository.
- `app/layout.tsx`: active module or boundary in this repository.
- `app/links`: active module or boundary in this repository.
- `app/not-found.tsx`: active module or boundary in this repository.
- `app/og`: active module or boundary in this repository.

## Architectural Invariants
- Keep architecture docs synchronized with real module boundaries and runtime entry points.
- Prefer bounded updates over broad rewrites when updating existing docs.
- Preserve existing higher-quality documentation unless a candidate update is measurably better.

## Boundaries
- `app` boundary is part of runtime topology.

## Cross-Cutting Concerns
- CI workflow observed: `none detected`.
- Baseline verification command: `npm test`.
