#!/usr/bin/env bash
set -e
shopt -s extglob

THEME="${1:-default}"
TESTS_TEMP_DIR=".tmp/visual/tests/"
TEMPLATES_TEMP_DIR=".tmp/visual/templates/"
THEME_TEST_DIR="$TESTS_TEMP_DIR/$THEME"
THEME_TEMPLATES_DIR="$TEMPLATES_TEMP_DIR/$THEME"

if [ -z "$THEME" ]; then
    echo "Usage: create-screenshots <default|bootstrap|material|classic>"
    exit
else
    echo "Creating screenshots for theme '$THEME'"
fi

mkdir -p "$THEME_TEST_DIR"
cp -r tests/!(_output) $THEME_TEST_DIR
cp -r packages/html/assets $THEME_TEST_DIR
cp packages/$THEME/dist/all.css $THEME_TEST_DIR/assets/all.css

# replace references
find "$THEME_TEST_DIR" -name '*.html' -print0 | xargs -0 sed -i -E \
    -e "s#/packages/default/dist/#../assets/#" \
    -e "s#/packages/html/assets/#../assets/#"

npx snapshot \
    --serve "$THEME_TEST_DIR/**/*.html" \
    --port $((RANDOM % 1000 + 8000)) \
    --output "./tests/_output/$THEME"

mkdir -p "$THEME_TEMPLATES_DIR"
cp -r templates/!(_output) $THEME_TEMPLATES_DIR
cp -r packages/html/assets $THEME_TEMPLATES_DIR
cp packages/$THEME/dist/all.css $THEME_TEMPLATES_DIR/assets/all.css

# replace references
find "$THEME_TEMPLATES_DIR" -name '*.html' -print0 | xargs -0 sed -i -E \
    -e "s#/packages/default/dist/#../assets/#" \
    -e "s#/packages/html/assets/#../assets/#"

npx snapshot \
    --serve "$THEME_TEMPLATES_DIR/**/*.html" \
    --port $((RANDOM % 1000 + 8000)) \
    --output "./templates/_output/$THEME"
