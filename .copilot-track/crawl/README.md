# Copilot Crawl Track — Kendo Themes

**Level:** Crawl (Assisted)  
**Focus:** Developer-led, small reversible changes, inline suggestions + Chat

---

## Track Philosophy

Crawl is the foundation tier for building comfort with GitHub Copilot:

- **Developer leads**: You drive the work; Copilot assists with `/explain`, `/tests`, and inline suggestions.
- **Small, reversible edits**: Each exercise produces a minimal diff that can easily be reverted.
- **At least one test**: Every change should be validated by a new or updated test.
- **Keep CI green**: All changes must pass `npm run lint` and `npm run test:units`.

---

## Prerequisites

1. **Environment Setup**
   ```bash
   npm ci                    # Install dependencies
   npm run docs              # Generate SassDoc metadata (required for unit tests)
   npm run sass              # Compile themes to verify baseline
   ```

2. **Verify Tests Pass**
   ```bash
   npm run lint              # ESLint + Stylelint
   npm run test:units        # Jest unit tests
   ```

3. **Copilot Enabled**
   - GitHub Copilot extension installed in VS Code
   - Copilot Chat available (Ctrl/Cmd + Shift + I)

---

## Exercises Overview

| # | Slug | Goal |
|---|------|------|
| 01 | repo-orientation | Understand monorepo structure; produce architecture diagram |
| 02 | build-test-baseline | Confirm build/test commands work; document baseline |
| 03 | small-refactor-low-risk | Refactor a utility in `packages/utils`; add/update test |
| 04 | documentation-sync | Sync SassDoc comments with current behavior |
| 05 | api-contract-hardening | Add missing `!default` flags; validate with tests |
| 06–15 | *(future)* | Theme customization, accessibility, performance, etc. |

---

## How to Use

1. **Open the exercise folder** (e.g., `.copilot-track/crawl/01-repo-orientation/`)
2. **Read HOWTO.md** for step-by-step instructions
3. **Use the prompt file** (`*.prompt.md`) with Copilot Chat
4. **Check ACCEPTANCE.md** to validate completion
5. **Commit with a Conventional Commit message**

---

## Interaction Model

```
┌─────────────┐     inline suggestions     ┌──────────────────┐
│  Developer  │ ◄────────────────────────► │  VS Code Editor  │
└─────────────┘                            └──────────────────┘
       │                                            │
       │  /explain, /tests                          │
       ▼                                            ▼
┌─────────────┐                            ┌──────────────────┐
│ Copilot Chat│ ◄────────────────────────► │   Code Context   │
└─────────────┘                            └──────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────┐
│                    Local Tests / CI                         │
│  npm run lint && npm run test:units                         │
└─────────────────────────────────────────────────────────────┘
```

---

## Fallbacks

| Issue | Fallback |
|-------|----------|
| No CI on fork | Run `npm run lint && npm run test:units` locally before pushing |
| Copilot coding agent unavailable | Use inline suggestions + Chat only |
| Knowledge bases unavailable | Rely on `.github/copilot-instructions.md` and this track |

---

## Completion Criteria

- [ ] All 5 exercises completed (01–05)
- [ ] Each exercise has a passing test
- [ ] All commits follow Conventional Commits spec
- [ ] Branch ready for PR review

---

*Track version: 1.0 | Last updated: 2026-01-05*
