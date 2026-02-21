# Mobile Profile Design Plan

Date: 2026-02-21
Status: ready for implementation
Owner: codex

## Goal
Refine the mobile profile experience used on `/links` so it is easier to scan, faster to act on, and consistent with existing profile components.

## Current State
- `app/links/page.tsx` renders:
  - `ProfileImage`
  - `AuthorBio`
  - `BlogPosts` (`limit={3}`)
  - `SocialLinks` (`size="large"`)
- `app/components/profile/profile-page.tsx` exists but is not used by `app/links/page.tsx`.
- Layout is already mobile-first, but spacing hierarchy and section structure can be improved for small screens.

## Scope
- Update structure and styling for mobile-first profile presentation on `/links`.
- Keep existing content blocks (profile, bio, recent articles, social links).
- Improve semantic grouping and accessibility labels.

## Non-Goals
- No new backend/API behavior.
- No redesign of blog post card internals.
- No theme-system rewrite.

## Implementation Plan
1. Component Composition Cleanup
- Choose a single composition strategy:
  - Either use `app/components/profile/profile-page.tsx` from `app/links/page.tsx`
  - Or remove `profile-page.tsx` and keep all layout in `app/links/page.tsx`
- Avoid duplicate profile layout definitions across files.

2. Mobile Layout Refinement
- Prioritize vertical rhythm for `320px-430px` widths:
  - tighten heading spacing
  - reduce oversized text where needed
  - keep primary actions visible without excessive scrolling
- Keep one-column flow on mobile; avoid forced two-column split until larger breakpoints.

3. Section Hierarchy and Semantics
- Add section wrappers and headings where needed:
  - profile intro section
  - recent articles section
  - social links section
- Ensure heading levels are consistent and screen-reader friendly.

4. Interaction and Accessibility
- Verify icon link targets remain tappable on mobile.
- Preserve `aria-label` coverage on social links.
- Confirm color contrast remains acceptable for dark background text.

5. Testing and Verification
- Add/update component tests for:
  - `/links` content order and key headings
  - large social links variant rendering
- Manual responsive checks:
  - 375x812
  - 390x844
  - 768x1024

## Acceptance Criteria
- `/links` has a clear mobile-first hierarchy with improved spacing and readability.
- Profile layout source of truth exists in one place (no duplicated layout composition).
- Social links remain accessible and readable on mobile.
- `npm run lint`, `npm test`, and `npm run build` all pass.

## Validation Commands
- `npm run lint`
- `npm test`
- `npm run build`
