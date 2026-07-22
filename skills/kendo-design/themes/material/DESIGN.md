---
version: alpha
name: Kendo Material
theme: material
description: The Kendo Design System — a Material Design–based visual identity for data-rich professional interfaces, built on perceptually uniform oklch color space. Uses Roboto typography together with Material Design elevation and shape conventions.
colors:
  app-surface: "oklch(99.15% 0.0062 316.78deg)"
  on-app-surface: "oklch(22.65% 0.0100 303.60deg)"
  subtle: "oklch(39.81% 0.0174 303.61deg)"
  surface: "oklch(96.92% 0.0102 310.65deg)"
  surface-alt: "oklch(100% 0.0102 310.65deg)"
  border: "oklch(22.65% 0.0100 303.60deg / 0.12)"
  border-alt: "oklch(22.65% 0.0100 303.60deg / 0.15)"
  base: "oklch(92.78% 0.0108 315.98deg)"
  primary: "oklch(49.06% 0.0922 295.48deg)"
  secondary: "oklch(91.63% 0.0366 302.98deg)"
  tertiary: "oklch(49.04% 0.0605 358.39deg)"
  info: "oklch(55.72% 0.1840 260.56deg)"
  success: "oklch(52.30% 0.1309 150.49deg)"
  warning: "oklch(85.41% 0.1507 90.23deg)"
  error: "oklch(50.13% 0.1783 28.7deg)"
  inverse: "oklch(31.07% 0.0114 307.91deg)"
  series: "oklch(51.68% 0.2152 321.22deg)"
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
    sans-serif: Roboto, "Helvetica Neue", sans-serif
    monospace: Consolas, "Ubuntu Mono", "Lucida Console", "Courier New", monospace
  font-size: { xxs: 0.5rem, xs: 0.625rem, sm: 0.75rem, md: 0.875rem, lg: 1rem, xl: 1.25rem }
  font-weight: { thin: 100, extra-light: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extra-bold: 800, black: 900 }
  line-height: { xs: 1, sm: 1.33, md: 1.4286, lg: 1.5 }
  letter-spacing:
    base: null
    tightest: -0.5px
    tighter: -0.25px
    tight: -0.1px
    normal: 0.25px
    wide: 0.1px
    wider: 0.25px
    widest: 0.5px
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
  lg: 0.5rem
  xl: 0.75rem
  xxl: 1rem
  xxxl: 1.25rem
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
  1: "0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
  2: "0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)"
  3: "0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
  4: "0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
  5: "0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)"
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

Chart colors derive from a single `series` base that generates six evenly distributed hues, `series-a` through `series-f`. `series-a` equals the base; `series-b`–`series-f` are hue-rotated from it around the wheel. Override the `series` base color token to re-hue the entire palette at once.

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

- **font-family** — `sans-serif` (Roboto) is the base family for all UI text; `monospace` for code and technical content. `sans` and `serif` alternatives are also available.
- **font-size** — `xxs` `xs` `sm` `md` `lg` `xl`, a compact six-step scale.
- **font-weight** — full nine-step scale from `thin` (100) through `normal` (400), `medium` (500), `semibold` (600), to `black` (900).
- **line-height** — `xs` (1) for single-line text, `sm` (1.33) and `md` (1.4286) for reading text, `lg` (1.5) for roomy text.
- **letter-spacing** — fine tracking from `tightest` to `widest`; `normal` tracking by default.

### Variant families

- **Headings** (`heading-sm` through `heading-xl`) — Semibold for structural hierarchy. Used for section titles, card headers, and navigation landmarks.
- **Body** (`body-xs` through `body-md`) — Regular weight with generous line height. Default reading text.
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

Spacing follows a proportional scale with a **0.25rem base unit**. Every spacing token is a multiplier of this base, so changing the spacing base token rescales the entire system proportionally.

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

The border-radius system derives from a single **base value**. All radius tokens are computed as multipliers of this base, so adjusting the radius base token rescales every corner consistently.

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

