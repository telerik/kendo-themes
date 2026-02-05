# Git Workflow: ARIA Integration Feature

**Feature**: 001-aria-integration  
**Phase**: Phase 2 - Foundation  
**Task**: T012  
**Created**: 2026-02-05

This document establishes git workflow conventions for the ARIA integration project across all three phases.

---

## Branch Naming Conventions

### Feature Branch Structure

```
feat/aria-[component]-[phase]
```

**Components**:
- `[component]`: Component name in lowercase with hyphens (e.g., `button`, `dropdown-list`, `multi-select`)
- `[phase]`: Phase identifier (p1, p2, or p3)

**Examples**:
```bash
feat/aria-button-p1           # Phase 1: Apply ARIA to button
feat/aria-grid-p1             # Phase 1: Apply ARIA to grid
feat/aria-button-p2           # Phase 2: Migrate button to hybrid format
feat/aria-dropdown-list-p3    # Phase 3: AI-generated spec for dropdown-list
```

### Batch Branches (Alternative for Parallel Work)

For processing multiple components simultaneously:

```
feat/aria-batch-[tier]-[phase]
```

**Examples**:
```bash
feat/aria-batch-p0-p1         # P0 components batch (Phase 1)
feat/aria-batch-p1-p1         # P1 components batch (Phase 1)
feat/aria-batch-p0-p2         # P0 components batch (Phase 2)
```

---

## Commit Message Format

### Conventional Commits Structure

All commits MUST follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Type

**⚠️ IMPORTANT**: Use `chore:` for all ARIA integration work to avoid triggering version bumps.

- `chore`: ARIA integration work (applying ARIA, updating docs, tracking updates, workflow setup)
- `docs`: Documentation-only changes not related to ARIA (if needed)
- `test`: Adding or updating tests
- `refactor`: Code restructuring without functionality change

**DO NOT USE** `feat:` or `fix:` for ARIA work - these trigger semantic versioning.

### Scope

**Component name** in lowercase:
- `button`
- `grid`
- `dropdown-list`
- `multi-select`
- etc.

**Or phase identifier**:
- `p0`, `p1`, `p2` for batch commits
- `setup` for Phase 1
- `foundation` for Phase 2

### Subject

- Use imperative mood: "apply" not "applied" or "applies"
- Lowercase first letter
- No period at end
- Max 80 characters
- Be specific and descriptive

---

## Commit Message Templates

### Phase 1 (P1): Apply ARIA Specifications

**Template**:
```
chore(<component>): apply ARIA attributes from spec

- Add <attribute> to <selector> for <purpose>
- Add <attribute> to <selector> for <purpose>
- [List all applied attributes]

Refs: #001-aria-integration
ARIA Coverage: X/Y rules (Z%)
WCAG: PASS|FAIL
```

**Example**:
```
chore(button): apply ARIA attributes from spec

- Native <button> element already provides implicit role
- No explicit role="button" needed (semantic HTML preferred)
- Validates against aria/button_aria.md specification

Refs: #001-aria-integration
ARIA Coverage: 1/1 rules (100%)
WCAG: PASS (98.1% avg, 2 expected violations for icon-only buttons)
```

**Example with Attributes**:
```
chore(dropdown-list): apply ARIA attributes from spec

- Add role="combobox" to .k-dropdown-button
- Add aria-expanded="true|false" to reflect open/closed state
- Add aria-controls="{id}-popup" to link button to popup
- Add aria-haspopup="listbox" to indicate popup type
- Add role="listbox" to .k-dropdown-popup
- Add role="option" to .k-list-item elements
- Add aria-selected="true|false" to selected items

Refs: #001-aria-integration
ARIA Coverage: 7/7 rules (100%)
WCAG: PASS
```

---

### Phase 2 (P2): Migrate Knowledge to Hybrid Format

**Template**:
```
chore(<component>): migrate ARIA knowledge to hybrid format

- Add TSDoc prose explaining accessibility patterns
- Document selectors with @selector tags
- Document ARIA attributes with @aria tags
- Reference WCAG criteria with @wcag tags
- Include usage examples with @example tags
- Preserve all information from aria/<component>_aria.md

Refs: #001-aria-integration
Phase: P2 - Knowledge Migration
Coverage: X selectors, Y attributes, Z WCAG references
```

**Example**:
```
chore(button): migrate ARIA knowledge to hybrid format

- Add TSDoc documentation explaining button accessibility
- Document .k-button selector usage
- Document role="button" OR native <button> alternative with @aria tag
- Reference WCAG 4.1.2 (Name, Role, Value) Level A with @wcag tag
- Include examples for standard, icon-only, and toggle buttons
- Preserve rationale: semantic HTML preferred over ARIA role

Refs: #001-aria-integration
Phase: P2 - Knowledge Migration
Coverage: 1 selector, 1 attribute (with alternative), 1 WCAG reference
```

---

### Phase 3 (P3): AI-Generated Specifications

**Template**:
```
chore(<component>): generate ARIA spec via AI workflow

- AI analyzed patterns from similar components: <list>
- Generated ARIA attributes based on <pattern>
- Applied to component spec and templates
- Validated with test:wcag (no aria/*.md file available)

Refs: #001-aria-integration
Phase: P3 - AI Workflow
Pattern Source: <similar-components>
WCAG: PASS|FAIL (first attempt)
```

