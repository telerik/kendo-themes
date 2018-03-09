#!/bin/bash

if [[ $TRAVIS_PULL_REQUEST != 'true' ]]
then
  echo 'Visual tests run only on pull requests ($TRAVIS_PULL_REQUEST)'
  exit 0
fi

if [[ $TRAVIS_BRANCH == '' ]]
then
  echo 'Visual tests must know which branch is building ($TRAVIS_BRANCH)'
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'develop' || $TRAVIS_BRANCH == 'master' ]]
then
  echo 'Refusing to push to the master or develop branches'
fi

git checkout --force $TRAVIS_BRANCH

# sed on OSX and Linux differs, see https://stackoverflow.com/a/38595160/25427
sedi () {
    sed --version >/dev/null 2>&1 && sed -i -- "$@" || sed -i "" "$@"
}

export -f sedi

capture_with_theme() {
    theme=$1
    # replace theme reference
    find tests/visual -name '*.html' | while read file; do sedi "s#packages/default/dist#packages/$theme/dist#" "$file"; done

    # capture screenshots
    npx pastshots --output tests/visual/output/$theme --serve 'tests/visual/*.html' --port 8081

    # revert theme reference
    find tests/visual -name '*.html' | while read file; do sedi "s#packages/$theme/dist#packages/default/dist#" "$file"; done

}

commit_changes() {
    BOLD='\033[1;37m'
    RED='\033[0;33m'
    NC='\033[0m'
    echo -e "${BOLD} Found updated screenshots, pushing commit to repository ${NC}"

    # TODO: reduce repetition with publish.sh
    echo "  Configuring git..."
    git config user.name "Travis CI"
    git config user.email "travis"

    git remote set-url origin https://${GH_TOKEN}@github.com/telerik/kendo-themes.git > /dev/null 2>&1

    echo "  Creating commit..."
    git add tests/visual/output
    git commit -m "chore: update visual previews"

    echo "  Pushing new commit..."
    git push origin $TRAVIS_BRANCH --quiet > /dev/null 2>&1
}

capture_with_theme 'default'
capture_with_theme 'bootstrap'
capture_with_theme 'material'

# if there are captured differences, push the new images
git diff --exit-code --quiet -- tests/visual/output/ || commit_changes
