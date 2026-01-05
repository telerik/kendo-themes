# Acceptance Criteria — Exercise 05

## Required Deliverables

- [ ] **All public variables have `!default`** in modified files
- [ ] **Unit test updated** to validate customizability
- [ ] **`npm run lint:styles`** passes
- [ ] **`npm run test:units`** passes (including new assertions)
- [ ] **Commit follows Conventional Commits** format

---

## Verification Commands

```bash
# Check for variables missing !default in a component
grep -E '^\$kendo-.*:.*[^!default];$' packages/core/scss/components/button/_variables.scss
# Should return nothing (all variables have !default)

# Run lint
npm run lint:styles

# Regenerate docs and run tests
npm run docs && npm run test:units

# Verify commit message
git log -1 --pretty=format:"%s" | grep -E "^fix\(.*\):" \
  && echo "✓ Valid commit" || echo "✗ Invalid commit format"
```

---

## Understanding the Test Pattern

The unit tests in `units/default/*.test.ts` work like this:

```typescript
// Variables listed here are expected to be customizable
const expected = [
    "kendo-button-padding-x",
    "kendo-button-padding-y",
    // Add your variable here (without $ prefix)
];

// testKendoComponent validates each variable can be overridden
testKendoComponent(component, group, className, dependencyClassNames, expected);
```

**Key insight:** If a variable has `!default`, it should be in the `expected` array.

---

## Example Change

### SCSS Change

```scss
// packages/core/scss/components/button/_variables.scss

// Before
$kendo-button-new-prop: 4px;

// After
$kendo-button-new-prop: 4px !default;
```

### Test Change

```typescript
// units/default/button.test.ts

const expected = [
    "kendo-button-padding-x",
    "kendo-button-padding-y",
    // ... existing entries
    "kendo-button-new-prop", // ← Add new variable
];
```

---

## Evidence of Learning

After completing this exercise, you should be able to answer:

1. What does `!default` do in Sass?
   - **Answer:** Allows the variable to be overridden if defined before import.

2. Why do unit tests check variable customizability?
   - **Answer:** To prevent regressions that would break consumer customizations.

3. What's the naming convention for private variables?
   - **Answer:** Prefix with `$_` (underscore) or omit `!default`.

---

## Rollback

```bash
# Undo changes to both SCSS and tests
git checkout develop -- packages/core/scss/
git checkout develop -- units/
```

---

## Common Pitfalls

| Mistake | Fix |
|---------|-----|
| Added variable to test but no `!default` in SCSS | Test will fail — add `!default` first |
| Changed variable value while adding `!default` | Keep original value, only add flag |
| Forgot to run `npm run docs` before tests | Docs must regenerate for tests to see changes |
