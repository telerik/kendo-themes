#!/bin/bash

# exit early on error
set -e

dir=$(pwd);

if [[ $TRAVIS == true ]]
then
    echo "Travis CI detected. Bootstraping trough lerna."
    npx lerna bootstrap
else
    echo "Local environment detected. Bootstraping manually ..."

    # Install theme tasks
    cd $dir/packages/theme-tasks
    npm install
    npm link --force

    # Install theme default
    cd $dir/packages/default
    npm link @progress/kendo-theme-tasks
    npm install
    npm link --force

    # Install dependant themes
    for pkg in bootstrap material nouvelle
    do
        cd $dir/packages/$pkg
        npm link @progress/kendo-theme-tasks
        npm link @progress/kendo-theme-default
        npm install
        npm link --force
    done

    # Bootstrap lerna
    cd $dir
    npx lerna bootstrap
fi
