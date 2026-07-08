#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Kendo Design System Plugin — Quick Smoke Test
# ─────────────────────────────────────────────────────────────────────────────
# Runs a single prompt through Copilot CLI with the plugin installed to verify
# the design system influences output. Uses YOUR existing Copilot subscription.
#
# Usage:
#   ./smoke.sh [target-dir]
#   ./smoke.sh                          # Creates a temp blank project
#   ./smoke.sh ~/projects/some-app      # Uses existing project
#
# Prerequisites:
#   - Copilot CLI installed and authenticated
#   - Plugin installed: copilot plugin install /path/to/design-system/plugin
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLUGIN_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# ── Target project ───────────────────────────────────────────────────────────
TARGET="${1:-}"
CLEANUP_TARGET=false

if [ -z "$TARGET" ]; then
    TARGET=$(mktemp -d /tmp/kendo-smoke-XXXXX)
    CLEANUP_TARGET=true
    echo "→ Creating blank project at $TARGET"
    cd "$TARGET"
    git init -q
    cat > index.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>App</title></head>
<body><main id="app"></main></body>
</html>
HTMLEOF
    git add . && git commit -q -m "init blank app"
fi

# ── Verify plugin is installed ───────────────────────────────────────────────
echo "→ Checking plugin installation..."
if ! copilot plugin list 2>&1 | grep -q "kendo-design"; then
    echo "  ⚠ Plugin not found. Installing from: $PLUGIN_DIR"
    copilot plugin install "$PLUGIN_DIR" 2>&1 | sed 's/^/  /'
fi
echo "  ✓ Plugin installed"
echo ""

# ── Prompt designed to reveal DS influence ───────────────────────────────────
# We ask for something generic but look for Kendo-specific tokens in output
PROMPT='Create a simple contact form page with: name field, email field, message textarea, and a submit button. Use CSS custom properties for theming. Add proper spacing between fields and a card-like container.'

TIMESTAMP=$(date +%Y%m%d-%H%M%S)
OUTPUT_DIR="$SCRIPT_DIR/results/smoke-$TIMESTAMP"
mkdir -p "$OUTPUT_DIR"

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  Kendo DS Plugin — Smoke Test                                ║"
echo "╠══════════════════════════════════════════════════════════════╣"
echo "║  Target:  $TARGET"
echo "║  Output:  $OUTPUT_DIR/"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "→ Running prompt (this may take 30-60s)..."
echo ""

# Run Copilot with the prompt
copilot \
    -p "$PROMPT" \
    -C "$TARGET" \
    --autopilot \
    --yolo \
    --share="$OUTPUT_DIR/session.md" \
    2>&1 | tee "$OUTPUT_DIR/output.log"

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  Smoke test complete!"
echo ""
echo "  Results: $OUTPUT_DIR/"
echo "  - session.md  — Full session transcript"
echo "  - output.log  — Raw CLI output"
echo ""

# ── Quick signal check ───────────────────────────────────────────────────────
echo "  Checking for DS influence signals..."
SIGNALS=0

check_signal() {
    local label="$1"
    local pattern="$2"
    if grep -qiE "$pattern" "$OUTPUT_DIR/session.md" "$OUTPUT_DIR/output.log" 2>/dev/null; then
        echo "    ✓ $label"
        SIGNALS=$((SIGNALS + 1))
    else
        echo "    ✗ $label"
    fi
}

check_signal "Spacing tokens (4px/8px grid)"    "(4px|8px|12px|16px|24px|32px|--kendo-spacing|spacing-)"
check_signal "Color system (oklch or tokens)"   "(oklch|--kendo-color|color-primary|color-base)"
check_signal "Border radius"                    "(border-radius|--kendo-border|radius-md|2px|4px)"
check_signal "Typography scale"                 "(font-size|--kendo-font|14px|16px|font-family)"
check_signal "Elevation/shadow"                 "(box-shadow|elevation|--kendo-shadow)"
check_signal "Accessibility mention"            "(aria-|role=|wcag|accessible|a11y|label)"

echo ""
if [ $SIGNALS -ge 3 ]; then
    echo "  ✅ PASS — DS influence detected ($SIGNALS/6 signals)"
elif [ $SIGNALS -ge 1 ]; then
    echo "  ⚠️  PARTIAL — Some DS influence ($SIGNALS/6 signals)"
else
    echo "  ❌ FAIL — No DS influence detected"
fi
echo "═══════════════════════════════════════════════════════════════"

# ── Cleanup ──────────────────────────────────────────────────────────────────
if [ "$CLEANUP_TARGET" = true ]; then
    rm -rf "$TARGET"
fi
