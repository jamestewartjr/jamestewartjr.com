# AGENTS.md — jamestewartjr.com

Guidance for coding agents working in this repository.

## Project overview

Personal site and blog for James Stewart Jr. (jamestewartjr.com). Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS 4**, and **MDX** for blog posts. Requires **Node.js 22+** (see `package.json` `engines`). Hosted on Vercel with Analytics and Speed Insights.

- **App**: `app/` — pages, layouts, API routes, blog, components, config.
- **Blog**: `app/blog/` — blog index, `[slug]` dynamic route, MDX in `app/blog/posts/`.
- **Shared UI**: `app/components/` — nav, footer, blog components, profile, email form, social links.
- **Root-level**: `components/` (e.g. analytics), `docs/` (design/feature docs), `public/` (static assets), `templates/` (blog post template).

## Build and dev commands

- **Install**: `npm install`
- **Dev**: `npm run dev` — Next.js dev server (Turbopack default in Next 16)
- **Build**: `npm run build` — production build
- **Start**: `npm run start` — same as dev (runs `next dev`)

Use **npm** (this repo uses `package.json` + `package-lock.json`, not pnpm/yarn).

## Testing instructions

- **Run tests**: `npm test` (runs Jest).
- **Test location**: Component tests live under `app/components/__tests__/` (e.g. `social-links.test.tsx`). Stack: Jest + React Testing Library + `@testing-library/jest-dom`.
- **Before finishing**: Run the test suite and fix any failures.
- **When changing code**: Add or update tests for the code you change. Prefer Testing Library patterns (queries by role/label, avoid implementation details).

If `npm test` fails with "jest not found", Jest may need to be added as a dev dependency or run via `npx jest`.

## Code style and practices

- **TypeScript**: Use type hints wherever it helps readability and maintenance.
- **Docstrings**: Use docstrings (or JSDoc) to explain non-obvious behavior and public APIs.
- **Logging**: Use loggers for instrumentation and debugging where appropriate.
- **Formatting**: Keep existing style (indentation, quotes, semicolons) consistent in the files you edit.

Design and process docs (e.g. problem statement → design doc → implementation → PR) are described in repo/workspace rules; follow them when doing larger features.

## Blog posts

- **New post**: Copy `templates/blog-post-template.mdx` → create `app/blog/posts/YYYY-MM-DD_Your-Title-Here.mdx` (underscore or hyphen after date both work; match existing posts).
- **Required frontmatter**: `title`, `summary`, `pubDate`, `categories`, `keywords`, `slug`, `publishedAt`, `image`. See `templates/README.md` for full list and code-block syntax.
- **Preview**: Dev server at `localhost:3000/blog/[your-slug]`.

Slug and metadata are derived from filenames and frontmatter in `app/blog/utils.ts`; avoid changing that contract without updating all posts or the blog index.

## Docs and design

- **Design docs**: `docs/` — e.g. `social_links_design.md`, `mobile_profile_design.md`, `google-analytics-integration.md`. Check these before changing related features.

## Security and deployment

- **API**: `app/api/subscribe/` — handle subscribe/contact data safely; no secrets in client or repo.
- **Deployment**: Vercel; build command is `npm run build`. Env and secrets are configured in Vercel, not committed.

## PR and commit guidelines

- **Branching**: Do implementation and testing in a separate branch; use a phased approach so changes stay reviewable.
- **PR**: Open a pull request for review before merging.
- **Pre-merge**: Run `npm run build` and `npm test`; fix any failures. Resolve linter/TypeScript errors if present.

---

*AGENTS.md is living documentation; update it when project structure, commands, or conventions change.*
