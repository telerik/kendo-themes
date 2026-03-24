---
name: release-prep
description: "Prepares a Kendo Themes release: validates readiness, determines semver bump from commit history, updates lerna.json and all package.json version fields, generates a CHANGELOG entry, and produces a release checklist. Use when cutting a patch, minor, or major release. Does not push or tag — those steps require human confirmation. For changelog-only work use changelog-author."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Release Prep (F2)

Prepare a **full release** — version bump, changelog, validation checklist.

## Pre-Flight: Read Context First

1. `CHANGELOG.md` — current format and latest version
2. `lerna.json` — current version
3. `package.json` (root) — scripts available
4. Recent git log: `git log --oneline -30`

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `RELEASE_TYPE` | ✅ | `patch`, `minor`, or `major` |
| `CHANGES_SUMMARY` | ⬜ | Description of changes (or "use git log"). If omitted, derive from git |

---

## Step-by-Step Workflow

### Step 1 — Assess Release Readiness

Run pre-release checks and report status:

```bash
# Check for uncommitted changes
git status

# Verify current branch
git branch --show-current

# Check for pending conflicts
git diff --name-only --diff-filter=U
```

**Gate conditions (must all pass before proceeding):**
- [ ] Working on `develop` or a release branch (not `main`)
- [ ] No uncommitted changes
- [ ] No merge conflicts
- [ ] All required CI checks green (check `.github/workflows/`)

### Step 2 — Determine Semver Bump

Analyze commits since last tag:

```bash
git log $(git describe --tags --abbrev=0)..HEAD --oneline
```

**Classification rules:**

| Commit type | Semver impact |
|-------------|---------------|
| Any `BREAKING CHANGE:` in body | major |
| `feat:` or new component/token | minor |
| `fix:`, `perf:`, `docs:`, `refactor:` | patch |
| `chore:`, `ci:`, `build:` | patch (or none) |

Report the recommended bump and ask for confirmation if ambiguous.

### Step 3 — Calculate New Version

From `lerna.json` current version + `RELEASE_TYPE`:

```
8.2.3 + patch → 8.2.4
8.2.3 + minor → 8.3.0
8.2.3 + major → 9.0.0
```

### Step 4 — Generate Changelog Entry

Invoke the changelog-author workflow for all commits since the last tag:

```bash
git log $(git describe --tags --abbrev=0)..HEAD --format="%s%n%b"
```

Format per changelog-author skill conventions. Insert at top of `CHANGELOG.md`.

### Step 5 — Update Version Numbers

Update the version in:

1. **`lerna.json`**:
   ```json
   { "version": "8.3.0" }
   ```

2. **`package.json`** (root and all packages that need version bump):
   ```json
   { "version": "8.3.0" }
   ```

3. Each **`packages/*/package.json`** — update `version` field and any internal `@progress/kendo-theme-*` dependency versions.

> ⚠️ Do NOT run `npm run release` or `lerna publish` — leave those for the human to run after review.

### Step 6 — Produce Release Checklist

```markdown
## Release Checklist: v8.3.0

### Pre-Release Validation
- [ ] `npm run sass` — all themes compile
- [ ] `npm run lint` — no linting errors
- [ ] `npm run docs` — SassDoc generates
- [ ] `npm run test:units` — unit tests pass
- [ ] `npm run test:integrations` — bundler tests pass
- [ ] `npm run test:contrast` — color contrast passes
- [ ] CHANGELOG.md entry written and reviewed

### Breaking Changes Review
- [ ] All breaking changes documented in CHANGELOG
- [ ] Migration guide written (if breaking changes exist)
- [ ] Deprecation notices added in code for deprecated APIs

### Version Updates
- [ ] `lerna.json` updated to v8.3.0
- [ ] All `packages/*/package.json` updated to v8.3.0
- [ ] Internal cross-package dep versions aligned

### Release Execution (human)
- [ ] Create release branch: `release/8.3.0`
- [ ] Squash-merge develop into release branch
- [ ] Run `npm run release` or `lerna publish`
- [ ] Push git tag: `v8.3.0`
- [ ] Create GitHub Release with changelog
- [ ] Publish to npm
- [ ] Merge release branch into `main`
- [ ] Back-merge `main` into `develop`
```

---

## Post-Prep Validation

- [ ] `lerna.json` version matches target
- [ ] All `packages/*/package.json` versions updated
- [ ] CHANGELOG.md has new version entry at top
- [ ] No version mismatches between peer deps

---

## Edge Cases

- **Pre-release version** (alpha/beta): Use `8.3.0-beta.1` format in lerna.json; add `prerelease` tag in CHANGELOG.
- **Hotfix from main**: Branch from `main`, increment patch only; cherry-pick commits, don't pull from develop.
- **Major version with many breaking changes**: Group breaking changes in CHANGELOG by component; generate separate migration guide file.
- **lerna.json uses `"independent"` versioning**: Each package version must be bumped individually. List all affected packages.

---
