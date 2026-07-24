---
name: kendo-design
description: Apply the Kendo Design System to any project — provides design tokens, visual guidelines, spacing rhythm, and accessibility guardrails for data-rich professional interfaces. Invoke as `/kendo-design [target]`.
user-invocable: true
---

# Kendo Design System

Applies the Kendo Design System to UI work. No subcommands.

- **Passive** — auto-loaded whenever you generate or review UI.
- **Explicit** — invoked as `/kendo-design [target]`.

## The spec: `./DESIGN.md`

`./DESIGN.md` is the single source of truth for a project's design tokens and rules. On every activation:

1. **Exists?** Use it as-is — final say, never reconciled against or overwritten by the bundled themes.
2. **Doesn't exist?** Create it now, no asking:
   - Pick a theme boilerplate from `themes/<theme>/DESIGN.md` — check for an installed `@progress/kendo-theme-<name>` package or an imported swatch, default to `meridian` if there's no signal.
   - Project already has its own tokens (colors/fonts/spacing in `:root`, a Tailwind theme, etc.)? Map them onto the boilerplate so the project's real values win. Otherwise copy the boilerplate as-is.
   - **Exception:** if the project has already committed to a different, cohesive design system throughout its UI (a pervasive third-party component suite with its own visual identity — not Tailwind, which has none) stop and ask the user which one should win before creating anything.

Installed Kendo packages never gate _whether_ Kendo applies — only _which_ theme boilerplate to copy. There's no opt-out inside a conversation; disabling the plugin is how someone declines.

## Relationship to Kendo Themes

This design system stands alone. The `@progress/kendo-theme-*` npm packages are an optional CSS implementation of these tokens, not a requirement.
