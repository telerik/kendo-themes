---
name: kendo-themes
description: Guide for styling Kendo and Telerik components. Use when agents need to customize component appearance — from global design tokens (colors, spacing, typography, radii, elevation, motion) to individual component overrides via CSS selectors. Covers theme installation, CSS and Sass customization, Tailwind CSS integration, and swatch configuration.
---

# Styling Kendo and Telerik Components

A compact guide for AI agents styling Kendo and Telerik components. Kendo themes control the visual appearance of every component — from buttons and grids to charts and editors.

## Overview

Kendo and Telerik components (Angular, React, Vue, jQuery, Blazor) get their look from **Kendo theme packages**. A theme applies design tokens — colors, spacing, typography, radii, elevation, and motion — to every component automatically. You customize the appearance either globally (change tokens, affect all components) or per-component (target specific selectors).

```
Your Application
  └── Kendo / Telerik Components (Angular, React, Vue, jQuery, Blazor)
       └── Theme Package (styling layer)
            └── Design System Tokens (colors, spacing, typography…)
```

**5 themes available** — pick the one that matches your design language:

| Theme     | Package                           | Design Language     |
| --------- | --------------------------------- | ------------------- |
| Default   | `@progress/kendo-theme-default`   | Clean, modern       |
| Bootstrap | `@progress/kendo-theme-bootstrap` | Bootstrap 5 aligned |
| Material  | `@progress/kendo-theme-material`  | Material Design     |
| Fluent    | `@progress/kendo-theme-fluent`    | Microsoft Fluent    |
| Classic   | `@progress/kendo-theme-classic`   | Traditional Kendo   |

All themes share the same design token foundation — colors, spacing, radii, elevation, motion, typography, and iconography — so switching themes doesn't require changing your customizations.

## Installation

The theme package is typically installed alongside your Kendo or Telerik framework package. If it isn't already part of your setup:

```bash
npm install --save @progress/kendo-theme-default
```

Replace `default` with `bootstrap`, `material`, `fluent`, or `classic` to match your preferred design language.

## Importing the Theme

For components to pick up their styles, import the theme once in your application entry point. There are two paths: **CSS** (precompiled, runtime-customizable via CSS custom properties) or **Sass** (compile-time customization, requires a build step).

### CSS Import (Recommended Starting Point)

Import the precompiled CSS — all components are styled immediately:

```ts
import "@progress/kendo-theme-default/dist/all.css";
```

The compiled CSS is still customizable at runtime through CSS custom properties such as `--kendo-color-*`, `--kendo-spacing-*`, and component-scoped variables — no Sass build required.

### Sass Import

Use Sass when you need compile-time control over the generated styles. Use the modern module system (`@use`). **Do not use `@import`** — it is deprecated.

```scss
// Import the entire theme
@use "@progress/kendo-theme-default/scss/all.scss" as *;
```

To include styles for only the components you use (smaller bundle):

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

Two levels of customization let you control how components look — from broad design-wide changes to surgical per-component overrides.

### 1. Global: Design Tokens

Override design tokens to change the look of **all components at once**. This is the primary customization layer — colors, spacing, radii, elevation, motion, and typography.

For colors, start with **semantic tokens** (`primary`, `surface`, `error`, etc.), **CSS custom properties**, and **prebuilt swatches**. Palette ramps are an advanced Sass layer behind those tokens, not the primary customization API.

**CSS Custom Properties** (runtime, no build step — works with precompiled CSS):

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

### 2. Per-Component: CSS Selector Overrides

When global tokens aren't enough, target specific components using CSS selectors. Every Kendo and Telerik component has a predictable class structure:

| Primitive         | Pattern                 | Example                               |
| ----------------- | ----------------------- | ------------------------------------- |
| **Base**          | `.k-{component}`        | `.k-button`                           |
| **Sub-component** | `.k-{component}-{part}` | `.k-button-icon` (inside button markup) |
| **Variant**       | `.k-{modifier}`         | `.k-button-solid`, `.k-button-lg`     |
| **State**         | `.k-{state}`            | `.k-hover`, `.k-focus`, `.k-disabled` |

