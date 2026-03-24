---
name: token-audit
description: "Scans the codebase for SCSS token health issues: hardcoded values that should be tokens, defined-but-unused variables, used-but-undefined variables, theme coverage gaps (token present in default but missing in classic/material/fluent/bootstrap), and naming convention violations. Produces a prioritized report with optional automated fixes. Use for pre-release hygiene checks, investigating styling inconsistencies, or auditing token coverage."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Token Audit & Consistency Checker (B3)

Scan the codebase for **token health issues** and produce a prioritized audit report.

## Pre-Flight: Read Context First

1. `.github/skills/shared/repo-conventions.md` — variable naming rules
2. `packages/default/scss/_variables.scss` — root token definitions
3. One or two component variable files to calibrate expected patterns

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `SCOPE` | ⬜ | `all`, `component:[name]`, or `theme:[name]`. Default: `all` |
| `FIX_MODE` | ⬜ | `report` (findings only) or `fix` (attempt automated fixes). Default: `report` |
| `ISSUE_TYPES` | ⬜ | Comma-separated: `hardcoded`, `unused`, `undefined`, `coverage-gaps`, `naming`. Default: all |

---

## Step-by-Step Workflow

### Step 1 — Collect All Variable Definitions

Gather all `$kendo-*` variables defined across the codebase:

```bash
# Find all definitions
grep -rn "^\$kendo-" packages/*/scss --include="*.scss" | grep "!default" > /tmp/all-variables.txt

# Count by theme
grep -c "." /tmp/all-variables.txt
```

Build a mental map of: variable name → which packages define it.

### Step 2 — Audit: Hardcoded Values

Search for literal values that should be design tokens:

**Color literals** (should use `k-color()` or CSS custom props):
```bash
grep -rn "#[0-9a-fA-F]\{3,6\}" packages/*/scss --include="*.scss" | grep -v "_variables.scss" | grep -v "//.*#"
```

**Hardcoded spacing** (should use `k-spacing()`):
```bash
grep -rn "[0-9]\+px\|[0-9]\+rem\|[0-9]\+em" packages/*/scss --include="*.scss" | grep -v "_variables.scss"
```

**Hardcoded font sizes** (should use variable or `var(--kendo-font-size)`):
```bash
grep -rn "font-size: [0-9]" packages/*/scss --include="*.scss" | grep -v "_variables.scss"
```

**Report each finding:**
```
HARDCODED | packages/default/scss/grid/_layout.scss:45 | padding: 8px | Should use: $kendo-grid-padding-y / k-spacing(2)
```

### Step 3 — Audit: Undefined Variables (Used but Not Defined)

For each SCSS file in layout/theme mixins, check every `$kendo-*` reference exists somewhere as a definition:

```bash
# Extract all variable usages in layout/theme files
grep -rn "\$kendo-" packages/*/scss --include="*.scss" | grep -v "_variables.scss" | grep -v "^.*!default" > /tmp/usages.txt

# Find usages with no corresponding definition
# (manual cross-reference or script)
```

**Report:**
```
UNDEFINED | packages/default/scss/button/_theme.scss:23 | $kendo-button-pulsing-opacity | Not defined in any _variables.scss
```

### Step 4 — Audit: Unused Variables (Defined but Not Referenced)

For each variable in `_variables.scss` files, check if it's referenced anywhere outside variable files:

```bash
# For a given variable name, check usages:
grep -rn "VARIABLE_NAME" packages/*/scss --include="*.scss" | grep -v "_variables.scss"
```

**Report:**
```
UNUSED | $kendo-button-pulsing-opacity | Defined in core + default but never used in layout/theme files
```

### Step 5 — Audit: Theme Coverage Gaps

For every variable in `packages/default/scss/`, check if it exists in all other themes:

```bash
# Variables in default
grep -n "^\$kendo-" packages/default/scss/button/_variables.scss

# Check each in other themes
grep -n "^\$kendo-button-my-var" packages/classic/scss/button/_variables.scss
grep -n "^\$kendo-button-my-var" packages/material/scss/button/_variables.scss
# etc.
```

**Report:**
```
COVERAGE GAP | $kendo-chip-focus-shadow | Present in: default, classic | Missing in: material, fluent, bootstrap
```

### Step 6 — Audit: Naming Convention Violations

Check all variable names against the naming rules from `repo-conventions.md`:

Violations include:
- Missing `$kendo-` prefix
- camelCase in component name (e.g., `$kendo-dateTimePicker-bg`)
- Non-standard CSS property names (e.g., `background` instead of `bg`, `colour` instead of `color`)
- State before sub-element (e.g., `$kendo-button-hover-icon-color` should be `$kendo-button-icon-hover-color`)
- Missing `!default` flag

```
NAMING | packages/default/scss/datepicker/_variables.scss:12 | $kendo-dateTimePicker-bg | Should be: $kendo-datetimepicker-bg
NAMING | packages/classic/scss/button/_variables.scss:8 | $kendo-button-background | Should be: $kendo-button-bg
```

---

## Audit Report Format

```markdown
# Token Audit Report

**Date:** [date]
**Scope:** [all / component:button / theme:default]
**Total issues found:** N

---

## Summary

| Type | Count | Severity |
|------|-------|----------|
| Hardcoded values | 12 | High |
| Undefined variables | 3 | Critical |
| Unused variables | 28 | Low |
| Coverage gaps | 45 | Medium |
| Naming violations | 7 | Medium |

---

## Critical: Undefined Variables

| File | Line | Variable | Recommended Fix |
|------|------|----------|----------------|
| `packages/default/scss/grid/_theme.scss` | 45 | `$kendo-grid-alt-row-bg` | Add to `_variables.scss` with `k-color(base-subtle)` |

---

## High: Hardcoded Values

| File | Line | Value | Recommended Token |
|------|------|-------|-------------------|
| `packages/default/scss/chart/_layout.scss` | 23 | `padding: 8px` | `$kendo-chart-padding: k-spacing(2)` |

---

## Medium: Coverage Gaps

| Variable | Has | Missing |
|----------|-----|---------|
| `$kendo-chip-focus-shadow` | default, classic | material, fluent, bootstrap |

---

## Low: Unused Variables

| Variable | Defined In | Last Used |
|----------|-----------|-----------|
| `$kendo-button-pulsing-opacity` | core, default | Never referenced in layout/theme |
```

---

## Automated Fix Mode (`FIX_MODE=fix`)

For certain issue types, attempt automated fixes:

**Naming violations**: Rename the variable in definitions AND in all usages. Use git-aware find-and-replace.

**Coverage gaps**: Copy the default value to missing theme packages with a comment:
```scss
/// Copied from default theme — verify theme-appropriate value.
/// @group [component]
$kendo-chip-focus-shadow: k-elevation(2) !default;  // TODO: verify for [theme]
```

**Do NOT auto-fix:** Hardcoded values, undefined variables (require design decisions).

---

## Edge Cases

- **Variables starting with `$kendo-` but in mixins/functions** (not `_variables.scss`): These are local scope variables, not design tokens — exclude from audit.
- **Core package null variables**: Unused core nulls are expected — only flag if also missing from ALL theme packages.
- **Bootstrap theme uses Bootstrap variables** (e.g., `$primary`): These are intentional pass-throughs — do not flag as non-conformant.
- **Intentional hardcoded values**: Values like `border-width: 0` or `opacity: 1` are intentional — add comment exceptions in report.

---
