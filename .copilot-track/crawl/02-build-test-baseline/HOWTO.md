# Exercise 02: Build & Test Baseline

**Goal:** Confirm all build and test commands work; document the baseline state.

---

## Steps

### 1. Install Dependencies (2 min)

```bash
npm ci
```

Verify no errors. If you see peer dependency warnings, they're expected.

### 2. Generate Documentation Metadata (3 min)

```bash
npm run docs
```

This is **required before running unit tests** — it generates SassDoc metadata.

### 3. Compile All Themes (3 min)

```bash
npm run sass
```

Verify output appears in `packages/*/dist/all.css`.

### 4. Run Linters (2 min)

```bash
npm run lint
```

This runs both ESLint (`lint:scripts`) and Stylelint (`lint:styles`).

### 5. Run Unit Tests (3 min)

```bash
npm run test:units
```

All tests should pass. Note the test count for your baseline.

### 6. Use Copilot to Explain a Test (2 min)

Open [units/default/button.test.ts](units/default/button.test.ts) and ask Copilot Chat:

```
/explain What does this test file validate? How does testKendoComponent work?
```

### 7. Document Your Baseline (3 min)

Create or update a local notes file with:
- Number of passing tests
- Any warnings observed
- Compilation time

### 8. Commit Baseline Documentation (2 min)

If you created a notes file in the track:

```bash
git add .copilot-track/
git commit -m "docs(track): document build and test baseline"
```

---

## Copilot Features Used

- [x] **Copilot Chat** — `/explain` for understanding tests
- [ ] **Inline suggestions** — Not primary focus
- [ ] `/tests` — We're running existing tests, not generating new ones

---

## Common Issues

| Issue | Solution |
|-------|----------|
| Unit tests fail | Run `npm run docs` first |
| Stylelint errors on untracked files | Check `.stylelintignore` |
| Slow compilation | Normal for first run; cached after |

---

## Time Estimate

~15 minutes
