# Agent Instructions — DS Abstraction Effort

> ⚠️ **This branch is NOT about regular Kendo Themes development.**
> Do not treat this as a styling/SCSS/theming task. Ignore existing agent docs that guide toward theme maintenance, component styling, or build workflows.

## What This Effort Is

We are building a **Design System Abstraction Layer** — a standalone, implementation-agnostic specification that captures the *design decisions* behind Kendo's components. This lives alongside the themes source because kendo-themes is the canonical home for rendering specs, tokens, and visual definitions.

## The Goal

Produce a machine-readable (and human-readable) design system spec that any AI agent can consume to:
- Generate UI code that follows Kendo design principles — in **any** framework or component library
- Validate whether existing code adheres to the Kendo Design System
- Modernize/refactor applications to align with Kendo patterns

## What's In Scope

| Category | Example |
|----------|---------|
| **Behaviors** | "A date picker constrains keyboard navigation to valid dates" |
| **States** | "Error state uses `token.color.error` with a 4px left border" |
| **Design Tokens** | Spacing, color, typography as abstract references |
| **Accessibility Contracts** | "Data grids must announce sort changes to screen readers" |
| **Composition Rules** | "Forms group related fields with 16px vertical rhythm" |
| **Interaction Patterns** | "Dropdowns dismiss on outside click and Escape key" |
| **Anti-patterns** | What NOT to do — common mistakes the spec explicitly forbids |

## What's NOT In Scope (for this branch)

- Framework-specific implementations (React, Angular, Blazor props/APIs)
- CSS class names, SCSS mixins, or build pipeline changes
- Theme bug fixes or new component styling
- Regular kendo-themes maintenance

## Working Directory

All DS abstraction work lives under `design-system/`:

```
design-system/
├── exploration/       ← Brainstorming history, session notes
├── draft/             ← Work-in-progress specs (DESIGN.md, components)
├── assets/            ← Reference materials (external DS docs, research)
├── skills/            ← Plugin/skill prototypes (SKILL.md, evals, scripts)
```

## Key Decisions Made

1. **Path B** — The DS is a standalone specification, not tied to any component library
2. **Plugin distribution** — Delivered as a skill/plugin that agents install
3. **One DESIGN.md per theme** — Self-contained, composed from shared base + theme tokens at build time
4. **kendo-themes as home** — This repo is the canonical source for design decisions

## Validation Strategy

We validate the DS spec by having agents modernize real sample apps with the spec loaded as a skill/plugin, then assessing whether output respects spacing, states, accessibility, and composition rules.

## Context

Read `design-system/exploration/EXPLORATION.md` for full brainstorming history, architectural decisions, and open questions.
