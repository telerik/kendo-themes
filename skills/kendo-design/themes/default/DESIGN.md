---
version: alpha
name: Kendo Default
theme: default
description: The Kendo Default theme — the original Kendo design language. As of theme v14.0.0 it is in maintenance mode and Meridian is the recommended default; existing Default-theme applications remain fully supported. A warm, high-energy identity anchored by a signature red-orange primary, built on perceptually uniform oklch color space.
colors:
  app-surface: "oklch(100% 0 0deg)"
  on-app-surface: "oklch(36% 0 0deg)"
  subtle: "oklch(51.03% 0 0deg)"
  surface: "oklch(98.51% 0 0deg)"
  surface-alt: "oklch(100% 0 0deg)"
  border: "oklch(0% 0 0deg / 0.08)"
  border-alt: "oklch(0% 0 0deg / 0.16)"
  base: "oklch(97.02% 0 0deg)"
  primary: "oklch(69.85% 0.1923 27.19deg)"
  secondary: "oklch(51.03% 0 0deg)"
  tertiary: "oklch(69.91% 0.157 238.99deg)"
  info: "oklch(51.78% 0.2301 261.43deg)"
  success: "oklch(67.45% 0.2171 139.99deg)"
  warning: "oklch(84.22% 0.1727 84.58deg)"
  error: "oklch(61.07% 0.2435 30.2deg)"
  inverse: "oklch(36% 0 0deg)"
  series: "oklch(69.85% 0.1923 27.19deg)"
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
  line-height: { xs: 1, sm: 1.25, md: 1.4286, lg: 1.5 }
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
  1: "0 2px 3px rgba(0,0,0,.04)"
  2: "0 4px 6px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.12)"
  3: "0 6px 8px rgba(0,0,0,.08), 0 4px 16px rgba(0,0,0,.12)"
  4: "0 8px 10px rgba(0,0,0,.12), 0 4px 16px rgba(0,0,0,.12)"
  5: "0 14px 16px rgba(0,0,0,.24), 0 4px 16px rgba(0,0,0,.12)"
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

# Kendo Design System — Default Theme

> **Status:** The Default theme is the original Kendo design language. As of theme **v14.0.0** it is in **maintenance mode** — no new visual features are planned, but it remains fully supported. **Meridian** is the recommended default for new projects. Migrate to Meridian when it fits your roadmap; if your application already ships on Default, this spec captures its rules.

## Overview

The Default theme is warm, confident, and energetic. The aesthetic pairs clean neutral surfaces with a signature red-orange primary that gives calls-to-action strong visual pull. It is built for data-rich professional applications that need clear hierarchy and unambiguous action affordances. Prioritize clarity and hierarchy: use color to signal state and function, not decoration.

Colors are defined in oklch for perceptual uniformity. All derived color variants (hover, active, subtle, emphasis, on-color) are computed automatically from the base tokens at runtime — only base values need to be set.

## Colors

The color system is built on **semantic tokens** — named roles that carry intent rather than raw hue. Set a single base color (e.g., `primary`) and all interactive variants auto-compute from it via relative oklch transforms in the browser.

### Surfaces & Structure

- **app-surface** — The root application background. Pure white.
- **surface** — Component surfaces: cards, panels, inputs. A barely-perceptible neutral tint distinguishes it from the page.
- **surface-alt** — Alternate surface (pure white, same as `app-surface`). Used inside components that already sit on a `surface` fill, creating a secondary level of contrast without introducing a new color.
- **border** — Default borders as translucent black at 8% opacity, so they layer on any surface.
- **border-alt** — Stronger border variant at 16% opacity for emphasis.
- **base** — Neutral fill for non-semantic elements (toolbars, table headers, secondary buttons).
- **subtle** — Muted mid-gray text for placeholders, captions, and disabled labels.
- **inverse** — Deep charcoal for high-contrast inverted contexts.

