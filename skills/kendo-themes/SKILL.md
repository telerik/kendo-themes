---
name: kendo-themes
description: Guide for working with Kendo UI themes — the styling layer of the Kendo Design System. Use when agents need to install, import, customize, or extend Kendo themes. Covers CSS and Sass imports, design token customization (colors, spacing, radii, elevation, motion, typography), component selector customization, Tailwind CSS integration, and swatch configuration.
---

# Kendo Themes

A compact guide for AI agents working with Kendo UI themes — the styling layer of the Kendo Design System.

## Overview

Kendo Themes implement the **Kendo Design System** as consumable CSS/SCSS packages. Users interact with the design system indirectly through themes.

```
Kendo Design System (foundation)
  └── Kendo Themes (implementation)
       └── Your Application (consumption)
```

**5 themes available:**

| Theme     | Package                           | Design Language     |
| --------- | --------------------------------- | ------------------- |
| Default   | `@progress/kendo-theme-default`   | Clean, modern       |
| Bootstrap | `@progress/kendo-theme-bootstrap` | Bootstrap 5 aligned |
| Material  | `@progress/kendo-theme-material`  | Material Design     |
| Fluent    | `@progress/kendo-theme-fluent`    | Microsoft Fluent    |
| Classic   | `@progress/kendo-theme-classic`   | Traditional Kendo   |

All themes share the same design system foundation — colors, spacing, radii, elevation, motion, typography, and iconography. Each theme applies its own visual interpretation.

## Installation

```bash
npm install --save @progress/kendo-theme-default
```

Replace `default` with `bootstrap`, `material`, `fluent`, or `classic` as needed.

## Importing a Theme

There are two paths: **CSS** (precompiled, simple, runtime-customizable via CSS custom properties) or **Sass** (deeper compile-time customization, requires build step).

### CSS Import (Recommended Starting Point)

In most app setups, import the precompiled CSS from your application entry point:

```ts
import "@progress/kendo-theme-default/dist/all.css";
```

If you want to work from theme source instead, import the SCSS entry in your app styles:

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as *;
```

The `dist/all.css` file includes styles for **all** components. Compiled CSS is still customizable at runtime through CSS custom properties such as `--kendo-color-*`, `--kendo-spacing-*`, and component-scoped variables. Sass is the path when you want compile-time control over the generated theme source.

### Sass Import

Use the modern Sass module system (`@use`). **Do not use `@import`** — it is deprecated.

```scss
// Import the entire theme
@use "@progress/kendo-theme-default/scss/all.scss" as *;
```

To include only specific components (smaller bundle):

```scss
@use "@progress/kendo-theme-default/scss/index.scss" as *;

// Include only what you need
@include kendo-button--styles();
@include kendo-grid--styles();
@include kendo-combobox--styles();
```

Each component exposes a `kendo-{component}--styles()` mixin.

> **Common pitfall:** Using `@import` instead of `@use`. The themes use the Sass module system — `@import` will not work correctly and is deprecated in modern Dart Sass.

## Customization

Two levels of customization, from broadest to most specific.

### 1. Design Token Customization (Variables)

Override design system tokens to change the look of **all** components at once. Works at the system level — colors, spacing, radii, elevation, motion, typography.

For colors, start with **semantic tokens** (`primary`, `surface`, `error`, etc.), **CSS custom properties**, and **prebuilt swatches**. Palette ramps are an advanced Sass source layer behind those tokens, not the primary customization API.

**CSS Custom Properties** (runtime, no build step):

```css
:root {
  --kendo-color-primary: #your-brand-color;
  --kendo-color-on-primary: #ffffff;
  --kendo-spacing-4: 1.2rem;
  --kendo-font-size: 15px;
  --kendo-border-radius-md: 6px;
}
```

**Sass** (compile-time, via `@use ... with ()`):

```scss
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  $kendo-colors: (
    primary: #your-brand-color,
    on-primary: #ffffff,
  ),
  $kendo-font-size: 15px
);
```

### 2. Component Customization (Selectors)

Target specific components using CSS selectors composed from four primitives:

| Primitive         | Pattern                 | Example                               |
| ----------------- | ----------------------- | ------------------------------------- |
| **Base**          | `.k-{component}`        | `.k-button`                           |
| **Sub-component** | `.k-{component}-{part}` | `.k-button-icon` (inside button markup) |
| **Variant**       | `.k-{modifier}`         | `.k-button-solid`, `.k-button-lg`     |
| **State**         | `.k-{state}`            | `.k-hover`, `.k-focus`, `.k-disabled` |

Compose them:

```css
/* Override primary button hover background */
.k-button.k-button-solid.k-button-primary.k-hover {
  background-color: var(--kendo-color-primary-active);
}

