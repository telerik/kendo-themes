#!/bin/bash

set -e

COMMIT_REF=${1-null}

if [[ $COMMIT_REF == 'null' ]]
then
  exit 0
fi

declare -a checks=( 'CI | Unit' 'CI | Visual' )

for check in "${checks[@]}"
do
    echo "Marking '$check' as successful..."
    curl -s \
        -X POST \
        -H "Authorization: token $GH_TOKEN" \
        -d "{ \"state\": \"success\", \"context\": \"$check\" }" \
        "https://api.github.com/repos/telerik/kendo-themes/statuses/$COMMIT_REF"
done
