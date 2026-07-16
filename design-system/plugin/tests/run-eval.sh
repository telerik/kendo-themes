#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Kendo Design System Plugin — Isolated Test Harness
# ─────────────────────────────────────────────────────────────────────────────
#
# Runs an isolated Copilot CLI session with ONLY the kendo-design plugin loaded.
# Uses a custom model endpoint for separate billing/tracking.
#
# Usage:
#   ./run-eval.sh <target-repo> [prompt]
#   ./run-eval.sh ~/projects/blank-app "Create a login page with form validation"
#   ./run-eval.sh ~/projects/blank-app  # Uses default prompt
#
# Environment (set before running, or create a .env file alongside this script):
#   KENDO_EVAL_PROVIDER_URL   — Your model endpoint (e.g. https://api.openai.com/v1)
#   KENDO_EVAL_API_KEY        — API key for the endpoint
#   KENDO_EVAL_MODEL          — Model identifier (e.g. claude-sonnet-4, gpt-5.4)
#   KENDO_EVAL_MODEL_ID       — (optional) Well-known model ID if wire model differs
#
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLUGIN_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# ── Load .env if present ─────────────────────────────────────────────────────
if [ -f "$SCRIPT_DIR/.env" ]; then
    # shellcheck disable=SC1091
    source "$SCRIPT_DIR/.env"
fi

# ── Validate arguments ───────────────────────────────────────────────────────
TARGET_REPO="${1:-}"
PROMPT="${2:-Create a responsive dashboard page with a sidebar navigation, header with user avatar, and a data table showing recent orders. Use semantic HTML and CSS custom properties for theming.}"

if [ -z "$TARGET_REPO" ]; then
    echo "Usage: $0 <target-repo-path> [prompt]"
    echo ""
    echo "Example:"
    echo "  $0 ~/projects/blank-app"
    echo "  $0 ~/projects/blank-app \"Build a settings page with form inputs\""
    exit 1
fi

if [ ! -d "$TARGET_REPO" ]; then
    echo "Error: Target repo not found: $TARGET_REPO"
    exit 1
fi

# ── Validate environment ─────────────────────────────────────────────────────
if [ -z "${KENDO_EVAL_PROVIDER_URL:-}" ]; then
    echo "Error: KENDO_EVAL_PROVIDER_URL not set."
    echo "Set it in environment or in $SCRIPT_DIR/.env"
    echo ""
    echo "Example .env:"
    echo "  KENDO_EVAL_PROVIDER_URL=https://api.openai.com/v1"
    echo "  KENDO_EVAL_API_KEY=sk-..."
    echo "  KENDO_EVAL_MODEL=gpt-5.4"
    exit 1
fi

if [ -z "${KENDO_EVAL_MODEL:-}" ]; then
    echo "Error: KENDO_EVAL_MODEL not set."
    exit 1
fi

# ── Resolve copilot binary BEFORE isolating HOME ─────────────────────────────
# nvm/fnm put binaries behind lazy-loaded shell functions, so resolve now.
COPILOT_BIN="${COPILOT_BIN:-$(which copilot 2>/dev/null || echo "")}"
if [ -z "$COPILOT_BIN" ]; then
    # Try nvm locations — prefer newest version (v1.x has --autopilot support)
    for candidate in \
        "$HOME/.nvm/versions/node"/v2*/bin/copilot \
        "$HOME/.nvm/versions/node"/v24*/bin/copilot \
        "$HOME/.nvm/versions/node"/*/bin/copilot \
        "$HOME/.local/bin/copilot" \
        /usr/local/bin/copilot; do
        if [ -x "$candidate" ]; then
            COPILOT_BIN="$candidate"
            break
        fi
    done
fi
if [ -z "$COPILOT_BIN" ]; then
    echo "Error: Could not find copilot binary. Set COPILOT_BIN=/path/to/copilot"
    exit 1
fi
# Verify version supports --autopilot
CLI_VERSION=$("$COPILOT_BIN" --version 2>&1 | head -1)
if echo "$CLI_VERSION" | grep -q "^0\."; then
    echo "Error: copilot $CLI_VERSION is too old. Need v1.0+ with --autopilot."
    echo "Try: COPILOT_BIN=/path/to/newer/copilot $0 $*"
    exit 1
fi
echo "→ Using copilot: $COPILOT_BIN ($CLI_VERSION)"

# ── Environment setup ────────────────────────────────────────────────────────
# Note: We skip plugin install (the standalone CLI v0.0.328+ removed the plugin
# subcommand). Instead we rely on DESIGN.md being placed in the target project.
# The plugin is installed via the Copilot app for interactive use.

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  Kendo Design System Plugin — Eval Harness                  ║"
echo "╠══════════════════════════════════════════════════════════════╣"
echo "║  Plugin:  $PLUGIN_DIR"
echo "║  Target:  $TARGET_REPO"
echo "║  Model:   ${KENDO_EVAL_MODEL}"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# ── Ensure DESIGN.md is in target project (fallback if hook doesn't fire) ────
DESIGN_SRC="$PLUGIN_DIR/skills/kendo-design/references/DESIGN.md"
DESIGN_PLACED=false
if [ -f "$DESIGN_SRC" ] && [ ! -f "$TARGET_REPO/DESIGN.md" ]; then
    cp "$DESIGN_SRC" "$TARGET_REPO/DESIGN.md"
    DESIGN_PLACED=true
    echo "→ Placed DESIGN.md in target project root"
    echo ""
fi
trap '[ "$DESIGN_PLACED" = true ] && rm -f "$TARGET_REPO/DESIGN.md"' EXIT

# ── Run the eval ─────────────────────────────────────────────────────────────
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
OUTPUT_DIR="$SCRIPT_DIR/results/$TIMESTAMP"
mkdir -p "$OUTPUT_DIR"

echo "→ Running eval..."
echo "  Prompt: ${PROMPT:0:80}..."
echo "  Output: $OUTPUT_DIR/"
echo ""

# Save metadata
cat > "$OUTPUT_DIR/metadata.json" <<EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "model": "${KENDO_EVAL_MODEL}",
  "model_id": "${KENDO_EVAL_MODEL_ID:-${KENDO_EVAL_MODEL}}",
  "provider_url": "${KENDO_EVAL_PROVIDER_URL}",
  "target_repo": "$TARGET_REPO",
  "prompt": $(printf '%s' "$PROMPT" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))'),
  "plugin_version": $(cat "$PLUGIN_DIR/plugin.json" | python3 -c 'import sys,json; d=json.load(sys.stdin); print(json.dumps(d.get("version","unknown")))')
}
EOF

# Execute (Copilot CLI v1.x flags)
(
    cd "$TARGET_REPO"
    ${KENDO_EVAL_MODEL:+COPILOT_MODEL="$KENDO_EVAL_MODEL"} \
    "$COPILOT_BIN" \
        -p "$PROMPT" \
        --autopilot \
        --allow-all-tools \
        --no-color \
        --share="$OUTPUT_DIR/session.md" \
        2>&1
) | tee "$OUTPUT_DIR/output.log"

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  Eval complete. Results in: $OUTPUT_DIR/"
echo "  - output.log   — Raw CLI output"
echo "  - metadata.json — Run parameters"
echo "═══════════════════════════════════════════════════════════════"
