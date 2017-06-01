#!/usr/bin/bash

# Usage: embed-dependnecies.sh [module-name]...

mkdir -p modules

for module in "$@"
do
  # copy dependencies from node_modules/ to modules/ subdir
  echo "Copy $module dependency"
  mkdir -p modules/$module
  rsync -avc --delete --include "**.scss" node_modules/$module/ modules/$module/
done

# replace references to modules with relative paths
find ./scss/ -maxdepth 1 -type f -name "*.scss" -exec sed -i 's#\(@import\s\+\)\(''\|\"\)~\(.*\);#\1\2../modules/\3;#' "{}" \;
find ./scss/ -maxdepth 2 -type f -name "*.scss" -exec sed -i 's#\(@import\s\+\)\(''\|\"\)~\(.*\);#\1\2../../modules/\3;#' "{}" \;
find ./scss/ -maxdepth 3 -type f -name "*.scss" -exec sed -i 's#\(@import\s\+\)\(''\|\"\)~\(.*\);#\1\2../../../modules/\3;#' "{}" \;

