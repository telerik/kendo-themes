---
name: pr-review
description: "Reviews a pull request or uncommitted changes against Kendo Themes contribution standards: variable naming, SassDoc coverage, @forward map completeness, HTML spec correctness, test coverage, accessibility regressions, and breaking change detection. Produces a structured report with actionable feedback. Use before merging PRs or as a self-review before submitting. Not for visual regression tests (separate CI step)."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: PR Review (F3)

Review a pull request (or set of uncommitted changes) for compliance with Kendo Themes contribution standards.

## Pre-Flight: Read Context First

1. `.github/skills/shared/repo-conventions.md`
2. `CONTRIBUTING.md` — contribution guidelines
3. `.github/copilot-instructions.md` — code standards
4. The diff being reviewed (use `git diff`, PR files changed list, or user-provided description)

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `PR_DESCRIPTION` | ✅ | PR title + description, or "use git diff" |
| `CHANGED_FILES` | ⬜ | File list (or `git diff --name-only HEAD~N`) |
| `REVIEW_FOCUS` | ⬜ | Comma-separated: `conventions`, `tests`, `docs`, `a11y`, `breaking`. Default: all |

---

## Step-by-Step Workflow

### Step 1 — Gather the Diff

```bash
git diff HEAD~1 --name-only           # Changed files
git diff HEAD~1 -- "*.scss"           # SCSS changes
git diff HEAD~1 -- "*.tsx" "*.ts"     # TypeScript changes
git diff HEAD~1 -- "CHANGELOG.md"     # Changelog update
```

Or read the PR files directly if provided.

### Step 2 — Classify Changes

Group changed files by category:

| File pattern | Category |
|-------------|----------|
| `packages/core/scss/**/_variables.scss` | Core token addition |
| `packages/*/scss/**/_variables.scss` | Theme variable change |
| `packages/*/scss/**/_{layout,theme}.scss` | Style implementation |
| `packages/*/scss/**/_{index}.scss` | Registration / dependency change |
| `packages/html/src/**/*.spec.tsx` | HTML spec change |
| `packages/html/src/**/*.tsx` | Template / test change |
| `CHANGELOG.md` | Release documentation |
| `lerna.json` / `package.json` | Version bump |

### Step 3 — Review: SCSS Variable Naming

For each new `$kendo-*` variable added:

**Check:**
- ✅ Follows `$kendo-<component>[-sub][-size][-mode][-state]-<property>` pattern
- ✅ Component name is lowercase kebab-case
- ✅ Property name from allowed list (`bg`, `text`, `border`, `shadow`, `padding-x`, etc.)
- ✅ Has `!default` flag
- ✅ Core package uses `null`, theme packages use actual values
- ✅ SassDoc comment present on theme-package variable
- ✅ `@group` tag matches component folder name
- ❌ camelCase detected: flag as naming violation
- ❌ Missing `!default`: flag

### Step 4 — Review: @forward Map Completeness

For each `_variables.scss` change in a theme package:

**Check:** Every newly added variable also appears in the `@forward "..." with (...)` map at the bottom of the file.

```bash
# Variables defined in the file:
grep "^\$kendo-" packages/default/scss/[component]/_variables.scss | sed 's/:.*$//'

# Variables in @forward map:
grep "\$kendo-" packages/default/scss/[component]/_variables.scss | grep -A999 "@forward" | grep "^\s*\$kendo-"
```

Flag any variable that is defined above but missing from the `@forward` map.

### Step 5 — Review: Registration in index.scss

If a new component was added, check:
- [ ] `@forward "./[component]/_index.scss";` present in theme `index.scss`
- [ ] `@include kendo-[component]--styles();` present inside `kendo-theme--styles()` mixin
- [ ] Correct ordering (dependency order — dependent components listed after their dependencies)

### Step 6 — Review: HTML Spec Completeness

For changes to `packages/html/src/[component]/`:

**Check:**
- [ ] `[component].spec.tsx` exports: `states`, `options`, `className`, `moduleName`, `folderName`, `ariaSpec`, `defaultOptions`
- [ ] `ariaSpec.rules` is present (not empty array) for interactive components
- [ ] `constants.ts` has `MODULE_NAME` and `FOLDER_NAME`
- [ ] `index.ts` re-exports all templates
- [ ] `packages/html/src/index.ts` includes the new component

### Step 7 — Review: Test Coverage

**Check:**
- [ ] At least one test file in `tests/` directory
- [ ] States test covers all items in `[Component].states`
- [ ] `id="test-area"` present on test root element
- [ ] No TypeScript errors (`npm run build:tests`)

### Step 8 — Review: Breaking Change Detection

Flag any of these as potential breaking changes:

- CSS class renamed or removed
- Variable renamed (check if used in user-facing `@forward` surface)
- Variable removed
- Default value changed for a variable that users commonly override
- Mixin signature changed
- `@forward` map shrunken (removed entries)

**For each potential breaking change:**
- Is it documented in `CHANGELOG.md` under "Breaking Changes"?
- Is there a migration note?

### Step 9 — Review: Accessibility

For HTML package changes:

- [ ] `ariaSpec.rules` not regressed (not fewer rules than before)
- [ ] New interactive elements have appropriate ARIA attributes
- [ ] `aria-hidden="true"` on decorative icons
- [ ] New props don't shadow HTML accessibility attributes

### Step 10 — Produce Review Report

```markdown
## PR Review: [PR Title]

**Overall status:** ✅ Approved / ⚠️ Changes Requested / ❌ Blocked

---

### Convention Compliance
| Check | Status | Notes |
|-------|--------|-------|
| Variable naming | ✅ Pass | |
| SassDoc coverage | ⚠️ Partial | `$kendo-chip-selected-bg` missing SassDoc |
| @forward map complete | ❌ Fail | `$kendo-chip-focus-shadow` not in @forward map |
| index.scss registration | ✅ Pass | |

### HTML Package
| Check | Status | Notes |
|-------|--------|-------|
| Spec exports complete | ✅ Pass | |
| ariaSpec present | ⚠️ Partial | Rules array is empty — add ARIA rules |
| Test coverage | ✅ Pass | |

### Breaking Changes
| Type | Description | Documented? |
|------|-------------|-------------|
| CSS class rename | `.k-chip-actions` → `.k-chip-action-buttons` | ❌ Not in CHANGELOG |

### Required Actions (before merge)
1. Add SassDoc to `$kendo-chip-selected-bg` in all theme packages
2. Add `$kendo-chip-focus-shadow` to the `@forward` map in default theme
3. Document `.k-chip-actions` rename as breaking change in CHANGELOG.md
4. Add ARIA rules to `Chip.ariaSpec.rules`

### Optional Improvements
- Consider adding a states test file for all chip states
```

---

## Edge Cases

- **PR with only chore/docs changes**: Skip SCSS and HTML reviews; focus only on changelog and commit message format.
- **Very large diff (50+ files)**: Prioritize critical checks (breaking changes, @forward map completeness) and do a sampling review on the rest.
- **Adding to classic/material/fluent but not default**: Flag as coverage gap — if a variable only partially covers themes, it may not render in those themes.
- **Swatch JSON changes**: Validate JSON is valid, variable names match existing tokens, no typos in color values.

---
