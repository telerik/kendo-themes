---
name: css-to-scss-migrator
description: "Converts raw CSS to idiomatic Kendo-themed SCSS: replaces hardcoded hex colors with k-color(), px spacing with k-spacing(), shadows with k-elevation(), renames selectors to k- BEM classes, and flags values with no token equivalent. Use when migrating designer handoffs, prototypes, or legacy stylesheets into the theme system. Not for creating new components (use component-generator) or fixing existing component styles."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: CSS-to-SCSS Migrator (C4)

Convert **raw CSS** to idiomatic Kendo-themed SCSS using the repo's token system and conventions.

## Pre-Flight: Read Context First

1. `.github/skills/shared/repo-conventions.md` — token naming, SCSS conventions
2. `packages/core/scss/_variables.scss` — global design tokens
3. `packages/core/scss/spacing/` — spacing scale
4. `packages/core/scss/color-system/` — color tokens
5. `packages/core/scss/elevation/` — shadow tokens
6. `packages/core/scss/typography/` — typography tokens

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `CSS_SOURCE` | ✅ | Raw CSS to convert (paste or file path) |
| `TARGET_COMPONENT` | ✅ | Which component this CSS belongs to |
| `TARGET_PACKAGE` | ⬜ | `core` or `default` (or specific theme). Default: `default` |

---

## Step-by-Step Workflow

### Step 1 — Parse the Raw CSS

Identify all values that need replacement:

**Color literals** (hex, rgb, rgba, hsl):
```
#0058e9 → k-color( primary ) ?
#ffffff → k-color( on-primary ) or CSS var
rgba(0,0,0,0.1) → k-color( shadow ) or custom opacity expression
```

**Spacing/sizing values** (px, rem, em):
```
8px    → k-spacing(2)   (8px = 2 × 4px base unit)
16px   → k-spacing(4)
24px   → k-spacing(6)
4px    → k-spacing(1)
0.5rem → may not map — flag as "no exact token"
```

Kendo spacing scale: `k-spacing(N)` = `N × 0.25rem` ≈ `N × 4px`:

| px | k-spacing(N) |
|----|-------------|
| 4  | k-spacing(1) |
| 8  | k-spacing(2) |
| 12 | k-spacing(3) |
| 16 | k-spacing(4) |
| 20 | k-spacing(5) |
| 24 | k-spacing(6) |

**Shadow values**:
```
0 2px 4px rgba(0,0,0,.1) → k-elevation(2) ?
0 4px 8px rgba(0,0,0,.2) → k-elevation(4) ?
```
Check `packages/core/scss/elevation/` for the actual map.

**Font values**:
```
font-size: 14px → var( --kendo-font-size, inherit ) or $kendo-font-size
font-family: Arial → var( --kendo-font-family, inherit )
line-height: 1.5 → var( --kendo-line-height, normal )
```

**Border radius**:
```
border-radius: 4px → k-border-radius(md)
border-radius: 50% → k-border-radius(full)
```

### Step 2 — Map CSS Selectors to BEM/k- Convention

Rename selectors to match Kendo conventions:

```
/* Input */                          /* Output */
.my-badge { }                   →   .k-badge { }
.my-badge--solid { }            →   .k-badge-solid { }
.my-badge--primary { }          →   .k-badge-primary { }
.my-badge.is-hovered { }        →   .k-badge.k-hover { }
.my-badge.is-disabled { }       →   .k-badge:disabled, .k-badge.k-disabled { }
.my-badge > .icon { }           →   .k-badge > .k-icon { }
```

**State class mapping:**

| Legacy class | Kendo state class |
|-------------|-------------------|
| `.is-hovered` | `.k-hover` |
| `.is-focused` | `.k-focus` |
| `.active` | `.k-active` |
| `.selected` | `.k-selected` |
| `.disabled`, `[disabled]` | `.k-disabled`, `:disabled` |
| `.invalid`, `.error` | `.k-invalid` |

### Step 3 — Restructure as SCSS with Variables

Convert to `_layout.scss` and `_theme.scss` patterns:

**Layout (structure only — no colors):**
```scss
@mixin kendo-[component]--layout-base() {
    .k-[component] {
        box-sizing: border-box;
        padding: $kendo-[component]-padding-y $kendo-[component]-padding-x;
        display: inline-flex;
        align-items: center;
        border-width: $kendo-[component]-border-width;
        border-style: solid;
        border-radius: $kendo-[component]-border-radius;
        font-size: $kendo-[component]-font-size;
    }
}
```

**Theme (colors only):**
```scss
@mixin kendo-[component]--theme-base() {
    .k-[component] {
        @include fill(
            $kendo-[component]-text,
            $kendo-[component]-bg,
            $kendo-[component]-border
        );
    }
}
```

### Step 4 — Flag Unmapped Values

For values with no clear token equivalent, add a comment:

```scss
// TODO: No token for this value — consider adding $kendo-[component]-[property]: [value]
border-radius: 0.375rem;  // does not map to k-border-radius() — needs new token?
```

List all flags at the bottom of the migrated file:

```scss
// === MIGRATION FLAGS ===
// - Line 23: `border-radius: 0.375rem` — no matching k-border-radius() step
// - Line 45: `color: #2b5fad` — custom brand blue, no system token; suggest adding $kendo-[component]-accent
// - Line 67: `box-shadow: 0 0 0 3px rgba(0,88,233,0.3)` — custom focus ring; suggest k-elevation() or new token
```

### Step 5 — Output the Migrated Files

Produce:
1. `_variables.scss` with variable definitions for all extracted values (null in core, values in default)
2. `_layout.scss` with structural mixin
3. `_theme.scss` with visual mixin
4. A list of migration flags for manual review

---

## Post-Generation Validation Checklist

- [ ] No hardcoded hex colors remain (all → `k-color()` or variable)
- [ ] No hardcoded `px` spacing values (all → `k-spacing()` or variable)
- [ ] No hardcoded font-size/family values (all → CSS vars or variables)
- [ ] BEM class names use `k-` prefix
- [ ] State classes use Kendo state conventions
- [ ] Layout and theme concerns separated into `_layout.scss` / `_theme.scss`
- [ ] All flagged values documented

## Verify

```bash
npm run sass          # No errors with new files included
npm run lint:styles   # Stylelint clean
```

---

## Edge Cases

- **Complex nested selectors**: Flatten deeper than 3 levels — Kendo SCSS avoids excessive nesting.
- **Media queries**: Keep media queries but convert breakpoint values to use the repo's breakpoint scale if one exists.
- **`!important` declarations**: Flag them — Kendo uses specificity rather than `!important`. Remove or note the reason.
- **CSS custom properties in source** (e.g., `var(--brand-color)`): Keep as-is if they map to Kendo's `--kendo-*` vars; otherwise replace with token function.
- **Transitions and animations**: Check `packages/core/scss/motion/` for existing timing/easing tokens.

---
