---
name: test-generator
description: "Generates comprehensive visual test scenarios for HTML package components: base state, all states (hover/focus/active/disabled), sizes, fill modes, and theme color combinations as TSX files in tests/. Use when adding missing test coverage or creating tests for a newly scaffolded component. Not for SCSS unit tests (auto-generated via npm run docs) or accessibility tests (use accessibility-auditor)."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Test Generator (D1)

Generate **comprehensive visual test scenarios** for components in `packages/html/src/`.

## Pre-Flight: Read Context First

1. `.github/skills/shared/repo-conventions.md` — HTML package structure
2. `.github/instructions/html.instructions.md`
3. `packages/html/src/[component]/[component].spec.tsx` — available states and options
4. Existing test files: `packages/html/src/[component]/tests/`
5. Reference: `packages/html/src/button/tests/` — well-covered component for pattern reference

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `COMPONENT` | ✅ | Component name (e.g., `chip`, `badge`, `notification`) |
| `COVERAGE_GOALS` | ⬜ | `states`, `sizes`, `fill-modes`, `theme-colors`, `all`. Default: `all` |
| `GAP_ONLY` | ⬜ | If `true`, only add tests not already present. Default: `false` |

---

## Step-by-Step Workflow

### Step 1 — Inventory Existing Tests

Read `packages/html/src/[component]/tests/` and list existing test files.

Read `packages/html/src/[component]/[component].spec.tsx` to extract:
- `states` array → which states need coverage
- `options.size` array → which sizes need coverage
- `options.fillMode` array → which fill modes need coverage
- `options.themeColor` array → which theme colors need coverage
- Available template exports from `index.ts`

### Step 2 — Plan Test Coverage Matrix

| Category | Test file name | Scenarios covered |
|----------|----------------|-------------------|
| States | `[component]-states.tsx` | All states × default appearance |
| Sizes | `[component]-size.tsx` | All sizes × sm/md/lg comparison |
| Fill modes | `[component]-[fillmode].tsx` (one per mode) | All states for that fill mode |
| Theme colors | `[component]-colors.tsx` | All theme colors × normal |
| Edge cases | `[component]-edge-cases.tsx` | Long text, icons, empty, nested |

### Step 3 — Generate: States Test File

**`packages/html/src/[component]/tests/[component]-states.tsx`**

```tsx
import { [ComponentName], [TemplateOrDefault] } from '../../[component]';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(${[ComponentName].states.length + 1}, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Normal</span>
            {[ComponentName].states.map((state) => (
                <span key={state}>{state.charAt(0).toUpperCase() + state.slice(1)}</span>
            ))}
            {/* Row for each fill mode or default */}
            {['normal', ...[ComponentName].states].map((state) => (
                <span key={state}>
                    <[TemplateOrDefault] {...{ [state]: state !== 'normal' }}>
                        {state}
                    </[TemplateOrDefault]>
                </span>
            ))}
        </div>
    </>
);
```

### Step 4 — Generate: Size Test File (if component has sizes)

**`packages/html/src/[component]/tests/[component]-size.tsx`**

```tsx
import { [ComponentName] } from '../../[component]';

export default () => (
    <div id="test-area">
        {[ComponentName].options.size
            .filter(size => size !== undefined)
            .map((size) => (
                <div key={size}>
                    <span>{size}</span>
                    <[ComponentName] size={size}>Size {size}</[ComponentName]>
                </div>
            ))}
    </div>
);
```

### Step 5 — Generate: Fill Mode Test Files (one per mode)

For each fillMode in `[ComponentName].options.fillMode`:

**`packages/html/src/[component]/tests/[component]-[fillmode].tsx`**

```tsx
import { [ComponentName] } from '../../[component]';

export default () => (
    <div id="test-area" className="k-d-flex k-flex-wrap k-gap-4">
        {[ComponentName].options.themeColor.map((themeColor) => (
            <[ComponentName]
                key={themeColor}
                fillMode="[fillmode]"
                themeColor={themeColor}
            >
                {themeColor || 'undefined'}
            </[ComponentName]>
        ))}
        {/* Hover state row */}
        {[ComponentName].options.themeColor.map((themeColor) => (
            <[ComponentName]
                key={`${themeColor}-hover`}
                fillMode="[fillmode]"
                themeColor={themeColor}
                hover
            >
                Hover
            </[ComponentName]>
        ))}
        {/* Disabled row */}
        {[ComponentName].options.themeColor.map((themeColor) => (
            <[ComponentName]
                key={`${themeColor}-disabled`}
                fillMode="[fillmode]"
                themeColor={themeColor}
                disabled
            >
                Disabled
            </[ComponentName]>
        ))}
    </div>
);
```

### Step 6 — Generate: Main Base Test File (if missing)

**`packages/html/src/[component]/tests/[component].tsx`**

```tsx
import { [ComponentName] } from '../../[component]';

export default () => (
    <div id="test-area">
        <[ComponentName]>Default</[ComponentName]>
        <[ComponentName] hover>Hover</[ComponentName]>
        <[ComponentName] focus>Focus</[ComponentName]>
        <[ComponentName] active>Active</[ComponentName]>
        <[ComponentName] disabled>Disabled</[ComponentName]>
    </div>
);
```

### Step 7 — Verify Tests Render

```bash
npm run build:tests
```

Check the compiled test output in `tests/` (or wherever the build writes HTML test files) — confirm no JSX/TS errors.

---

## Post-Generation Validation Checklist

- [ ] All test files export a default functional component
- [ ] Test files import from `'../../[component]'` (not from spec directly)
- [ ] `id="test-area"` present on the root element (used by screenshot test runner)
- [ ] All states from `[ComponentName].states` have visual coverage
- [ ] Edge cases covered: long text truncation, minimum/maximum values
- [ ] No TS errors (`npm run build:tests`)

---

## Edge Cases

- **Component with many variants**: Use dynamic mapping over `[ComponentName].options.*` arrays instead of hard-coded lists — this auto-updates when new variants are added.
- **Component with templates but no default export**: Import the specific template you want to render, don't rely on the spec render directly (spec render is for the base state only).
- **Complex composite component**: Create test files that exercise the sub-components independently first, then composite scenarios.
- **Component with required props**: Provide sensible defaults in test files; don't leave required props undefined.

---
