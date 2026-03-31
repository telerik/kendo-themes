#!/bin/bash
# Design Token Audit — scan SCSS for hardcoded values that should use design tokens.
#
# Usage: bash audit.sh [target] [--category CATEGORY]
#
#   target:    Component name (e.g., button), package name (e.g., default), or "all"
#   --category: color, spacing, typography, elevation, border-radius, or "all"
#
# Exit code: 0 if no violations, 1 if violations found.

set -uo pipefail

# --- Help ---
if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
    cat <<'EOF'
Usage: bash audit.sh [TARGET] [OPTIONS]

Scan SCSS files for hardcoded values that should use design token functions.

Arguments:
  TARGET              Component name (e.g., button), package name (e.g., default),
                      or "all" (default: all)

Options:
  --category CAT      Audit category: color, spacing, typography, elevation,
                      border-radius, or all (default: all)
  -h, --help          Show this help message

Categories detected:
  color          Hex colors (#xxx), rgb(), rgba(), hsl() not wrapped in k-color()
  spacing        Raw px/rem values in spacing contexts (padding, margin, gap)
  typography     Hardcoded font-family, font-size, line-height, font-weight
  elevation      Literal box-shadow with rgba/hex instead of k-elevation()
  border-radius  Raw px/rem border-radius instead of k-border-radius()

Examples:
  bash audit.sh button
  bash audit.sh default --category color
  bash audit.sh all --category spacing

Exit code: 0 if no violations, 1 if violations found.
EOF
    exit 0
fi

REPO_ROOT="$(cd "$(dirname "$0")/../../../.." && pwd)"

TARGET="all"
CATEGORY="all"

# Parse arguments: first non-option is TARGET, --category takes a value
while [[ $# -gt 0 ]]; do
    case "$1" in
        --category)
            if [[ -z "${2:-}" || "${2:-}" == -* ]]; then
                echo "ERROR: --category requires a value (e.g., 'color', 'spacing', 'all')." >&2
                exit 1
            fi
            CATEGORY="$2"
            shift 2
            ;;
        *)
            if [[ "$TARGET" == "all" ]]; then
                TARGET="$1"
            fi
            shift
            ;;
    esac
done

THEMES=("default" "classic" "material" "fluent" "bootstrap")
VIOLATIONS=0

# --- Build search directories ---
# Returns two newline-separated lists: VARS_DIRS (for _variables.scss) and LAYOUT_DIRS (for _layout/_theme.scss)
build_dirs() {
    VARS_DIRS=()
    LAYOUT_DIRS=()

    if [[ "$TARGET" == "all" ]]; then
        for theme in "${THEMES[@]}"; do
            VARS_DIRS+=("$REPO_ROOT/packages/$theme/scss")
            LAYOUT_DIRS+=("$REPO_ROOT/packages/$theme/scss")
        done
        LAYOUT_DIRS+=("$REPO_ROOT/packages/core/scss/components")

    elif [[ -d "$REPO_ROOT/packages/$TARGET/scss" ]]; then
        # Target is a package name
        VARS_DIRS+=("$REPO_ROOT/packages/$TARGET/scss")
        LAYOUT_DIRS+=("$REPO_ROOT/packages/$TARGET/scss")
        if [[ "$TARGET" != "core" ]]; then
            LAYOUT_DIRS+=("$REPO_ROOT/packages/core/scss/components")
        fi

    else
        # Target is a component name — scan component subdirs
        for theme in "${THEMES[@]}"; do
            local dir="$REPO_ROOT/packages/$theme/scss/$TARGET"
            [[ -d "$dir" ]] && VARS_DIRS+=("$dir") && LAYOUT_DIRS+=("$dir")
        done
        local core_dir="$REPO_ROOT/packages/core/scss/components/$TARGET"
        [[ -d "$core_dir" ]] && LAYOUT_DIRS+=("$core_dir")
    fi

    if [[ ${#VARS_DIRS[@]} -eq 0 && ${#LAYOUT_DIRS[@]} -eq 0 ]]; then
        echo "WARNING: No SCSS directories found for target '$TARGET'" >&2
        exit 0
    fi
}

build_dirs

# --- Helpers ---

# Run grep -rnE across directories, filtering by filename and exclusions.
# Usage: search INCLUDE_GLOB PATTERN EXCLUDE_PATTERN DIR [DIR...]
# Prints matching lines prefixed with "  " (relative to REPO_ROOT) and increments VIOLATIONS.
search() {
    local include="$1" pattern="$2" exclude="$3"
    shift 3
    local dirs=("$@")

    [[ ${#dirs[@]} -eq 0 ]] && return

    local results
    if [[ -n "$exclude" ]]; then
        results=$(grep -rnE "$pattern" "${dirs[@]}" --include="$include" 2>/dev/null \
            | grep -vE "$exclude" || true)
    else
        results=$(grep -rnE "$pattern" "${dirs[@]}" --include="$include" 2>/dev/null || true)
    fi

    if [[ -n "$results" ]]; then
        local count
        count=$(echo "$results" | wc -l | tr -d ' ')
        VIOLATIONS=$((VIOLATIONS + count))
        # Make paths relative
        echo "$results" | sed "s|^$REPO_ROOT/|  |"
    fi
}

print_section() {
    local label="$1" before="$VIOLATIONS"
    shift
    echo "--- $label violations ---"
    "$@"
    if [[ $VIOLATIONS -eq $before ]]; then
        echo "  (none)"
    fi
    echo ""
}

# Search both _layout.scss and _theme.scss in LAYOUT_DIRS with a single pattern/exclude.
# Usage: search_lt PATTERN EXCLUDE_PATTERN
search_lt() {
    local pattern="$1" exclude="$2"
    for file in _layout.scss _theme.scss; do
        search "$file" "$pattern" "$exclude" "${LAYOUT_DIRS[@]}"
    done
}

# Search _variables.scss in VARS_DIRS.
# Usage: search_vars PATTERN EXCLUDE_PATTERN
search_vars() { search '_variables.scss' "$1" "$2" "${VARS_DIRS[@]}"; }

# --- Scan functions ---

scan_color() {
    search_vars '#[0-9a-fA-F]{3,8}\b' \
        'k-color|color-mix|//.*#|k-generate|palette|swatch|url\(|svg'
    search_vars '\brgba?\s*\(\s*[0-9]' \
        'color-mix|k-color|//.*rgba|\$kendo-'
    search_lt '(color|background|border-color|outline-color|fill|stroke):\s*#[0-9a-fA-F]{3,8}' \
        '//|\$kendo-'
    search_lt '(color|background|border-color):\s*rgba?\s*\(' \
        '//|\$kendo-|color-mix|k-color'
}

scan_spacing() {
    search_vars '\$kendo-.*-(padding|margin|gap|spacing|indent).*: [0-9]+(\.[0-9]+)?(px|rem|em)\b' \
        'k-spacing|//|0px'
    search_lt '(padding|margin|gap):\s*[0-9]+(\.[0-9]+)?(px|rem)' \
        '\$kendo-|k-spacing|//|calc\(|0px'
}

scan_typography() {
    search_lt "font-family:\s*[\"'a-zA-Z]" \
        '\$kendo-|//|inherit|monospace$'
    search_lt 'font-size:\s*[0-9]+(\.[0-9]+)?(px|rem|em)' \
        '\$kendo-|//'
    search_lt 'line-height:\s*[0-9]+(\.[0-9]+)?(px|rem|em|;)' \
        '\$kendo-|//|normal'
    search_lt 'font-weight:\s*[0-9]{3}' \
        '\$kendo-|//'
    search_vars "\$kendo-.*font-family:.*[\"'](Arial|Helvetica|Roboto|Segoe)" \
        '\$kendo-font-family|//'
}

scan_elevation() {
    search_lt 'box-shadow:\s*(inset\s+)?[0-9]' \
        '\$kendo-|k-elevation|k-color|color-mix|currentColor|//|none'
    search_vars '\$kendo-.*shadow.*:\s*[0-9]+.*(rgba|#[0-9a-fA-F])' \
        'k-elevation|//|0px|\$kendo-.*shadow.*:.*\$kendo'
}

scan_border_radius() {
    search_lt 'border-radius:\s*[0-9]+(\.[0-9]+)?(px|rem|%)' \
        '\$kendo-|k-border-radius|//|inherit|0px'
    search_vars '\$kendo-.*border-radius.*:\s*[0-9]+(\.[0-9]+)?(px|rem)' \
        'k-border-radius|//|0px'
}

# --- Main ---

echo "=== Design Token Audit: $TARGET (category: $CATEGORY) ==="
echo ""

case "$CATEGORY" in
    color)          print_section "COLOR" scan_color ;;
    spacing)        print_section "SPACING" scan_spacing ;;
    typography)     print_section "TYPOGRAPHY" scan_typography ;;
    elevation)      print_section "ELEVATION" scan_elevation ;;
    border-radius)  print_section "BORDER-RADIUS" scan_border_radius ;;
    all)
        print_section "COLOR" scan_color
        print_section "SPACING" scan_spacing
        print_section "TYPOGRAPHY" scan_typography
        print_section "ELEVATION" scan_elevation
        print_section "BORDER-RADIUS" scan_border_radius
        ;;
    *)
        echo "ERROR: Unknown category '$CATEGORY'"
        echo "Valid categories: color, spacing, typography, elevation, border-radius, all"
        exit 1
        ;;
esac

echo "=== Summary: $VIOLATIONS violation(s) found ==="

[[ $VIOLATIONS -gt 0 ]] && exit 1
exit 0
