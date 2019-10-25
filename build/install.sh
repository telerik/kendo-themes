#!/bin/bash

# Install theme tasks
cd packages/theme-tasks
npm ci
npm link

# Install theme default
cd ../default
npm link @progress/kendo-theme-tasks
npm ci
npm link

# Install theme bootstrap
cd ../bootstrap
npm link @progress/kendo-theme-tasks
npm link @progress/kendo-theme-default
npm ci
npm link

# Install theme material
cd ../material
npm link @progress/kendo-theme-tasks
npm link @progress/kendo-theme-default
npm ci
npm link

# Install root packages
cd ../../
npm ci

# Bootstrap lerna
npx lerna bootstrap
