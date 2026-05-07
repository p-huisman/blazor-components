#!/usr/bin/env bash
set -euo pipefail

# Usage: scripts/download-webcomponents.sh [package-tgz-url] [dest-dir]
URL="${1:-https://proget.p.pggm-cloud.nl/npm/PGGMnpmRegistry/%40pggm/pggm-components/-/pggm-components-2.0.17.tgz}"
DEST_DIR="${2:-Pggm.Components/wwwroot/js}"

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

# locate dist
SRC_DIR="$TMPDIR/extracted/package/dist"
if [ ! -d "$SRC_DIR" ]; then
  SRC_DIR=$(find "$TMPDIR/extracted" -type d -name dist -print -quit || true)
  if [ -z "$SRC_DIR" ]; then
    echo "Error: no 'dist' directory found inside package." >&2
    exit 1
  fi
fi

echo "Found dist at: $SRC_DIR"
mkdir -p "$DEST_DIR"

# collect files with absolute paths
readarray -t FILES < <(find "$SRC_DIR" -type f \( -name '*.js' -o -name '*.mjs' -o -name '*.cjs' \) -print)
if [ ${#FILES[@]} -eq 0 ]; then
  echo "No JS files found in $SRC_DIR"
  exit 0
fi

echo "Copying ${#FILES[@]} files to $DEST_DIR"
for F in "${FILES[@]}"; do
  REL_PATH="${F#$SRC_DIR/}"
  mkdir -p "$DEST_DIR/$(dirname "$REL_PATH")"
  cp -- "$F" "$DEST_DIR/$REL_PATH"
done

echo "Done. Files copied to: $DEST_DIR"