#!/usr/bin/env bash
set -e
shopt -s extglob

THEME="${1:-fluent}"
TEMP_DIR=".tmp/visual/"
THEME_DIR="$TEMP_DIR/$THEME"

if [ -z "$THEME" ]; then
    echo "Usage: create-screenshots <default|bootstrap|material|classic>"
    exit
else
    echo "Creating screenshots for theme '$THEME'"
fi

mkdir -p "$THEME_DIR"
cp -r tests/!(_output) $THEME_DIR
cp -r packages/html/assets $THEME_DIR
cp packages/$THEME/dist/all.css $THEME_DIR/assets/all.css

# replace references
find "$THEME_DIR" -name '*.html' -print0 | xargs -0 sed -i -E \
    -e "s#/packages/default/dist/#../assets/#" \
    -e "s#/packages/html/assets/#../assets/#"

npx snapshot \
    --serve "$THEME_DIR/**/*.html" \
    --port $((RANDOM % 1000 + 8000)) \
    --output "./tests/_output/$THEME"
