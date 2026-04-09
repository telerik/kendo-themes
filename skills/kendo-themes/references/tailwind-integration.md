# Tailwind CSS Integration

Kendo and Telerik components and Tailwind CSS work side-by-side with no conflicts. Use Tailwind for layout and app-level styles, Kendo theme for component styling. The key challenge is **visual consistency** — aligning design tokens so your custom UI and your components share the same colors, spacing, and typography.

There are two approaches depending on which system owns the design tokens:

| Approach | When to use | Source of truth |
|----------|-------------|-----------------|
| **Tailwind-first** | You already have a Tailwind theme and want components to match it | Tailwind `@theme` variables |
| **Kendo-first** | You start from a Kendo swatch and want your layout to match it | Kendo CSS custom properties |

## Setup

Import both independently — the Kendo theme CSS and your Tailwind stylesheet:

```ts
import "@progress/kendo-theme-<theme>/dist/all.css";
import "./tailwind.css";
```

## Tailwind-First (Tailwind Dictates Kendo)

If your Tailwind `@theme` already defines your design tokens, override Kendo CSS custom properties to follow them:

```css
:root {
  --kendo-<token>: var(--<tailwind-token>);
}
```

Use the Semantic Mapping Guide below (read right-to-left: find the Kendo token you want to override, point it at your Tailwind equivalent).

## Kendo-First (Kendo Dictates Tailwind)

If you start from a Kendo swatch and want your Tailwind layout to match, map your `@theme` variables to Kendo CSS custom properties:

```css
@theme {
  --<tailwind-token>: var(--kendo-<token>);
}
```

Use the Semantic Mapping Guide below (read left-to-right: find your Tailwind token, point it at the Kendo equivalent).

## Semantic Mapping Guide

The table works for both directions — read left-to-right for Kendo-first, right-to-left for Tailwind-first:

| Tailwind Token  | Kendo Equivalent               | Role                      |
| --------------- | ------------------------------ | ------------------------- |
| `background`    | `--kendo-color-app-surface`    | App-level background      |
| `foreground`    | `--kendo-color-on-app-surface` | Primary text color        |
| `muted`         | `--kendo-color-subtle`         | De-emphasized content     |
| `card`          | `--kendo-color-surface`        | Card/component background |
| `border`        | `--kendo-color-border`         | Default border color      |
| `primary`       | `--kendo-color-primary`        | Brand/action color        |
| `destructive`   | `--kendo-color-error`          | Destructive actions       |
| `accent`        | `--kendo-color-tertiary`       | Accent/highlight          |
| `ring`          | `--kendo-color-primary`        | Focus ring color          |

## Best Practices

- **Single source of truth**: Pick one system to own the values, have the other reference them — never hardcode the same value in both
- **Don't duplicate values**: Point tokens in one direction (Tailwind → Kendo or Kendo → Tailwind), not both
- **Dark mode**: Override the source-of-truth variables in your dark mode scope (e.g. `.dark { ... }`) — the dependent system adapts automatically because it references the same custom properties

## Further Reading

- [Customization](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization)
- [Design Tokens](https://www.telerik.com/design-system/docs/foundation/guides/design-tokens)
