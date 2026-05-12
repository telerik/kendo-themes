# Styling Individual Components

When global design tokens aren't enough, you can target specific components using their CSS selector structure. This reference explains the selector framework and how to compose overrides.

Use [`../components.json`](../components.json) as the structured metadata source for available components, their CSS class names, states, and options.

For targeted lookup, run these helper scripts from the skill folder (e.g. `cd skills/kendo-themes` first):

- `node scripts/list_components.mjs`
- `node scripts/get_components.mjs Button`
- `node scripts/get_components.mjs Button Appbar Avatar`

The JSON is intentionally compact:

- `_component` defines how to parse each component tuple
- `_option` defines how to parse each option tuple
- `components` stores per-component tuples with optional trailing items omitted
- `theme_options` stores the shared option vocabularies

It does **not** try to encode every possible selector. Agents should combine the metadata with the selector rules below to compose the correct CSS for any component override.

## Component Metadata Format

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
        ["themeColor", ["base", "error", "info", "inverse", "primary", "secondary", "success", "tertiary", "warning"]]
      ]
    ]
  },
  "theme_options": {
    "fillMode": ["clear", "flat", "link", "outline", "solid"],
    "rounded": ["full", "large", "medium", "none", "small"],
    "size": ["large", "medium", "small", "xlarge", "xsmall", "xxlarge", "xxxlarge"],
    "themeColor": ["base", "error", "info", "inherit", "inverse", "primary", "secondary", "success", "tertiary", "warning"]
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

The metadata gives you the component's class name, states, and options. These rules explain how to turn that into CSS selectors for styling.

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

## Component Lookup Workflow

For specific component styling:

1. Use `scripts/list_components.mjs` to find the component name.
2. Use `scripts/get_components.mjs ComponentName` to get its class name, states, and options. The lookup tolerates minor casing and separator differences in component names.
3. Read the tuple using `_component` (index 0 = `className`, 1 = `states`, 2 = `options`).
4. Compose selectors using the rules above.
5. Use design tokens (`--kendo-color-*`, `--kendo-spacing-*`) in your override values.

If helper scripts are unavailable, fall back to reading `components.json` directly. Use `theme_options` as the shared vocabulary for option values.

## Important Guardrails

- Do not guess undocumented states or options.
- Do not invent part selectors from naming conventions alone.
- Do not rely on repo-local source paths; this skill is meant to travel with consumer repos.
- Prefer design tokens such as `--kendo-color-*` and `--kendo-spacing-*` inside overrides instead of hardcoded values.
