#!/usr/bin/bash

echo $BRANCH

if [[ $BRANCH == 'develop' ]]; then
  lerna publish --skip-npm --canary=dev --npm-tag=dev --yes
else
  lerna publish --message "chore: release packages, update changelog" --skip-npm --conventional-commits --yes
fi
