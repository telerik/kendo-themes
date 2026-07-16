---
version: alpha
name: Kendo Fluent
theme: fluent
status: placeholder
description: PLACEHOLDER — the Kendo Fluent theme DESIGN.md has not been authored yet. Until it exists, agents should fall back to the Meridian spec (themes/meridian/DESIGN.md), which is the recommended default.
---

# Kendo Design System — Fluent Theme (TODO)

> **Status: PLACEHOLDER — not yet authored.**
> This file reserves the slot for the **Fluent** theme spec. It intentionally carries **no token frontmatter** so nothing consumes half-defined values. Until it is filled in, resolve to `themes/meridian/DESIGN.md` (the recommended default) or, for legacy Default-theme apps, `themes/default/DESIGN.md`.

## How to author this file

Follow the same structure as `themes/default/DESIGN.md` (YAML token frontmatter + shared markdown body). Extract the **resolved token values** from this repo — do not hand-write or guess them:

- **Colors** — `packages/fluent/scss/core/color-system/_swatch.scss` (the `$kendo-colors` map; anchor values are the non-`oklch(from …)` entries).
- **Border radius** — `packages/fluent/scss/core/border-radii/index.scss` (`$kendo-border-radius-base` and its multipliers).
- **Typography** — `packages/fluent/scss/core/typography/index.scss` (font stack + size/weight/line-height scale).
- **Spacing** — `packages/fluent/scss/core/spacing/index.scss` (usually the shared 0.25rem base scale).
- **Elevation** — `packages/fluent/scss/core/elevation/index.scss` (box-shadow levels 1–5).
- **Narrative / usage guidance** — the external `kendo-design-system` docs:
  - `apps/docs/content/pages/themes/kendo-themes/fluent/{index,theme-variables,customization,swatches}/index.mdx`
  - `apps/docs/content/pages/foundation/{color,spacing,typography,elevation,border-radius,motion}/**/index.mdx`

Then write the body describing **why** — the palette character, radius feel, elevation style, and how Fluent differs from Meridian and Default. Keep the Do's/Don'ts and accessibility contracts consistent with the other theme specs.

## Sections to fill in

- [ ] Overview (aesthetic character of Fluent)
- [ ] Colors — surfaces, semantic tokens, series
- [ ] Typography — font stack + scale
- [ ] Layout — spacing scale + rhythm
- [ ] Elevation & Depth — shadow levels
- [ ] Shapes — border-radius scale
- [ ] Motion — durations, easings, presets
- [ ] Iconography — sizing + guidelines
- [ ] Do's and Don'ts
