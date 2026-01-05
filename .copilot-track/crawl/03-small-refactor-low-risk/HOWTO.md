# Exercise 03: Small Refactor (Low-Risk Module)

**Goal:** Make a small, safe refactor in `packages/utils` with test validation.

---

## Steps

### 1. Identify a Refactoring Target (5 min)

The `packages/utils` package is ideal because:
- Standalone (doesn't affect theme packages)
- Well-tested infrastructure
- Clear utility patterns

Open [packages/utils/scss/_variables.scss](packages/utils/scss/_variables.scss) and look for:
- Repeated patterns that could use a loop
- Variables without `!default` flags
- Opportunities for better organization

### 2. Use Copilot to Analyze (3 min)

Ask Copilot Chat:

```
/explain Review packages/utils/scss/_variables.scss
Identify any variables missing the !default flag or any repeated patterns
that could be simplified with a Sass loop.
```

### 3. Choose a Safe Refactor (2 min)

Examples of safe refactors:
- Add missing `!default` to a variable
- Extract a repeated value into a variable
- Improve a comment for clarity

**Avoid:** Changing variable names (breaking change) or output CSS.

### 4. Implement the Refactor (5 min)

Make your change using Copilot inline suggestions. Keep the diff small (< 20 lines).

Example safe change — add `!default` to a variable:
```scss
// Before
$kendo-some-value: 16px;

// After  
$kendo-some-value: 16px !default;
```

### 5. Verify No Output Changes (3 min)

```bash
# Compile before (save the output)
npm run sass --prefix packages/utils
cp packages/utils/dist/all.css /tmp/utils-before.css

# Make your change, then recompile
npm run sass --prefix packages/utils

# Compare outputs
diff /tmp/utils-before.css packages/utils/dist/all.css
```

The diff should be empty or minimal (whitespace only).

### 6. Run Tests (3 min)

```bash
npm run lint:styles
npm run test:units
```

### 7. Ask Copilot to Generate a Test (5 min)

If your refactor added a new variable or changed behavior, ask:

```
/tests Generate a test case for the variable I just modified in packages/utils.
The test should go in units/ and follow the existing testKendoComponent pattern.
```

### 8. Commit Your Change (4 min)

```bash
git add packages/utils/
git commit -m "refactor(utils): add !default to kendo-xyz variable"
```

---

## Copilot Features Used

- [x] **Copilot Chat** — `/explain` for analysis
- [x] **Inline suggestions** — Writing the refactor
- [x] **Copilot Chat** — `/tests` for test generation

---

## Guardrails

| Rule | Why |
|------|-----|
| Don't rename variables | Breaking change for consumers |
| Don't change CSS output | Could affect visual appearance |
| Keep diff < 50 lines | Easier to review and revert |
| Run lint before commit | Catch formatting issues early |

---

## Time Estimate

~30 minutes
