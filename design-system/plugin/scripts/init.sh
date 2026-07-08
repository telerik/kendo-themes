#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Kendo Design System Plugin — Session Initialization
# ─────────────────────────────────────────────────────────────────────────────
# Copies DESIGN.md to the project root so the agent context picks it up.
# This runs as a sessionStart hook.
# ─────────────────────────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLUGIN_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DESIGN_SRC="$PLUGIN_DIR/skills/kendo-design/DESIGN.md"

# Read session info from stdin (JSON) to get the working directory
# Fall back to PWD if no input available
SESSION_CWD="${PWD}"
if [ ! -t 0 ]; then
    # Try to parse the working directory from hook JSON input
    INPUT=$(cat)
    PARSED_CWD=$(echo "$INPUT" | python3 -c 'import sys,json; d=json.load(sys.stdin); print(d.get("cwd", d.get("workingDirectory", "")))' 2>/dev/null)
    if [ -n "$PARSED_CWD" ] && [ -d "$PARSED_CWD" ]; then
        SESSION_CWD="$PARSED_CWD"
    fi
fi

TARGET="$SESSION_CWD/DESIGN.md"

# Only copy if source exists and target doesn't already have one
if [ -f "$DESIGN_SRC" ]; then
    if [ ! -f "$TARGET" ]; then
        cp "$DESIGN_SRC" "$TARGET"
        echo "✓ DESIGN.md delivered to $SESSION_CWD"
    else
        echo "• DESIGN.md already exists at $SESSION_CWD — skipping"
    fi
else
    echo "⚠ Could not find DESIGN.md at $DESIGN_SRC"
fi
