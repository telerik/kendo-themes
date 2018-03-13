#!/bin/bash

if [[ $TRAVIS_PULL_REQUEST != 'false' ]]
then
  echo "Visual tests do not run on pull request builds (\$TRAVIS_PULL_REQUEST=$TRAVIS_PULL_REQUEST)"
  echo " (PR builds run against the merge commit with the target branch)"
  exit 0
fi

if [[ $TRAVIS_BRANCH == '' ]]
then
  echo "Visual tests must run on a branch (\$TRAVIS_BRANCH=$TRAVIS_BRANCH)"
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'develop' || $TRAVIS_BRANCH == 'master' ]]
then
  echo 'Refusing to build on (and possibly push to) the master or develop branches'
fi

# enable push access
git remote set-url origin https://${GH_TOKEN}@github.com/telerik/kendo-themes.git > /dev/null 2>&1

# fetch branch info
git fetch origin > /dev/null 2>&1

# move git HEAD to branch
git checkout --force $TRAVIS_BRANCH

# sed on OSX and Linux differs, see https://stackoverflow.com/a/38595160/25427
sedi () {
    sed --version >/dev/null 2>&1 && sed -i -- "$@" || sed -i "" "$@"
}

BOLD='\033[1;37m'
NC='\033[0m'

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
    echo -e "${BOLD} Found updated screenshots, pushing commit to repository ${NC}"

    echo "  Configuring git..."
    git config user.name "Travis CI"
    git config user.email "travis"

    echo "  Creating commit..."
    git add tests/visual/output
    git commit -m "chore: update visual previews"

    echo "  Pushing new commit..."
    git push origin $TRAVIS_BRANCH --quiet > /dev/null 2>&1
}

capture_with_theme 'default'
capture_with_theme 'bootstrap'
capture_with_theme 'material'

has_changes=0
has_untracked=0
git diff --exit-code --quiet -- tests/visual/output/ || has_changes=1
[[ $(git ls-files --others --exclude-standard tests/visual/output) ]] && has_untracked=1

if [ $has_changes -eq 0  -a  $has_untracked -eq 0 ]
then
    echo -e "${BOLD} Visual tests have detected no changes. Skipping commit. ${NC}"
else
    # push new screenshots to branch
    commit_changes
fi
