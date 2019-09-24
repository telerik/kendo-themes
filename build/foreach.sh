#!/bin/bash

# exit early on error
set -e

dir=$(pwd);

for pkg in default bootstrap material theme-tasks
do
    cd $dir/packages/$pkg
    npm run $1 --if-present
done
