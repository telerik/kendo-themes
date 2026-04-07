---
name: audit-css-compliance
description: Audit compiled CSS dist files for W3C syntax errors, browser compatibility issues against .browserslistrc targets, and deprecated/vendor-prefixed CSS features. Validates the actual shipped CSS using css-tree (W3C grammar) and caniuse-lite (browser support data). Use this skill when the user wants to check CSS validity, find browser compatibility issues, detect deprecated vendor prefixes, or audit the compiled output before shipping.
argument-hint: "[theme] [--category syntax|compat|deprecated|all]"
compatibility: Requires Node.js and css-tree (dev dependency). browserslist + caniuse-lite are already in the repo.
---

# CSS Compliance Audit

Validate compiled CSS dist files against W3C syntax rules, browser compatibility targets, and deprecated feature lists.

## When to use

When the user asks to:
- "Check CSS validity" or "validate the CSS output"
- "Find browser compatibility issues" or "check browserslist support"
- "Find deprecated CSS" or "audit vendor prefixes"
- "Run W3C validation" or "CSS compliance check"
- Verify that compiled CSS is safe to ship to customers
- Audit a specific theme's CSS output

Not for:
- SCSS source code linting (use Stylelint)
- Design token usage enforcement (use `audit-design-tokens`)
- WCAG accessibility (use `manage-html-a11y`)

## Prerequisites

The audit requires compiled CSS. If dist files are missing:
```bash
npm run sass
```

The script depends on `css-tree`. If not installed:
```bash
npm install --save-dev css-tree
```

## Audit Categories

### 1. Syntax — W3C CSS parse errors

Uses [css-tree](https://github.com/csstree/csstree) to parse compiled CSS against the W3C CSS grammar. Catches:
- Invalid property names
- Malformed property values (e.g., missing units, bad function syntax)
- Parse errors in selectors or at-rules
- Values that don't match the W3C-defined syntax for their property

**Known exceptions:** The script automatically filters out valid modern CSS that css-tree may not fully recognize yet (oklch(), color-mix(), relative color syntax). These are covered by the compat check instead.

### 2. Compat — Browser compatibility

Cross-references CSS features detected in the output against the project's `.browserslistrc` targets using caniuse-lite data. Checks:

| Feature | caniuse ID |
|---------|-----------|
| oklch() | mdn-css_types_color_oklch |
| color-mix() | mdn-css_types_color_color-mix |
| Relative color syntax | css-relative-colors |
| :has() | css-has |
| :is() | css-matches-pseudo |
| :where() | mdn-css_selectors_where |
| CSS Nesting | css-nesting |
| @container | css-container-queries |
| @layer | css-cascade-layers |
| subgrid | css-subgrid |
| @property | mdn-css_at-rules_property |
| CSS Custom Properties | css-variables |
| CSS Grid | css-grid |
| Flexbox gap | flexbox-gap |
| Logical properties | css-logical-props |
| color() function | css-color-function |
| light-dark() | mdn-css_types_color_light-dark |

### 3. Deprecated — Obsolete vendor prefixes and features

Scans for CSS that should no longer be needed given modern browser targets:
- `-webkit-*`, `-moz-*`, `-ms-*` prefixed properties that have unprefixed equivalents
- IE-only features (`-ms-filter`, `-ms-flexbox`)
- Non-standard properties (`zoom`, `-webkit-font-smoothing`)

## Inputs

- **theme** (optional): `default`, `classic`, `material`, `fluent`, `bootstrap`, or `all`. Default: `all`.
- **--category** (optional): `syntax`, `compat`, `deprecated`, or `all`. Default: `all`.
- **--json**: Output as JSON (for programmatic use).
- **-v, --verbose**: Also show passing checks.

## Procedure

### Step 1: Ensure dist files exist

```bash
ls packages/*/dist/all.css
```

If missing, compile first:
```bash
npm run sass
```

### Step 2: Ensure css-tree is installed

```bash
node -e "require('css-tree')" 2>/dev/null || npm install --save-dev css-tree
```

### Step 3: Run the audit

```bash
node .github/skills/audit-css-compliance/scripts/audit-css.mjs [theme] [--category CATEGORY]
```

Examples:
```bash
# Full audit of all themes
node .github/skills/audit-css-compliance/scripts/audit-css.mjs

# Just the default theme
node .github/skills/audit-css-compliance/scripts/audit-css.mjs default

# Only browser compat checks for fluent
node .github/skills/audit-css-compliance/scripts/audit-css.mjs fluent --category compat

# JSON output for CI integration
node .github/skills/audit-css-compliance/scripts/audit-css.mjs all --json
```

### Step 4: Interpret results

The output is grouped by theme, then by category:

```
=== Theme: default ===

  --- SYNTAX ---
  (none)

  --- COMPAT ---
  [warning] Relative color syntax (oklch from ...) (184 occurrences)
    Unsupported in: firefox 134
    caniuse: https://caniuse.com/css-relative-colors

  --- DEPRECATED ---
  [warning] -webkit-user-select is deprecated; use unprefixed 'user-select' (3 occurrences)
    Replacement: user-select
    Sample lines: 1822, 5440, 12003

  Summary: 0 error(s), 2 warning(s)

=== Total issues across all themes: 2 ===
```

### Step 5: Classify and act on findings

#### Syntax errors (severity: error)
These indicate invalid CSS that browsers will ignore. **Fix immediately** — the CSS won't work as intended.

#### Compat warnings
Evaluate based on your browser support policy:
- **Critical**: Feature is unsupported in ≥1 current target browsers → needs a fallback or the browserslist needs updating
- **Acceptable**: Feature only fails in browsers about to leave the "last 2 versions" window → document as a known limitation
- **Informational**: Feature is fully supported → no action needed (shown with `--verbose`)

#### Deprecated warnings
Evaluate whether Autoprefixer is already handling these:
- Prefixes that Autoprefixer adds → safe to ignore (they'll be stripped when no longer needed)
- Manually-written prefixes in SCSS source → remove from source and let Autoprefixer manage them

### Step 6: Suggest fixes

For each real issue, propose a fix:

| Issue type | Fix approach |
|-----------|-------------|
| Syntax error | Fix the SCSS source that generates the invalid CSS |
| Compat — unsupported feature | Add a fallback value before the modern value, or use `@supports` |
| Compat — browserslist stale | Update `.browserslistrc` if the browser is no longer supported |
| Deprecated prefix | Remove from SCSS source; let Autoprefixer handle it |
| Non-standard property | Evaluate necessity; replace with standard alternative |

## Exit codes

| Code | Meaning |
|------|---------|
| 0 | No issues |
| 1 | Warnings only |
| 2 | Errors found |

## Gotchas

- **css-tree lags behind CSS spec**: Some valid modern CSS (oklch, color-mix, relative color syntax) will be flagged as syntax errors. The script filters these out and routes them to the compat check instead. If css-tree reports a syntax error for a known-valid feature, add it to the `isKnownModernSyntax()` function.
- **Autoprefixer output**: The deprecated check may flag prefixes that Autoprefixer added during the PostCSS build. These are not bugs in the SCSS source — Autoprefixer adds them intentionally. Check whether the prefix exists in the SCSS source before flagging it as something to fix.
- **Dist must be fresh**: Always run `npm run sass` before auditing to ensure dist reflects current SCSS source.
- **caniuse-lite data freshness**: Run `npx update-browserslist-db@latest` periodically to get the latest browser support data.
