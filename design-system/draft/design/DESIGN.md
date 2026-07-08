---
version: alpha
name: Kendo
description: The Kendo Design System — a modern, balanced visual identity for data-rich professional interfaces, built on perceptually uniform oklch color space.
colors:
  app-surface: "oklch(100% 0 0deg)"
  on-app-surface: "oklch(28.36% 0.0243 261.13deg)"
  subtle: "oklch(55.44% 0.0407 257.42deg)"
  surface: "oklch(98.46% 0.0017 247.84deg)"
  surface-alt: "oklch(100% 0 0deg)"
  border: "oklch(79.5% 0.0197 255.55deg / 0.35)"
  border-alt: "oklch(79.5% 0.0197 255.55deg / 0.5)"
  base: "oklch(96.92% 0.0034 247.86deg)"
  primary: "oklch(37.17% 0.0392 257.29deg)"
  secondary: "oklch(54.53% 0.2124 275.85deg)"
  tertiary: "oklch(83.18% 0.1046 310.19deg)"
  info: "oklch(56.43% 0.131 241.46deg)"
  success: "oklch(51.46% 0.1066 163.53deg)"
  warning: "oklch(88.34% 0.1817 99deg)"
  error: "oklch(51.01% 0.1951 14.31deg)"
  inverse: "oklch(28.36% 0.0243 261.13deg)"
  series: "oklch(54.53% 0.2124 275.85deg)"
typography:
  body-md:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.4286
  body-xs:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4286
  heading-xl:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.5
  heading-lg:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.5
  heading-md:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.5
  heading-sm:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.4286
  label-lg:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 1rem
    fontWeight: 500
    lineHeight: 1.5
  label-md:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.4286
  label-sm:
    fontFamily: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4286
  code:
    fontFamily: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.4286
rounded:
  none: 0px
  xs: 0.125rem
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  xxl: 1rem
  xxxl: 1.5rem
  full: 9999px
spacing:
  base: 0.25rem
  0: 0px
  1px: 1px
  0.5: 0.125rem
  1: 0.25rem
  1.5: 0.375rem
  2: 0.5rem
  2.5: 0.625rem
  3: 0.75rem
  3.5: 0.875rem
  4: 1rem
  4.5: 1.125rem
  5: 1.25rem
  5.5: 1.375rem
  6: 1.5rem
  6.5: 1.625rem
  7: 1.75rem
  7.5: 1.875rem
  8: 2rem
  9: 2.25rem
  10: 2.5rem
  11: 2.75rem
  12: 3rem
  13: 3.25rem
  14: 3.5rem
  15: 3.75rem
  16: 4rem
  17: 4.25rem
  18: 4.5rem
  19: 4.75rem
  20: 5rem
  21: 5.25rem
  22: 5.5rem
  23: 5.75rem
  24: 6rem
---

# Kendo Design System

## Overview

The Kendo Design System is balanced, precise, and quietly confident. The aesthetic pairs cool-toned surfaces with high-contrast interactive elements and a vibrant secondary accent. It is built for data-rich professional applications that need to stay readable and uncluttered across complex layouts. Prioritize clarity and hierarchy: use color to signal state and function, not decoration.

Colors are defined in oklch for perceptual uniformity. All derived color variants (hover, active, subtle, emphasis, on-color) are computed automatically from the base tokens at runtime — only base values need to be set.

## Colors

The color system is built on **semantic tokens** — named roles that carry intent rather than raw hue. Set a single base color (e.g., `primary`) and all interactive variants auto-compute from it via relative oklch transforms in the browser.

### Surfaces & Structure

- **app-surface** — The root application background. Pure white.
- **surface** — Component surfaces: cards, panels, inputs. A barely-perceptible cool tint distinguishes it from the page.
- **surface-alt** — Alternate surface (pure white, same as `app-surface`). Used inside components that already sit on a `surface` fill, creating a secondary level of contrast without introducing a new color.
- **border** — Default borders at 35% opacity. Translucent so they layer on any surface.
- **border-alt** — Stronger border variant at 50% opacity for emphasis.
- **base** — Neutral fill for non-semantic elements (toolbars, table headers, secondary buttons).
- **subtle** — Muted text for placeholders, captions, and disabled labels.
- **inverse** — Deep near-black for high-contrast inverted contexts.

