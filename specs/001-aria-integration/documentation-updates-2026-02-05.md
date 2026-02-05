# Documentation Updates: Clarifications

**Date**: 2026-02-05  
**Phase**: Phase 2 - Foundation  
**Status**: ✅ Complete

---

## Summary of Changes

Updated all project documentation to clarify two important policies:

1. **Commit Message Convention**: Use `chore:` prefix (not `feat:` or `fix:`) to avoid triggering version bumps
2. **Tests Folder Policy**: Prefer not to modify, but allow minor changes as last resort with user approval

---

## 1. Commit Message Convention Update

### Previous Convention
- Used `feat:` for applying ARIA attributes
- Used `docs:` for hybrid format migration
- Used `fix:` for correcting ARIA attributes

### New Convention (✅ Updated)
- **Use `chore:` for ALL ARIA integration work** to avoid triggering semantic versioning
- Branch names can remain flexible (e.g., `feat/aria-button-p1`)
- **DO NOT USE** `feat:` or `fix:` in commit messages for this project

### Rationale
ARIA integration is infrastructure/maintenance work, not new features. Using `feat:` or `fix:` would trigger version bumps in semantic versioning, which is not appropriate for this type of work.

### Updated Files
- ✅ `.specify/examples/git-workflow.md`: Updated all commit message templates
  - Phase 1 template: `chore(<component>): apply ARIA attributes`
  - Phase 2 template: `chore(<component>): migrate ARIA knowledge`
  - Phase 3 template: `chore(<component>): generate ARIA spec`
  - Batch template: `chore(<tier>): apply ARIA to X components`
  - Added warning section emphasizing `chore:` usage

- ✅ `.specify/examples/button-workflow.md`: Updated Step 8 commit example
  - Changed from `feat(button): verify ARIA compliance`
  - To: `chore(button): verify ARIA compliance`

- ✅ `specs/001-aria-integration/tasks.md`: Updated T012 description and T021 example
  - T012: "Branch management conventions, commit messages with chore: prefix (not feat:/fix: to avoid version bumps)"
  - T021: `git commit -m "chore(button): apply ARIA attributes..."`

- ✅ `specs/001-aria-integration/phase2-completion-report.md`: Updated T012 outcome section
  - Added warning: "⚠️ IMPORTANT: Use `chore:` prefix (NOT `feat:` or `fix:`)"
  - Updated commit types section to emphasize `chore:` usage

---

## 2. Tests Folder Policy Update

### Previous Policy
```
✅ Files in `tests/` folder NOT modified (entry points only)
```

This was too strict and would prevent necessary updates to test entry points.

### New Policy (✅ Updated)
```
✅ Files in `tests/` folder: Prefer not to modify (entry points only). 
   Minor updates allowed as last resort with user approval 
   (setting aria props, using new templates)
```

### Rationale
Some ARIA rules can only be validated through test scenarios. If a component has templates/variations that aren't currently tested, we may need to:
- Set aria-related props on existing test components
- Import and use newly created TSX templates to test specific features
- These changes should be minimal and only when no other option exists
- **User approval required** before modifying tests/

### Updated Files
- ✅ `.specify/examples/git-workflow.md`: Updated pre-commit checklist
  - Changed from: "Files in `tests/` folder NOT modified (entry points only)"
  - To: "Files in `tests/` folder: Prefer not to modify (entry points only). Minor updates allowed as last resort with user approval (setting aria props, using new templates)"

- ✅ `specs/001-aria-integration/phase2-completion-report.md`: Updated T012 pre-commit checklist
  - Same update as git-workflow.md

---

## Files Modified

| File | Changes Made |
|------|--------------|
| `.specify/examples/git-workflow.md` | - Updated Type section (emphasize `chore:`)<br>- Updated all commit templates (Phase 1/2/3, batches)<br>- Updated all examples to use `chore:`<br>- Updated pre-commit checklist (tests/ policy)<br>- Updated PR template title |
| `.specify/examples/button-workflow.md` | - Updated Step 8 commit example to use `chore:` |
| `specs/001-aria-integration/tasks.md` | - Updated T012 description (chore: prefix)<br>- T021 example already uses `chore:` |
| `specs/001-aria-integration/phase2-completion-report.md` | - Updated T012 outcome section (emphasize `chore:`)<br>- Updated pre-commit checklist (tests/ policy) |

---

## Examples: Before & After

### Commit Message Example

**Before**:
```bash
git commit -m "feat(button): apply ARIA attributes from spec

- Native <button> element provides implicit role
- Validates 100% against aria/button_aria.md

Refs: #001-aria-integration
ARIA Coverage: 1/1 rules (100%)
WCAG: PASS"
```

**After** (✅):
```bash
git commit -m "chore(button): apply ARIA attributes from spec

- Native <button> element provides implicit role
- Validates 100% against aria/button_aria.md

Refs: #001-aria-integration
ARIA Coverage: 1/1 rules (100%)
WCAG: PASS"
```

### Pre-commit Checklist

**Before**:
```
✅ Files in `tests/` folder NOT modified (entry points only)
```

**After** (✅):
```
✅ Files in `tests/` folder: Prefer not to modify (entry points only). 
   Minor updates allowed as last resort with user approval 
   (setting aria props, using new templates)
```

---

## Impact on Phase 3 Implementation

### Commit Messages
All Phase 3 implementation tasks (T013-T250) should follow the new `chore:` convention:

```bash
# Example Phase 3 commits:
chore(button): apply ARIA attributes from spec
chore(checkbox): apply ARIA attributes from spec
chore(grid): apply ARIA attributes from spec
chore(p0): apply ARIA to 14 high-priority components
```

### Tests Folder Modifications
During Phase 3 implementation, if a component needs test entry point updates:

1. **First**: Try to achieve 100% rule coverage using only `packages/html/src/` modifications
2. **If blocked**: Document the specific rule that cannot be validated without test changes
3. **Request approval**: Present the minimal change needed to user
4. **After approval**: Make minimal change to `tests/[component]/` entry point
5. **Document**: Note in commit message that test entry point was updated with approval

---

## Validation

- ✅ All commit message templates now use `chore:` prefix
- ✅ All examples updated across 4 documentation files
- ✅ Tests folder policy clarified with "last resort + approval" clause
- ✅ Pre-commit checklists updated in 2 files
- ✅ Phase 2 completion report reflects new conventions
- ✅ No blockers for Phase 3 implementation

---

## Next Steps

1. ✅ Documentation updates complete
2. ⏭️ Ready to begin Phase 3 (User Story 1) with updated conventions
3. ⏭️ All 238 Phase 3 tasks will follow `chore:` commit convention
4. ⏭️ Tests folder modifications only with explicit user approval

---

**Update Complete**: ✅  
**Phase 2 Status**: ✅ Complete (all 5 tasks done)  
**Ready for Phase 3**: ✅ Yes