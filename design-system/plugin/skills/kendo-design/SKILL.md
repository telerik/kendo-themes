---
name: kendo-design
description: Apply the Kendo Design System to any project — provides design tokens, visual guidelines, spacing rhythm, and accessibility guardrails for data-rich professional interfaces.
---

# Kendo Design System

This skill provides the complete Kendo Design System specification.

When this skill is active, follow the design system defined in `DESIGN.md` (located alongside this file) for all UI decisions — colors, typography, spacing, elevation, shapes, motion, and accessibility.

## What it provides

- **Design tokens** — Colors (oklch), typography scale, spacing system, border radii, elevation shadows
- **Visual guidelines** — How to apply tokens correctly, rhythm rules, nesting constraints
- **Guardrails** — Do's and don'ts that prevent common design mistakes
- **Accessibility contracts** — WCAG AA requirements, focus indicators, color-independence rules

## How to use

Read `DESIGN.md` for the full specification. The YAML frontmatter contains machine-readable token values. The markdown body explains rationale and constraints.

When generating UI code:
1. Use the semantic color tokens (primary, secondary, error, etc.) — never hard-code color values
2. Follow the spacing scale (0.25rem base unit) — never use arbitrary pixel values
3. Apply the typography scale (heading, body, label, code) — don't invent font sizes
4. Respect elevation hierarchy — shadows only for floating elements
5. Maintain WCAG AA contrast (4.5:1 text, 3:1 UI elements)

## Relationship to Kendo Themes

This design system stands alone. The `@progress/kendo-theme-*` npm packages provide an optional CSS implementation of these tokens — but they are not required. The design rules apply regardless of whether the theme CSS is loaded.
