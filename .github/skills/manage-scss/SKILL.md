---
name: manage-scss
description: Create or update SCSS in kendo-themes — component variables (null in core, concrete in themes, @forward maps, Fluent CSS custom properties, SassDoc), component layout/theme mixins, _index.scss wiring and theme registration, and design system foundation modules in core (spacing, color-system, typography, elevation, border-radii, motion, z-index). Use this skill when the user wants to add/change/remove/deprecate a component variable, change a component's layout or visual styles, add state styles, wire up dependencies, register a component, or add/change a design token.
argument-hint: "[component|module] [change] e.g. chip gap, button selected state, spacing 2.5"
metadata:
  internal: true
---

# SCSS

Create or update component SCSS and design system foundation modules in core and theme packages.

Read [../_shared/component-context.md](../_shared/component-context.md) for naming conventions, theme paths, theme value conventions, and validation steps.

## When to use

- **Variables** — "add a gap variable to the chip", "change button padding to spacing(3) in default"
- **Styles** — "change chip from inline-flex to flex", "add selected state styles to badge", wiring `_index.scss`, registering in a theme's `index.scss`
- **Foundation tokens** — "add a spacing step", "change the elevation scale", "add a z-index layer"

Not for HTML specs/templates/tests (use `manage-html`), new themes or swatches (use `manage-theme`), or orchestrating a full component across SCSS + HTML (use `manage-components`).

## Procedure

Classify the request and follow the matching reference. Many changes touch more than one (a new state usually needs variables first, then styles).

| Change | Reference |
|--------|-----------|
| Add/change/remove/deprecate a component variable | [references/variables.md](references/variables.md) |
| Layout/theme mixins, `_index.scss` wiring, theme registration | [references/styles.md](references/styles.md) |
| Design system tokens in `packages/core/scss/{module}/` | [references/foundation-modules.md](references/foundation-modules.md) |

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
