---
version: alpha
name: Kendo Fluent
theme: fluent
description: The Kendo Design System — Microsoft Fluent's design language for data-rich professional interfaces, pairing Segoe UI typography and layered depth with a perceptually uniform oklch color space.
colors:
  app-surface: "oklch(98.51% 0 0deg)"
  on-app-surface: "oklch(26.03% 0 0deg)"
  subtle: "oklch(54.52% 0 0deg)"
  surface: "oklch(100% 0 0deg)"
  surface-alt: "oklch(100% 0 0deg)"
  border: "oklch(26.03% 0 0deg / 0.72)"
  border-alt: "oklch(0% 0 0deg)"
  base: "oklch(100% 0 0deg)"
  primary: "oklch(52.63% 0.1494 251.63deg)"
  secondary: "oklch(94.01% 0 0deg)"
  tertiary: "oklch(58.95% 0.2164 332.76deg)"
  info: "oklch(65.12% 0.1366 245.64deg)"
  success: "oklch(51.03% 0.1654 142.68deg)"
  warning: "oklch(68.00% 0.1980 42.95deg)"
  error: "oklch(52.27% 0.2063 25.84deg)"
  inverse: "oklch(26.03% 0 0deg)"
  series: "oklch(64.54% 0.0997 198.44deg)"
color-derivatives:
  semantic-families:
    - base
    - primary
    - secondary
    - tertiary
    - info
    - success
    - warning
    - error
  derived-tokens:
    - "{family}-subtle"
    - "{family}-subtle-hover"
    - "{family}-subtle-active"
    - "{family}-hover"
    - "{family}-active"
    - "{family}-emphasis"
    - "{family}-on-subtle"
    - "on-{family}"
    - "{family}-on-surface"
  series:
    base: series
    hues: [series-a, series-b, series-c, series-d, series-e, series-f]
    variant-tokens:
      - "{series}"
      - "{series}-bold"
      - "{series}-bolder"
      - "{series}-subtle"
      - "{series}-subtler"
typography:
  font-family:
    sans: Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans
    serif: '"Times New Roman", Georgia, Garamond, Palatino, Baskerville'
    sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
    monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace
  font-size: { xxs: 0.5rem, xs: 0.625rem, sm: 0.75rem, md: 0.875rem, lg: 1rem, xl: 1.25rem }
  font-weight: { thin: 100, extra-light: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extra-bold: 800, black: 900 }
  line-height: { xs: 1, sm: 1.25, md: 1.4286, lg: 1.33 }
  letter-spacing:
    base: null
    tightest: -0.15px
    tighter: -0.10px
    tight: -0.5px
    normal: 0px
    wide: 0.5px
    wider: 0.10px
    widest: 0.15px
  variants:
    heading-xl: { family: sans-serif, size: xl, weight: semibold, line-height: md }
    heading-lg: { family: sans-serif, size: lg, weight: semibold, line-height: md }
    heading-md: { family: sans-serif, size: md, weight: semibold, line-height: md }
    heading-sm: { family: sans-serif, size: sm, weight: semibold, line-height: sm }
    body-md: { family: sans-serif, size: md, weight: normal, line-height: md }
    body-sm: { family: sans-serif, size: sm, weight: normal, line-height: sm }
    body-xs: { family: sans-serif, size: xs, weight: normal, line-height: sm }
    label-lg: { family: sans-serif, size: md, weight: medium, line-height: md }
    label-md: { family: sans-serif, size: sm, weight: medium, line-height: sm }
    label-sm: { family: sans-serif, size: xs, weight: medium, line-height: sm }
    code: { family: monospace, size: md, weight: normal, line-height: sm }
rounded:
  none: 0px
  xs: 0.0625rem
  sm: 0.125rem
  md: 0.25rem
  lg: 0.375rem
  xl: 0.5rem
  xxl: 0.75rem
  xxxl: 1rem
  full: calc(0.25rem * 9999)
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
elevation:
  1: "0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)"
  2: "0px 4px 8px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)"
  3: "0px 8px 16px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)"
  4: "0px 14px 28px 0px rgba(0,0,0,0.24), 0px 0px 8px 0px rgba(0,0,0,0.2)"
  5: "0px 32px 64px 0px rgba(0,0,0,0.24), 0px 0px 8px 0px rgba(0,0,0,0.2)"
