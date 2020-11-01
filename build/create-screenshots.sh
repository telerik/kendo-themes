#!/bin/bash

set -e

dir=$(pwd);
theme=${1-default}
test_dir="$dir/tests/.tmp/visual/$theme"

mkdir -p $test_dir

cp $dir/tests/visual/*.html $test_dir
cp $dir/tests/visual/assets -r $test_dir
cp $dir/packages/$theme/dist -r $test_dir

# replace theme reference
find $test_dir -name '*.html'  | xargs sed -i -e 's#../../packages/default/dist#dist#'

cd tests

# capture screenshots. see .pastshotsrc for config options
npx pastshots --serve ".tmp/visual/$theme/*.html" --port $((RANDOM % 1000 + 8000)) --output visual/output/$theme

rm -rf $dir/tests/.tmp/visual/$theme
