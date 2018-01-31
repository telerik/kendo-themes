#!/usr/bin/bash

set -e

echo $(printf "TRAVIS_BRANCH %s" $TRAVIS_BRANCH)
echo $(printf "TRAVIS_PULL_REQUEST %s" $TRAVIS_PULL_REQUEST)

if [[ $TRAVIS_PULL_REQUEST != 'false' ]]
then
  echo "Pull requests do not publish to NPM."
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'develop' ]]
then
  lerna publish --skip-npm --canary=dev --npm-tag=dev --allow-branch=develop --loglevel=verbose --yes
  exit 0
elif [[ $TRAVIS_BRANCH != 'master' ]]
then
  echo "Publishing is enabled only for the master and develop branches"
  exit 0
fi

git config user.name "Travis CI"
git config user.email "travis"

lerna publish --message "chore: release packages, update changelog" --skip-npm --conventional-commits --loglevel=verbose --yes

echo "Push lerna commit to Github..."
echo git push origin master --tags --quiet > /dev/null 2>&1

echo "Rewind develop branch on top of master..."
