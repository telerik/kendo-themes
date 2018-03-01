#!/usr/bin/bash

npx pastshots --output tests/visual/output/default --serve 'tests/visual/*.html' --port 8081

find tests/visual -name '*.html' -exec sed -i 's#packages/default/dist#packages/bootstrap/dist#' {} \;

npx pastshots --output tests/visual/output/bootstrap --serve 'tests/visual/*.html' --port 8081

find tests/visual -name '*.html' -exec sed -i 's#packages/bootstrap/dist#packages/material/dist#' {} \;

npx pastshots --output tests/visual/output/material --serve 'tests/visual/*.html' --port 8081

find tests/visual -name '*.html' -exec sed -i 's#packages/material/dist#packages/default/dist#' {} \;

git diff --exit-code --quiet -- tests/visual/output/ || (echo -e '\\033[0;31mERROR: Visual tests failed, see updated screenshots in tests/visual/output' && exit 1)