### Semantic Colors

Each semantic color generates a full variant set: `-subtle`, `-subtle-hover`, `-subtle-active`, base, `-hover`, `-active`, `-emphasis`, `-on-subtle`, `on-{name}`, `-on-surface`. Only the base token is defined; the rest are derived.

- **primary** `oklch(37.17% 0.0392 257.29deg)` — A deep, muted navy-slate. Used for the single most important action on a view and as the anchoring text color for headings.
- **secondary** `oklch(54.53% 0.2124 275.85deg)` — A vibrant violet-blue. Used for secondary actions, active states, and accent elements.
- **tertiary** `oklch(83.18% 0.1046 310.19deg)` — A light lilac-pink. Used for decorative highlights, tertiary actions, and badges.
- **info** `oklch(56.43% 0.131 241.46deg)` — A mid-tone cerulean blue. Used for informational messages, links, and focus indicators.
- **success** `oklch(51.46% 0.1066 163.53deg)` — A balanced teal-green. Used for positive outcomes, confirmations, and valid states.
- **warning** `oklch(88.34% 0.1817 99deg)` — A high-lightness amber-gold. Used for caution messages and states requiring attention.
- **error** `oklch(51.01% 0.1951 14.31deg)` — A saturated red-orange. Used for destructive actions, validation errors, and critical alerts.

### Data Visualization (Series)

Chart colors derive from a single `series` base (`oklch(54.53% 0.2124 275.85deg)`) which generates six evenly-distributed hues (`series-a` through `series-f`). Each series produces five variants: base, bold, bolder, subtle, subtler. Override `--kendo-color-series` to re-hue the entire palette at once.

## Typography

**Inter** is the primary typeface — a geometric sans-serif optimized for UI clarity at small sizes with a tall x-height and open apertures. A monospace stack (SFMono-Regular, Menlo, Monaco, Consolas) is used for code, data, and technical content.

The type scale is intentionally compact, ranging from `0.75rem` (12px) to `1.25rem` (20px), suited for data-dense professional interfaces. Larger display sizes are left to the consumer's brand typography.

### Scale Logic

- **Headings** (`heading-sm` through `heading-xl`) — Semi-bold (600) for structural hierarchy. Used for section titles, card headers, and navigation landmarks.
- **Body** (`body-xs` through `body-md`) — Regular weight (400) with generous line-height (1.4286–1.5). The default reading text.
- **Labels** (`label-sm` through `label-lg`) — Medium weight (500) for single-line scannable text: form labels, table headers, button text, and metadata.
- **Code** — Monospace at `0.875rem` for inline code, data cells, and technical identifiers.

### Available Sizes

| Token | Size | Weight | Line-Height | Use |
|---|---|---|---|---|
| `heading-xl` | 1.25rem | 600 | 1.5 | Page titles |
| `heading-lg` | 1.125rem | 600 | 1.5 | Section headings |
| `heading-md` | 1rem | 600 | 1.5 | Card/panel titles |
| `heading-sm` | 0.875rem | 600 | 1.4286 | Sub-headings, group labels |
| `body-md` | 1rem | 400 | 1.5 | Primary body text |
| `body-sm` | 0.875rem | 400 | 1.4286 | Secondary body text, descriptions |
| `body-xs` | 0.75rem | 400 | 1.4286 | Captions, footnotes |
| `label-lg` | 1rem | 500 | 1.5 | Prominent labels, navigation |
| `label-md` | 0.875rem | 500 | 1.4286 | Form labels, table headers, buttons |
| `label-sm` | 0.75rem | 500 | 1.4286 | Compact labels, badges, chips |
| `code` | 0.875rem | 400 | 1.4286 | Code, data, monospace content |

### Weight Scale

The full weight spectrum is available via CSS variables: thin (100), extra-light (200), light (300), normal (400), medium (500), semi-bold (600), bold (700), extra-bold (800), black (900).

### Letter Spacing

For fine typographic control: `tightest` (-0.15px), `tighter` (-0.1px), `tight` (-0.5px), `normal` (0px), `wide` (0.5px), `wider` (0.1px), `widest` (0.15px).

## Layout

Spacing follows a proportional scale with a **0.25rem (4px) base unit**. Every spacing token is a multiplier of this base, so changing `--kendo-spacing-base` rescales the entire system proportionally.

