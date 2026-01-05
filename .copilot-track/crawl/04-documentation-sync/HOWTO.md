# Exercise 04: Documentation Sync

**Goal:** Update SassDoc comments to match current implementation.

---

## Steps

### 1. Understand SassDoc in This Repo (3 min)

This repo uses SassDoc for SCSS documentation. Comments use `///` syntax:

```scss
/// Brief description of the variable.
/// @group component-name
/// @type Color
$kendo-variable: value !default;
```

### 2. Run Documentation Check (3 min)

```bash
npm run docs:check
```

This validates that documentation is consistent. Note any warnings.

### 3. Find Documentation Gaps (5 min)

Ask Copilot Chat:

```
/explain Review packages/core/scss/components/button/_variables.scss
Identify any variables that are missing SassDoc comments (///) 
or have outdated @group annotations.
```

### 4. Choose a Component to Document (2 min)

Good candidates for documentation sync:
- `packages/core/scss/components/` — any component with gaps
- `packages/utils/scss/` — utility variables

Start with a small, focused component.

### 5. Update Documentation (10 min)

For each undocumented variable, add SassDoc comments:

```scss
/// The horizontal padding for buttons.
/// @group button
/// @type Number
$kendo-button-padding-x: 8px !default;
```

Use Copilot inline suggestions — start typing `///` and let Copilot complete.

### 6. Verify Documentation (3 min)

```bash
npm run docs
npm run docs:check
```

Both should complete without errors.

### 7. Commit Your Changes (4 min)

```bash
git add packages/core/scss/
git commit -m "docs(button): sync SassDoc comments with implementation"
```

---

## Copilot Features Used

- [x] **Copilot Chat** — `/explain` for finding gaps
- [x] **Inline suggestions** — Auto-completing `///` comments
- [ ] `/tests` — Documentation doesn't require new tests

---

## SassDoc Annotation Reference

| Annotation | Purpose | Example |
|------------|---------|---------|
| `@group` | Component/category grouping | `@group button` |
| `@type` | Value type | `@type Color`, `@type Number` |
| `@see` | Related variable/mixin | `@see $kendo-button-bg` |
| `@deprecated` | Mark as deprecated | `@deprecated Use $new-var instead` |
| `@access` | Visibility | `@access private` |

---

## Time Estimate

~25 minutes