### Semantic Colors

Each semantic color generates a full variant set: `-subtle`, `-subtle-hover`, `-subtle-active`, base, `-hover`, `-active`, `-emphasis`, `-on-subtle`, `on-{name}`, `-on-surface`. Only the base token is defined; the rest are derived.

- **primary** `oklch(69.85% 0.1923 27.19deg)` — The signature Default red-orange. Used for the single most important action on a view and the theme's core brand accent.
- **secondary** `oklch(51.03% 0 0deg)` — A neutral mid-gray. Used for secondary actions and low-emphasis controls.
- **tertiary** `oklch(69.91% 0.157 238.99deg)` — A bright azure blue. Used for decorative highlights, tertiary actions, and badges.
- **info** `oklch(51.78% 0.2301 261.43deg)` — A vivid blue. Used for informational messages, links, and focus indicators.
- **success** `oklch(67.45% 0.2171 139.99deg)` — A bright green. Used for positive outcomes, confirmations, and valid states.
- **warning** `oklch(84.22% 0.1727 84.58deg)` — A high-lightness amber-gold. Used for caution messages and states requiring attention.
- **error** `oklch(61.07% 0.2435 30.2deg)` — A saturated red. Used for destructive actions, validation errors, and critical alerts.

> Note the Default palette leans warm — `primary` and `error` share the red end of the spectrum. When both appear together (e.g., a destructive primary action), disambiguate with iconography and text, not color alone.

### Data Visualization (Series)

Chart colors derive from a single `series` base (`oklch(69.85% 0.1923 27.19deg)`) which generates six evenly-distributed hues (`series-a` through `series-f`). Each series produces five variants: base, bold, bolder, subtle, subtler. Override the `series` base color token to re-hue the entire palette at once.

## Typography

The Default theme uses the **system UI font stack** (`system-ui, -apple-system, "Segoe UI", Roboto, …`) rather than a bundled webfont — text renders in the platform's native typeface for fast, familiar reading. A monospace stack (SFMono-Regular, Menlo, Monaco, Consolas) is used for code, data, and technical content.

The type scale is intentionally compact, ranging from `0.75rem` (12px) to `1.25rem` (20px), suited for data-dense professional interfaces. Larger display sizes are left to the consumer's brand typography.

### Scale Logic

- **Headings** (`heading-sm` through `heading-xl`) — Semi-bold (600) for structural hierarchy. Used for section titles, card headers, and navigation landmarks.
- **Body** (`body-xs` through `body-md`) — Regular weight (400) with comfortable line-height (1.25–1.4286). The default reading text. Body text sits at the `0.875rem` (14px) base — the classic Kendo Default reading size.
- **Labels** (`label-sm` through `label-lg`) — Medium weight (500) for single-line scannable text: form labels, table headers, button text, and metadata.
- **Code** — Monospace at `0.875rem` for inline code, data cells, and technical identifiers.

### Available Sizes

| Token | Size | Weight | Line-Height | Use |
|---|---|---|---|---|
| `heading-xl` | 1.25rem | 600 | 1.4286 | Page titles |
| `heading-lg` | 1rem | 600 | 1.4286 | Section headings |
| `heading-md` | 0.875rem | 600 | 1.4286 | Card/panel titles |
| `heading-sm` | 0.75rem | 600 | 1.25 | Sub-headings, group labels |
| `body-md` | 0.875rem | 400 | 1.4286 | Primary body text |
| `body-sm` | 0.75rem | 400 | 1.25 | Secondary body text, descriptions |
| `body-xs` | 0.625rem | 400 | 1.25 | Captions, footnotes |
| `label-lg` | 0.875rem | 500 | 1.4286 | Prominent labels, navigation |
| `label-md` | 0.75rem | 500 | 1.25 | Form labels, table headers, buttons |
| `label-sm` | 0.625rem | 500 | 1.25 | Compact labels, badges, chips |
| `code` | 0.875rem | 400 | 1.25 | Code, data, monospace content |

