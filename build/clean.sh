#!/bin/bash

if [[ $TRAVIS == true ]]
then
    echo "Travis CI detected. Skipping clean."
else
    echo "Local environment detected."

    echo "|"
    echo "|- Removing node_modules/ ..."
    find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

    echo "|"
    echo "\- Removing dist/ ..."
    find . -name "dist" -type d -prune -exec rm -rf '{}' +
fi
