# Developer Checks

Local lint and type-checking commands, strictness configuration, and documented suppressions.

## Running Lint Locally

### All Linting
```bash
npm run lint                # Runs both scripts and styles linting
```

### Scripts Only (ESLint)
```bash
npm run lint:scripts        # ESLint for JS/TS/TSX/MJS files
```

### Styles Only (Stylelint)
```bash
npm run lint:styles         # Stylelint for SCSS files
```

### Single Folder Check
```bash
# Check a specific folder with default rules
npx eslint "packages/html/src/avatar/**/*.{ts,tsx}"

# Check with a specific rule enabled
npx eslint "packages/html/src/avatar/**/*.{ts,tsx}" --rule '@typescript-eslint/no-explicit-any: error'
```

## Strictness Configuration

### Stricter Paths

The following paths have stricter ESLint rules than the default `html-components` configuration:

| Path | Stricter Rules | Reason |
|------|----------------|--------|
| `packages/html/src/avatar/**` | `@typescript-eslint/no-explicit-any: error` | Pilot folder for type safety improvements |
| `packages/html/src/_types/**` | `@typescript-eslint/no-explicit-any: error` | Core type definitions should be strictly typed |

### Gradual Rollout Plan

The `no-explicit-any` rule is currently disabled repo-wide for `packages/html/` due to ~200+ existing violations. The rollout strategy:

1. **Phase 1 (current)**: Enable for `avatar/` and `_types/` as pilots
2. **Phase 2**: Extend to other small, self-contained components (e.g., `badge/`, `icon/`)
3. **Phase 3**: Address remaining components incrementally

## Documented Suppressions

### `packages/html/src/_types/component.ts`

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
[key: string]: any;
```

**Justification**: The `KendoComponent<P>` interface uses an index signature to support dynamic static properties (`states`, `options`, `defaultOptions`) assigned to 80+ component functions. Properly typing this would require:
- Generic parameters for each property type
- Refactoring all component spec files
- Breaking changes to the component authoring pattern

**Alternative considered**: Using a mapped type or intersection, but this would require significant refactoring across the codebase.

**Plan**: Revisit when major refactoring of the html package is planned.

## Adding New Strict Paths

To add stricter linting for a new folder:

1. Add the path to `html-components-strict-avatar` in [eslint.config.js](../eslint.config.js):
   ```javascript
   {
       name: "html-components-strict-avatar",
       files: [
           "packages/html/src/avatar/**/*.ts",
           "packages/html/src/avatar/**/*.tsx",
           "packages/html/src/_types/**/*.ts",
           // Add your new path here
           "packages/html/src/your-folder/**/*.ts"
       ],
       rules: {
           "@typescript-eslint/no-explicit-any": "error"
       }
   }
   ```

2. Fix any violations in the folder before committing

3. Document the path in the table above
