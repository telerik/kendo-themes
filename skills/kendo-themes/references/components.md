# Components

This reference explains the **component customization framework** for Kendo themes.

Use [`../components.json`](../components.json) as the structured metadata source.

For targeted lookup, prefer the helper scripts in the skill folder:

- `node skills/kendo-themes/list_components.mjs`
- `node skills/kendo-themes/get_components.mjs Button`
- `node skills/kendo-themes/get_components.mjs Button Appbar Avatar`

The JSON is intentionally compact:

- `_component` defines how to parse each component tuple
- `_option` defines how to parse each option tuple
- `components` stores per-component tuples with optional trailing items omitted
- `theme_options` stores the shared option vocabularies

It does **not** try to encode every possible selector. Agents should combine the metadata with the rules below.

## Source of Truth

Example shape:

```json
{
  "_component": ["className", "states", "options"],
  "_option": ["name", "values"],
  "components": {
    "Button": [
      "k-button",
      ["active", "disabled", "focus", "hover", "selected"],
      [
        ["fillMode", ["clear", "flat", "link", "outline", "solid"]],
        ["rounded", ["full", "large", "medium", "none", "small"]],
        ["size", ["large", "medium", "small"]],
        ["themeColor", ["base", "dark", "error", "info", "inverse", "light", "primary", "secondary", "success", "tertiary", "warning"]]
      ]
    ]
  },
  "theme_options": {
    "fillMode": ["clear", "flat", "link", "outline", "solid"],
    "rounded": ["full", "large", "medium", "none", "small"],
    "size": ["large", "medium", "small", "xlarge", "xsmall", "xxlarge", "xxxlarge"],
    "themeColor": ["base", "dark", "error", "info", "inherit", "inverse", "light", "primary", "secondary", "success", "tertiary", "warning"]
  }
}
```

Component tuple syntax:

```text
ComponentName: [className]
ComponentName: [className, states]
ComponentName: [className, states, optionTuples]
```

Example:

```text
Button: ["k-button", ["active", "disabled", "focus", "hover", "selected"], [["fillMode", ["clear", "flat", "link", "outline", "solid"]], ["size", ["large", "medium", "small"]]]]
```

Option tuple syntax:

```text
[optionName, values]
```

Compaction rule:

- if a component has no states and no options, keep only `[className]`
- if a component has states but no options, use `[className, states]`
- if a component has options, keep the full `[className, states, optionTuples]` form

This keeps the JSON valid while skipping trailing empty arrays.

## Selector Framework

The JSON gives the metadata. These rules explain how to turn it into selectors.

### Base selector

Use the tuple's first item (`className`) as the root selector:

```css
.k-button {
}
```

### State selector

States are shared `k-*` classes.

If the tuple contains `hover` in its state array, combine the base class and state like this:

```css
.k-button.k-hover {
}
```

General form:

```text
.{className}.k-{state}
```

### Option selectors

The tuple's third item lists which option families apply to the component and which values are valid for each one.

Use the component tuple first.

Use `theme_options` as the shared global vocabulary and fallback reference.

#### `themeColor`

```text
.{className}-{value}
```

Example:

```css
.k-button.k-button-primary {
}
```

#### `fillMode`

```text
.{className}-{value}
```

Example:

```css
.k-button.k-button-solid {
}
```

#### `size`

Size values use abbreviations:

- `xsmall` → `xs`
- `small` → `sm`
- `medium` → `md`
- `large` → `lg`
- `xlarge` → `xl`
- `xxlarge` → `xxl`
- `xxxlarge` → `xxxl`

General form:

```text
.{className}-{size-abbreviation}
```

Example:

```css
.k-button.k-button-md {
}
```

#### `rounded`

Rounded values use shared utility classes, not component-prefixed ones:

- `none` → `.k-rounded-none`
- `small` → `.k-rounded-sm`
- `medium` → `.k-rounded-md`
- `large` → `.k-rounded-lg`
- `full` → `.k-rounded-full`

Example:

```css
.k-button.k-rounded-full {
}
```

### Composing selectors

Combine the base selector with any supported options and states:

```css
.k-button.k-button-solid.k-button-primary.k-hover {
  background-color: var(--kendo-color-primary-active);
}
```

## Recommended Agent Workflow

1. Use `list_components.mjs` when you need the available component names.
2. Use `get_components.mjs` when you need only one or a few components.
3. Read the tuple using `_component`.
4. Use tuple index `0` for `className`.
5. If tuple index `1` exists, read it as supported `states`; otherwise states are empty.
6. If tuple index `2` exists, read it as supported option tuples; otherwise options are empty.
7. Read each option tuple using `_option` to get the option name and its allowed values.
8. Use `theme_options` as the shared global vocabulary when needed.
9. Compose selectors using the rules in this article.

If helper scripts are unavailable in a given environment, fall back to reading `components.json` directly.

## Important Guardrails

- Do not guess undocumented states or options.
- Do not invent part selectors from naming conventions alone.
- Do not rely on repo-local source paths; this skill is meant to travel with consumer repos.
- Prefer design tokens such as `--kendo-color-*` and `--kendo-spacing-*` inside overrides instead of hardcoded values.

## Examples

### Primary solid button hover

```css
.k-button.k-button-solid.k-button-primary.k-hover {
  background-color: var(--kendo-color-primary-active);
}
```

### Medium outlined badge

```css
.k-badge.k-badge-outline.k-badge-md {
  border-color: var(--kendo-color-border);
}
```

### Fully rounded avatar

```css
.k-avatar.k-rounded-full {
  box-shadow: var(--kendo-elevation-1);
}
```
