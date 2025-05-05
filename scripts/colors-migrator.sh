#!/bin/bash

migrate_scss() {
    local source_dir=$1
    local theme=$2
    local migrate_color_values=$3
    local migrate_variable_usage=$4

    # Ensure source directory exists
    if [ ! -d "$source_dir" ]; then
        echo "Source directory '$source_dir' does not exist."
        exit 1
    fi

    # Get list of SCSS files in the source directory
    local scss_files=$(find "$source_dir" -name "*.scss")

    # Migrate each SCSS file
    for scss_file in $scss_files; do
        # Read SCSS content
        local scss_content=$(<"$scss_file")
        local updated_scss_content="$scss_content"

        # Check if old SCSS variables are present in the current file
        old_variables=(
            '\$kendo-color-primary:|\$kendo-color-primary-contrast:|\$kendo-color-secondary:|\$kendo-color-tertiary:|\$kendo-color-info:'
            '\$kendo-color-success:|\$kendo-color-warning:|\$kendo-color-error:|\$kendo-color-light:|\$kendo-color-dark:'
            '\$kendo-color-inverse:|\$kendo-body-bg:|\$kendo-body-text:|\$kendo-subtle-text:|\$kendo-app-bg:'
            '\$kendo-app-text:|\$kendo-app-border:|\$kendo-link-text:|\$kendo-link-hover-text:|\$kendo-component-bg:'
            '\$kendo-component-text:|\$kendo-component-border:|\$kendo-base-bg:|\$kendo-base-text:|\$kendo-base-border:'
            '\$kendo-hover-bg:|\$kendo-hover-border:|\$kendo-selected-bg:|\$kendo-selected-text:|\$kendo-selected-border:'
            '\$kendo-selected-hover-bg:|\$kendo-selected-hover-text:|\$kendo-selected-hover-border:|\$kendo-component-header-bg:|\$kendo-component-header-text:'
            '\$kendo-component-header-border:|\$kendo-invalid-text:|\$kendo-invalid-border:|\$kendo-disabled-text:|\$kendo-disabled-bg:|\$kendo-disabled-border:'
        )
        if grep -qE "$(IFS="|"; echo "${old_variables[*]}")" "$scss_file"; then

            # Add import and $kendo-colors declaration at the beginning of the file
            function_map_content="@import \"@progress/kendo-theme-core/scss/functions/index.import.scss\";\n\$kendo-colors: ();\n"

            # Replace individual color variable declarations with kendo-colors declaration
            if [ "$migrate_color_values" = true ]; then

                updated_scss_content=$(echo -e "$function_map_content$scss_content" | sed -E '
                    s/\$kendo-color-primary:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('primary', \1, '$theme'));/g;
                    s/\$kendo-color-primary-contrast:([^;]+);//g;
                    s/\$kendo-color-secondary:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('secondary', \1, '$theme'));/g;
                    s/\$kendo-color-tertiary:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('tertiary', \1, '$theme'));/g;
                    s/\$kendo-color-info:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('info', \1, '$theme'));/g;
                    s/\$kendo-color-success:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('success', \1, '$theme'));/g;
                    s/\$kendo-color-warning:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('warning', \1, '$theme'));/g;
                    s/\$kendo-color-error:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('error', \1, '$theme'));/g;
                    s/\$kendo-color-light:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('light', \1, '$theme'));/g;
                    s/\$kendo-color-dark:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('dark', \1, '$theme'));/g;
                    s/\$kendo-color-inverse:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('inverse', \1, '$theme'));/g;
                    s/\$kendo-body-bg:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (app-surface: \1));/g;
                    s/\$kendo-body-text:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (on-app-surface: \1));/g;
                    s/\$kendo-subtle-text:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (subtle: \1));/g;
                    s/\$kendo-app-text:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (on-app-surface: \1));/g;
                    s/\$kendo-app-border:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (border: \1));/g;
                    s/\$kendo-component-bg:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (surface-alt: \1));/g;
                    s/\$kendo-component-text:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (on-app-surface: \1));/g;
                    s/\$kendo-component-border:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (border: \1));/g;
                    s/\$kendo-base-text:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (on-app-surface: \1));/g;
                    s/\$kendo-base-border:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (border: \1));/g;
                    s/\$kendo-link-text:([^;]+);//g;
                    s/\$kendo-link-hover-text:([^;]+);//g;
                    s/\$kendo-hover-bg:([^;]+);//g;
                    s/\$kendo-hover-text:([^;]+);//g;
                    s/\$kendo-hover-border:([^;]+);//g;
                    s/\$kendo-selected-bg:([^;]+);//g;
                    s/\$kendo-selected-text:([^;]+);//g;
                    s/\$kendo-selected-border:([^;]+);//g;
                    s/\$kendo-selected-hover-bg:([^;]+);//g;
                    s/\$kendo-selected-hover-text:([^;]+);//g;
                    s/\$kendo-selected-hover-border:([^;]+);//g;
                    s/\$kendo-component-header-bg:([^;]+);//g;
                    s/\$kendo-component-header-text:([^;]+);//g;
                    s/\$kendo-component-header-border:([^;]+);//g;
                    s/\$kendo-invalid-text:([^;]+);//g;
                    s/\$kendo-invalid-border:([^;]+);//g;
                    s/\$kendo-disabled-text:([^;]+);//g;
                    s/\$kendo-disabled-bg:([^;]+);//g;
                    s/\$kendo-disabled-border:([^;]+);//g;
                ')

                if [ "$theme" = 'material' ]; then
                    updated_scss_content=$(echo -e "$updated_scss_content" | sed -E '
                        s/\$kendo-app-bg:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('base', \1, '$theme'));/g;
                        s/\$kendo-base-bg:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, k-generate-color-variations('base', \1, '$theme'));/g;
                    ')
                else
                    updated_scss_content=$(echo -e "$updated_scss_content" | sed -E '
                        s/\$kendo-app-bg:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (surface: \1));/g;
                        s/\$kendo-base-bg:([^;]+);/\$kendo-colors: k-map-merge(\$kendo-colors, (surface: \1));/g;
                    ')
                fi

            else
                updated_scss_content="$scss_content"
            fi
        fi

        # Replace variable usage with k-color function
        if [ "$migrate_variable_usage" = true ]; then

            updated_scss_content=$(echo "$updated_scss_content" | sed -E '
                s/\$kendo-color-([^;]+)-([0-9]+)/k-color(\1,\2)/g;
                s/\$kendo-color-([^;]+)-contrast/k-color(on-\1)/g;
                s/\$kendo-color-primary/k-color(primary)/g;
                s/\$kendo-color-secondary/k-color(secondary)/g;
                s/\$kendo-color-tertiary/k-color(tertiary)/g;
                s/\$kendo-color-info/k-color(info)/g;
                s/\$kendo-color-success/k-color(success)/g;
                s/\$kendo-color-warning/k-color(warning)/g;
                s/\$kendo-color-error/k-color(error)/g;
                s/\$kendo-color-light/k-color(light)/g;
                s/\$kendo-color-dark/k-color(dark)/g;
                s/\$kendo-color-inverse/k-color(inverse)/g;
                s/\$kendo-body-bg/k-color(app-surface)/g;
                s/\$kendo-body-text/k-color(on-app-surface)/g;
                s/\$kendo-subtle-text/k-color(subtle)/g;
                s/\$kendo-app-text/k-color(on-app-surface)/g;
                s/\$kendo-app-border/k-color(border)/g;
                s/\$kendo-component-bg/k-color(surface-alt)/g;
                s/\$kendo-component-text/k-color(on-app-surface)/g;
                s/\$kendo-component-border/k-color(border)/g;
                s/\$kendo-base-text/k-color(on-app-surface)/g;
                s/\$kendo-base-border/k-color(border)/g;
                s/\$kendo-hover-border/k-color(border)/g;
                s/\$kendo-selected-hover-border/k-color(border)/g;
                s/\$kendo-component-header-text/k-color(on-app-surface)/g;
                s/\$kendo-component-header-border/k-color(border)/g;
                s/\$kendo-disabled-text/k-color(on-app-surface)/g;
            ')

            if [ "$theme" = 'default' ]; then
                updated_scss_content=$(echo "$updated_scss_content" | sed -E '
                    s/\$kendo-app-bg/k-color(surface)/g;
                    s/\$kendo-link-text/k-color(primary)/g;
                    s/\$kendo-link-hover-text/k-color(primary-hover)/g;
                    s/\$kendo-base-bg/k-color(surface)/g;
                    s/\$kendo-hover-bg/k-color(base-hover)/g;
                    s/\$kendo-hover-text/k-color(on-app-surface)/g;
                    s/\$kendo-selected-bg/k-color(primary)/g;
                    s/\$kendo-selected-text/k-color(on-primary)/g;
                    s/\$kendo-selected-border/k-color(border)/g;
                    s/\$kendo-selected-hover-bg/k-color(primary-hover)/g;
                    s/\$kendo-selected-hover-text/k-color(on-primary)/g;
                    s/\$kendo-component-header-bg/k-color(surface)/g;
                    s/\$kendo-invalid-text/k-color(error)/g;
                    s/\$kendo-invalid-border/k-color(error)/g;
                ')
            fi

            if [ "$theme" = 'bootstrap' ]; then
                updated_scss_content=$(echo "$updated_scss_content" | sed -E '
                    s/\$kendo-app-bg/k-color(surface)/g;
                    s/\$kendo-link-text/k-color(primary)/g;
                    s/\$kendo-link-hover-text/k-color(primary-hover)/g;
                    s/\$kendo-base-bg/k-color(surface)/g;
                    s/\$kendo-hover-bg/k-color(base-subtle-hover)/g;
                    s/\$kendo-hover-text/k-color(on-app-surface)/g;
                    s/\$kendo-selected-bg/k-color(primary)/g;
                    s/\$kendo-selected-text/k-color(on-primary)/g;
                    s/\$kendo-selected-border/k-color(primary)/g;
                    s/\$kendo-selected-hover-bg/k-color(primary-hover)/g;
                    s/\$kendo-selected-hover-text/k-color(on-primary)/g;
                    s/\$kendo-component-header-bg/k-color(surface)/g;
                    s/\$kendo-invalid-text/k-color(error)/g;
                    s/\$kendo-invalid-border/k-color(error)/g;
                ')
            fi

            if [ "$theme" = 'material' ]; then
                updated_scss_content=$(echo "$updated_scss_content" | sed -E '
                    s/\$kendo-app-bg/k-color(app-surface)/g;
                    s/\$kendo-link-text/k-color(secondary)/g;
                    s/\$kendo-link-hover-text/k-color(secondary-hover)/g;
                    s/\$kendo-base-bg/k-color(app-surface)/g;
                    s/\$kendo-hover-bg/k-color(base-hover)/g;
                    s/\$kendo-hover-text/k-color(on-app-surface)/g;
                    s/\$kendo-selected-bg/k-color(secondary)/g;
                    s/\$kendo-selected-text/k-color(on-secondary)/g;
                    s/\$kendo-selected-border/k-color(border)/g;
                    s/\$kendo-selected-hover-bg/k-color(secondary-hover)/g;
                    s/\$kendo-selected-hover-text/k-color(on-secondary)/g;
                    s/\$kendo-component-header-bg/k-color(app-surface)/g;
                    s/\$kendo-invalid-text/k-color(error)/g;
                    s/\$kendo-invalid-border/k-color(error)/g;
                ')
            fi

            if [ "$theme" = 'classic' ]; then
                updated_scss_content=$(echo "$updated_scss_content" | sed -E '
                    s/\$kendo-app-bg/k-color(app-surface)/g;
                    s/\$kendo-link-text/k-color(primary)/g;
                    s/\$kendo-link-hover-text/k-color(primary-hover)/g;
                    s/\$kendo-base-bg/k-color(surface)/g;
                    s/\$kendo-hover-bg/k-color(base-hover)/g;
                    s/\$kendo-hover-text/k-color(on-app-surface)/g;
                    s/\$kendo-selected-bg/k-color(primary)/g;
                    s/\$kendo-selected-text/k-color(on-primary)/g;
                    s/\$kendo-selected-border/k-color(primary)/g;
                    s/\$kendo-selected-hover-bg/k-color(primary-hover)/g;
                    s/\$kendo-selected-hover-text/k-color(on-primary)/g;
                    s/\$kendo-component-header-bg/k-color(surface)/g;
                    s/\$kendo-invalid-text/k-color(error)/g;
                    s/\$kendo-invalid-border/k-color(error)/g;
                ')
            fi

            if [ "$theme" = 'fluent' ]; then
                updated_scss_content=$(echo "$updated_scss_content" | sed -E '
                    s/\$kendo-link-text/k-color(primary)/g;
                    s/\$kendo-link-hover-text/k-color(primary-hover)/g;
                    s/\$kendo-hover-bg/k-color(base-hover)/g;
                    s/\$kendo-hover-text/k-color(on-base)/g;
                    s/\$kendo-selected-bg/k-color(base-active)/g;
                    s/\$kendo-selected-text/k-color(on-base)/g;
                    s/\$kendo-selected-border/color-mix(in srgb, core.k-color(border-alt) 76%, transparent)/g;
                    s/\$kendo-selected-hover-bg/k-color(base-subtle-active)/g;
                    s/\$kendo-selected-hover-text/k-color(on-base)/g;
                    s/\$kendo-invalid-text/k-color(error-on-surface)/g;
                    s/\$kendo-invalid-border/k-color(error-emphasis)/g;
                    s/\$kendo-focus-outline/k-color(base-emphasis)/g;
                    s/\$kendo-disabled-bg/k-color(base-subtle)/g;
                ')
            fi

        fi

        # Write updated SCSS content back to file
        echo "$updated_scss_content" > "$scss_file"
    done

    echo "SCSS migration complete."
}

if [ $# -lt 1 ]; then
    echo "Usage: $0 <source_dir> --theme <theme> [--migrate_color_values] [--migrate_variable_usage]"
    exit 1
fi

source_dir="$1"
theme="default"
theme_flag=false
migrate_color_values=false
migrate_variable_usage=false

while [ $# -gt 1 ]; do
    case "$2" in
        --theme)
            theme_flag=true
            theme="$3"
            shift
            ;;
        --migrate_color_values)
            migrate_color_values=true
            ;;
        --migrate_variable_usage)
            migrate_variable_usage=true
            ;;
        *)
            echo "Unknown flag or parameter: $2"
            ;;
    esac
    shift
done

# Check if --theme is provided
if [ "$theme_flag" = false ]; then
    echo "Error: --theme parameter is required but not provided."
    exit 1
fi

migrate_scss "$source_dir" "$theme" "$migrate_color_values" "$migrate_variable_usage"
