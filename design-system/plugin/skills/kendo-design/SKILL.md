---
name: kendo-design
description: Apply the Kendo Design System to any project — provides design tokens, visual guidelines, spacing rhythm, and accessibility guardrails for data-rich professional interfaces.
---

# Kendo Design System

This skill provides the complete Kendo Design System specification.

## Spec resolution (precedence)

1. **Project-local `DESIGN.md`** — if a `DESIGN.md` exists in the project root, treat it as the authoritative spec. It may override, extend, or remove rules from the plugin defaults.
2. **Plugin-bundled spec** — otherwise, use the `DESIGN.md` located alongside this file.

When a project-local DESIGN.md exists, it has **final say**. The user may have customized tokens (brand colors, preferred font, tighter spacing) and those choices override the defaults.

## What it provides

- **Design principles** — How to apply spacing rhythm, elevation hierarchy, typography scale correctly
- **Guardrails** — Do's and don'ts that prevent common design mistakes
- **Accessibility contracts** — WCAG AA requirements, focus indicators, color-independence rules
- **Token reference** — Colors (oklch), typography scale, spacing system, border radii, elevation shadows

## How to use

Read the resolved DESIGN.md (project-local first, plugin-bundled as fallback). The YAML frontmatter contains machine-readable token values. The markdown body explains rationale and constraints.

When reviewing or generating UI code, enforce **design principles** (Category B) — not mere token syntax:
1. Spacing lands on the 4px rhythm grid — the variable name doesn't matter, the value does
2. Typography uses sizes from the defined scale — not arbitrary values
3. Elevation signals floating layers only — cards in page flow use border/tonal contrast
4. Colors resolve to semantic roles — not necessarily our variable names, but the intent matches
5. Motion respects prefers-reduced-motion — durations stay within system presets
6. WCAG AA contrast (4.5:1 text, 3:1 UI elements)

**Important:** This skill is implementation-agnostic. An app using Tailwind `gap-2` (8px) is equally valid as `var(--kendo-spacing-2)` — both land on the 4px grid. Don't flag token naming; flag design principle violations.

## Relationship to Kendo Themes

This design system stands alone. The `@progress/kendo-theme-*` npm packages provide an optional CSS implementation of these tokens — but they are not required. The design rules apply regardless of whether the theme CSS is loaded.
