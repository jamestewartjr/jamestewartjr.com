#!/usr/bin/env bash
set -euo pipefail

SOURCE_BRANCH="master"
TARGET_BRANCH="develop"
WORK_BRANCH=""
REMOTE="${REMOTE:-origin}"
FETCH_REMOTE=1
DRY_RUN=0

usage() {
  cat <<'EOF'
Usage:
  sync_branches.sh [source_branch] [target_branch] [work_branch] [--no-fetch] [--dry-run]

Examples:
  sync_branches.sh
  sync_branches.sh master develop
  sync_branches.sh release develop chore/sync-develop-with-release
  sync_branches.sh master develop --dry-run
EOF
}

POSITIONAL_ARGS=()
for arg in "$@"; do
  case "$arg" in
    --help|-h)
      usage
      exit 0
      ;;
    --no-fetch)
      FETCH_REMOTE=0
      ;;
    --dry-run)
      DRY_RUN=1
      ;;
    -*)
      die "unknown option: $arg"
      ;;
    *)
      POSITIONAL_ARGS+=("$arg")
      ;;
  esac
done

if [ "${#POSITIONAL_ARGS[@]}" -gt 3 ]; then
  die "too many positional arguments."
fi

if [ "${#POSITIONAL_ARGS[@]}" -ge 1 ]; then
  SOURCE_BRANCH="${POSITIONAL_ARGS[0]}"
fi

if [ "${#POSITIONAL_ARGS[@]}" -ge 2 ]; then
  TARGET_BRANCH="${POSITIONAL_ARGS[1]}"
fi

if [ "${#POSITIONAL_ARGS[@]}" -ge 3 ]; then
  WORK_BRANCH="${POSITIONAL_ARGS[2]}"
fi

if [ -z "$WORK_BRANCH" ]; then
  WORK_BRANCH="chore/sync-${TARGET_BRANCH}-with-${SOURCE_BRANCH}-$(date +%Y-%m-%d)"
fi

log() {
  printf '[sync-branches] %s\n' "$1"
}

die() {
  printf '[sync-branches] ERROR: %s\n' "$1" >&2
  exit 1
}

run() {
  if [ "$DRY_RUN" -eq 1 ]; then
    printf '[dry-run] %s\n' "$*"
  else
    "$@"
  fi
}

branch_exists() {
  git show-ref --verify --quiet "refs/heads/$1"
}

remote_branch_exists() {
  git show-ref --verify --quiet "refs/remotes/${REMOTE}/$1"
}

require_clean_tree() {
  if ! git diff --quiet || ! git diff --cached --quiet || [ -n "$(git ls-files --others --exclude-standard)" ]; then
    die "working tree is not clean. Commit, stash, or clean files before syncing branches."
  fi
}

ensure_local_branch() {
  local branch="$1"
  if branch_exists "$branch"; then
    return 0
  fi

  if remote_branch_exists "$branch"; then
    run git branch "$branch" "${REMOTE}/${branch}"
    return 0
  fi

  die "branch '${branch}' not found locally or at ${REMOTE}/${branch}."
}

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || die "not inside a git repository."
require_clean_tree

if [ "$FETCH_REMOTE" -eq 1 ]; then
  log "fetching ${REMOTE}..."
  run git fetch "$REMOTE" --prune
fi

ensure_local_branch "$SOURCE_BRANCH"
ensure_local_branch "$TARGET_BRANCH"

if branch_exists "$WORK_BRANCH"; then
  die "integration branch '${WORK_BRANCH}' already exists."
fi

log "creating integration branch '${WORK_BRANCH}' from '${TARGET_BRANCH}'..."
run git checkout "$TARGET_BRANCH"
run git checkout -b "$WORK_BRANCH"

log "merging '${SOURCE_BRANCH}' into '${WORK_BRANCH}' with --ff-only..."
run git merge --ff-only "$SOURCE_BRANCH"

log "sync complete."
printf '\nNext steps:\n'
printf '  1. Run validation checks (for example: npm test && npm run build)\n'
printf '  2. Push branch: git push -u %s %s\n' "$REMOTE" "$WORK_BRANCH"
printf '  3. Open PR from %s -> %s\n' "$WORK_BRANCH" "$TARGET_BRANCH"
