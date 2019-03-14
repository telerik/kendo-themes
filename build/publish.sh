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

  git remote set-url origin https://${GH_TOKEN}@github.com/telerik/kendo-themes.git > /dev/null 2>&1

  git checkout --force master

  npx lerna publish --message "chore(release): update changelogs" --conventional-commits --concurrency=1 --loglevel=verbose --yes

  echo "Push lerna commit to Github..."
  git push origin master --tags --quiet > /dev/null 2>&1

  # Set successful build status, in order to allow pushing to develop
  commit=$(git rev-parse HEAD)
  repo="https://api.github.com/repos/telerik/kendo-themes/commits/$commit/statuses"
  auth="Authorization: token ${GH_TOKEN}"

  declare -a checks=(
      "WIP"
      "continuous-integration/travis-ci"
      "continuous-integration/travis-ci/pr"
      "continuous-integration/travis-ci/push"
  )

  for check in "${checks[@]}"
  do
    echo "Marking '$check' as successful..."

    if ! (curl -s -H "$auth" -d "{\"state\": \"success\", \"context\": \"$check\"}" "$repo" > /dev/null 2>&1)
    then
      echo "Couldn't mark check '$check' as successful"
    fi
  done

  sleep 1
  curl -s -H "$auth" -H "Accept: application/json" -H "Content-Type: application/json" -X GET "$repo" > /dev/null 2>&1

  # Push to develop
  if ! (git push origin master:develop)
  then
      echo "Could not push changelog commit to develop. Push the changelog commit manually to the develop branch."
      echo "If this commit is not pushed promptly, develop and master will diverge and will require a force push on the next release."

      exit 1
  fi

else
  echo "Publishing is enabled only for the master and develop branches"
fi

