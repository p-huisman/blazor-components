#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/download-styles.sh [package-tgz-url] [dest-dir]
# Downloads pggm-fundamentals tgz and copies contents of dist/pfzw to the project css folder.
URL="${1:-https://proget.p.pggm-cloud.nl/npm/PGGMnpmRegistry/%40pggm/pggm-fundamentals/-/pggm-fundamentals-2.0.17.tgz}"
DEST_DIR="${2:-Pggm.Components/wwwroot/css}"

TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

echo "Downloading $URL"
if command -v curl >/dev/null 2>&1; then
  curl -fSL "$URL" -o "$TMPDIR/package.tgz"
elif command -v wget >/dev/null 2>&1; then
  wget -O "$TMPDIR/package.tgz" "$URL"
else
  echo "Error: curl or wget required." >&2
  exit 1
fi

mkdir -p "$TMPDIR/extracted"
tar -xzf "$TMPDIR/package.tgz" -C "$TMPDIR/extracted"

# Look for dist/pfzw
PFZW_DIR="$TMPDIR/extracted/package/dist/pfzw"
if [ ! -d "$PFZW_DIR" ]; then
  echo "pfzw folder not found at $PFZW_DIR. Searching..."
  PFZW_DIR=$(find "$TMPDIR/extracted" -type d -path '*/dist/pfzw' -print -quit || true)
  if [ -z "$PFZW_DIR" ]; then
    echo "Error: pfzw directory not found under any dist." >&2
    exit 1
  fi
fi

echo "Found pfzw at: $PFZW_DIR"

mkdir -p "$DEST_DIR"

# Prefer rsync for reliable copy, fallback to tar-based copy
if command -v rsync >/dev/null 2>&1; then
  rsync -a "$PFZW_DIR/" "$DEST_DIR/"
else
  (cd "$PFZW_DIR" && tar cf - .) | (cd "$DEST_DIR" && tar xvf - >/dev/null)
fi

echo "Done. pfzw contents copied to: $DEST_DIR"