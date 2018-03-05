#!/bin/bash

# sed on OSX and Linux differs, see https://stackoverflow.com/a/38595160/25427
sedi () {
    sed --version >/dev/null 2>&1 && sed -i -- "$@" || sed -i "" "$@"
}

export -f sedi

capture_with_theme() {
    theme=$1
    # replace theme reference
    find tests/visual -name '*.html' | while read file; do sedi "s#packages/default/dist#packages/$theme/dist#" "$file"; done

    # capture screenshots
    npx pastshots --output tests/visual/output/$theme --serve 'tests/visual/*.html' --port 8081

    # revert theme reference
    find tests/visual -name '*.html' | while read file; do sedi "s#packages/$theme/dist#packages/default/dist#" "$file"; done

}

fail() {
    RED='\033[0;31m'
    NC='\033[0m'
    echo -e "${RED} ERROR: Visual tests failed, see updated screenshots in tests/visual/output ${NC}"
    exit 1
}

capture_with_theme 'default'
capture_with_theme 'bootstrap'
capture_with_theme 'material'

# if there are captured differences, fail the build
git diff --exit-code --quiet -- tests/visual/output/ || fail
