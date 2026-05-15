---
agent: "agent"
tools: ["codebase", "editFiles", "terminal"]
description: "Migrate SassDoc variable annotations from theme packages to core for a given component"
---

You are performing a SassDoc migration for the Kendo UI themes monorepo.

## Task

Migrate all `///` SassDoc annotations for **the specified component(s)** from the theme variable files to core, then strip the duplicated docs from all 6 themes.

## Load the skill

Read `.github/skills/migrate-sassdoc/SKILL.md` and follow its procedure exactly.

## Key rules

1. **Core gets all the docs.** Every `$kendo-*` variable in `packages/core/scss/components/{component}/_variables.scss` must have a `///` block.
2. **Themes lose shared docs.** Remove `///` blocks from theme files for variables that exist in core. Keep docs only on theme-specific variables.
3. **Never change values.** Core stays `null !default`. Theme values stay as-is.
4. **Never touch `@forward` maps.** Only doc comments change.
5. **Use meridian as the source** for doc text. Fall back to classic or default if meridian doesn't have a variable.
6. **Follow variable-docs.prompt.md conventions** for all `///` blocks.

## Themes to process

- default (`packages/default/scss/{component}/_variables.scss`)
- classic (`packages/classic/scss/{component}/_variables.scss`)
- bootstrap (`packages/bootstrap/scss/{component}/_variables.scss`)
- material (`packages/material/scss/{component}/_variables.scss`)
- fluent (`packages/fluent/scss/{component}/_variables.scss`)
- meridian (`packages/meridian/scss/{component}/_variables.scss`)

## Commit message

```
chore(docs): migrate {component} sassdoc annotations to core
```
