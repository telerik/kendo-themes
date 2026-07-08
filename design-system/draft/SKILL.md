---
name: kendo-design
description: Apply the Kendo Design System to any project — a complete visual identity for data-rich professional interfaces.
---

# Kendo Design System Plugin

This plugin provides the **Kendo Design System** — a self-contained design specification for data-rich professional interfaces. It is not a component library. It is not framework-specific.

## How It Works

The design system lives in `DESIGN.md`. That file is the single source of truth — it contains all token values, visual rationale, and guardrails. Read it, follow it.

## Token Delivery

The token values in `DESIGN.md` are available as a ready-made CSS implementation via `@progress/kendo-theme-*` packages — but those packages are entirely optional. This design system stands on its own.

When tokens are already defined in the project (by a theme package or otherwise), reference them. When they're not, define them from the spec. Either way, the design rules in `DESIGN.md` are the same.

## Relationship to Kendo Themes

This plugin and `@progress/kendo-theme-*` packages are **complementary but independent**:

| | This plugin (kendo-design) | kendo-themes |
|---|---|---|
| **Provides** | Design specification (tokens, rationale, guardrails) | Token implementation as CSS/Sass |
| **Answers** | *What* and *why* | *How* (when using Kendo packages) |
| **Requires the other?** | No | No |
| **Works together?** | Yes — spec + implementation | Yes — implementation + spec |

## File Reference

- `DESIGN.md` — The complete design system: tokens, visual identity, guidelines, and do's/don'ts
- `components/` — Per-component behavior, state, and interaction specs (when available)
