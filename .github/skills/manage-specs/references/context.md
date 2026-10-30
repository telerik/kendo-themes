# Component Context (HTML)

Canonical naming, paths, and rules for the HTML package. Other references link here instead of repeating these rules.

## Naming

From a component name (e.g., `smart-badge`):

| Item | Example |
|------|---------|
| Folder / module name | `smart-badge` |
| CSS class | `k-smart-badge` |
| Constants | `SMART_BADGE_CLASSNAME`, `SMART_BADGE_MODULE_NAME`, `SMART_BADGE_FOLDER_NAME` |
| Component | `SmartBadge` |
| Types | `KendoSmartBadgeOptions`, `KendoSmartBadgeProps`, `KendoSmartBadgeState` |

## Paths

| File | Path |
|------|------|
| Spec | `packages/html/src/{component}/{component}.spec.tsx` |
| Constants | `packages/html/src/{component}/constants.ts` |
| Component index | `packages/html/src/{component}/index.ts` — exports spec, templates, and demo |
| Templates | `packages/html/src/{component}/templates/*.tsx` |
| Visual tests | `packages/html/src/{component}/tests/*.tsx` — picked up automatically (`src/**/tests/**/*.tsx`); no index file |
| Demo | `packages/html/src/{component}/demos/{component}.tsx` — config for the preview page (`src/_preview`) |
| Package index | `packages/html/src/index.ts` — grouped by category, `export * from './{component}/index';` |
| Helpers | `src/misc` (`classNames`, `optionClassNames`, `stateClassNames`, `States`, `Size`, `Roundness`, `FillMode`, `ThemeColor`, `nextId`) and `src/_types/component.ts` (`KendoComponent`, `KendoBaseProps`) |
| Build output | `tests/{component}/{file}.html` at the repo root — generated, never edit |

## Rules

1. **Edit only sources** in `packages/html/src/`.
2. **Static output** — specs, templates, and tests render static HTML: no hooks, event handlers, or side effects.
3. **States are boolean props** that add `k-*` state classes (`hover` → `k-hover`); tests render the *appearance* of a state.
4. **Option values must exist in the SCSS.** `FillMode` has `solid`, `tint`, `flat`, `outline`, `clear`, `link` — list only what the component's theme styles. Same for `ThemeColor`, `Size`, `Roundness`.
5. **The spec is the source of truth.** Templates, tests, demos, and docs derive from it; changing its render function affects all of them.
6. **Test files** have a single `export default` and wrap content in `<div id="test-area">` (the screenshot target).

## Reference components

Simple `badge`, `avatar`; medium `button`, `chip`, `card`; complex `grid`, `toolbar`, `scheduler`. For accessibility: `autocomplete`, `button`, `combobox`, `tabstrip`.

## Validation

```bash
npm run typecheck --prefix packages/html 2>&1
npm run build:tests --prefix packages/html 2>&1
npm run test:a11y {component} 2>&1   # when markup or ARIA changed
```