### Weight Scale

The full weight spectrum is available via CSS variables: thin (100), extra-light (200), light (300), normal (400), medium (500), semibold (600), bold (700), extra-bold (800), black (900).

### Letter Spacing

For fine typographic control: `tightest` (-0.15px), `tighter` (-0.1px), `tight` (-0.5px), `normal` (0px), `wide` (0.5px), `wider` (0.1px), `widest` (0.15px).

## Layout

Spacing follows a proportional scale with a **0.25rem (4px) base unit**. Every spacing token is a multiplier of this base, so changing the spacing base token rescales the entire system proportionally.

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

Hierarchy is conveyed primarily through tonal surfaces and borders. Shadows are used only where elements genuinely float above the page. The Default theme uses **neutral black shadows** across **5 elevation levels**:

| Level | Value | Use |
|---|---|---|
| 1 | `0 2px 3px rgba(0,0,0,.04)` | Cards, inputs, inline surfaces |
| 2 | `0 4px 6px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.12)` | Popovers, dropdown menus |
| 3 | `0 6px 8px rgba(0,0,0,.08), 0 4px 16px rgba(0,0,0,.12)` | Floating panels, tooltips |
| 4 | `0 8px 10px rgba(0,0,0,.12), 0 4px 16px rgba(0,0,0,.12)` | Drawers, side panels |
| 5 | `0 14px 16px rgba(0,0,0,.24), 0 4px 16px rgba(0,0,0,.12)` | Modals, dialogs |

Shadows use pure black (`rgb(0,0,0)`) at low opacity — neutral on any surface color. Each level increases blur, spread, and opacity for progressive depth. (Meridian, by contrast, uses a warm-cool gray shadow base with layered `-y` offsets; this is one of the clearest visual differences between the two themes.)

## Shapes

The border-radius system derives from a single **base value of `0.25rem` (4px)**. All radius tokens are computed as multipliers of this base, so adjusting the radius base token rescales every corner consistently. The Default theme's 4px base gives it slightly crisper corners than Meridian's 6px base.

### Scale

| Token | Computed | Use |
|---|---|---|
| `none` | 0px | Sharp corners (tables, toolbars, dividers) |
| `xs` | 0.0625rem (1px) | Micro-elements |
| `sm` | 0.125rem (2px) | Checkboxes, compact controls |
| `md` | 0.25rem (4px) | Buttons, inputs, cards — the everyday default |
| `lg` | 0.375rem (6px) | Menus, dialog corners |
| `xl` | 0.5rem (8px) | Modal containers, large cards |
| `xxl` | 0.75rem (12px) | Feature panels, hero sections |
| `xxxl` | 1rem (16px) | Full-bleed sections |
| `full` | calc(0.25rem * 9999) | Pills, avatars, circular elements |

### Guidelines

- **Default:** Components use `md` (4px) unless they have a specific reason for a different radius.
- **Consistency:** Keep one radius family per context. Don't mix sharp and rounded corners in the same toolbar or card group.
- **Nesting:** Inner elements should use a radius smaller than or equal to their container.

## Motion

Motion is functional — it clarifies transitions and maintains spatial awareness, never decorates. The system provides a duration scale, easing curves, and composite transition presets.

### Durations

All durations respect a global duration-override token. When set (or when `prefers-reduced-motion` is active), all tokens resolve to that value — set it to `0.01ms` to disable all motion.

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
| `timely` | 450ms | Coordinated multi-element reveals |
| `moderate` | 500ms | Full-screen transitions |
| `measured` | 550ms | Deliberate, staged transitions |
| `steady` | 600ms | Longer panel/page movements |
| `leisurely` | 700ms | Relaxed, unhurried motion |
| `slow` | 800ms | Background animations |
| `languid` | 900ms | Ambient, decorative motion |
| `sluggish` | 1000ms | Longest ambient loops (use rarely) |

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

