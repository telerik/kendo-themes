#!/bin/bash

set -e

theme=${1-default}

# sed on OSX and Linux differs, see https://stackoverflow.com/a/38595160/25427
sedi () {
    sed --version >/dev/null 2>&1 && sed -i -- "$@" || sed -i "" "$@"
}

# replace theme reference
find tests/visual -name '*.html' | while read file; do sedi "s#packages/default/dist#packages/$theme/dist#" "$file"; done

# capture screenshots. see .pastshotsrc for config options
npx pastshots --output tests/visual/output/$theme

# revert theme reference
find tests/visual -name '*.html' | while read file; do sedi "s#packages/$theme/dist#packages/default/dist#" "$file"; done