/* Target icons inside grid toolbar buttons */
.k-grid .k-toolbar .k-button .k-button-icon {
  color: var(--kendo-color-primary);
}
```

Variants can represent: **theme color** (primary, secondary, etc.), **fill mode** (solid, outline, flat), **size** (sm, md, lg), **roundedness** (sm, md, lg, full), or **direction** (horizontal, vertical).

> **Best practice:** Always use design system tokens (`var(--kendo-color-*)`, `var(--kendo-spacing-*)`) in your overrides rather than hardcoded values. This ensures consistency across themes and swatches.

For the full agent-facing guide, see [components.md](references/components.md). Use [components.json](components.json) for the compact tuple-based theme metadata (`_component`, `_option`, `components`, `theme_options`), or query it via `skills/kendo-themes/list_components.mjs` and `skills/kendo-themes/get_components.mjs`.

## Design System Sub-Systems

Each sub-system is customizable through CSS custom properties or Sass maps. Colors are the most common starting point.

| Sub-system       | CSS Variable Pattern                               | Sass Map                             | Reference                                   |
| ---------------- | -------------------------------------------------- | ------------------------------------ | ------------------------------------------- |
| **Colors**       | `--kendo-color-{name}`                             | `$kendo-colors`                      | [colors.md](references/colors.md)           |
| **Spacing**      | `--kendo-spacing-{step}`                           | `$kendo-spacing`                     | [spacing.md](references/spacing.md)         |
| **Border Radii** | `--kendo-border-radius-{size}`                     | `$kendo-border-radii`                | [radii.md](references/radii.md)             |
| **Elevation**    | `--kendo-elevation-{level}`                        | `$kendo-elevation`                   | [elevation.md](references/elevation.md)     |
| **Motion**       | `--kendo-duration-{name}`, `--kendo-easing-{name}` | `$kendo-durations`, `$kendo-easings` | [motion.md](references/motion.md)           |
| **Typography**   | `--kendo-font-size`, `--kendo-font-family`, etc.   | Individual variables                 | [typography.md](references/typography.md)   |
| **Iconography**  | `--kendo-icon-size`                                | Individual variables                 | [iconography.md](references/iconography.md) |
| **Layout**       | Breakpoint tokens                                  | `$kendo-breakpoints`                 | [layout.md](references/layout.md)           |

**Quick example — changing the primary color:**

```css
/* CSS */
:root {
  --kendo-color-primary: #0058e9;
  --kendo-color-primary-hover: #004dcc;
  --kendo-color-primary-active: #0042b0;
  --kendo-color-on-primary: #ffffff;
}
```

```scss
// Sass
@use "sass:map";
@use "@progress/kendo-theme-default/scss/color-system/_functions.scss" as fn;
@use "@progress/kendo-theme-default/scss/all.scss" as * with (
  // Auto-expand: one base color → all 10 semantic variants
  $kendo-colors: fn.k-generate-color-variations("primary", #0058e9, "default")
);
```

`k-generate-color-variations()` generates all color variants (subtle, hover, active, emphasis, contrast, etc.) from a single base color — the easiest way to rebrand. For precise control over individual states, override `$kendo-colors` manually instead (see [colors.md](references/colors.md)).

## Extensibility

### Adopting an External Design System

When your application has its own design system and Kendo components need to match:

1. **Override Kendo tokens** to align with your DS values (colors, spacing, typography)
2. If token-level changes are not enough, **target component selectors** and apply your DS tokens directly:

```css
.k-button.k-button-solid.k-button-primary {
  background-color: var(--your-ds-primary);
  border-color: var(--your-ds-primary);
  color: var(--your-ds-on-primary);
}
```

### Extending the Kendo Design System

When adopting Kendo's design system for your own custom components and layouts:

- **Always reuse Kendo tokens** — never hardcode colors, spacing, or other values
- Reference tokens via CSS custom properties for runtime flexibility

```css
.my-custom-card {
  background-color: var(--kendo-color-surface);
  border: 1px solid var(--kendo-color-border);
  border-radius: var(--kendo-border-radius-md);
  padding: var(--kendo-spacing-4);
  box-shadow: var(--kendo-elevation-2);
  font-family: var(--kendo-font-family);
}
```

## Tailwind CSS Integration

Kendo themes and Tailwind work side-by-side with **no conflicts**. The common pattern is Tailwind for layout/app styles, Kendo theme for component styles.

To maintain visual consistency, **align Tailwind `@theme` variables with Kendo tokens**:

```css
/* Map Tailwind theme tokens to Kendo equivalents */
@theme {
  --color-background: var(--kendo-color-surface);
  --color-primary: var(--kendo-color-primary);
  --color-on-primary: var(--kendo-color-on-primary);
  --color-border: var(--kendo-color-border);
  --spacing-unit: var(--kendo-spacing-4);
  --radius-default: var(--kendo-border-radius-md);
  --font-sans: var(--kendo-font-family);
}
```

See [tailwind-integration.md](references/tailwind-integration.md) for the full mapping guide.

## Further Reading

- [Components](references/components.md)
- [Introduction](https://www.telerik.com/design-system/docs/themes/get-started/introduction)
- [Installation](https://www.telerik.com/design-system/docs/themes/get-started/installation)
- [Design Tokens](https://www.telerik.com/design-system/docs/foundation/guides/design-tokens)
- [Customization](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization)
