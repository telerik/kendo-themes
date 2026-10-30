# Update Checklists (SCSS)

SCSS checklists for adding states, options, or structure to an existing component. Variable add/change/remove steps are in [variables.md](variables.md); the HTML half is in [manage-specs → update-checklist.md](../../manage-specs/references/update-checklist.md).

## New state (e.g. `selected`, `invalid`)

- [ ] Core `_variables.scss`: state variables, e.g. `$kendo-{component}-selected-bg: null !default;`
- [ ] Core `_theme.scss`: `&:{pseudo}, &.k-{state} { … }` (class only when there is no pseudo-class, e.g. `&.k-selected`); `_layout.scss` too if the state changes structure
- [ ] Each targeted theme: values + `@forward` map entries; extend theme `_theme.scss` only if it overrides core

## New option value (e.g. size `xl`)

- [ ] Core `_variables.scss`: per-size variables (`$kendo-{component}-xl-padding-x: null !default;`) and the new key in the `$kendo-{component}-sizes` map (core `_layout.scss` iterates it with `@each`)
- [ ] Each targeted theme: values + `@forward` map entries

## Structure / layout change

- [ ] Core `_layout.scss`: new selectors or properties; new variables for any new customizable value
- [ ] Theme `_layout.scss`: only if the theme overrides the affected part (most just call `kendo-{component}--layout-base()`)
