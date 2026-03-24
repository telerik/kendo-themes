---
name: changelog-author
description: "Generates a properly formatted CHANGELOG.md entry from a git diff, PR description, or change summary following Conventional Commits and Keep a Changelog conventions. Classifies changes as breaking/feat/fix/deprecation with migration notes for breaking changes. Use when writing release notes or documenting a batch of changes. Not for version bumping (use release-prep)."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Changelog Author (E2)

Generate a **properly formatted changelog entry** from git diff, PR descriptions, or a summary of changes.

## Pre-Flight: Read Context First

1. `CHANGELOG.md` — the existing file's format and conventions
2. Recent git log: `git log --oneline -20` — to understand commit style
3. `lerna.json` — current version number

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `CHANGE_DESCRIPTION` | ✅ | Text description, or "use git diff HEAD~N" |
| `VERSION` | ⬜ | Target version (e.g., `8.3.0`). If omitted, mark as `[Unreleased]` |
| `AFFECTED_COMPONENTS` | ⬜ | Comma-separated component names affected |

---

## Step-by-Step Workflow

### Step 1 — Gather Changes

If `CHANGE_DESCRIPTION` = "use git diff":

```bash
git diff HEAD~1 --name-only             # Files changed
git log HEAD~1..HEAD --oneline          # Commit messages
git diff HEAD~1 -- "*.scss" | head -100 # SCSS changes sample
```

If a description is provided, parse it directly.

### Step 2 — Classify Each Change

Map each change to a category:

| Conventional Commit Type | Changelog Section | Semver Impact |
|--------------------------|-------------------|---------------|
| `feat:` | Added | minor |
| `fix:` | Fixed | patch |
| `BREAKING CHANGE:` | Changed (Breaking) | major |
| `deprecation:` | Deprecated | minor |
| `refactor:` / `perf:` | Changed | patch |
| `docs:` | (usually skip) | — |
| `chore:` | (usually skip) | — |
| Removed functionality | Removed | major |
| Security fix | Security | patch |

**Kendo-specific classification rules:**

- New component: `Added` (minor)
- New variant/size: `Added` (minor)
- Variable renamed: `Changed` + **Breaking** if public (major)
- Variable default value changed: `Changed` (patch or minor)
- CSS class renamed: `Changed` + **Breaking** (major)
- New token added: `Added` (minor)
- Accessibility fix: `Fixed` (patch)
- Visual regression fix: `Fixed` (patch)

### Step 3 — Format Changelog Entry

Match the format in `CHANGELOG.md` exactly. The standard is:

```markdown
## [8.3.0] - 2026-03-20

### Added

- **Button**: Added `ghost` fill mode variant ([#1234](https://github.com/telerik/kendo-themes/issues/1234))
- **Chip**: Added `xlarge` size option

### Fixed

- **Grid**: Fixed header cell padding inconsistency in the fluent theme ([#1235](https://github.com/telerik/kendo-themes/pull/1235))
- **Button**: Fixed focus shadow not visible in high-contrast mode

### Changed

- **Rating**: Updated empty star color to use `base-subtle` token instead of hardcoded `#ccc`

### Deprecated

- **TimePicker**: `$kendo-timepicker-popup-padding` is deprecated; use `$kendo-timepicker-list-padding` instead

### Breaking Changes

- **Chip**: Renamed CSS class `.k-chip-actions` to `.k-chip-action-buttons`. Update selectors in custom CSS.
  - **Migration**: Replace `.k-chip-actions` with `.k-chip-action-buttons` in any custom CSS overrides.
```

**Formatting rules:**

- Each entry: `- **ComponentName**: Description of change`
- Link to issue/PR in parentheses if available: `([#NNN](url))`
- Breaking changes: include short migration guidance in the bullet itself
- Do NOT use bold for the verb (not `**Added** Button foo`), bold the component name
- Order: most impactful component first within each section
- Alphabetical within same impact level

### Step 4 — Write Breaking Change Details (if any)

If there are breaking changes, also prepare a separate "Migration Notes" block:

```markdown
#### Migration Notes for 8.3.0

**Chip: CSS class rename**

```diff
- .k-chip-actions { ... }
+ .k-chip-action-buttons { ... }
```

**Button: Variable rename**

`$kendo-button-base-bg` has been renamed to `$kendo-button-bg`.

```diff
- $kendo-button-base-bg: my-color;
+ $kendo-button-bg: my-color;
```
```

### Step 5 — Update CHANGELOG.md

Insert the new entry at the top of `CHANGELOG.md`, below the first `#` heading but above any existing entries.

---

## Post-Generation Validation Checklist

- [ ] Version number and date are correct
- [ ] Each change classified in the right section (Added / Fixed / Changed / Deprecated / Breaking)
- [ ] Component names bolded in each entry
- [ ] No duplicate entries
- [ ] Breaking changes have migration notes
- [ ] Issue/PR references are formatted correctly
- [ ] Entry inserted at the correct position in CHANGELOG.md

---

## Edge Cases

- **Multiple components affected by one change**: Either split into separate bullets (preferred) or use a generic "Theme" or "Core" label.
- **No issue/PR number available**: Omit the reference parentheses entirely.
- **Dependency bump only**: Usually goes in a `chore` commit, not the changelog unless it affects public API.
- **Multiple themes affected differently**: Call out theme explicitly — "**Button (fluent)**: ..."
- **Revert of a previous change**: Add to "Fixed" section — "Reverted [...]" — and cross-reference the original entry.

---
