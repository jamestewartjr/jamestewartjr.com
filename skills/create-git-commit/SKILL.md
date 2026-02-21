---
name: create-git-commit
description: Create an atomic, safe git commit for session-authored changes. Use when users ask to commit changes, make a clean commit, or verify only session files are included.
---

# Atomic Git Commit

Create an atomic git commit for the changes made in this session.

## Instructions

1. First, run `git status` to see all changes (staged, unstaged, and untracked files).
2. Identify only the files touched in this session. Do not commit files modified by other agents or processes.
3. For tracked files (modified):
   - `git commit -m "<scoped message>" -- path/to/file1 path/to/file2`
4. For brand-new (untracked) files:
   - `git restore --staged :/ && git add "path/to/file1" "path/to/file2" && git commit -m "<scoped message>" -- path/to/file1 path/to/file2`
5. Quote paths with special characters:
   - `git add "src/app/[candidate]/page.tsx"`
   - `git commit -m "message" -- "src/app/[slug]/page.tsx"`

## Commit Message Format

- Use a scoped, descriptive message (for example: `feat(auth): add login form`, `fix(api): handle null response`).
- Keep the first line under 72 characters.
- Do not add AI co-author lines.

## Safety Rules - Critical

Never run these commands unless the user explicitly requests them in writing:

- `git reset --hard`
- `git checkout <older-commit>`
- `git restore` to revert files not authored in this session
- `rm` on tracked files
- Any destructive operation that could lose work

If unsure, stop and ask the user before proceeding.

## Workflow

1. Run `git status` and review what changed.
2. Run `git diff --staged` and `git diff` to understand the changes.
3. Identify files from this session only.
4. Check whether docs need a small update for gotchas, design decisions, or behavior changes.
5. Compose a clear commit message.
6. Execute the appropriate commit command.
7. Run `git status` again to verify success.
