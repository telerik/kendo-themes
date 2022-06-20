#!/bin/bash

set -e

source $(pwd)/build/constants.sh

for package in $packages
do
    pkg=$(cat $(pwd)/packages/$package/package.json | jq '.name')
    private=$(cat $(pwd)/packages/$package/package.json | jq '.private')

    if [ $private != true ]
    then
        pkg=$(echo $pkg | xargs )
        version=$(npm view $pkg version)
        npm dist-tag add $pkg@$version stable
    fi
done