All durations respect a global duration-override token. When set (or when `prefers-reduced-motion` is active), all tokens resolve to that value. Set it to `0.01ms` to disable all motion.

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
| timely    | Deliberate overlay reveals       |
| moderate  | Full-screen transitions          |
| measured  | Large layout shifts              |
| steady    | Sustained layout motion          |
| leisurely | Long, relaxed transitions        |
| slow      | Background animations            |
| languid   | Very slow ambient motion         |
| sluggish  | Longest, most deliberate motion  |

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

Presets are the **variant** layer of motion: each composes a `duration` axis token with an `easing` axis token, however the implementation resolves those tokens (CSS custom property, JSON design token, platform constant, etc.). Reference a preset rather than a raw duration/easing pair so motion stays consistent. The animated CSS property (opacity, transform) is chosen by the consuming component — presets carry only timing.

| **Preset** | **Duration** | **Easing** | **Use**                            |
| ---------- | ------------ | ---------- | ---------------------------------- |
| instant    | instant      | linear     | Immediate, no perceptible motion   |
| rapid      | quick        | decelerate | Hover, focus changes               |
| snappy     | swift        | decelerate | Toggles, selections                |
| energetic  | swift        | elastic    | Spring-like emphasis               |
| bouncy     | speedy       | bounce     | Attention, success (use sparingly) |
| subtle     | brisk        | standard   | Slow reveals                       |
| gentle     | prompt       | accelerate | Soft, unhurried exits              |
| enter      | speedy       | decelerate | Elements appearing                 |
| exit       | rapid        | accelerate | Elements leaving                   |
| settle     | brisk        | decelerate | Elements coming to rest            |
| scale-out  | quick        | accelerate | Size out (transform)               |
| scale-in   | rapid        | decelerate | Size in (transform)                |
| fade-out   | rapid        | standard   | Opacity out                        |
| fade-in    | swift        | standard   | Opacity in                         |
| slide-out  | swift        | accelerate | Positional out (transform)         |
| slide-in   | speedy       | decelerate | Positional in (transform)          |
| emphasis   | quick        | sharp      | Snappy attention cues              |
| collapse   | speedy       | accelerate | Collapsing regions                 |
| expand     | prompt       | standard   | Expanding regions                  |
| shrink     | brisk        | accelerate | Shrinking elements                 |
| grow       | prompt       | standard   | Growing elements                   |
| pulse      | brisk        | standard   | Repeating attention pulse          |
| smooth     | moderate     | standard   | Smooth, sustained transitions      |
| flip       | measured     | standard   | Flip/rotate transforms             |
| fluid      | steady       | standard   | Long, fluid motion                 |
| deliberate | slow         | standard   | Slowest, most deliberate motion    |

### Guidelines

- Use motion to communicate state, hierarchy, and spatial change — not decoration.
- Keep default motion calm, subtle, and responsive; use expressive motion sparingly.
- Use short durations for micro-interactions and longer durations for overlays or layout changes.

## Iconography

The icon system separates **styling** (defined by the design system) from **content** (defined by the `@progress/kendo-svg-icons` package). Icons inherit text color via `fill: currentColor` and scale proportionally.

### Sizing

All icon sizes derive from a single base (`base-px` = 16px, exposed as an icon-size base token), so changing the base rescales every icon proportionally. Each level in the `icons.sizing` map is a `scale` multiplier applied to that base.

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
- Do change one base token (for example `primary`) to rebrand all components that reference it at once.
- Do maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text and UI elements).
- Do use the spacing scale consistently — avoid arbitrary pixel values that break rhythm.
- Do keep one border-radius family per view context.
- Do ensure focus indicators are always visible and never removed without an equivalent replacement.
- Do pair state colors with icons or text labels — never signal state with color alone.
- Don't use `surface` and `app-surface` interchangeably — they serve different elevation roles.
- Don't override derived color variants (hover, active, etc.) unless you need precise control — let the relative oklch system compute them.
- Don't rely on an icon alone for meaning — pair it with a text label or provide a tooltip description.
