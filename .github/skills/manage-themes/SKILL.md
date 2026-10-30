---
name: manage-themes
description: Create or update anything SCSS in kendo-themes (core + theme packages) — component variables (null in core, concrete in themes, @forward maps, Fluent CSS custom properties, SassDoc), layout/theme mixins, _index.scss wiring and theme registration, design system foundation tokens (spacing, color-system, typography, elevation, border-radii, motion, z-index), theme packages and swatches, and the end-to-end new/updated component workflow (SCSS + HTML + unit tests). Use this skill when the user wants to add/change/remove a component variable, change a component's layout or visual styles, add state styles, register a component, add/change a design token, create a theme or swatch, apply broad theme changes, or create/update a component from a design.
argument-hint: "[component|module|theme] [change] e.g. chip gap, spacing 2.5, new chip component"
metadata:
  internal: true
---

# Themes (SCSS)

Create or update SCSS in `packages/core` and the theme packages (`default`, `bootstrap`, `material`, `classic`, `fluent`, `meridian`).

**Always read [references/context.md](references/context.md) first** — naming, paths, value conventions, the core rules, and validation commands.

## Route the request

| Request | Reference |
|---------|-----------|
| Add/change/remove/deprecate a component variable | [references/variables.md](references/variables.md) |
| Layout/theme mixins, `_index.scss` wiring, registering a component | [references/styles.md](references/styles.md) |
| New state, option value, or structure on an existing component | [references/update-checklist.md](references/update-checklist.md) |
| Design system tokens in `packages/core/scss/{module}/` | [references/foundation-modules.md](references/foundation-modules.md) |
| New theme, swatches, theme-wide overrides | [references/theme-package.md](references/theme-package.md) |
| New component, or an update spanning SCSS + HTML | [references/component.md](references/component.md) |

Many requests touch more than one (a new state usually needs variables, then styles). For a new component, [references/file-templates.md](references/file-templates.md) has the boilerplate.

For HTML specs, templates, visual tests, or accessibility, use the `manage-specs` skill — the component workflow hands off to it.

## Before finishing

- Run the validation in [references/context.md](references/context.md#validation).
- After variable changes, run `npm run docs` and commit the regenerated docs separately as `chore: regen docs`.
