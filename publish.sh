#!/bin/bash

set -e

# Do not publish pull requests
if [[ $TRAVIS_PULL_REQUEST != 'false' ]]
then
  echo "Pull requests do not publish to NPM."
  exit 0
fi

TAGS=$(git tag -l --points-at HEAD)

# Do not publish recursively
if [[ $TAGS ]]
then
  echo "This commit is already published, skipping publish step."
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'develop' ]]
then
  # Publish development (canary) release

  npx lerna publish --canary=dev --npm-tag=dev --allow-branch=develop --loglevel=verbose --yes

elif [[ $TRAVIS_BRANCH == 'master' ]]
then
  # Publish official release

  git config user.name "Travis CI"
  git config user.email "travis"

  git checkout --force master

  npx lerna publish --message "chore(release): update changelogs" --conventional-commits --concurrency=1 --loglevel=verbose --yes

  echo "Push lerna commit to Github..."
  git push origin master --tags --quiet > /dev/null 2>&1

  echo "Rewind develop branch on top of master..."
  git checkout develop
  git merge --ff-only master
  git push origin develop

else
  echo "Publishing is enabled only for the master and develop branches"
fi

