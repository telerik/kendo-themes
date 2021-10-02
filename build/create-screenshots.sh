#!/usr/bin/env bash
set -e
shopt -s extglob

THEME="${1:-default}"
TEMP_DIR=".tmp/tests/visual"
THEME_DIR="$TEMP_DIR/$THEME"
SRC_DIR="$THEME_DIR/src"

if [ -z "$THEME" ]; then
    echo "Usage: create-screenshots <default|bootstrap|material|classic>"
    exit
else
    echo "Creating screenshots for theme '$THEME'"
fi

mkdir -p "$THEME_DIR"
cp -r tests/visual/!(output) "$THEME_DIR"

mkdir -p $THEME_DIR/themes/$THEME
mkdir -p $THEME_DIR/scripts

cp packages/$THEME/dist/all.css $THEME_DIR/themes/$THEME/all.css
cp packages/html/dist/index.js $THEME_DIR/scripts/kendo-html.js

# replace references
find "$SRC_DIR" -name '*.html' -print0 | xargs -0 sed -i -E \
    -e "s#../../../../packages/default/dist/#../../themes/$THEME/#" \
    -e "s#../../../../packages/html/dist/index.js#../../scripts/kendo-html.js#"

# capture screenshots. see .pastshotsrc for config options
npm install --no-save pastshots@1.6 optipng

npx pastshots \
    --serve "$SRC_DIR/**/*.html" \
    --port $((RANDOM % 1000 + 8000)) \
    --output "./tests/visual/output/$THEME"