Composite tokens combining a duration + easing for common patterns. Presets are grouped by intent — **fast** (speed & responsiveness), **expressive** (personality), **calm** (subtle & natural), **visibility** (appear/disappear), and **size** (scale changes):

- **`instant`** — instant (0ms) linear (immediate, no perceptible motion)
- **`rapid`** — quick (150ms) decelerate (hover, focus changes)
- **`snappy`** — swift (250ms) decelerate (toggles, selections)
- **`energetic`** — swift (250ms) elastic (springy micro-interactions)
- **`bouncy`** — speedy (300ms) bounce (attention, success)
- **`subtle`** — brisk (350ms) standard (slow reveals)
- **`gentle`** — prompt (400ms) accelerate (soft dismissals)
- **`enter`** — speedy (300ms) decelerate (elements appearing)
- **`exit`** — rapid (200ms) accelerate (elements leaving)
- **`settle`** — brisk (350ms) decelerate (elements coming to rest)
- **`scale-out`** — quick (150ms) accelerate (shrink away)
- **`scale-in`** — rapid (200ms) decelerate (grow into view)
- **`fade-out`** — rapid (200ms) standard (opacity out)
- **`fade-in`** — swift (250ms) standard (opacity in)
- **`slide-out`** — swift (250ms) accelerate (positional exit)
- **`slide-in`** — speedy (300ms) decelerate (positional entry)
- **`emphasis`** — quick (150ms) sharp (snappy state emphasis)
- **`collapse`** — speedy (300ms) accelerate (expanders closing)
- **`expand`** — prompt (400ms) standard (expanders opening)
- **`shrink`** — brisk (350ms) accelerate (size reduction)
- **`grow`** — prompt (400ms) standard (size increase)
- **`pulse`** — brisk (350ms) standard (rhythmic attention)
- **`smooth`** — moderate (500ms) standard (long, even transitions)
- **`flip`** — measured (550ms) standard (card/tile flips)
- **`fluid`** — steady (600ms) standard (continuous, flowing motion)
- **`deliberate`** — slow (800ms) standard (slowest, most pronounced)

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

All sizes derive from a 16px base icon-size token. Change the base to rescale every icon proportionally.

### Guidelines

- Icons inherit their parent's text color — use semantic color tokens to tint them.
- Pair icons with text labels for clarity; never rely on an icon alone for meaning.
- Use `md` (16px) as the default inline icon size. Step up to `lg` or `xl` for standalone or decorative icons.

## Do's and Don'ts

- Do use the semantic color system — reference `primary`, `error`, `surface` rather than hard-coding oklch values.
- Do change one base token (e.g., `primary`) to rebrand all components that reference it at once.
- Do maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text and UI elements).
- Do use the spacing scale consistently — avoid arbitrary pixel values that break the rhythm.
- Do keep one border-radius family per view context.
- Do honor `prefers-reduced-motion` — all motion tokens already respect it automatically.
- Do ensure focus indicators are always visible and never color-only.
- Do pair state colors with icons or text labels — never signal state with color alone (especially important here, where `primary` and `error` are both warm reds).
- Don't mix sharp (0px) and rounded corners on elements at the same hierarchy level.
- Don't use `surface` and `app-surface` interchangeably — they serve different elevation roles.
- Don't override derived color variants (hover, active, etc.) unless you need precise control — let the relative oklch system compute them.
- Don't use elevation shadows on flat elements (e.g., inline text, list items) — shadows signal floating layers only.
- Don't skip spacing steps for alignment — if `spacing-4` is too small and `spacing-8` is too large, use `spacing-6`, not an arbitrary value.
- Don't rely on an icon alone for meaning — always pair with a text label.
- Don't treat this as the recommended starting point for new projects — new work should adopt **Meridian**. Use this spec to keep existing Default-theme applications consistent.
