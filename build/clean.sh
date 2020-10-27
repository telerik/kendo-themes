#!/bin/bash

if [[ $TRAVIS == 'true' ]]
then
    echo "Travis CI detected. Skipping clean."
elif [[ $JENKINS == 'true' ]] || [[ -n $JENKINS_URL ]]
then
    echo "Jenkins detected. Skipping clean."
elif [[ $GITHUB_ACTION == 'true' ]]
then
    echo "GitHub Actions detected. Skipping clean."
elif [[ $CI == 'true' ]]
then
    echo "CI environment detected. Skipping clean."
else
    echo "Local environment detected."

    echo "|"
    echo "|- Removing node_modules/ ..."
    find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

    echo "|"
    echo "\- Removing dist/ ..."
    find . -name "dist" -type d -prune -exec rm -rf '{}' +
fi
