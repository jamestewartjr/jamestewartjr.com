---
name: sync-branches
description: Safely synchronize one git branch with another using a dedicated integration branch, fast-forward merges, and validation checks. Use when asked to sync branches like develop/master, create merge branches for PRs, confirm branch divergence, or verify build/test health after branch sync.
---

# Sync Branches

Use this skill to synchronize a target branch with a source branch while keeping a reviewable branch and clear validation output.

## Workflow

1. Inspect repository state before doing any branch operations.
2. Confirm source branch, target branch, and integration branch names.
3. Create or update local tracking branches for source/target.
4. Create an integration branch from target.
5. Merge source into integration using `--ff-only` when the goal is exact sync.
6. Run project validation commands (`npm test`, `npm run build`, or repo-specific checks).
7. Summarize results with exact branch names and commit SHAs.

## Command Pattern

Prefer the bundled script for repeatability:

```bash
./skills/sync-branches/scripts/sync_branches.sh master develop
```

Default behavior:
- Source branch defaults to `master`
- Target branch defaults to `develop`
- Integration branch defaults to `chore/sync-<target>-with-<source>-YYYY-MM-DD`

## Safety Rules

- Fail if the working tree is dirty.
- Fail if the integration branch already exists.
- Create local branch from `origin/<branch>` when missing.
- Do not force-push or hard-reset.
- Use `--ff-only` when "in sync" means target should match source commit exactly.

## Validation

Run the repository's required checks after merge. If checks cannot run, state the exact blocker (missing binary, Node version mismatch, permissions, or network restriction).

For troubleshooting and fallback commands, read `references/git-sync-checklist.md`.
