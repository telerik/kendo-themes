# API/Contract Hardening — Copilot Prompt

## Instructions

Use these prompts with Copilot Chat to find and fix API issues.

---

## Prompt 1: Find Missing `!default` Flags

```
Scan packages/core/scss/components/button/_variables.scss and identify:

1. All $kendo-* variables WITHOUT the !default flag
2. Any variables using $_ prefix (private by convention)
3. Variables that reference other variables (may need !default on both)

List each variable and whether it should have !default added.
```

---

## Prompt 2: Audit the Test Coverage

```
Compare packages/core/scss/components/button/_variables.scss with units/default/button.test.ts

List any $kendo-button-* variables with !default that are NOT in the test's expected array.
These are gaps in test coverage.
```

---

## Prompt 3: Generate Test Update

```
/tests Update units/default/button.test.ts to add coverage for these variables:

[paste list of variables]

Show me the exact diff to add them to the expected array.
Follow the existing format and alphabetical ordering if present.
```

---

## Prompt 4: Validate No Breaking Changes

```
I plan to add !default to these variables in packages/core/scss/components/button/_variables.scss:

[list variables]

Confirm this is NOT a breaking change:
1. Adding !default to existing variables = safe
2. Changing variable values = potentially breaking
3. Renaming variables = breaking

Is my planned change safe?
```

---

## PR Summary Snippet

```markdown
### Summary
Hardened the API contract for [component] by ensuring all public variables 
have `!default` flags and are covered by unit tests.

### Changes
- Added `!default` to [N] variables in `packages/core/scss/components/[component]/`
- Updated `units/default/[component].test.ts` with new variable assertions

### Testing
- [x] `npm run lint:styles` passes
- [x] `npm run test:units` passes with new assertions
- [x] No CSS output changes (API-only fix)

### Breaking Changes
None — adding `!default` is backward compatible.

### Type
- [x] Fix (corrects API contract)
```

---

## Commit Message Template

```
fix(component): add !default to public variables

- Added !default flag to N variables
- Added unit test coverage for customizability
- No breaking changes to existing API

Refs: Crawl Exercise 05
```

---

## Script: Find All Missing `!default`

Run this to audit the entire codebase:

```bash
# Find all $kendo-* variables without !default
grep -r '^\$kendo-[^:]*:[^!]*;$' packages/core/scss/components/ \
  | grep -v '!default' \
  | head -20
```

---

## Understanding Variable Visibility

| Pattern | Visibility | `!default` Required? |
|---------|------------|---------------------|
| `$kendo-*` | Public | Yes |
| `$_kendo-*` | Private | No |
| `$-internal` | Private | No |
| Variables in mixins | Local | No |
