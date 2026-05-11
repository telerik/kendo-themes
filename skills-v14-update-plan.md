# Skills v14 Update Plan

## Problem
The kendo-themes skills (both `skills/kendo-themes/` from PR #5865 and `.github/skills/` from PR #5839) were written against v13. The repo has since moved to v14, introducing OKLCH colors, meridian theme, spacing/radii base variables, elevation changes, icon migrations, and more. PR reviewers (TeyaVes, zhpenkov, kirchoni) left extensive feedback — many items remain unresolved.

## Scope: Two Skill Sets

### A. `skills/kendo-themes/` (PR #5865 — consumer-facing skill)
### B. `.github/skills/` (PR #5839 — contributor/agent skills, merged)

---

## Todos

### 1. colors.md — OKLCH rewrite (PR #5865, unresolved)
- **TeyaVes**: palettes are deleted, system now uses relative OKLCH colors. Only base color needs to be set; derived variants auto-computed.
- **zhpenkov**: add note that OKLCH is v14.0.0+. Remove light/dark theme colors (deprecated). Clarify `k-generate-color-variations("primary", …, "default")` — `"default"` means the default theme, not a preset. After v14, setting just `primary: blue` in `$kendo-colors` auto-extends `on-primary` etc.
- **zhpenkov**: Constants section (black/white) is over-abstraction — simplify or remove.
- Some of this was partially addressed by copilot-swe-agent but review threads still show ❌ unresolved.

### 2. elevation.md — Elevation levels reduced (PR #5865, unresolved)
- **TeyaVes**: elevation levels decreased from 9 to 5 in v14. Needs full rewrite.

### 3. radii.md — Base variable + per-theme multipliers (PR #5865, unresolved)
- **TeyaVes**: document `--kendo-border-radius-base` and how all sizes scale from it.
- **zhpenkov**: multiplier values differ per theme (e.g., Bootstrap `lg` != `base × 1.5`). Document this correctly.

### 4. spacing.md — Base variable + token count (PR #5865, unresolved)
- **TeyaVes**: document `$kendo-spacing-base` / `--kendo-spacing-base` and how the map derives from it. Token count is now 24 (not 30).
- Some was addressed but threads still ❌.

### 5. layout.md — Breakpoints don't exist in themes (PR #5865, unresolved)
- **zhpenkov**: breakpoints are from the `utils` package, NOT themes. The CSS variable column for breakpoints is wrong (Sass-only).
- **copilot-reviewer**: conflicting statements about CSS custom properties.
- Needs significant rewrite or removal of breakpoint section.

### 6. iconography.md — Icon size variable unreliable (PR #5865, unresolved)
- **zhpenkov**: `--kendo-icon-size` doesn't actually change all icon sizes; needs revamp. Exclude for now.
- **zhpenkov**: icon sizes and theme colors come from component API, not icon system — reconsider including them.

### 7. typography.md — Table formatting (PR #5865, unresolved)
- **copilot-reviewer**: rows start with `|| ...` causing extra empty column. Fix formatting.

### 8. SKILL.md (main) — Multiple issues (PR #5865, mixed)
- **copilot-reviewer**: `#your-brand-color` is not valid CSS — use real hex.
- **zhpenkov**: mention base variables (`--kendo-spacing-base`, `--kendo-border-radius-base`) and OKLCH relative colors behavior in the quick-start customization section.
- **zhpenkov**: Sass override example with `k-generate-color-variations` is outdated post-v14. Simplify to just setting base color.

### 9. tailwind-integration.md — Import order + token examples (PR #5865, unresolved)
- **copilot-reviewer**: "no conflicts" / "order doesn't matter" is too strong. Tailwind preflight can affect Kendo.
- **zhpenkov**: configuration must be imported AFTER theme import. Add note.
- **zhpenkov**: Tailwind token names are just examples, not prescriptive. Add clarification.

### 10. components.json — Staleness risk (PR #5865, unresolved)
- **zhpenkov**: needs a `docs:check`-like CI safeguard to prevent drift. Consider auto-generating on `npm run docs`.
- Regenerate against current v14 codebase.

### 11. Meridian theme — Missing from skill (new in v14)
- Meridian was introduced in v14 as the recommended default. Not documented in the consumer skill at all.
- SKILL.md theme table needs updating.

### 12. `.github/skills/` — Review items from PR #5839
Most were marked resolved, but worth verifying against v14:
- **manage-scss-styles**: dependency-order vs alphabetical for `@forward` entries
- **manage-components**: `_theme.scss` no longer holds size-specific variables (remove reference)
- **manage-components/update-checklist**: docs regeneration step missing; core variables generally not documented (except theme-colors/sizes)
- **manage-html-a11y**: `_aria.md` files may be obsolete (PR #5815)
- **manage-scss-variables**: add docs regeneration to checklist
- **manage-theme**: `npm run lint:styles` doesn't exist in theme packages (root-only script)
- **file-templates**: reference to deprecated template removed
- **audit-design-tokens**: argument parsing bug in audit.sh

---

## Approach
1. Start with the consumer-facing skill (`skills/kendo-themes/`) since those reviews are all unresolved
2. Read current state of each file, cross-reference with v14 source code
3. Make targeted updates per todo
4. Then verify `.github/skills/` items against current develop
5. Regenerate `components.json` against v14

## Notes
- kirchoni said he's holding PR #5865 until v14 changes land — they have now landed
- PR #5839 was merged but may need follow-up fixes
- PR #5874 (audit skill) — zhpenkov suggested it should be a CI script, not a skill
