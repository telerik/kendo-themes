#!/bin/bash

# Remove node modules from theme tasks
cd packages/theme-tasks
rm -rf node_modules/
rm -f package-lock.json

#Remove node modules from theme default
cd ../default
rm -rf node_modules/
rm -f package-lock.json

# Remove node modules from theme bootstrap
cd ../bootstrap
rm -rf node_modules/
rm -f package-lock.json

# Remove node modules from theme material
cd ../material
rm -rf node_modules/
rm -f package-lock.json

# Remove node modules from root
cd ../../
rm -rf node_modules/
rm -f package-lock.json