motion:
  durations:
    instant: 0ms
    immediate: 50ms
    brief: 100ms
    quick: 150ms
    rapid: 200ms
    swift: 250ms
    speedy: 300ms
    brisk: 350ms
    prompt: 400ms
    timely: 450ms
    moderate: 500ms
    measured: 550ms
    steady: 600ms
    leisurely: 700ms
    slow: 800ms
    languid: 900ms
    sluggish: 1000ms
  easings:
    linear: cubic-bezier(0, 0, 1, 1)
    accelerate: cubic-bezier(0.42, 0, 1, 1)
    decelerate: cubic-bezier(0, 0, 0.58, 1)
    standard: cubic-bezier(0.42, 0, 0.58, 1)
    sharp: cubic-bezier(0.75, 0, 0.25, 1)
    bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
    elastic: cubic-bezier(0.5, -0.5, 0.5, 1.5)
    stretchy: cubic-bezier(0.07, 1.81, 0.3, 0.81)
  transitions:
    instant: { duration: instant, easing: linear }
    rapid: { duration: quick, easing: decelerate }
    snappy: { duration: swift, easing: decelerate }
    energetic: { duration: swift, easing: elastic }
    bouncy: { duration: speedy, easing: bounce }
    subtle: { duration: brisk, easing: standard }
    gentle: { duration: prompt, easing: accelerate }
    enter: { duration: speedy, easing: decelerate }
    exit: { duration: rapid, easing: accelerate }
    settle: { duration: brisk, easing: decelerate }
    scale-out: { duration: quick, easing: accelerate }
    scale-in: { duration: rapid, easing: decelerate }
    fade-out: { duration: rapid, easing: standard }
    fade-in: { duration: swift, easing: standard }
    slide-out: { duration: swift, easing: accelerate }
    slide-in: { duration: speedy, easing: decelerate }
    emphasis: { duration: quick, easing: sharp }
    collapse: { duration: speedy, easing: accelerate }
    expand: { duration: prompt, easing: standard }
    shrink: { duration: brisk, easing: accelerate }
    grow: { duration: prompt, easing: standard }
    pulse: { duration: brisk, easing: standard }
    smooth: { duration: moderate, easing: standard }
    flip: { duration: measured, easing: standard }
    fluid: { duration: steady, easing: standard }
    deliberate: { duration: slow, easing: standard }
icons:
  base-px: 16px
  sizing:
    xs: { scale: 75%, default-px: 12px }
    sm: { scale: 87.5%, default-px: 14px }
    md: { scale: 100%, default-px: 16px, default: true }
    lg: { scale: 125%, default-px: 20px }
    xl: { scale: 150%, default-px: 24px }
    xxl: { scale: 200%, default-px: 32px }
    xxxl: { scale: 300%, default-px: 48px }
---

# Kendo Design System

## Overview

Kendo Design System is a balanced, precise, and quietly confident design system for modern enterprise applications. It is optimized for data-rich interfaces, complex components, and multi-panel layouts, while still scaling to marketing pages.

Its visual language combines tonal surfaces, clean geometry, generous whitespace, deliberate elevation, rounded corners, and a semantic accent system. The result is an interface that feels modern, readable, and approachable.

Prioritize clarity, hierarchy, consistency, and accessibility. Use color to communicate state and function, not ornamentation.

## Colors

The color system is built on **semantic tokens** — named roles that carry intent rather than raw hue.

Colors are defined in OKLCH for perceptual uniformity. Semantic variants (hover, active, subtle, emphasis, on-color) are derived automatically from base tokens.

### Surfaces & structure

- `app-surface` — The root application background.
- `surface` — A color used for surfaces, headers, canvases, and containers. A delicate tint distinguishes it from the page.
- `surface-alt` — The alternative surface color, used inside components that already sit on a `surface` fill to create a secondary level of contrast.
- `border` — Default border color, tuned to blend naturally with any interface surface.
- `border-alt` — Stronger border variant for emphasis. Used for border color in hover state.
- `base` — Neutral fill for interactive UI elements that use theme color variants (secondary button, chip).
- `subtle` — Muted text for placeholders, captions, and disabled labels.
- `inverse` — Deep near-black for high-contrast inverted contexts. It is used for overlay-style UI surfaces (overlay background, tooltip).

### Semantic colors

