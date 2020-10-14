#!/bin/bash

set -e

source $(pwd)/build/constants.sh

if [[ $TRAVIS == 'true' ]]
then
    echo "Travis CI detected. Bootstraping trough lerna."
    npx lerna bootstrap
elif [[ $JENKINS == 'true' ]] || [[ -n $JENKINS_URL ]]
then
    echo "Jenkins detected. Bootstraping trough lerna."
    npx lerna bootstrap
else
    echo "Local environment detected. Bootstraping manually ..."

    # Install theme tasks
    cd $dir/packages/theme-tasks
    npm install
    npm link --force

    # Install theme default
    cd $dir/packages/default
    npm install
    npm link --force

    # Install dependant themes
    for theme in $themes
    do
        if [[ $theme == "default" ]]
        then
            continue
        fi
        cd $dir/packages/$theme
        npm link @progress/kendo-theme-default
        npm install
        npm link --force
    done

    # Bootstrap lerna
    cd $dir
    npx lerna bootstrap
fi