**Example**:
```
chore(test-widget-2): generate ARIA spec via AI workflow

- AI analyzed patterns from: dropdown-list, combobox
- Generated combobox pattern with aria-expanded, aria-controls
- Applied role="combobox" to trigger button
- Applied role="listbox" to popup container
- Applied role="option" to list items
- Validated with test:wcag (95% score on first attempt)

Refs: #001-aria-integration
Phase: P3 - AI Workflow
Pattern Source: dropdown-list, combobox
WCAG: PASS (95% score, minor contrast issue corrected)
```

---

### Batch Commits

**Template**:
```
chore(<tier>): apply ARIA to <number> components

Components:
- <component-1>: X/Y rules (Z%)
- <component-2>: X/Y rules (Z%)
- [list all components with coverage]

Refs: #001-aria-integration
Batch: P0|P1|P2
Total Coverage: X components, Y rules, Z% average
WCAG: PASS (all components)
```

**Example**:
```
chore(p0): apply ARIA to 5 high-priority components

Components:
- button: 1/1 rules (100%)
- checkbox: 2/2 rules (100%)
- radio: 2/2 rules (100%)
- switch: 2/2 rules (100%)
- textbox: 3/3 rules (100%)

Refs: #001-aria-integration
Batch: P0 - High-Traffic Interactive Components
Total Coverage: 5 components, 10 rules, 100% average
WCAG: PASS (all components)
```

---

## Git Workflow Steps

### Standard Component Implementation (Phase 1)

```bash
# 1. Create feature branch from main branch
git checkout 001-aria-integration
git pull origin 001-aria-integration
git checkout -b feat/aria-button-p1

# 2. Make changes (apply ARIA attributes)
# - Edit packages/html/src/button/button.spec.tsx
# - Edit packages/html/src/button/templates/*.tsx

# 3. Run validations
npm run test:aria button
npm run test:wcag button
cd packages/html && npm run typecheck

# 4. Update tracking
# Edit specs/001-aria-integration/component-tracking.csv
# Set Phase 1 Status = "Complete"

# 5. Stage changes
git add aria/button_aria.md
git add packages/html/src/button/
git add specs/001-aria-integration/component-tracking.csv

# 6. Commit with template
git commit -m "chore(button): apply ARIA attributes from spec

- Native <button> element provides implicit role
- No explicit role needed (semantic HTML preferred)
- Validates 100% against aria/button_aria.md

Refs: #001-aria-integration
ARIA Coverage: 1/1 rules (100%)
WCAG: PASS"

# 7. Push to remote
git push -u origin feat/aria-button-p1

# 8. Create pull request (if desired)
# Or merge back to 001-aria-integration branch for batching

# 9. Clean up
git checkout 001-aria-integration
git branch -d feat/aria-button-p1  # After merge
```

---

### Batch Workflow (Multiple Components)

```bash
# 1. Create batch branch
git checkout -b feat/aria-batch-p0-p1

# 2. Process components sequentially or in parallel
# Component 1
# ... apply ARIA, validate, commit

# Component 2
# ... apply ARIA, validate, commit

# 3. Push batch
git push -u origin feat/aria-batch-p0-p1

# 4. Create PR for entire P0 batch
```

---

## Pre-commit Checklist

Before committing, ensure:

- ✅ `npm run test:aria [component]` passes (100% coverage)
- ✅ `npm run test:wcag [component]` passes (or documents expected violations)
- ✅ `cd packages/html && npm run typecheck` passes (no errors)
- ✅ `specs/001-aria-integration/component-tracking.csv` updated
- ✅ Commit message follows template with `chore:` prefix
- ✅ Commit includes coverage metrics
- ✅ Files in `tests/` folder: Prefer not to modify (entry points only). Minor updates allowed as last resort with user approval (setting aria props, using new templates)

---

## Git Hooks

### Pre-commit Hook (Husky)

Already configured in repository:

```bash
# .husky/pre-commit
npm run lint:staged
```

This runs ESLint and Stylelint on staged files automatically.

**Note**: Accessibility tests (test:aria, test:wcag) are run manually before commit, not in hooks (too slow for pre-commit).

---

## Pull Request Template

When creating PRs for batches or milestones:

**Title**:
```
chore(aria): [Phase] [Scope] - [Component Count] components
```

**Examples**:
- `chore(aria): Phase 1 - P0 High-Priority Components (14 components)`
- `chore(aria): Phase 2 - Hybrid Migration P0 Batch (14 components)`

**Description Template**:
```markdown
## Phase X - [Scope]

### Components Processed
- [x] component-1 (X/Y rules, Z% WCAG)
- [x] component-2 (X/Y rules, Z% WCAG)
- [list all]

### Validation Results
- **ARIA Coverage**: X/Y rules across Z components (W% average)
- **WCAG Compliance**: Q% average (Level AA)
- **TypeScript**: All passing

### Tracking
- Updated: specs/001-aria-integration/component-tracking.csv
- Phase 1 Status: X/112 components complete (Y%)

### Relates to
Refs: #001-aria-integration
```

---

## Branch Cleanup

After PR merge:

```bash
# Delete local branch
git branch -d feat/aria-button-p1

# Delete remote branch (if not auto-deleted)
git push origin --delete feat/aria-button-p1

# Sync with main branch
git checkout 001-aria-integration
git pull origin 001-aria-integration
```

---

## Summary

**Branch Format**: `feat/aria-[component]-[phase]`  
**Commit Format**: `<type>(<scope>): <subject> + body with metrics`  
**Pre-commit**: Run all 3 validations (aria, wcag, typecheck)  
**Tracking**: Update component-tracking.csv before commit  
**PR**: Use template with component list and metrics

---

**Workflow Established**: T012 Complete  
**Ready for Phase 3 Implementation**: ✅  
**Next**: Begin User Story 1 (T013+) applying ARIA to P0 components