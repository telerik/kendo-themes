# Build & Test Baseline — Copilot Prompt

## Instructions

Use these prompts with Copilot Chat to understand the build system.

---

## Prompt 1: Understand the Test Framework

```
/explain How does the testKendoComponent function in units/utility.ts work? 
What does it validate about Kendo theme components?
```

---

## Prompt 2: Understand the Build Pipeline

```
/explain Looking at package.json scripts and gulpfile.js, explain:
1. How does `npm run sass` compile themes?
2. What's the difference between `sass` and `sass:dist`?
3. Why is Nx used instead of running scripts directly?
```

---

## Prompt 3: Understand CI Integration

```
/explain Looking at .github/workflows/ci.yml:
1. What checks run on every push?
2. In what order do the jobs execute?
3. What would cause CI to fail?
```

---

## After Running Prompts

Record your understanding:

1. **Test Strategy**: Unit tests validate that component variables are customizable
2. **Build Flow**: `sass` → compile to dist, `docs` → generate metadata
3. **CI Gates**: Lint, compile, unit tests, visual screenshots

---

## PR Summary Snippet

```markdown
### Summary
Verified build and test baseline for the kendo-themes repository.

### Baseline Metrics
- All unit tests passing
- Lint checks clean
- SCSS compilation successful
- CI workflow understood

### Next Steps
Ready to proceed with small refactoring exercises.
```

---

## Local Test Commands Reference

Save this for future exercises:

```bash
# Quick validation (use before commits)
npm run lint && npm run test:units

# Full validation (use before PRs)
npm run docs && npm run sass && npm run lint && npm run test:units

# Single theme compile
npm run sass --prefix packages/default

# Watch mode for unit tests
npm run test:units:watch
```
