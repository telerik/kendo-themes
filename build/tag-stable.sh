#!/bin/bash

set -e

for theme in default bootstrap classic material nouvelle
do
    pkg=@progress/kendo-theme-$theme;
    version=$(npm view $pkg version);
    npm dist-tag $pkg@$version stable
done
