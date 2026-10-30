# Component Context (HTML)

Naming, paths, and validation for the HTML package.

## Naming Derivation

From a component name (e.g., `smart-badge`), derive the names used in the HTML package:

| Derived Name | Example |
|-------------|---------|
| CSS class | `k-smart-badge` |
| Classname constant | `SMART_BADGE_CLASSNAME` |
| TS constant prefix | `SMART_BADGE` |
| TypeScript component name | `SmartBadge` |
| Module/folder name string | `"smart-badge"` |

## Paths

| File | Path |
|------|------|
| Spec | `packages/html/src/{component}/{component}.spec.tsx` |
| Constants | `packages/html/src/{component}/constants.ts` |
| Templates | `packages/html/src/{component}/templates/*.tsx` |
| Visual tests | `packages/html/src/{component}/tests/*.tsx` |
| Package index | `packages/html/src/index.ts` |

## Validation Steps

```bash
npm run typecheck --prefix packages/html 2>&1
npm run build:tests --prefix packages/html 2>&1
npm run test:a11y {component} 2>&1   # when markup or ARIA changed
```

## Common Gotchas

- **Test files need default exports** — `export default` is mandatory; `export const` won't be picked up by the build system.
- **Wrap test content in `<div id="test-area">`** — screenshot tools look for this ID.
- **CSS classes must match the SCSS** — class names and option values in the spec must exist in the theme styles (`k-{component}`, `k-{component}-{element}`).
