#!/bin/bash

# Install theme tasks
cd packages/theme-tasks
npm install
npm link

# Install theme default
cd ../default
npm link @progress/kendo-theme-tasks
npm install
npm link

# Install theme bootstrap
cd ../bootstrap
npm link @progress/kendo-theme-tasks
npm link @progress/kendo-theme-default
npm install
npm link

# Install theme material
cd ../material
npm link @progress/kendo-theme-tasks
npm link @progress/kendo-theme-default
npm install
npm link

# Install root packages
cd ../../
npm install

# Bootstrap lerna
npx lerna bootstrap
