#!/usr/bin/env bash

# break on errors
set -e

# platform
platform=$(node -e 'process.stdout.write(process.platform)')

# root dir
themes_dir=$(pwd)

# all packages
packages=$(ls $themes_dir/packages/)

echo ""
echo "---"
echo ""

# install
echo "Installing dependencies..."
npm install

# husky init
echo "Initializing husky"
npx husky install

echo ""
echo "---"
echo ""

# link (expose) packages
echo "npm link-ing packages..."
for pkg in $packages
do
    cd $themes_dir/packages/$pkg
    npm link
    git checkout package-lock.json
done

echo ""
echo "---"
echo ""

# bootstrap everything
echo "bootstraping ..."
cd $themes_dir
npm run bootstrap

echo ""
echo "---"
echo ""

echo "setup is complete"
