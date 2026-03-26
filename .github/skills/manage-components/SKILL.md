---
name: manage-components
description: Create or update a Kendo UI component across kendo-themes packages. For new components, scaffolds core skeleton with null variables, theme overrides for targeted themes, HTML spec, templates, visual tests, and unit tests. For existing components, audits the current state, produces a change plan, and applies SCSS variable changes, layout/theme updates, HTML spec modifications, and test additions. Use this skill when the user wants to add a new component, update a component's design, change styling values, add new states or options, or align a component with design assets.
argument-hint: "[component-name] e.g. chip, button, info-bar"
---

# Component

Create or update a Kendo UI component across the monorepo.

Read [../_shared/component-context.md](../_shared/component-context.md) for naming conventions, theme paths, and common gotchas.

## When to use

- **New component** — "add an InfoBar component", "create SCSS and HTML for a Rating"
- **Update component** — "update the chip based on this design", "change button padding", "add a `warning` state to badge"
- **Partial update** — "just update the chip variables in default and fluent"

For individual sub-tasks without the full orchestration, use the sub-skills directly: `scss-variables`, `scss-styles`, `html-spec`, `html-template`, `html-test`, `html-a11y`.

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component name** | Yes | kebab-case (e.g., `chip`, `info-bar`, `smart-badge`) |
| **Operation** | No | `create` or `update`. Inferred from whether the component exists. |
| **Target themes** | No | `all` or a list like `default, fluent`. Default: `all` for new, **ask** for updates. |
| **Assets / design reference** | For updates | Figma link, image, design tokens, or text description of changes |
| **Description** | For new | One sentence describing what the component does |
| **Dependencies** | No | Other components this depends on (e.g., `icon`, `button`) |
| **HTML element** | No | Root HTML element (`div`, `span`, `button`, `nav`). Default: `div` |
| **Has size** | No | Whether component supports `sm`/`md`/`lg` sizes. Default: `true` |
| **Has theme color** | No | Whether component supports theme colors. Default: `false` |
| **Key variables** | No | e.g., bg, text, border, padding, font-size |
| **States** | No | e.g., hover, focus, active, disabled, selected |
| **Options** | No | e.g., size, fillMode, themeColor, rounded |
| **Scope** | No | For updates: `variables`, `layout`, `theme`, `html`, `tests`, or `all`. Default: `all` |

## Procedure — New Component

### Step 1: Derive naming constants

Use the naming derivation table from [../_shared/component-context.md](../_shared/component-context.md).

### Step 2: Research a reference component

Find an existing component of similar complexity in `packages/core/scss/components/`. See reference component guidance in [../_shared/component-context.md](../_shared/component-context.md).

If the user doesn't specify variables/states/options, use reasonable defaults based on the reference.

### Step 3: Create SCSS variables

Use the [manage-scss-variables skill](../manage-scss-variables/SKILL.md) to create variables in core (null `!default`) and all targeted themes (concrete values + `@forward` maps).

### Step 4: Create SCSS styles, module, and register

Use the [manage-scss-styles skill](../manage-scss-styles/SKILL.md) to:

- Create layout and theme mixins in core and targeted themes
- Create `_index.scss` in each targeted theme
- Register the component in each theme's `index.scss`

### Step 5: Create HTML spec

Use the [manage-html-specs skill](../manage-html-specs/SKILL.md) to create `constants.ts`, `{component}.spec.tsx`, and `index.ts`.

### Step 6: Create HTML templates

Use the [manage-html-templates skill](../manage-html-templates/SKILL.md) to create at least one default template.

### Step 7: Create visual tests

Use the [manage-html-tests skill](../manage-html-tests/SKILL.md) to create test files covering default, states, sizes, and fill modes as applicable.

### Step 8: Create unit test

Create `units/default/{component}.test.ts` using the template from [../_shared/file-templates.md](../_shared/file-templates.md).

### Step 9: Validate

Run the validation steps from [../_shared/component-context.md](../_shared/component-context.md).

## Procedure — Update Component

### Step 1: Derive naming constants

Use the naming derivation table from [../_shared/component-context.md](../_shared/component-context.md).

### Step 2: Audit the current state

Read and catalog the component's current implementation across all targeted packages:

