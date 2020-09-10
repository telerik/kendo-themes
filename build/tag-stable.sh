#!/bin/bash

set -e

source $(pwd)/build/constants.sh

for theme in $themes
do
    pkg=@progress/kendo-theme-$theme
    version=$(npm view $pkg version)

    npm dist-tag add $pkg@$version stable
done
