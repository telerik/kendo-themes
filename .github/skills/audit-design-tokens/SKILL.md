---
name: audit-design-tokens
description: Audit and report on design token usage (color, spacing, typography, elevation, border-radius) across SCSS packages. Scans for hardcoded values (hex colors, raw px/rem, font stacks, literal box-shadows) that should use design token functions like k-spacing(), k-color(), k-elevation(), k-border-radius(), or $kendo-* variables. Use this skill when the user wants to find hardcoded colors, audit spacing tokens, check typography consistency, or enforce token usage.
argument-hint: "[component-or-package] [--category color|spacing|typography|elevation|border-radius]"
compatibility: Requires bash, grep, awk, sed (macOS or Linux)
---

# Design Token Audit

Scan SCSS files for hardcoded values that should use the design token system.

## When to use

When the user asks to:
- "Find hardcoded colors" or "audit color usage"
- "Check spacing token usage" or "find raw px values"
- "Check typography consistency" or "find hardcoded font stacks"
- "Audit design tokens" or "enforce token usage"
- Validate that a component or package consistently uses the token system

Not for checking variable completeness across themes (use `/cross-theme-audit` instead).

## Design Token System Reference

The repo provides these token accessor functions (defined in `packages/core/scss/`):

| Category | Function / Pattern | Source |
|----------|-------------------|--------|
| **Spacing** | `k-spacing($step)` | `spacing/index.scss` — steps: 0, 1px, 0.5–30 |
| **Color** | `k-color($key)` | `color-system/_functions.scss` — keys: primary, base, surface, border, etc. |
| **Border radius** | `k-border-radius($key)` | `border-radii/index.scss` — keys: sm, md, lg, full, none |
| **Elevation** | `k-elevation($level)` | `elevation/index.scss` — levels: 1–9 |
| **Motion** | `k-easing($key)`, `k-duration($key)` | `motion/index.scss` |
| **Typography** | `$kendo-font-size-*`, `$kendo-line-height-*`, `$kendo-font-weight-*`, `$kendo-font-family-*` | `typography/index.scss` |

## Inputs

The user provides:
- **target** (optional): A component name (e.g., `button`), a package name (e.g., `default`), or `all`. Defaults to `all`.
- **category** (optional): One of `color`, `spacing`, `typography`, `elevation`, `border-radius`, or `all`. Defaults to `all`.

## Procedure

### Step 1: Run the audit script

Execute the bundled script to scan for violations:

```bash
bash .github/skills/audit-design-tokens/scripts/audit.sh [target] [--category CATEGORY]
```

Examples:
```bash
bash .github/skills/audit-design-tokens/scripts/audit.sh button
bash .github/skills/audit-design-tokens/scripts/audit.sh default --category color
bash .github/skills/audit-design-tokens/scripts/audit.sh all --category spacing
```

### Step 2: Interpret the output

The script produces structured output grouped by category and package:

```
=== Design Token Audit: button ===

--- COLOR violations ---
  packages/default/scss/button/_variables.scss:160: ... rgba(0, 0, 0, .08) ...
  → Should use: k-color() or $kendo-*-color variable

--- SPACING violations ---
  (none)

--- TYPOGRAPHY violations ---
  (none)

--- ELEVATION violations ---
  (none)

--- BORDER-RADIUS violations ---
  (none)

Summary: 1 violation(s) found
```

### Step 3: Classify violations

Not every match is a real violation. Apply these exceptions:

#### Legitimate exceptions (do NOT flag)

- **`_variables.scss` files in themes**: Values like `1px` for border-width, `0px` for shadow-blur, and `2px` for shadow-spread are acceptable since these ARE the token definitions.
- **`_variables.scss` using `k-color()`, `k-spacing()`, `color-mix()`, etc.**: These are already using the token system correctly.
- **Calc expressions**: `calc()` containing `$kendo-*` variable references is fine.
- **`0` and `0px`**: Zero values don't need a token.
- **`1px` border-width**: Standard practice, no token needed.
- **`rgba(..., $kendo-*)` or `color-mix(in srgb, k-color(...), ...)`**: Already using tokens as inputs.
- **`inherit`, `initial`, `none`, `auto`, `transparent`, `currentColor`**: CSS keywords.
- **Core `_layout.scss` and `_theme.scss`**: These use `$kendo-*` variables as CSS property values — that's correct. Only flag hardcoded literals (`padding: 8px` instead of `padding: $kendo-button-padding-y`).

#### Real violations (DO flag)

- **Raw hex colors** in `_variables.scss`: `$kendo-button-bg: #ff6358` → Should use `k-color(primary)`.
- **Raw px/rem in `_variables.scss`** for spacing properties: `$kendo-button-padding-x: 8px` → Should use `k-spacing(2)`.
- **Literal font-family strings**: `font-family: Arial, sans-serif` → Should use `$kendo-font-family`.
- **Raw box-shadow in `_theme.scss`**: `box-shadow: 0 2px 4px rgba(0,0,0,.2)` → Should use `k-elevation()` or `$kendo-*-shadow`.
- **Raw border-radius in `_layout.scss`**: `border-radius: 4px` → Should use `k-border-radius(md)` or `$kendo-*-border-radius`.
- **Hardcoded font-size/line-height/font-weight in `_layout.scss`**: Direct numeric values instead of `$kendo-font-*` variables.

### Step 4: Present findings

Report violations grouped by category and severity:

| Category | Package | File | Line | Value | Suggested Fix |
|----------|---------|------|------|-------|---------------|
| color | default | button/_variables.scss | 160 | `rgba(0, 0, 0, .08)` | Use `color-mix(in srgb, k-color(on-app-surface) 8%, transparent)` |
| spacing | material | chip/_variables.scss | 22 | `8px` | Use `k-spacing(2)` |
| ... | ... | ... | ... | ... | ... |

### Step 5: Suggest fixes

For each real violation, propose the correct token usage:

- **Color**: Replace with `k-color(token-name)` or `color-mix()` with token inputs
- **Spacing**: Replace with `k-spacing(step)` — map px to step using the spacing scale (4px→1, 8px→2, 12px→3, 16px→4, etc.)
- **Typography**: Replace with `$kendo-font-size-*`, `$kendo-line-height-*`, `$kendo-font-weight-*`, or `$kendo-font-family`
- **Elevation**: Replace with `k-elevation(level)` or define a `$kendo-*-shadow` variable
- **Border radius**: Replace with `k-border-radius(key)` or `$kendo-*-border-radius` variable

Offer to apply the fixes.

## Gotchas

- **Core `_variables.scss` files use `null !default`** — they define the token skeleton, not values. Scan theme overrides (default, classic, material, fluent, bootstrap) for actual hardcoded values.
- **Theme `_variables.scss` paths differ**: `packages/{theme}/scss/{component}/` (no `components/` subdirectory), unlike core which uses `packages/core/scss/components/{component}/`.
- **Fluent theme wraps everything in `var()`** — so `var(--kendo-spacing-2, 0.5rem)` is correct even though it contains a rem literal.
- **Material theme uses `$mat-*` internal variables** in some places — these are imported from Material Design and are acceptable.
- **The spacing scale is non-linear**: 1→0.25rem(4px), 2→0.5rem(8px), 3→0.75rem(12px), 4→1rem(16px). Use `packages/core/scss/spacing/index.scss` as the canonical reference.
- **`color-mix()` syntax**: `color-mix(in srgb, k-color(key) N%, transparent)` is the modern approach — do NOT flag these as violations.
- **Some components intentionally use hardcoded values** for pixel-perfect rendering (e.g., `1px` borders, `2px` focus ring offsets). These are design decisions, not violations.