### Scale Design

The 34-step scale provides granular control:

- **Micro** (0–2): `0px`, `1px`, `0.125rem`, `0.25rem`, `0.375rem`, `0.5rem` — Icon gaps, borders, tight padding.
- **Small** (2.5–4): `0.625rem` to `1rem` — Input padding, chip spacing, compact layouts.
- **Medium** (4.5–8): `1.125rem` to `2rem` — Card padding, section gaps, form field spacing.
- **Large** (9–16): `2.25rem` to `4rem` — Section separators, panel margins, hero padding.
- **Extra-large** (17–24): `4.25rem` to `6rem` — Page-level margins, major layout divisions.

The half-step tokens (0.5, 1.5, 2.5, etc.) exist for micro-adjustments where whole steps are too coarse.

### Rhythm Guidelines

- Use `spacing-2` (0.5rem / 8px) inside a component for tight grouping.
- Use `spacing-4` (1rem / 16px) between related components.
- Use `spacing-8` (2rem / 32px) between sections or logical groups.
- Use `spacing-12` (3rem / 48px) or larger for major layout divisions.

Never use arbitrary pixel values. If `spacing-4` is too small and `spacing-8` is too large, use `spacing-6` — don't invent a value outside the scale.

## Elevation & Depth

Hierarchy is conveyed primarily through tonal surfaces and borders. Shadows are subtle and used only where elements genuinely float above the page. The system defines **5 elevation levels** as box-shadow tokens:

| Level | Value | Use |
|---|---|---|
| 1 | `0 0 4px 1px rgba(56,66,80,.05), 0 4px 6px -2px rgba(56,66,80,.06)` | Cards, inputs, inline surfaces |
| 2 | `0 -1px 2px 0 rgba(56,66,80,.03), 0 4px 6px -2px rgba(56,66,80,.02), 0 12px 16px -4px rgba(56,66,80,.08)` | Popovers, dropdown menus |
| 3 | `0 -1px 2px 0 rgba(56,66,80,.03), 0 8px 10px -4px rgba(56,66,80,.04), 0 16px 20px -4px rgba(56,66,80,.08)` | Floating panels, tooltips |
| 4 | `0 -1px 2px 0 rgba(56,66,80,.03), 0 12px 14px -4px rgba(56,66,80,.04), 0 18px 24px -5px rgba(56,66,80,.08)` | Drawers, side panels |
| 5 | `0 -1px 2px 0 rgba(56,66,80,.03), 0 16px 18px -6px rgba(56,66,80,.06), 0 20px 28px -6px rgba(56,66,80,.08)` | Modals, dialogs |

Shadows use a warm-cool gray base (`rgb(56,66,80)`) at very low opacity — this keeps them neutral on any surface color. Each level adds progressive layers for physical depth without visual heaviness.

## Shapes

The border-radius system derives from a single **base value of `0.375rem` (6px)**. All radius tokens are computed as multipliers of this base, so adjusting `--kendo-border-radius-base` rescales every corner consistently.

### Scale

| Token | Computed | Use |
|---|---|---|
| `none` | 0px | Sharp corners (tables, toolbars, dividers) |
| `xs` | 0.125rem (2px) | Checkboxes, micro-elements |
| `sm` | 0.25rem (4px) | Chips, tags, compact controls |
| `md` | 0.375rem (6px) | Buttons, inputs, cards — the everyday default |
| `lg` | 0.5rem (8px) | Menus, dialog corners |
| `xl` | 0.75rem (12px) | Modal containers, large cards |
| `xxl` | 1rem (16px) | Feature panels, hero sections |
| `xxxl` | 1.5rem (24px) | Full-bleed sections |
| `full` | 9999px | Pills, avatars, circular elements |

### Guidelines

- **Default:** Components use `md` (6px) unless they have a specific reason for a different radius.
- **Consistency:** Keep one radius family per context. Don't mix sharp and rounded corners in the same toolbar or card group.
- **Nesting:** Inner elements should use a radius smaller than or equal to their container.

## Motion

Motion is functional — it clarifies transitions and maintains spatial awareness, never decorates. The system provides a duration scale, easing curves, and composite transition presets.

### Durations

All durations respect `--kendo-duration-global`. When set (or when `prefers-reduced-motion` is active), all tokens resolve to that value — set it to `0.01ms` to disable all motion.

