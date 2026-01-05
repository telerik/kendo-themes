# Exercise 05: API/Contract Hardening

**Goal:** Ensure all public variables have `!default` flags and are validated by tests.

---

## Steps

### 1. Understand the API Contract (3 min)

In Sass themes, the API contract is defined by:
- **Public variables** with `!default` — consumers can override these
- **Private variables** (no `!default` or `$_` prefix) — internal only

The `!default` flag is crucial: it allows customization before import.

### 2. Find Variables Missing `!default` (5 min)

Ask Copilot Chat:

```
Search packages/core/scss/components/button/_variables.scss for any 
$kendo-* variables that are missing the !default flag.

These are potential API issues because consumers cannot override them.
```

### 3. Understand the Unit Test Pattern (5 min)

Open [units/default/button.test.ts](units/default/button.test.ts):

```typescript
const expected = [
    "kendo-button-padding-x", // Variable customizations work
    // ...
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected]);
```

Tests validate that variables can be customized.

### 4. Add `!default` Where Missing (5 min)

For any variable missing `!default`:

```scss
// Before (broken API)
$kendo-button-custom-prop: 10px;

// After (proper API)
$kendo-button-custom-prop: 10px !default;
```

### 5. Add Test Coverage (10 min)

If you added `!default` to a variable, add it to the test's expected list.

Ask Copilot:

```
/tests I added !default to $kendo-button-xyz in packages/core.
Update units/default/button.test.ts to include this variable in the expected array.
Show me the exact change needed.
```

### 6. Run Validation (3 min)

```bash
npm run docs
npm run lint:styles
npm run test:units
```

### 7. Commit Your Changes (4 min)

```bash
git add packages/core/ units/
git commit -m "fix(button): add !default to public variables

- Added !default to $kendo-button-xyz
- Added unit test validation

BREAKING CHANGE: None (additive change)"
```

---

## Copilot Features Used

- [x] **Copilot Chat** — Finding missing `!default` flags
- [x] **Inline suggestions** — Adding `!default`
- [x] **Copilot Chat** — `/tests` for test updates

---

## Why This Matters

| Issue | Impact |
|-------|--------|
| Missing `!default` | Consumers cannot customize the variable |
| No test coverage | Regression could break customization |
| Inconsistent API | Confusing developer experience |

---

## Time Estimate

~35 minutes
