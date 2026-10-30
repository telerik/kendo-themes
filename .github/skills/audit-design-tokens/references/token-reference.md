# Design Token Reference

Quick-reference for the kendo-themes design token system. All tokens are defined in `packages/core/scss/`.

## Spacing — `k-spacing($step)`

Source: `spacing/index.scss`

Step = multiple of `0.25rem` (4px at a 16px root). Valid steps:

- `0`, `1px`
- `0.5` – `7.5` in 0.5 increments (2px – 30px)
- `8` – `24` in 1 increments (32px – 96px)

| px | Step |
|----|------|
| 2 | 0.5 |
| 4 | 1 |
| 6 | 1.5 |
| 8 | 2 |
| 12 | 3 |
| 16 | 4 |
| 20 | 5 |
| 24 | 6 |
| 32 | 8 |

Usage: `padding-x: k-spacing(2);` → 0.5rem (8px)

## Color — `k-color($key)`

Source: `color-system/_functions.scss`

Semantic color keys (available in all swatches):

| Key | Purpose |
|-----|---------|
| `app-surface` | Page background |
| `on-app-surface` | Text on page background |
| `subtle` | Subtle text/icons |
| `surface` | Component surface |
| `surface-alt` | Alternate surface |
| `border` | Default border |
| `border-alt` | Alternate border |
| `base` | Base fill (buttons, inputs) |
| `base-hover` | Base hover state |
| `base-active` | Base active state |
| `on-base` | Text on base |
| `primary` | Primary action color |
| `primary-hover` | Primary hover |
| `primary-active` | Primary active |
| `on-primary` | Text on primary |
| `secondary`, `tertiary`, `info`, `success`, `warning`, `error` | Semantic colors (each with `-hover`, `-active`, `on-*` variants) |

Usage: `$kendo-button-bg: k-color(base) !default;`

## Border Radius — `k-border-radius($key)`

Source: `border-radii/index.scss`

Base `--kendo-border-radius-base` = 0.25rem (4px). Keys:

| Key | Value | px |
|-----|-------|----|
| `none` | 0 | 0 |
| `xs` | base × 0.25 | 1 |
| `sm` | base × 0.5 | 2 |
| `md` | base | 4 |
| `lg` | base × 1.5 | 6 |
| `xl` | base × 2 | 8 |
| `xxl` | base × 3 | 12 |
| `xxxl` | base × 4 | 16 |
| `full` | base × 9999 | pill |

Usage: `border-radius: k-border-radius(md);`

## Elevation — `k-elevation($level)`

Source: `elevation/index.scss`

Levels 1–5 (core defaults; themes may override), increasing depth:

| Level | Typical use |
|-------|-------------|
| 1 | Subtle (cards) |
| 2–3 | Floating (dropdowns, tooltips, popups) |
| 4–5 | High prominence (dialogs, overlays) |

Usage: `box-shadow: k-elevation(2);`

## Typography — `$kendo-font-*` variables

Source: `typography/index.scss`

### Font Size
| Variable | Value |
|----------|-------|
| `$kendo-font-size-xxs` | 0.5rem (8px) |
| `$kendo-font-size-xs` | 0.625rem (10px) |
| `$kendo-font-size-sm` | 0.75rem (12px) |
| `$kendo-font-size` / `-md` | 0.875rem (14px) |
| `$kendo-font-size-lg` | 1rem (16px) |
| `$kendo-font-size-xl` | 1.25rem (20px) |

### Line Height
| Variable | Value |
|----------|-------|
| `$kendo-line-height-xs` | 1 |
| `$kendo-line-height-sm` | 1.25 |
| `$kendo-line-height` / `-md` | ~1.4286 (20/14) |
| `$kendo-line-height-lg` | 1.5 |

### Font Weight
| Variable | Value |
|----------|-------|
| `$kendo-font-weight-thin` | 100 |
| `$kendo-font-weight-extra-light` | 200 |
| `$kendo-font-weight-light` | 300 |
| `$kendo-font-weight` / `-normal` | 400 |
| `$kendo-font-weight-medium` | 500 |
| `$kendo-font-weight-semibold` | 600 |
| `$kendo-font-weight-bold` | 700 |

### Font Family
| Variable | Default |
|----------|---------|
| `$kendo-font-family` | `inherit` (themes set the stack) |
| `$kendo-font-family-sans-serif` | System UI font stack |
| `$kendo-font-family-monospace` | Monospace font stack |

## Motion — `k-easing()`, `k-duration()`, `k-transition()`

Source: `motion/index.scss`

- Easings: `linear`, `accelerate`, `decelerate`, `standard`, `sharp`, `bounce`, `elastic`, `stretchy`
- Durations: `instant`, `immediate`, `brief`, `quick`, `rapid`, `swift`, `speedy`, `brisk`, `prompt`, `timely`, `moderate`, `measured`, `steady`, `leisurely`, `slow`
