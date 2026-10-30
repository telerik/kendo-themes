---
name: manage-specs
description: Create or update the HTML package (packages/html) for a Kendo UI component — the component spec (.spec.tsx with types, options, states, render function, constants, index exports), reusable templates (preset variants), visual test scenarios for screenshot regression testing, and accessibility (@aria/@keyboard/@ux/@see JSDoc annotations, ARIA attributes, axe-core WCAG 2.2 AA validation). Use this skill when the user wants to create or change an HTML spec, add states/options or change a component's HTML structure, add a template variant, add/extend visual test coverage, add accessibility support, fix ARIA violations, document keyboard shortcuts, or build the HTML half of a new component.
argument-hint: "[component] [spec|templates|tests|a11y] e.g. chip tests, button a11y"
metadata:
  internal: true
---

# Specs (HTML package)

Create or update a component's spec, templates, visual tests, and accessibility in `packages/html/src/{component}/`.

Read [references/context.md](references/context.md) for naming conventions, paths, and validation steps.

## When to use

- **Spec** — new component spec, new states/options/props, HTML structure or class name changes
- **Templates** — new or changed preset variants (e.g., "add an icon chip template")
- **Tests** — new or extended visual test scenarios (e.g., "add size tests for badge")
- **Accessibility** — ARIA attributes, `@aria`/`@keyboard`/`@ux`/`@see` annotations, WCAG validation (e.g., "add a11y to checkbox")

Not for SCSS (use `manage-themes`). For a **new component** or an update spanning SCSS + HTML, start from `manage-themes` → `references/component.md`; it hands the HTML half back here.

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

Pick the parts the request touches and follow the matching reference. For a new component, do all of them in order — templates, tests, and a11y depend on the spec.

| Part | Reference |
|------|-----------|
| Spec, constants, index exports | [references/spec.md](references/spec.md) |
| Templates | [references/templates.md](references/templates.md) |
| Visual tests | [references/tests.md](references/tests.md) |
| Accessibility workflow | [references/a11y.md](references/a11y.md) |
| Annotation format and patterns | [references/a11y-annotations.md](references/a11y-annotations.md) |
| Checklists for state/option/structure changes | [references/update-checklist.md](references/update-checklist.md) |

Use an existing component of similar complexity as a structural reference: `badge`/`avatar` (simple), `button`/`chip`/`card` (medium), `grid`/`toolbar`/`scheduler` (complex).

## Validate

```bash
npm run typecheck --prefix packages/html 2>&1
npm run build:tests --prefix packages/html 2>&1
npm run test:a11y {component} 2>&1   # when markup or ARIA changed
```

## Gotchas

- **Only edit `.tsx` sources** in `packages/html/src/`. The `.html` files in the root `tests/` folder are generated build output.
- **Spec changes cascade** — changing the render function affects every template and test of the component. Check them after editing the spec.
- **Static, stateless output** — specs, templates, and tests render static HTML: no hooks, event handlers, or side effects. States are boolean props that add classes, not pseudo-classes.