| Token | Duration | Use |
|---|---|---|
| `instant` | 0ms | Immediate state changes |
| `immediate` | 50ms | Micro-feedback (checkbox, radio) |
| `brief` | 100ms | Button press, focus ring |
| `quick` | 150ms | Hover states, small reveals |
| `rapid` | 200ms | Menu open, tooltip appear |
| `swift` | 250ms | Panel slide, popover entry |
| `speedy` | 300ms | Drawer open, card expand |
| `brisk` | 350ms | Complex reveals |
| `prompt` | 400ms | Overlay transitions |
| `moderate` | 500ms | Full-screen transitions |
| `slow` | 800ms | Background animations |

### Easings

| Token | Curve | Use |
|---|---|---|
| `linear` | `cubic-bezier(0, 0, 1, 1)` | Progress bars, continuous motion |
| `accelerate` | `cubic-bezier(0.42, 0, 1, 1)` | Exit animations |
| `decelerate` | `cubic-bezier(0, 0, 0.58, 1)` | Enter animations |
| `standard` | `cubic-bezier(0.42, 0, 0.58, 1)` | General purpose transitions |
| `sharp` | `cubic-bezier(0.75, 0, 0.25, 1)` | Snappy state changes |
| `bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful emphasis (use sparingly) |
| `elastic` | `cubic-bezier(0.5, -0.5, 0.5, 1.5)` | Spring-like motion |
| `stretchy` | `cubic-bezier(0.07, 1.81, 0.3, 0.81)` | Exaggerated physics (use rarely) |

### Transition Presets

Composite tokens combining duration + easing for common patterns:

- **`enter`** — 300ms decelerate (elements appearing)
- **`exit`** — 200ms accelerate (elements leaving)
- **`rapid`** — 150ms decelerate (hover, focus changes)
- **`snappy`** — 250ms decelerate (toggles, selections)
- **`bouncy`** — 300ms bounce (attention, success)
- **`subtle`** — 350ms standard (slow reveals)
- **`fade-in`** / **`fade-out`** — opacity transitions
- **`scale-in`** / **`scale-out`** — size transforms
- **`slide-in`** / **`slide-out`** — positional transforms

## Iconography

The icon system separates **styling** (defined by the design system) from **content** (defined by the `@progress/kendo-svg-icons` package). Icons inherit text color via `fill: currentColor` and scale proportionally.

### Sizing

| Level | Scale | Default px |
|---|---|---|
| `xs` | 75% | 12px |
| `sm` | 87.5% | 14px |
| `md` | 100% | 16px (default) |
| `lg` | 125% | 20px |
| `xl` | 150% | 24px |
| `xxl` | 200% | 32px |
| `xxxl` | 300% | 48px |

All sizes derive from a 16px base (`--kendo-icon-size`). Change the base to rescale every icon proportionally.

### Guidelines

- Icons inherit their parent's text color — use semantic color tokens to tint them.
- Pair icons with text labels for clarity; never rely on an icon alone for meaning.
- Use `md` (16px) as the default inline icon size. Step up to `lg` or `xl` for standalone or decorative icons.

## Do's and Don'ts

- Do use the semantic color system — reference `primary`, `error`, `surface` rather than hard-coding oklch values.
- Do change one base token (e.g., `--kendo-color-primary`) to rebrand all components that reference it at once.
- Do maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text and UI elements).
- Do use the spacing scale consistently — avoid arbitrary pixel values that break the rhythm.
- Do keep one border-radius family per view context.
- Do honor `prefers-reduced-motion` — all motion tokens already respect it automatically.
- Do ensure focus indicators are always visible and never color-only.
- Do pair state colors with icons or text labels — never signal state with color alone.
- Don't mix sharp (0px) and rounded corners on elements at the same hierarchy level.
- Don't use `surface` and `app-surface` interchangeably — they serve different elevation roles.
- Don't override derived color variants (hover, active, etc.) unless you need precise control — let the relative oklch system compute them.
- Don't use elevation shadows on flat elements (e.g., inline text, list items) — shadows signal floating layers only.
- Don't skip spacing steps for alignment — if `spacing-4` is too small and `spacing-8` is too large, use `spacing-6`, not an arbitrary value.
- Don't rely on an icon alone for meaning — always pair with a text label.

