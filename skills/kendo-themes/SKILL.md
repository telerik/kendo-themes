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

**6 themes available** — pick the one that matches your design language:

| Theme     | Package                           | Design Language     |
| --------- | --------------------------------- | ------------------- |
| Meridian  | `@progress/kendo-theme-meridian`  | Modern              |
| Default   | `@progress/kendo-theme-default`   | The default theme   |
| Bootstrap | `@progress/kendo-theme-bootstrap` | Bootstrap 5 aligned |
| Material  | `@progress/kendo-theme-material`  | Material Design     |
| Fluent    | `@progress/kendo-theme-fluent`    | Microsoft Fluent    |
| Classic   | `@progress/kendo-theme-classic`   | Traditional Kendo   |

All themes share the same design token foundation — colors, spacing, radii, elevation, motion, typography, and iconography — so switching themes doesn't require changing your customizations.

## Installation

The theme package is typically installed alongside your Kendo or Telerik framework package. If it isn't already part of your setup:

```bash
npm install --save @progress/kendo-theme-meridian
```

Replace `meridian` with `default`, `bootstrap`, `material`, `fluent`, or `classic` to match your preferred design language.

## Importing the Theme

For components to pick up their styles, import the theme once in your application entry point. There are two paths: **CSS** (precompiled, runtime-customizable via CSS custom properties) or **Sass** (compile-time customization, requires a build step).

### CSS Import (Recommended Starting Point)

Import the precompiled CSS — all components are styled immediately:

```ts
import "@progress/kendo-theme-meridian/dist/all.css";
```

The compiled CSS is still customizable at runtime through CSS custom properties such as `--kendo-color-*`, `--kendo-spacing-*`, and component-scoped variables — no Sass build required.

### Sass Import

Use Sass when you need compile-time control over the generated styles:

```scss
// Import the entire theme
@use "@progress/kendo-theme-meridian/scss/all.scss" as *;
```

To include styles for only the components you use (smaller bundle):

```scss
@use "@progress/kendo-theme-meridian/scss/index.scss" as *;

// Include only what you need
@include kendo-button--styles();
@include kendo-grid--styles();
@include kendo-combobox--styles();
```

Each component exposes a `kendo-{component}--styles()` mixin.

## Customization

Two levels of customization let you control how components look — from broad design-wide changes to surgical per-component overrides.

### 1. Global: Design Tokens

Override design tokens to change the look of **all components at once**. This is the primary customization layer — colors, spacing, radii, elevation, motion, and typography.

For colors, start with **semantic tokens** (`primary`, `surface`, `error`, etc.), **CSS custom properties**, and **prebuilt swatches**. Palette ramps are an advanced Sass layer behind those tokens, not the primary customization API.

**CSS Custom Properties** (runtime, no build step — works with precompiled CSS):

```css
:root {
  --kendo-<token>: <value>;
}
```

**Sass** (compile-time, via `@use ... with ()`):

```scss
@use "@progress/kendo-theme-<theme>/scss/all.scss" as * with (
  $kendo-<map>: (
    <key>: <value>,
  ),
  $kendo-<variable>: <value>
);
```

Token names, defaults, and CSS variable patterns are in the reference table below.

### 2. Per-Component: CSS Selector Overrides

When global tokens aren't enough, target specific components using CSS selectors. Every Kendo and Telerik component has a predictable class structure:

| Primitive         | Pattern                 | Example                                 |
| ----------------- | ----------------------- | --------------------------------------- |
| **Base**          | `.k-{component}`        | `.k-button`                             |
| **Sub-component** | `.k-{component}-{part}` | `.k-button-icon` (inside button markup) |
| **Variant**       | `.k-{modifier}`         | `.k-button-solid`, `.k-button-lg`       |
| **State**         | `.k-{state}`            | `.k-hover`, `.k-focus`, `.k-disabled`   |

Compose them:

```css
.k-{component}.k-{component}-{fillMode}.k-{component}-{themeColor}.k-{state} {
  <property>: var(--kendo-<token>);
}

.k-{parent} .k-{descendant} .k-{component} .k-{component}-{part} {
  <property>: var(--kendo-<token>);
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
| **Iconography**  | Size classes (`.k-icon-{xs..xxxl}`)                | `$kendo-icon-size`                   | [iconography.md](references/iconography.md) |

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

Two approaches depending on which system owns the design tokens:

- **Tailwind-first**: You already have a Tailwind `@theme` — override Kendo CSS properties to follow it: `--kendo-<token>: var(--<tw-token>);`
- **Kendo-first**: You start from a Kendo swatch — point Tailwind at Kendo tokens: `--<tw-token>: var(--kendo-<token>);`

See [tailwind-integration.md](references/tailwind-integration.md) for the full semantic mapping guide and best practices.

## Further Reading

- [Components](references/components.md)
- [Introduction](https://www.telerik.com/design-system/docs/themes/get-started/introduction)
- [Installation](https://www.telerik.com/design-system/docs/themes/get-started/installation)
- [Design Tokens](https://www.telerik.com/design-system/docs/foundation/guides/design-tokens)
- [Customization](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization)
