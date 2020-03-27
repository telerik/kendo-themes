#!/bin/bash

set -e

dir=$(pwd);

theme=${1-default}

# sed on OSX and Linux differs, see https://stackoverflow.com/a/38595160/25427
sedi () {
    sed --version >/dev/null 2>&1 && sed -i -- "$@" || sed -i "" "$@"
}

mkdir -p $dir/.tmp/tests/visual/$theme

cp $dir/tests/visual/*.html $dir/.tmp/tests/visual/$theme
cp $dir/tests/visual/assets -r $dir/.tmp/tests/visual/$theme

# replace theme reference
find $dir/.tmp/tests/visual/$theme -name '*.html' | while read file; do sedi "s#../../packages/default/dist#../../../../packages/$theme/dist#" "$file"; done

# capture screenshots. see .pastshotsrc for config options
npx pastshots --serve ".tmp/tests/visual/$theme/*.html" --port $((RANDOM % 1000 + 8000)) --output tests/visual/output/$theme

rm -rf .tmp/tests/visual/$theme
