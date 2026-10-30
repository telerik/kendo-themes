---
name: manage-html
description: Create or update the HTML package portion of a Kendo UI component — the component spec (.spec.tsx with types, options, states, render function, constants, index exports), reusable templates (preset variants), and visual test scenarios for screenshot regression testing. Use this skill when the user wants to create or change an HTML spec, add states/options or change a component's HTML structure, add a template variant, or add/extend visual test coverage.
argument-hint: "[component] [spec|templates|tests] e.g. chip tests, button icon template"
metadata:
  internal: true
---

# HTML Package

Create or update a component's spec, templates, and visual tests in `packages/html/src/{component}/`.

Read [../_shared/component-context.md](../_shared/component-context.md) for naming conventions and validation steps.

## When to use

- **Spec** — new component spec, new states/options/props, HTML structure or class name changes
- **Templates** — new or changed preset variants (e.g., "add an icon chip template")
- **Tests** — new or extended visual test scenarios (e.g., "add size tests for badge")

Not for SCSS (use `manage-components`) or ARIA annotations (use `manage-html-a11y`).

## Component folder layout

```
packages/html/src/{component}/
├── constants.ts              # MODULE_NAME / FOLDER_NAME
├── {component}.spec.tsx      # Single source of truth for the HTML output
├── index.ts                  # Exports spec + templates
├── templates/*.tsx           # Thin presets over the spec
└── tests/
    ├── index.ts              # Named re-exports of test defaults
    └── *.tsx                 # One axis of variation per file
```

## Procedure

Pick the parts the request touches and follow the matching reference. For a new component, do all three in order — templates and tests depend on the spec.

| Part | Reference |
|------|-----------|
| Spec, constants, index exports | [references/spec.md](references/spec.md) |
| Templates | [references/templates.md](references/templates.md) |
| Visual tests | [references/tests.md](references/tests.md) |

Use an existing component of similar complexity as a structural reference: `badge`/`avatar` (simple), `button`/`chip`/`card` (medium), `grid`/`toolbar`/`scheduler` (complex).

## Validate

```bash
npm run typecheck --prefix packages/html 2>&1
npm run build:tests --prefix packages/html 2>&1
```

## Gotchas

- **Only edit `.tsx` sources** in `packages/html/src/`. The `.html` files in the root `tests/` folder are generated build output.
- **Spec changes cascade** — changing the render function affects every template and test of the component. Check them after editing the spec.
- **Static, stateless output** — specs, templates, and tests render static HTML: no hooks, event handlers, or side effects. States are boolean props that add classes, not pseudo-classes.
