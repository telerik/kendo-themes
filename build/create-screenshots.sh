#!/usr/bin/env bash
set -e
shopt -s extglob

THEME=$1
TEMP_DIR="./tests/.tmp/visual"
THEME_DIR="$TEMP_DIR/$THEME"

if [ -z "$THEME" ]; then
    echo "Usage: create-screenshots <default|bootstrap|material>"
    exit
else
    echo "Creating screenshots for theme '$THEME'"
fi

mkdir -p "$THEME_DIR"
cp -r ./tests/visual/!(output) "$THEME_DIR"

# replace theme reference
find "$THEME_DIR" -name '*.html' -print0 | xargs -0 sed -i -E \
    -e "s#/packages/default/dist/#/../../packages/$THEME/dist/#"

# capture screenshots. see .pastshotsrc for config options
npm install --no-save pastshots optipng

find $TEMP_DIR \
    -type d \
    -not -wholename "*output*" \
    -not -name "dist" \
    -not -name "assets" \
    -not -name "visual" \
    -exec bash -c '\
        npx pastshots \
            --serve "$0/*.html" \
            --port $((RANDOM % 1000 + 8000)) \
            --output ./tests/visual/output/$(realpath --relative-to "$1" "$0")' \
        {} "$TEMP_DIR" \;
