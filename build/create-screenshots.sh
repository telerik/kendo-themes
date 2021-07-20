#!/usr/bin/env bash
set -e
shopt -s extglob

THEME="${1:-default}"
TEMP_DIR="./tests/.tmp/visual"
THEME_DIR="$TEMP_DIR/$THEME"
SRC_DIR="$THEME_DIR/src"

if [ -z "$THEME" ]; then
    echo "Usage: create-screenshots <default|bootstrap|material|classic>"
    exit
else
    echo "Creating screenshots for theme '$THEME'"
fi

mkdir -p "$THEME_DIR"
cp -r ./tests/visual/!(output) "$THEME_DIR"

# replace theme reference
find "$SRC_DIR" -name '*.html' -print0 | xargs -0 sed -i -E \
    -e "s#/packages/default/dist/#/../../../packages/$THEME/dist/#"

# capture screenshots. see .pastshotsrc for config options
npm install --no-save pastshots@1.6 optipng

npx pastshots \
    --serve "$SRC_DIR/**/*.html" \
    --port $((RANDOM % 1000 + 8000)) \
    --output "./tests/visual/output/$THEME"
