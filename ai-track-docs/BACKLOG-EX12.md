# Backlog Items — Exercise 12

> Technical debt and improvement opportunities discovered during codebase analysis.

---

## Issue 1: Audit and remove unused utils interactivity files

**Priority:** Medium  
**Effort:** S (Small)

### Description

Several utility files in `packages/utils/scss/interactivity/` contain TODO comments questioning whether they are still needed. These files should be audited for usage and removed if obsolete.

### Acceptance Criteria

- [ ] Audit [`_accent-color.scss`](../packages/utils/scss/interactivity/_accent-color.scss#L1) for usage across all theme packages
- [ ] Audit [`_caret-color.scss`](../packages/utils/scss/interactivity/_caret-color.scss#L1) for usage across all theme packages
- [ ] Remove files if not used, or remove TODO comments if confirmed needed
- [ ] Update `_index.scss` imports if files are removed
- [ ] Run `npm run sass` to verify no compilation errors

### Code References

- [packages/utils/scss/interactivity/_accent-color.scss#L1](../packages/utils/scss/interactivity/_accent-color.scss#L1) — `// TODO: Check if this file is still needed`
- [packages/utils/scss/interactivity/_caret-color.scss#L1](../packages/utils/scss/interactivity/_caret-color.scss#L1) — `// TODO: Check if this file is still needed`

---

## Issue 2: Remove legacy spacing extension in utils _variables.scss

**Priority:** Low  
**Effort:** M (Medium)

### Description

Three locations in `packages/utils/scss/_variables.scss` contain TODO comments indicating temporary spacing extensions that should be removed once docs are fixed. This suggests documentation tooling may need updates before these can be cleaned up.

### Acceptance Criteria

- [ ] Investigate what "fix docs" means in this context (likely SassDoc generation)
- [ ] Fix the underlying documentation issue
- [ ] Remove the legacy spacing extensions from `gap`, `margin`, and `padding` maps
- [ ] Verify `npm run docs` generates correct output
- [ ] Run `npm run test:units` to ensure no regressions

### Code References

- [packages/utils/scss/_variables.scss#L421](../packages/utils/scss/_variables.scss#L421) — `// TODO: remove this extension once we fix docs` (gap)
- [packages/utils/scss/_variables.scss#L563](../packages/utils/scss/_variables.scss#L563) — `// TODO: remove this extension once we fix docs` (margin)
- [packages/utils/scss/_variables.scss#L574](../packages/utils/scss/_variables.scss#L574) — `// TODO: remove this extension once we fix docs` (padding)

---

## Issue 3: Audit space-between utility for removal

**Priority:** Low  
**Effort:** S (Small)

### Description

The `_space-between.scss` utility file contains a TODO noting that spacing utilities are not currently generated. This file may be dead code that should be removed.

### Acceptance Criteria

- [ ] Confirm spacing utilities are not generated in current build
- [ ] Search for any usage of `.k-space-x-*` or `.k-space-y-*` classes
- [ ] Remove file if confirmed unused
- [ ] Update `_index.scss` imports if file is removed
- [ ] Run `npm run sass` to verify no compilation errors

### Code References

- [packages/utils/scss/spacing/_space-between.scss#L1](../packages/utils/scss/spacing/_space-between.scss#L1) — `// TODO: Check if this is still needed as we do not generate spacing utilities at the moment`

---

## Issue 4: Standardize flip utility naming convention

**Priority:** Low  
**Effort:** S (Small)

### Description

A TODO in `_flip.scss` suggests considering a global standard for directional abbreviations: `horizontal` vs `h` vs `x`. This affects developer experience and API consistency across the utils package.

### Acceptance Criteria

- [ ] Audit existing directional naming patterns in utils (`-h`, `-v`, `-x`, `-y`, etc.)
- [ ] Decide on a consistent naming convention (document in `.github/instructions/utils.instructions.md`)
- [ ] Either standardize naming or remove TODO if current convention is intentional
- [ ] Update documentation to reflect the decision

### Code References

- [packages/utils/scss/transform/_flip.scss#L13](../packages/utils/scss/transform/_flip.scss#L13) — `// TODO: consider globally horizontal vs h vs x`

---

## Issue 5: Address ProseMirror selector lint suppressions in Editor

**Priority:** Medium  
**Effort:** M (Medium)

### Description

The Editor component uses non-standard third-party selectors (`.ProseMirror`, `.selectedCell`, `.ProseMirror-selectednode`) that require `stylelint-disable-line` comments. Consider wrapping these in a dedicated mixin or documenting why they cannot follow standard selector patterns.

### Acceptance Criteria

- [ ] Document why these selectors cannot follow BEM naming (third-party library constraint)
- [ ] Consider creating a `@mixin prosemirror-compat()` wrapper to centralize suppression
- [ ] Add inline comments explaining the ProseMirror integration requirement
- [ ] Evaluate if a `.stylelintrc` rule exception is cleaner than per-line disables

### Code References

- [packages/core/scss/components/editor/_theme.scss#L63](../packages/core/scss/components/editor/_theme.scss#L63) — `.ProseMirror-selectednode { // stylelint-disable-line`
- [packages/core/scss/components/editor/_theme.scss#L99](../packages/core/scss/components/editor/_theme.scss#L99) — `.selectedCell::after { // stylelint-disable-line`
- [packages/core/scss/components/editor/_layout.scss#L182](../packages/core/scss/components/editor/_layout.scss#L182) — `> .ProseMirror { // stylelint-disable-line`
- [packages/core/scss/components/editor/_layout.scss#L221](../packages/core/scss/components/editor/_layout.scss#L221) — `& .ProseMirror-selectednode { // stylelint-disable-line`
- [packages/core/scss/components/editor/_layout.scss#L266](../packages/core/scss/components/editor/_layout.scss#L266) — `.selectedCell::after { // stylelint-disable-line`
- [packages/fluent/scss/editor/_layout.scss#L29](../packages/fluent/scss/editor/_layout.scss#L29) — `> .ProseMirror { // stylelint-disable-line`

---

## Summary

| # | Issue | Priority | Effort | Type |
|---|-------|----------|--------|------|
| 1 | Audit unused utils interactivity files | Medium | S | Cleanup |
| 2 | Remove legacy spacing extension in _variables.scss | Low | M | Tech Debt |
| 3 | Audit space-between utility for removal | Low | S | Cleanup |
| 4 | Standardize flip utility naming convention | Low | S | DX/API |
| 5 | Address ProseMirror selector lint suppressions | Medium | M | Maintainability |

**Total estimated effort:** 2S + 2M = ~1-2 sprints of focused cleanup work
