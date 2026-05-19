# Tailwind CSS Integration

Kendo components and Tailwind CSS coexist without conflicts. Tailwind handles layout and app-level styles; the Kendo theme handles component styling. The challenge is **visual consistency** — ensuring both systems draw from the same design values.

The solution is always the same: point `--kendo-*` CSS custom properties at the values that drive the rest of the UI. Kendo tokens are semantically named and stable across themes — they are the constant. The app's token system (Tailwind `@theme`, custom properties, Sass variables, design-system tokens, or any mix) is the variable input.

## Setup

Load both stylesheets independently. Import the Kendo theme **before** Tailwind so that Tailwind utilities can override component styles when needed:

```ts
import "@progress/kendo-theme-meridian/dist/all.css";
import "./tailwind.css";
```

## Integration Scenarios

### 1. External Source → Both Systems Follow

A central set of custom properties (from a design system, brand guidelines, or manual definitions) feeds both Tailwind and Kendo:

```css
/* design-tokens.css — single source of truth */
:root {
  --brand-primary: #3f51b5;
  --brand-surface: #ffffff;
  --brand-radius: 0.375rem;
}

/* Tailwind reads from it */
@theme {
  --color-primary: var(--brand-primary);
  --color-background: var(--brand-surface);
  --radius-md: var(--brand-radius);
}

/* Kendo reads from the same source */
:root {
  --kendo-color-primary: var(--brand-primary);
  --kendo-color-app-surface: var(--brand-surface);
  --kendo-border-radius-base: var(--brand-radius);
}
```

### 2. Tailwind Owns the Tokens → Kendo Follows

The Tailwind `@theme` already defines the design tokens. Override Kendo custom properties to reference them:

```css
:root {
  --kendo-color-primary: var(--color-primary);
  --kendo-color-app-surface: var(--color-background);
  --kendo-border-radius-base: var(--radius-md);
  /* … map each relevant --kendo-* token to its Tailwind counterpart */
}
```

### 3. Kendo Owns the Tokens → Tailwind Follows

The Kendo swatch is the source of truth. Map Tailwind `@theme` variables to Kendo custom properties:

```css
@theme {
  --color-primary: var(--kendo-color-primary);
  --color-background: var(--kendo-color-app-surface);
  --radius-md: var(--kendo-border-radius-base);
  /* … map each Tailwind variable to the equivalent --kendo-* token */
}
```

## Token References

Kendo tokens are self-describing (`--kendo-color-primary`, `--kendo-color-app-surface`, `--kendo-border-radius-base`, etc.). Consult the individual reference files for full token inventories per design system area:

- [Colors](./colors.md)
- [Spacing](./spacing.md)
- [Border Radii](./radii.md)
- [Elevation](./elevation.md)
- [Typography](./typography.md)
