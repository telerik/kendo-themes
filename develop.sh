#!/bin/bash

trap "exit" INT TERM ERR
trap "kill 0" EXIT

if [ ! -d "node_modules" ]; then
    npm install

    npx lerna bootstrap
fi

pushd packages/default
npm run watch &
popd

pushd packages/bootstrap
npm run watch &
popd

pushd packages/material
npm run watch &
popd

npx webpack-dev-server --port 8080 &

wait
