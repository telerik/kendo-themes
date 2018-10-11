#!/usr/bin/env bash
theme_paths=( "./packages/bootstrap" "./packages/default" "./packages/material" )
for path in "${theme_paths[@]}" ; do
    if [ -d "$path/scss/swatches" ]; then
        for file in $(ls "$path/scss/swatches"); do
            only_name=$(basename "$path/scss/swatches/$file" .scss)
            echo $only_name
        done;
  # Control will enter here if $DIRECTORY exists.
fi
done
