---
applyTo: "packages/html/**"
---

# HTML package

React/TSX component specs that render the static HTML each Kendo component must produce. They drive visual regression tests, a11y validation, and generated docs.

## Structure

```
packages/html/src/{component}/
├── constants.ts               # {COMPONENT}_MODULE_NAME / _FOLDER_NAME
├── {component}.spec.tsx       # Source of truth for markup, options, states, and ARIA
├── index.ts                   # Exports spec + templates
├── templates/*.tsx            # Thin presets over the spec
├── tests/*.tsx                # Visual test pages (default export, wrapped in #test-area)
└── demos/{component}.tsx      # Demo config for the preview page (src/_preview)
```

Shared helpers live in `src/misc` (`classNames`, `optionClassNames`, `stateClassNames`, `Size`, `FillMode`, `ThemeColor`, `nextId`, …); component types in `src/_types/component.ts`.

## Rules

- Edit only `.tsx`/`.ts` sources. The `.html` files under the root `tests/` folder are build output.
- Output is static: no hooks, event handlers, or side effects. States are boolean props that add `k-*` state classes.
- Specs attach static metadata (`states`, `options`, `className`, `defaultOptions`, `moduleName`, `folderName`) — the build and tests rely on it.
- Option values must exist in the SCSS (don't list a `themeColor` the theme doesn't style).
- Accessibility is documented with `@aria`/`@ux` JSDoc before the component and `@keyboard`/`@see` before `export default`. Target: WCAG 2.2 AA, 0 axe violations (`npm run test:a11y {component}`).

## Commands

```bash
npm run typecheck --prefix packages/html
npm run build:tests --prefix packages/html
npm run test --prefix packages/html        # Vitest
```

## Workflows

Use the `manage-specs` skill for specs, templates, tests, and accessibility.
