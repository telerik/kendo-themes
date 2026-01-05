# Small Refactor — Copilot Prompt

## Instructions

Use these prompts with Copilot Chat to plan and execute your refactor.

---

## Prompt 1: Identify Refactoring Opportunities

```
Analyze packages/utils/scss/_variables.scss and identify:

1. Any variables missing the !default flag
2. Repeated patterns that could use a Sass @each loop
3. Variables that could benefit from better SassDoc comments

List the top 3 safest refactoring opportunities (no breaking changes).
```

---

## Prompt 2: Plan the Refactor

```
I want to refactor this specific section of packages/utils/scss/_variables.scss:
[paste the section you identified]

Plan the refactor:
1. What exactly will change?
2. Will this affect CSS output?
3. What's the rollback path?
4. Should I add a test?

Keep the change minimal and reversible.
```

---

## Prompt 3: Generate the Diff

```
Generate the exact diff for my planned refactor:

File: packages/utils/scss/_variables.scss

Before:
[paste original code]

After:
[describe what you want]

Show me the minimal change needed.
```

---

## Prompt 4: Generate a Test (if applicable)

```
/tests I added/modified the variable $kendo-xyz in packages/utils.
Generate a test that validates this variable is customizable.
Follow the pattern in units/default/button.test.ts.
```

---

## PR Summary Snippet

```markdown
### Summary
Small refactor in `packages/utils` to [describe change].

### Changes
- [Specific change 1]
- [Specific change 2]

### Testing
- [x] `npm run lint:styles` passes
- [x] `npm run test:units` passes
- [x] CSS output unchanged (verified with diff)

### Rollback
```bash
git revert HEAD
```

### Type
- [x] Refactor (no functional changes)
```

---

## Commit Message Template

```
refactor(utils): [concise description]

- [What changed]
- [Why it's safe]

Refs: Crawl Exercise 03
```