Compose them:

```css
/* Style the primary button's hover state */
.k-button.k-button-solid.k-button-primary.k-hover {
  background-color: var(--kendo-color-primary-active);
}

/* Style icons inside grid toolbar buttons */
.k-grid .k-toolbar .k-button .k-button-icon {
  color: var(--kendo-color-primary);
}
```

Variants can represent: **theme color** (primary, secondary, etc.), **fill mode** (solid, outline, flat), **size** (sm, md, lg), **roundedness** (sm, md, lg, full), or **direction** (horizontal, vertical).

> **Best practice:** Always use design tokens (`var(--kendo-color-*)`, `var(--kendo-spacing-*)`) in your overrides rather than hardcoded values. This keeps your customizations consistent when switching themes or swatches.

For the full per-component styling guide, see [components.md](references/components.md). Use [components.json](components.json) for compact component metadata (`_component`, `_option`, `components`, `theme_options`), or query it via `node ./scripts/list_components.mjs` and `node ./scripts/get_components.mjs`.

## Design Tokens Reference

Each token group below is customizable through CSS custom properties or Sass maps. Colors are the most common starting point — changing `--kendo-color-primary` instantly rebrands every component that uses it.

| Token Group      | CSS Variable Pattern                               | Sass Map                             | Reference                                   |
| ---------------- | -------------------------------------------------- | ------------------------------------ | ------------------------------------------- |
| **Colors**       | `--kendo-color-{name}`                             | `$kendo-colors`                      | [colors.md](references/colors.md)           |
| **Spacing**      | `--kendo-spacing-{step}`                           | `$kendo-spacing`                     | [spacing.md](references/spacing.md)         |
| **Border Radii** | `--kendo-border-radius-{size}`                     | `$kendo-border-radii`                | [radii.md](references/radii.md)             |
| **Elevation**    | `--kendo-elevation-{level}`                        | `$kendo-elevation`                   | [elevation.md](references/elevation.md)     |
| **Motion**       | `--kendo-duration-{name}`, `--kendo-easing-{name}` | `$kendo-durations`, `$kendo-easings` | [motion.md](references/motion.md)           |
| **Typography**   | `--kendo-font-size`, `--kendo-font-family`, etc.   | Individual variables                 | [typography.md](references/typography.md)   |
| **Iconography**  | `--kendo-icon-size`                                | Individual variables                 | [iconography.md](references/iconography.md) |
| **Layout**       | Breakpoint tokens                                  | `$kendo-breakpoints`                 | [layout.md](references/layout.md)           |

**Quick example — rebranding your components with a new primary color:**

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

`k-generate-color-variations()` generates all color variants (subtle, hover, active, emphasis, contrast, etc.) from a single base color — the easiest way to rebrand all your components. For precise control over individual states, override `$kendo-colors` manually instead (see [colors.md](references/colors.md)).

## Extensibility

### Matching Kendo Components to Your Design System

When your application has its own design system and Kendo components need to match:

1. **Override Kendo tokens** to align with your design system values (colors, spacing, typography)
2. If token-level changes are not enough, **target component selectors** and apply your tokens directly:

```css
.k-button.k-button-solid.k-button-primary {
  background-color: var(--your-ds-primary);
  border-color: var(--your-ds-primary);
  color: var(--your-ds-on-primary);
}
```

### Building Custom UI That Matches Your Components

When building your own UI alongside Kendo components and you want visual consistency:

- **Reuse Kendo design tokens** — never hardcode colors, spacing, or other values
- Reference tokens via CSS custom properties so everything stays in sync

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

Kendo components and Tailwind work side-by-side with **no conflicts**. The common pattern is Tailwind for layout and app-level styles, Kendo theme for component styles.

To maintain visual consistency between your Tailwind-styled layout and Kendo components, **align Tailwind `@theme` variables with Kendo tokens**:

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
