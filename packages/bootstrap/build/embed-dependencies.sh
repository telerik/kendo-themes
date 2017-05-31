#!/usr/bin/bash

mkdir -p modules
mkdir -p modules/bootstrap
mkdir -p modules/@progress/kendo-theme-default

# copy dependencies from node_modules/ to modules/ subdir
rsync -avc --delete --include "**.scss" node_modules/bootstrap/ modules/bootstrap/
rsync -avc --delete --include "**.scss" node_modules/@progress/kendo-theme-default/ modules/@progress/kendo-theme-default/

# replace references to modules
find ./scss/ -maxdepth 1 -type f -name "*.scss" -exec sed -i 's#\(@import\s\+\)\(''\|\"\)~\(.*\);#\1\2../modules/\3;#' "{}" \;
find ./scss/ -maxdepth 2 -type f -name "*.scss" -exec sed -i 's#\(@import\s\+\)\(''\|\"\)~\(.*\);#\1\2../../modules/\3;#' "{}" \;
