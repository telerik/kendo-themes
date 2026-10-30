---
name: manage-themes
description: Create or update anything SCSS in kendo-themes (core + theme packages) — component variables (null in core, concrete in themes, @forward maps, Fluent CSS custom properties, SassDoc), layout/theme mixins, _index.scss wiring and theme registration, design system foundation tokens (spacing, color-system, typography, elevation, border-radii, motion, z-index), theme packages and swatches, and the end-to-end new/updated component workflow (SCSS + HTML + unit tests). Use this skill when the user wants to add/change/remove a component variable, change a component's layout or visual styles, add state styles, register a component, add/change a design token, create a theme or swatch, apply broad theme changes, or create/update a component from a design.
argument-hint: "[component|module|theme] [change] e.g. chip gap, spacing 2.5, new chip component"
metadata:
  internal: true
---

# Themes (SCSS)

Create or update SCSS in `packages/core` and the theme packages (`default`, `bootstrap`, `material`, `classic`, `fluent`, `meridian`).

Read [references/context.md](references/context.md) for naming conventions, theme paths, theme value conventions, and validation steps.

## Procedure

Classify the request and follow the matching reference. Many changes touch more than one (a new state usually needs variables first, then styles).

| Change | Reference |
|--------|-----------|
| Add/change/remove/deprecate a component variable | [references/variables.md](references/variables.md) |
| Layout/theme mixins, `_index.scss` wiring, theme registration | [references/styles.md](references/styles.md) |
| Design system tokens in `packages/core/scss/{module}/` | [references/foundation-modules.md](references/foundation-modules.md) |
| New theme, swatches, theme-wide overrides | [references/theme-package.md](references/theme-package.md) |
| New component, or a component update spanning SCSS + HTML | [references/component.md](references/component.md) (+ [update-checklist.md](references/update-checklist.md), [file-templates.md](references/file-templates.md)) |

For HTML specs, templates, visual tests, or accessibility, use the `manage-specs` skill. The component workflow hands off to it for the HTML half.

**Target themes:** if the user didn't name them, ask. Don't touch themes they didn't request.

## Validate

```bash
npm run lint:styles 2>&1
npm run sass 2>&1
```

After changing variables, regenerate docs with `npm run docs` and commit them separately as `chore: regen docs`.

## Gotchas

- **Core holds no values** — core variables are `null !default` and core mixins only reference `$kendo-*` variables. Concrete values live in themes.
- **`@forward` maps must stay complete** — a missing entry silently leaves the variable `null`.
- **Fluent wraps every value** in `var(--kendo-{var-name}, {fallback})`.
- **Order matters** — preserve variable grouping and the dependency order in theme `index.scss`; never alphabetize.
