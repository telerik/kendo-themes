#!/bin/bash

if [[ $TRAVIS == true ]]
then
    echo "Travis CI detected. Skipping clean."
else
    echo "Local environment detected. Removing node_modules/ ..."
    find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
fi
