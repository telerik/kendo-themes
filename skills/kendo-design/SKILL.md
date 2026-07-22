---
name: kendo-design
description: Apply the Kendo Design System to any project — provides design tokens, visual guidelines, spacing rhythm, and accessibility guardrails for data-rich professional interfaces. Invoke as `/kendo-design [modernize]`.
user-invocable: true
---

# Kendo Design System

This skill provides the complete Kendo Design System specification. It works two ways:

- **Passively** — auto-loaded whenever you generate or review UI. Skip the routing and go straight to [Spec resolution](#spec-resolution) and [How to use](#how-to-use).
- **Explicitly** — invoked as `/kendo-design <subcommand> [target]`. Route on the first word of the arguments (see below).

Every time this skill activates, first run the [Setup check](#setup-check) below, then do the requested work.

## Setup check

The authoritative spec for a project is a **project-local `./DESIGN.md`** — nothing else. This skill's job on activation is to make sure that file exists *when it should*, then get out of the way.

1. **Local `./DESIGN.md` exists?** Use it as-is. It has final say. Do not reconcile it against, or overwrite it with, anything bundled here. Proceed with the work.
2. **No local `./DESIGN.md`?** Decide whether one is even warranted before offering anything:
   - **Kendo project with an established design system** (Kendo/Telerik components present *and* the project defines its own tokens/brand — custom colors, font, spacing in `:root`, a Tailwind/theme config, etc.) → **offer** to create `./DESIGN.md` by copying the matching theme boilerplate and **tailoring it with the project's real DS values** (brand color, font, spacing choices win over defaults).
   - **Raw Kendo project** (a `@progress/kendo-theme-*` package or swatch is used, but no custom design system layered on top) → **offer** to copy the matching theme boilerplate **as-is** — no tailoring needed.
   - **Not a Kendo project** → **do nothing.** Do not create `./DESIGN.md`, do not copy the boilerplate, even though no local file exists. Ideally the skill would not have been invoked at all; if it was, apply the [design principles](#how-to-use) as generic good practice and move on.
3. **Offer, don't impose.** Creating the file is a suggestion the agent raises naturally ("this project has a design system but no `DESIGN.md` — want me to generate one from the Kendo boilerplate?"), acted on when the user agrees. Never silently write it.

> The bundled `themes/<theme>/DESIGN.md` files are **copy boilerplate, not a live source.** Read them for knowledge to inform your work, but never treat one as "the project's spec." A project only *has* a spec once a local `./DESIGN.md` has been copied in.

## Invocation routing

When invoked with an explicit subcommand, do only that flow (after the [Setup check](#setup-check)):

| Subcommand | Action |
| --- | --- |
| `modernize` | Refactor code to align with the Kendo DS — read `references/modernize.md` and follow it end to end, **in this conversation** (do not delegate to a sub-agent). Migrates to the Meridian theme and snaps arbitrary values to tokens. |
| _(none / unrecognized)_ | Treat the arguments as a target and apply the spec to it using [How to use](#how-to-use). |

`modernize` must run inline, in the main conversation — never as a delegated sub-agent. Modernization is a long, exhaustive, whole-project sweep; a sub-agent running in an isolated context has no one to push back when it declares victory early, which is exactly the failure mode `references/modernize.md` is designed to prevent (its Inventory + Completeness Gate phases only work when the same context that starts the pass is the one that finishes it).

## Spec resolution

1. **Project-local `./DESIGN.md`** — the single authoritative spec. If it exists, it wins outright: it may override, extend, or remove anything, and the user's customizations (brand colors, preferred font, tighter spacing) always take precedence. This is the *only* file treated as the project's spec.
2. **No local file** — there is no fallback "installed" spec. Consult the bundled `themes/<theme>/DESIGN.md` only as **in-memory guidance** to inform generation/review, and only per the [Setup check](#setup-check) offer the user a copy. Never present the bundled file as the project's spec, and never auto-write it.

### Theme selection (which boilerplate to copy)

When the Setup check decides a copy is warranted, pick the source boilerplate:

1. **Detect the project's theme** — check for an installed `@progress/kendo-theme-<name>` package, an imported swatch/CSS (e.g. `meridian-main.css`), or an explicit user choice.
2. **Map to `themes/<theme>/DESIGN.md`.** Currently authored: **`meridian`** (the recommended default) and **`default`** (the original theme, now in maintenance mode).
3. **Placeholders.** `bootstrap`, `material`, `fluent`, and `classic` are stubs with no token frontmatter yet. If the detected theme is a placeholder or can't be determined, use **`themes/meridian/DESIGN.md`** as the boilerplate — Meridian is the recommended default.

## What it provides

- **Design principles** — How to apply spacing rhythm, elevation hierarchy, typography scale correctly
- **Guardrails** — Do's and don'ts that prevent common design mistakes
- **Accessibility contracts** — WCAG AA requirements, focus indicators, color-independence rules
- **Token reference** — Colors (oklch), typography scale, spacing system, border radii, elevation shadows

## How to use

Read the project-local `./DESIGN.md` if one exists — it is the authoritative spec. If there is none, use the matching bundled `themes/<theme>/DESIGN.md` (defaulting to `themes/meridian/DESIGN.md`) as **in-memory guidance only** — do not treat it as the project's spec, and see the [Setup check](#setup-check) about offering to copy it in. Either way, the YAML frontmatter contains machine-readable token values and the markdown body explains rationale and constraints.

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