- `primary` — Used for the single most important action on a view and as the anchoring text color for headings.
- `secondary` — Used for secondary actions, active states, and accent elements.
- `tertiary` — Used for decorative highlights, tertiary actions, and badges.
- `info` — Used for informational messages, links, and focus indicators.
- `success` — Used for positive outcomes, confirmations, and valid states.
- `warning` — Used for caution messages and states requiring attention.
- `error` — Used for destructive actions, validation errors, and critical alerts.

### Base variable group

The base group is the theme's core neutral palette for interactive UI elements — covering fills, state variations (hover/active), accessible text pairings (on-base), and border accents.

- `base-subtle` — Muted background for lower-emphasis fills.
- `base-emphasis` — Stronger contrast variant used for borders and accents.

### Data visualization (series)

Chart colors derive from a single `series` base that generates six evenly distributed hues, `series-a` through `series-f`. `series-a` equals the base; `series-b`–`series-f` are hue-rotated from it around the wheel. Override `--kendo-color-series` to re-hue the entire palette at once.

Each of the six hues produces five variants — encoded as `series.variant-tokens` in the YAML contract:

| Variant | Token                | Role                             |
| ------- | -------------------- | -------------------------------- |
| Base    | `series-{x}`         | Primary series fill              |
| Bold    | `series-{x}-bold`    | Darker shade (emphasis, borders) |
| Bolder  | `series-{x}-bolder`  | Darkest shade                    |
| Subtle  | `series-{x}-subtle`  | Lighter shade (fills, bands)     |
| Subtler | `series-{x}-subtler` | Lightest shade (backgrounds)     |

That yields the full **6 × 5 = 30-color** chart palette, all reflowing from the one `series` base.

## Typography

Typography is defined in two tiers. **Axes** (`font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`) are the primitive scales every text style draws from. **Variants** (`typography.variants.*`) are the named, ready-to-use roles that compose those axes — this is the layer product UI should reference. Because each variant references axes by alias, adjusting one axis (for example `font-size.md`) reflows every variant that uses it.

`body-md` is the primary body text style — a highly legible UI sans-serif optimized for clarity at small sizes. `code` is used for code, data, and technical content.

The type scale is intentionally compact — six steps from `font-size.xxs` to `font-size.xl` — suited for data-dense professional interfaces. Larger display sizes are left to the consumer's brand typography.

### Axes

- **font-family** — `sans-serif` for all UI text (the default family); `monospace` for code and technical content. `sans` (Arial-based) and `serif` families are also defined but unused by the variants.
- **font-size** — `xxs` `xs` `sm` `md` `lg` `xl`, a compact six-step scale.
- **font-weight** — full scale `thin` (100) through `black` (900); variants use `normal` (400), `medium` (500), and `semibold` (600).
- **line-height** — `xs` (1), `sm` (1.25), `md` (1.4286), `lg` (1.33).
- **letter-spacing** — fine tracking from `tightest` to `widest`; `normal` tracking by default.

### Variant families

- **Headings** (`heading-sm` through `heading-xl`) — Semibold for structural hierarchy. Used for section titles, card headers, and navigation landmarks.
- **Body** (`body-xs` through `body-md`) — Normal weight (400) with generous line height. Default reading text.
- **Labels** (`label-sm` through `label-lg`) — Medium weight for single-line scannable text: form labels, table headers, button text, and metadata.
- **Code** — Monospace for inline code, data cells, and technical identifiers.

### Available variants

| **Variant** | **Use**                             |
| ----------- | ----------------------------------- |
| heading-xl  | Page titles                         |
| heading-lg  | Section headings                    |
| heading-md  | Card/panel titles                   |
| heading-sm  | Sub-headings, group labels          |
| body-md     | Primary body text                   |
| body-sm     | Secondary body text, descriptions   |
| body-xs     | Captions, footnotes                 |
| label-lg    | Prominent labels, navigation        |
| label-md    | Form labels, table headers, buttons |
| label-sm    | Compact labels, badges, chips       |
| code        | Code, data, monospace content       |

## Layout

Spacing follows a proportional scale with a **0.25rem base unit**. Every spacing token is a multiplier of this base, so changing `--kendo-spacing-base` rescales the entire system proportionally.

### Spacing

The 34-step scale provides granular control:

- **Micro** (0–2): Icon gaps, borders, tight padding.
- **Small** (2.5–4): Input padding, chip spacing, compact layouts.
- **Medium** (4.5–8): Card padding, section gaps, form field spacing.
- **Large** (9–16): Section separators, panel margins, hero padding.
- **Extra-large** (17–24): Page-level margins, major layout divisions.

