# Git Sync Checklist

## Preflight

1. Confirm current branch and clean working tree:
```bash
git status --short --branch
```
2. Confirm divergence between branches:
```bash
git rev-list --left-right --count origin/develop...origin/master
```
3. Inspect recent commits:
```bash
git log --oneline --decorate --graph --max-count=20 origin/develop origin/master
```

## Merge Strategy

- Use `git merge --ff-only <source>` when target should match source exactly.
- Use `git merge --no-ff <source>` only when an explicit merge commit is required by team policy.

## Common Failures

- Dirty working tree:
  - Resolve with commit or stash before running sync.
- Branch missing locally:
  - Create from remote tracking branch.
- `--ff-only` fails:
  - Target and source diverged; evaluate whether rebase or explicit merge commit is acceptable.
- Validation command not found (e.g. `jest`):
  - Report blocker clearly and continue with available checks.

## Post-merge Validation

Run project-required checks after sync branch creation:

```bash
npm test
npm run build
```

If a check cannot run, include exact command, error output, and impact in the final report.
