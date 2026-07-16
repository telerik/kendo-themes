---
name: kendo-design
description: Apply the Kendo Design System to any project — provides design tokens, visual guidelines, spacing rhythm, and accessibility guardrails for data-rich professional interfaces. Invoke as `/kendo-design [init|audit|modernize|generate]`.
user-invocable: true
---

# Kendo Design System

This skill provides the complete Kendo Design System specification. It works two ways:

- **Passively** — auto-loaded whenever you generate or review UI. In that case ignore the routing below and go straight to [Spec resolution](#spec-resolution-precedence) and [How to use](#how-to-use).
- **Explicitly** — invoked as `/kendo-design <subcommand> [target]`. Route on the first word of the arguments (see below).

## Invocation routing

When invoked with an explicit subcommand, do only that flow:

| Subcommand | Action |
| --- | --- |
| `init` | Set up the project — read `references/init.md` and follow it end to end. Generates a tailored `DESIGN.md` at the project root. |
| `audit` | Review code for Kendo DS compliance — hand off to the **`ds-audit`** agent. |
| `modernize` | Refactor code to align with the Kendo DS — hand off to the **`ds-modernize`** agent. |
| `generate` | Build new UI from the Kendo DS — hand off to the **`ds-generate`** agent. |
| _(none / unrecognized)_ | Treat the arguments as a target and apply the spec to it using [How to use](#how-to-use). |

For `audit`/`modernize`/`generate`, delegate to the named agent (it carries the full persona and multi-turn workflow) rather than inlining the flow here. If agent delegation is unavailable, fall back to applying the spec directly per [How to use](#how-to-use).

## Spec resolution (precedence)

1. **Project-local `DESIGN.md`** — if a `DESIGN.md` exists in the project root, treat it as the authoritative spec. It may override, extend, or remove rules from the plugin defaults. This has **final say** — the user may have customized tokens (brand colors, preferred font, tighter spacing) and those choices win.
2. **Bundled theme spec** — otherwise, select the theme-specific spec under `themes/<theme>/DESIGN.md` alongside this file (see theme selection below).

### Theme selection

The bundled specs live in `themes/`, one folder per Kendo theme. To pick one:

1. **Detect the project's theme** — check for an installed `@progress/kendo-theme-<name>` package, an imported swatch/CSS (e.g. `meridian-main.css`), or an explicit user choice.
2. **Map to `themes/<theme>/DESIGN.md`.** Currently authored: **`meridian`** (the recommended default) and **`default`** (the original theme, now in maintenance mode).
3. **Placeholders.** `bootstrap`, `material`, `fluent`, and `classic` are stubs with no token frontmatter yet. If the detected theme is a placeholder or can't be determined, fall back to **`themes/meridian/DESIGN.md`** — Meridian is the recommended default for any new or unknown project.

> A sessionStart hook copies `themes/meridian/DESIGN.md` into the project root as `./DESIGN.md` so the spec is present passively. Running `/kendo-design init` regenerates that file tailored to the detected theme and the project's real brand values.

## What it provides

- **Design principles** — How to apply spacing rhythm, elevation hierarchy, typography scale correctly
- **Guardrails** — Do's and don'ts that prevent common design mistakes
- **Accessibility contracts** — WCAG AA requirements, focus indicators, color-independence rules
- **Token reference** — Colors (oklch), typography scale, spacing system, border radii, elevation shadows

## How to use

Read the resolved DESIGN.md (project-local `./DESIGN.md` first, then the bundled theme spec `themes/<theme>/DESIGN.md` — defaulting to `themes/meridian/DESIGN.md` — as fallback). The YAML frontmatter contains machine-readable token values. The markdown body explains rationale and constraints.

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
