#!/usr/bin/bash

echo $BRANCH

if [[ $BRANCH == 'develop' ]]; then
  lerna publish --skip-npm --canary=dev --npm-tag=dev --allow-branch=develop --loglevel=verbose
else
  lerna publish --message "chore: release packages, update changelog" --skip-npm --conventional-commits --loglevel=verbose
fi