The half-step tokens (0.5, 1.5, 2.5, etc.) exist for micro-adjustments where whole steps are too coarse.

### Rhythm guidelines

- Use `spacing-2` inside a component for tight grouping.
- Use `spacing-4` between related components.
- Use `spacing-8` between sections or logical groups.
- Use `spacing-12` or larger for major layout divisions.

Never use arbitrary pixel values. If `spacing-4` is too small and `spacing-8` is too large, use `spacing-6` — do not invent a value outside the scale.

## Elevation

Hierarchy is conveyed primarily through tonal surfaces and borders. Shadows are reserved for elements that genuinely float above the page.

| **Level** | **Use**                        |
| --------- | ------------------------------ |
| 1         | Cards, inputs, inline surfaces |
| 2         | Popovers, dropdown menus       |
| 3         | Floating panels, tooltips      |
| 4         | Drawers, side panels           |
| 5         | Modals, dialogs                |

Each theme tunes its shadow color and opacity to its own elevation character. Levels increase progressively in spread and softness to convey physical depth and reinforce hierarchy.

## Roundness

The border-radius system derives from a single **base value**. All radius tokens are computed as multipliers of this base, so adjusting `--kendo-border-radius-base` rescales every corner consistently.

### Scale

| **Token** | **Use**                                       |
| --------- | --------------------------------------------- |
| none      | Sharp corners (tables, toolbars, dividers)    |
| xs        | Checkboxes, micro-elements                    |
| sm        | Chips, tags, compact controls                 |
| md        | Buttons, inputs, cards — the everyday default |
| lg        | Menus, dialog corners                         |
| xl        | Modal containers, large cards                 |
| xxl       | Feature panels, hero sections                 |
| xxxl      | Full-bleed sections                           |
| full      | Pills, avatars, circular elements             |

### Guidelines

- **Default:** Components use `md` unless they have a specific reason for a different radius.
- **Consistency:** Keep one radius family per context. Do not mix sharp and rounded corners in the same toolbar or card group.
- **Nesting:** Inner elements should use a radius smaller than their container radius.
- **Nested-elements formula for rounded corners:** For visually balanced nested corners, `outer radius = inner radius + padding`. Do not apply this rule above `xxl` to avoid overly oblique containers.

## Motion

Motion is functional. It clarifies transitions and maintains spatial awareness. It should never be decorative by default.

Motion is defined in two tiers, like typography. **Axes** (`durations`, `easings`) are the primitive scales. **Transition presets** (`motion.transitions.*`) are the named, ready-to-use variants that compose one duration alias with one easing alias — this is the layer product UI should reference. Because each preset references axes by alias, retuning an axis (for example `durations.speedy`) reflows every preset that uses it.

### Durations

All durations respect `--kendo-duration-global`. When set (or when `prefers-reduced-motion` is active), all tokens resolve to that value. Set it to `0.01ms` to disable all motion.

| **Token** | **Use**                          |
| --------- | -------------------------------- |
| instant   | Immediate state changes          |
| immediate | Micro-feedback (checkbox, radio) |
| brief     | Button press, focus ring         |
| quick     | Hover states, small reveals      |
| rapid     | Menu open, tooltip appear        |
| swift     | Panel slide, popover entry       |
| speedy    | Drawer open, card expand         |
| brisk     | Complex reveals                  |
| prompt    | Overlay transitions              |
| timely    | Deliberate reveals               |
| moderate  | Full-screen transitions          |
| measured  | Layout transitions               |
| steady    | Large panel motion               |
| leisurely | Expansive transitions            |
| slow      | Background animations            |
| languid   | Ambient, low-priority motion     |
| sluggish  | Longest background animations    |

### Easings

| **Token**  | **Use**                          |
| ---------- | -------------------------------- |
| linear     | Progress bars, continuous motion |
| accelerate | Exit animations                  |
| decelerate | Enter animations                 |
| standard   | General purpose transitions      |
| sharp      | Snappy state changes             |
| bounce     | Playful emphasis (use sparingly) |
| elastic    | Spring-like motion               |
| stretchy   | Exaggerated physics (use rarely) |

### Transition presets

