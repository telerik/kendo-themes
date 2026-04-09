# Tailwind CSS Integration

Kendo and Telerik components and Tailwind CSS work side-by-side with no conflicts. Use Tailwind for layout and app-level styles, Kendo theme for component styling. The key challenge is **visual consistency** — aligning design tokens so your custom UI and your components share the same colors, spacing, and typography.

## Setup

Import both independently:

```ts
import "@progress/kendo-theme-default/dist/default-main.css";
import "./tailwind.css";
```

Order doesn't matter — there are no class name conflicts (Kendo uses `k-` prefix).

## Token Alignment

Map your Tailwind `@theme` variables to Kendo's CSS custom properties so both systems use the same visual language:

```css
@theme {
  /* Surface & backgrounds */
  --color-background: var(--kendo-color-app-surface);
  --color-surface: var(--kendo-color-surface);
  --color-surface-alt: var(--kendo-color-surface-alt);

  /* Brand colors */
  --color-primary: var(--kendo-color-primary);
  --color-primary-hover: var(--kendo-color-primary-hover);
  --color-primary-active: var(--kendo-color-primary-active);
  --color-on-primary: var(--kendo-color-on-primary);

  /* Semantic colors */
  --color-success: var(--kendo-color-success);
  --color-warning: var(--kendo-color-warning);
  --color-error: var(--kendo-color-error);
  --color-info: var(--kendo-color-info);

  /* Borders */
  --color-border: var(--kendo-color-border);
  --color-border-alt: var(--kendo-color-border-alt);

  /* Text */
  --color-on-surface: var(--kendo-color-on-app-surface);
  --color-subtle: var(--kendo-color-subtle);

  /* Spacing */
  --spacing: var(--kendo-spacing-4);

  /* Border radius */
  --radius-sm: var(--kendo-border-radius-sm);
  --radius-default: var(--kendo-border-radius-md);
  --radius-lg: var(--kendo-border-radius-lg);
  --radius-full: var(--kendo-border-radius-full);

  /* Typography */
  --font-sans: var(--kendo-font-family);
  --font-mono: var(--kendo-font-family-monospace);

  /* Shadows */
  --shadow-sm: var(--kendo-elevation-1);
  --shadow-default: var(--kendo-elevation-2);
  --shadow-lg: var(--kendo-elevation-4);
}
```

## Semantic Mapping Guide

When your Tailwind config uses custom names, map them semantically:

| Your Tailwind Token | Kendo Equivalent | Notes |
|---|---|---|
| `background` | `--kendo-color-app-surface` | App-level background |
| `foreground` | `--kendo-color-on-app-surface` | Primary text color |
| `muted` | `--kendo-color-subtle` | De-emphasized content |
| `card` | `--kendo-color-surface` | Card/component background |
| `border` | `--kendo-color-border` | Default border color |
| `primary` | `--kendo-color-primary` | Brand/action color |
| `destructive` | `--kendo-color-error` | Destructive actions |
| `accent` | `--kendo-color-tertiary` | Accent/highlight |
| `ring` | `--kendo-color-primary` | Focus ring color |

## Best Practices

- **Single source of truth**: Override Kendo's CSS custom properties in `:root`, then reference them in both Kendo components and Tailwind `@theme`
- **Don't duplicate values**: Point Tailwind tokens at Kendo variables (or vice versa), never hardcode the same hex in both
- **Dark mode**: Override Kendo CSS variables in your dark mode scope — both Tailwind and Kendo components adapt automatically

```css
/* Single source: Kendo variables as the foundation */
:root {
  --kendo-color-primary: #0058e9;
  --kendo-color-app-surface: #ffffff;
}

.dark {
  --kendo-color-primary: #4d9fff;
  --kendo-color-app-surface: #1a1a1a;
}
```

Tailwind `@theme` references these, so dark mode "just works" for both systems.

## Further Reading

- [Customization](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization)
- [Design Tokens](https://www.telerik.com/design-system/docs/foundation/guides/design-tokens)