| File | Path | Purpose |
|------|------|---------|
| Core variables | `packages/core/scss/components/{component}/_variables.scss` | Null declarations — source of truth |
| Core layout | `packages/core/scss/components/{component}/_layout.scss` | Structural mixin |
| Core theme | `packages/core/scss/components/{component}/_theme.scss` | Visual mixin |
| Theme variables | `packages/{theme}/scss/{component}/_variables.scss` | Concrete values + `@forward` map |
| Theme layout/theme | `packages/{theme}/scss/{component}/_layout.scss`, `_theme.scss` | Theme-specific overrides |
| Theme index | `packages/{theme}/scss/{component}/_index.scss` | Entry point and dependencies |
| HTML spec | `packages/html/src/{component}/{component}.spec.tsx` | States, options, render function |
| HTML templates | `packages/html/src/{component}/templates/*.tsx` | Template variants |
| HTML tests | `packages/html/src/{component}/tests/*.tsx` | Visual test scenarios |

Extract: variable inventory, states, options, CSS classes, dependencies.

### Step 3: Analyze design assets and produce change plan

Compare assets against current state. Categorize each change:

| Change type | Example | Affected files |
|-------------|---------|----------------|
| **New variable** | Add `$kendo-chip-gap` | Core + theme `_variables.scss`, `@forward` map |
| **Value change** | padding `k-spacing(2)` → `k-spacing(3)` | Theme `_variables.scss` only |
| **New state** | Add `selected` | Core `_theme.scss`, HTML spec, test file |
| **New option** | Add `size: 'xlarge'` | Core + theme `_variables.scss`, HTML spec, test file |
| **Layout change** | `inline-flex` → `flex` | Core `_layout.scss` |
| **Visual change** | Add box-shadow on focus | Core `_theme.scss`, theme variables |
| **HTML structure** | Add wrapper element | HTML spec, templates, tests |

### Step 4: Present the change plan

Present the plan and **wait for user confirmation** before editing:

```
## Change Plan: {component}
### Target themes: {theme list}
### Changes:
1. **[Type]** — {description}
   - Files: {list}
   - Details: {edits}
### Summary: Variables +N/~N/-N, Files modified N, Files created N
```

### Step 5: Apply variable changes

Use the [manage-scss-variables skill](../manage-scss-variables/SKILL.md). Follow the checklist in [references/update-checklist.md](references/update-checklist.md).

### Step 6: Apply style and module changes

Use the [manage-scss-styles skill](../manage-scss-styles/SKILL.md) for layout, theme, and `_index.scss` changes.

### Step 7: Apply HTML spec changes

Use the [manage-html-specs skill](../manage-html-specs/SKILL.md) for structure, state, or option changes.

### Step 8: Update or add templates

Use the [manage-html-templates skill](../manage-html-templates/SKILL.md) for new or modified template variants.

### Step 9: Update or add visual tests

Use the [manage-html-tests skill](../manage-html-tests/SKILL.md) to ensure coverage for every visible change.

### Step 10: Validate

Run the validation steps from [../_shared/component-context.md](../_shared/component-context.md).

### Step 11: Report

| Metric | Count |
|--------|-------|
| Themes updated | N |
| Variables added / changed / removed | N / N / N |
| Core files modified | N |
| Theme files modified | N |
| HTML files modified | N |
| Test files added/modified | N |
| SCSS compilation | PASS/FAIL |
| TypeScript check | PASS/FAIL |

## Gotchas

See shared gotchas in [../_shared/component-context.md](../_shared/component-context.md). Additionally:

- **New components:** check `packages/{theme}/scss/all.scss` for correct alphabetical import location. When target themes is not `all`, always create core and HTML files regardless.
- **Updates — audit first:** never assume the current state. Read the files first; components vary in complexity.
- **Don't touch themes the user didn't ask for** — if they said "update default and fluent", leave the rest alone.
- **Preserve existing variable order** — add new variables near related ones.
- **Check calc/derived variables** — some variables depend on others. Changing a base may require updating derived ones.
- **HTML spec changes cascade** — changing the render function affects all templates and tests.
- **Don't remove variables without deprecation** — confirm breaking change with user first.
