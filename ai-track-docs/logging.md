# Logging Guidelines

> Last updated: 2026-01-09

## Overview

This document describes structured logging in the kendo-themes build pipeline.

## Log Format

All logs use JSON format with consistent fields:

```json
{
  "ts": "2026-01-09T10:30:00.000Z",
  "op": "resolve-variables",
  "phase": "start|compile|end|skip",
  "status": "ok|error",
  "elapsedMs": 1234,
  "theme": "default",
  "err": "error message if status=error"
}
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `ts` | string | ISO 8601 timestamp |
| `op` | string | Operation name (e.g., `resolve-variables`) |
| `phase` | string | Execution phase (`start`, `compile`, `end`, `skip`) |
| `status` | string | `ok` or `error` |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `elapsedMs` | number | Duration in milliseconds |
| `theme` | string | Theme being processed |
| `variables` | number | Count of resolved variables |
| `err` | string | Error message (when `status=error`) |

## Instrumented Paths

| Script | Operation | Description |
|--------|-----------|-------------|
| `scripts/resolve-variables.js` | `resolve-variables` | SCSS variable resolution before docs |

## How to Run & View Logs

### Run with logs visible

```bash
# Single theme
cd packages/default && npm run resolve-variables

# All themes (via docs)
npm run docs
```

### Filter structured logs

```bash
# Extract only JSON log lines
npm run docs 2>&1 | grep '^{' | jq .

# Filter by operation
npm run docs 2>&1 | grep '^{' | jq 'select(.op == "resolve-variables")'

# Filter errors only
npm run docs 2>&1 | grep '^{' | jq 'select(.status == "error")'

# Get timing summary
npm run docs 2>&1 | grep '^{' | jq -r 'select(.phase == "end") | "\(.theme): \(.elapsed_ms)ms"'
```

### Save logs to file

```bash
npm run docs 2>&1 | grep '^{' > build.log

# Pretty print
cat build.log | jq .
```

## Example Output

### Successful run

```json
{"ts":"2026-01-09T10:30:00.000Z","op":"resolve-variables","phase":"start","status":"ok","theme":"default","src":"/path/to/scss/all.scss"}
{"ts":"2026-01-09T10:30:00.010Z","op":"resolve-variables","phase":"compile","status":"ok","theme":"default"}
{"ts":"2026-01-09T10:30:01.234Z","op":"resolve-variables","phase":"end","status":"ok","theme":"default","elapsedMs":1234,"variables":847}
```

### Error case

```json
{"ts":"2026-01-09T10:30:00.000Z","op":"resolve-variables","phase":"start","status":"ok","theme":"broken","src":"/path/to/scss/all.scss"}
{"ts":"2026-01-09T10:30:00.010Z","op":"resolve-variables","phase":"compile","status":"ok","theme":"broken"}
{"ts":"2026-01-09T10:30:00.150Z","op":"resolve-variables","phase":"end","status":"error","theme":"broken","elapsedMs":150,"err":"Undefined variable $missing"}
```

### Skipped (no source file)

```json
{"ts":"2026-01-09T10:30:00.000Z","op":"resolve-variables","phase":"skip","status":"ok","reason":"srcFile not found","src":"/path/to/scss/all.scss"}
```

## Adding New Logs

Use the `log()` helper pattern:

```javascript
function log(op, phase, status, extra = {}) {
    const entry = {
        ts: new Date().toISOString(),
        op,
        phase,
        status,
        ...extra
    };
    console.log(JSON.stringify(entry));
}

// Usage
const startTime = Date.now();
log('my-operation', 'start', 'ok', { file: inputFile });

try {
    // ... work ...
    log('my-operation', 'end', 'ok', { elapsedMs: Date.now() - startTime });
} catch (err) {
    log('my-operation', 'end', 'error', { elapsedMs: Date.now() - startTime, err: err.message });
    throw err;
}
```

## Troubleshooting

### No JSON output visible

Logs go to stdout. If running via npm scripts, ensure output isn't suppressed:

```bash
npm run docs --silent=false
```

### jq not installed

```bash
# macOS
brew install jq

# Or use Node.js
npm run docs 2>&1 | grep '^{' | node -e "const r=require('readline').createInterface({input:process.stdin});r.on('line',l=>console.log(JSON.stringify(JSON.parse(l),null,2)))"
```
