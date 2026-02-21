# Plans

- Use `docs/plans/active/` for in-progress plans.
- Use `docs/plans/completed/` for completed plans.
- File pattern: `YYYY-MM-DD-slug.md`.
- Include `Date:` and `Status:` fields in each plan.
- Prefer the latest active plan first.
- Complete implemented plans with `bash scripts/complete-plan.sh docs/plans/active/<YYYY-MM-DD-slug>.md`.
- Validate plan changes with `npm run lint`, `npm run test:functions`, and `npm test`.
