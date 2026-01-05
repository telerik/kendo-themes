# Acceptance Criteria — Exercise 02

## Required Deliverables

- [ ] **Dependencies installed** without blocking errors
- [ ] **`npm run docs`** completes successfully
- [ ] **`npm run sass`** compiles all themes
- [ ] **`npm run lint`** passes with no errors
- [ ] **`npm run test:units`** all tests pass

---

## Verification Commands

```bash
# Full verification sequence
npm run docs && npm run sass && npm run lint && npm run test:units
```

Expected output:
- `docs`: Generated SassDoc JSON files in `packages/*/docs/`
- `sass`: CSS files in `packages/*/dist/all.css`
- `lint`: No errors (warnings acceptable)
- `test:units`: All tests pass (e.g., "Tests: XX passed")

---

## Baseline Metrics to Record

| Metric | Your Value |
|--------|------------|
| Total unit tests | _____ |
| Lint warnings | _____ |
| Sass compile time | ~___s |
| Node version | _____ |

---

## Evidence of Learning

After completing this exercise, you should be able to answer:

1. Why must `npm run docs` run before `npm run test:units`?
   - **Answer:** Unit tests rely on SassDoc-generated metadata to validate variables.

2. What do the unit tests in `units/default/` validate?
   - **Answer:** They verify that component CSS variables are customizable and follow naming conventions.

3. How does the monorepo run tasks across packages?
   - **Answer:** Uses Nx (`nx run-many -t <task>`) for parallel execution.

---

## No Rollback Needed

This exercise doesn't modify source files. If you created notes:

```bash
rm .copilot-track/crawl/02-build-test-baseline/notes.md
```
