# Design Token Reference

Quick-reference for the kendo-themes design token system. All tokens are defined in `packages/core/scss/`.

## Spacing — `k-spacing($step)`

Source: `spacing/index.scss`

| Step | Value | ~px (at 16px base) |
|------|-------|---------------------|
| 0 | 0px | 0 |
| 1px | 1px | 1 |
| 0.5 | 0.125rem | 2 |
| 1 | 0.25rem | 4 |
| 1.5 | 0.375rem | 6 |
| 2 | 0.5rem | 8 |
| 2.5 | 0.625rem | 10 |
| 3 | 0.75rem | 12 |
| 3.5 | 0.875rem | 14 |
| 4 | 1rem | 16 |
| 5 | 1.25rem | 20 |
| 6 | 1.5rem | 24 |
| 8 | 2rem | 32 |
| 10 | 2.5rem | 40 |
| 12 | 3rem | 48 |
| 16 | 4rem | 64 |
| 20 | 5rem | 80 |
| 24 | 6rem | 96 |

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

| Key | Typical Value |
|-----|---------------|
| `none` | 0 |
| `sm` | 0.125rem (2px) |
| `md` | 0.25rem (4px) |
| `lg` | 0.375rem (6px) |
| `xl` | 0.5rem (8px) |
| `full` | 9999px |

Usage: `border-radius: k-border-radius(md);`

## Elevation — `k-elevation($level)`

Source: `elevation/index.scss`

Levels 1–9, producing `box-shadow` values with increasing depth.

| Level | Use Case |
|-------|----------|
| 1 | Subtle (cards) |
| 2–3 | Floating (dropdowns, tooltips) |
| 4–5 | Elevated (popups, dialogs) |
| 6–9 | High prominence (overlays) |

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
| `$kendo-font-family` | System font stack |
| `$kendo-font-family-monospace` | Monospace font stack |

## Motion — `k-easing()`, `k-duration()`, `k-transition()`

Source: `motion/index.scss`

Token functions for animation easing curves, durations, and transition presets. Refer to the source file for available keys.
