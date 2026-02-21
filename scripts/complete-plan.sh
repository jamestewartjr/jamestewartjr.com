#!/usr/bin/env bash
set -euo pipefail

active_dir="docs/plans/active"
completed_dir="docs/plans/completed"

usage() {
  echo "Usage: scripts/complete-plan.sh <active-plan-path-or-filename>" >&2
  exit 1
}

if [ "$#" -ne 1 ]; then
  usage
fi

input="$1"
source_path=""

if [ -f "$input" ]; then
  source_path="${input#./}"
elif [ -f "$active_dir/$input" ]; then
  source_path="$active_dir/$input"
else
  echo "Error: active plan not found for input: $input" >&2
  exit 1
fi

case "$source_path" in
  "$active_dir"/*) ;;
  *)
    echo "Error: source plan must be under $active_dir" >&2
    exit 1
    ;;
esac

if [ ! -f "$source_path" ]; then
  echo "Error: file does not exist: $source_path" >&2
  exit 1
fi

base_name="$(basename "$source_path")"
destination_path="$completed_dir/$base_name"
mkdir -p "$completed_dir"

if [ -e "$destination_path" ]; then
  echo "Error: destination already exists: $destination_path" >&2
  exit 1
fi

temp_file="$(mktemp)"
if grep -q '^Status:' "$source_path"; then
  sed -E 's/^Status:.*/Status: completed/' "$source_path" > "$temp_file"
else
  awk '
    BEGIN { inserted = 0 }
    {
      print $0
      if (!inserted && $0 ~ /^Date:/) {
        print "Status: completed"
        inserted = 1
      }
    }
    END {
      if (!inserted) print "Status: completed"
    }
  ' "$source_path" > "$temp_file"
fi

mv "$temp_file" "$source_path"
mv "$source_path" "$destination_path"

echo "$destination_path"