Presets are the **variant** layer of motion: each composes a `duration` axis token with an `easing` axis token, exactly as the theme resolves them (`var(--kendo-duration-*)` + `var(--kendo-easing-*)`). Reference a preset rather than a raw duration/easing pair so motion stays consistent. The animated CSS property (opacity, transform) is chosen by the consuming component — presets carry only timing.

| **Preset** | **Duration** | **Easing** | **Use**                            |
| ---------- | ------------ | ---------- | ---------------------------------- |
| instant    | instant      | linear     | Immediate, no perceptible motion   |
| rapid      | quick        | decelerate | Hover, focus changes               |
| snappy     | swift        | decelerate | Toggles, selections                |
| energetic  | swift        | elastic    | Spring-like emphasis               |
| bouncy     | speedy       | bounce     | Attention, success (use sparingly) |
| subtle     | brisk        | standard   | Slow reveals                       |
| gentle     | prompt       | accelerate | Soft exits                         |
| enter      | speedy       | decelerate | Elements appearing                 |
| exit       | rapid        | accelerate | Elements leaving                   |
| settle     | brisk        | decelerate | Elements settling into place       |
| scale-out  | quick        | accelerate | Size out (transform)               |
| scale-in   | rapid        | decelerate | Size in (transform)                |
| fade-out   | rapid        | standard   | Opacity out                        |
| fade-in    | swift        | standard   | Opacity in                         |
| slide-out  | swift        | accelerate | Positional out (transform)         |
| slide-in   | speedy       | decelerate | Positional in (transform)          |
| emphasis   | quick        | sharp      | Snappy attention changes           |
| collapse   | speedy       | accelerate | Sections collapsing                |
| expand     | prompt       | standard   | Sections expanding                 |
| shrink     | brisk        | accelerate | Shrinking elements                 |
| grow       | prompt       | standard   | Growing elements                   |
| pulse      | brisk        | standard   | Pulsing attention                  |
| smooth     | moderate     | standard   | Smooth continuous motion           |
| flip       | measured     | standard   | Flip transitions                   |
| fluid      | steady       | standard   | Fluid large-surface motion         |
| deliberate | slow         | standard   | Deliberate, slow motion            |

### Guidelines

- Use motion to communicate state, hierarchy, and spatial change — not decoration.
- Keep default motion calm, subtle, and responsive; use expressive motion sparingly.
- Use short durations for micro-interactions and longer durations for overlays or layout changes.

## Iconography

The icon system separates **styling** (defined by the design system) from **content** (defined by the `@progress/kendo-svg-icons` package). Icons inherit text color via `fill: currentColor` and scale proportionally.

### Sizing

All icon sizes derive from a single base (`base-px` = 16px, exposed as `--kendo-icon-size`), so changing the base rescales every icon proportionally. Each level in the `icons.sizing` map is a `scale` multiplier applied to that base.

| Level  | Scale | Default px | Notes                               |
| ------ | ----- | ---------- | ----------------------------------- |
| `xs`   | 75%   | 12px       | Dense toolbars, inline affordances  |
| `sm`   | 87.5% | 14px       | Compact inline icons                |
| `md`   | 100%  | 16px       | **Default** — inline with body text |
| `lg`   | 125%  | 20px       | Standalone actions                  |
| `xl`   | 150%  | 24px       | Prominent / decorative              |
| `xxl`  | 200%  | 32px       | Feature icons                       |
| `xxxl` | 300%  | 48px       | Empty-state / hero glyphs           |

### Guidelines

- Icons inherit their parent's text color — use semantic color tokens to tint them.
- Use `md` as the default inline icon size. Step up to `lg` or `xl` for standalone or decorative icons.

## Do's and don'ts

- Do use the semantic color system — reference `primary`, `error`, and `surface` rather than hard-coding oklch values.
- Do change one base token (for example `--kendo-color-primary`) to rebrand all components that reference it at once.
- Do maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text and UI elements).
- Do use the spacing scale consistently — avoid arbitrary pixel values that break rhythm.
- Do keep one border-radius family per view context.
- Do ensure focus indicators are always visible and never removed without an equivalent replacement.
- Do pair state colors with icons or text labels — never signal state with color alone.
- Don't use `surface` and `app-surface` interchangeably — they serve different elevation roles.
- Don't override derived color variants (hover, active, etc.) unless you need precise control — let the relative oklch system compute them.
- Don't rely on an icon alone for meaning — pair it with a text label or provide a tooltip description.
