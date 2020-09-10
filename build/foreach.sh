#!/bin/bash

set -e

source $(pwd)/build/constants.sh

for pkg in $packages
do
    cd $dir/packages/$pkg
    npm run $1 --if-present
done
