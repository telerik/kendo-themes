# Kendo Themes Agent Skills

A curated suite of agent skills for GitHub Copilot (and compatible AI coding agents) working in this repository. Each skill encapsulates a complete workflow for a common developer task.

## How Skills Work

Skills are loaded by the agent when a user request matches the skill's `description` trigger. The agent reads the `SKILL.md` file and follows its step-by-step instructions. Skills always start by reading the shared conventions reference.

---

## Skill Directory

### Phase 1 — Foundation (Highest ROI)

| Skill | File | Trigger |
|-------|------|---------|
| **Component Generator** | [component-generator/SKILL.md](component-generator/SKILL.md) | Create a new component from scratch |
| **Token Scaffolder** | [token-scaffolder/SKILL.md](token-scaffolder/SKILL.md) | Add a new `$kendo-*` design token |
| **Accessibility Auditor** | [accessibility-auditor/SKILL.md](accessibility-auditor/SKILL.md) | WCAG 2.2 audit + ARIA attribute application |

### Phase 2 — Core Productivity

| Skill | File | Trigger |
|-------|------|---------|
| **Component Variant Expander** | [component-variant-expander/SKILL.md](component-variant-expander/SKILL.md) | Add a new variant/size/state to an existing component |
| **Theme Creator** | [theme-creator/SKILL.md](theme-creator/SKILL.md) | Create a swatch or full new theme package |
| **Token Audit** | [token-audit/SKILL.md](token-audit/SKILL.md) | Scan for hardcoded values, gaps, naming violations |
| **Test Generator** | [test-generator/SKILL.md](test-generator/SKILL.md) | Generate visual test scenarios for HTML package |
| **Component Documenter** | [component-documenter/SKILL.md](component-documenter/SKILL.md) | Add SassDoc comments + write variables reference |
| **Changelog Author** | [changelog-author/SKILL.md](changelog-author/SKILL.md) | Write properly formatted CHANGELOG entries |

### Phase 3 — Quality & Release

| Skill | File | Trigger |
|-------|------|---------|
| **SCSS Module Author** | [scss-module-author/SKILL.md](scss-module-author/SKILL.md) | Create a new SCSS partial/module (non-component) |
| **CSS-to-SCSS Migrator** | [css-to-scss-migrator/SKILL.md](css-to-scss-migrator/SKILL.md) | Convert raw CSS to Kendo-tokenized SCSS |
| **Release Prep** | [release-prep/SKILL.md](release-prep/SKILL.md) | Version bump, changelog, release checklist |
| **PR Review** | [pr-review/SKILL.md](pr-review/SKILL.md) | Validate changes against contribution standards |

---

## Shared Infrastructure

| File | Purpose |
|------|---------|
| [shared/repo-conventions.md](shared/repo-conventions.md) | Single source of truth for all patterns: variable naming, file structure, HTML spec patterns, build commands |

---

## Skill Interaction Map

```
Create new component:
  component-generator → test-generator → accessibility-auditor → component-documenter

Add new variant:
  component-variant-expander → test-generator → component-documenter

Add a new token:
  token-scaffolder → token-audit (verify no gaps)

Create new theme:
  theme-creator → token-audit → (visual QA manually)

Before release:
  pr-review → changelog-author → release-prep
```

---

## Priority Implementation Order

1. **component-generator** — most frequent task, unlocks all others
2. **token-scaffolder** — daily use, extends existing `variable-create.prompt.md`
3. **accessibility-auditor** — extends existing `accessibility.prompt.md`
4. **component-variant-expander** — 2nd most frequent task
5. **test-generator** — needed after every component change
6. **pr-review** — quality gate before every merge
7. **changelog-author** — needed for every release
8. **theme-creator** — less frequent but high value
9. **token-audit** — periodic health check
10. **component-documenter** — ongoing documentation improvement
11. **scss-module-author** — occasional, for core design system work
12. **css-to-scss-migrator** — as-needed for design handoffs
13. **release-prep** — per-release
