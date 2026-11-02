---
name: manage-specs
description: Create or update the HTML package (packages/html) for a Kendo UI component — the component spec (.spec.tsx with types, options, states, render function, constants, index exports), reusable templates (preset variants), visual test scenarios for screenshot regression testing, and accessibility (@aria/@keyboard/@ux/@see JSDoc annotations, ARIA attributes, axe-core WCAG 2.2 AA validation). Use this skill when the user wants to create or change an HTML spec, add states/options or change a component's HTML structure, add a template variant, add/extend visual test coverage, add accessibility support, fix ARIA violations, document keyboard shortcuts, or build the HTML half of a new component.
argument-hint: "[component] [spec|templates|tests|a11y] e.g. chip tests, button a11y"
metadata:
  internal: true
---

# Specs (HTML package)

Create or update a component's spec, templates, visual tests, and accessibility in `packages/html/src/{component}/`.

**Always read [references/context.md](references/context.md) first** — naming, paths, rules, and validation commands.

For SCSS use `manage-themes`. For a **new component** or an update spanning SCSS + HTML, start from `manage-themes` → `references/component.md`; it hands the HTML half back here.

## Route the request

| Request | Reference |
|---------|-----------|
| New spec, new states/options/props, markup or class changes | [references/spec.md](references/spec.md) |
| Template variants | [references/templates.md](references/templates.md) |
| Visual test scenarios | [references/tests.md](references/tests.md) |
| ARIA attributes, WCAG validation | [references/a11y.md](references/a11y.md) (format: [references/a11y-annotations.md](references/a11y-annotations.md)) |
| State/option/structure change on an existing component | [references/update-checklist.md](references/update-checklist.md) |

For a new component, do them in order: spec → templates → tests → a11y.

## Before finishing

Run the validation in [references/context.md](references/context.md#validation).
