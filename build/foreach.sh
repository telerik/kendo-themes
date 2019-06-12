#!/bin/bash

# exit early on error
set -e

dir=$(pwd);


if [[ "$1" == "lint" ]]
then
    for pkg in default bootstrap material theme-tasks
    do
        cd $dir/packages/$pkg
        npm run $1
    done
# elif [[ "$1" == "watch" ]]
# then
#     cd $dir
#     for theme in default bootstrap material
#     do
#         pushd $dir/packages/$theme
#         npm run $1 &
#         popd
#     done
else
    for theme in default bootstrap material
    do
        cd $dir/packages/$theme
        npm run $1
    done
fi
