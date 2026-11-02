---
name: write-pr-description
description: Write a GitHub-ready PR description for the current branch — summary, linked issues, SCSS/theme changes (variables added/changed/removed per theme, breaking changes), and for HTML package components the idea, before/after HTML rendering, per-scenario snippets, accessibility summary, and a visual test reference table. Use this skill when the user asks for a PR description, PR summary, or release write-up of the changes on the current branch.
argument-hint: "[component...] optional; defaults to everything changed on the branch"
metadata:
  internal: true
---

# PR Description

Write a short, accurate GitHub PR description for the changes on the current branch.

## Steps

1. **Analyze the branch diff.** Run `git diff --stat develop...HEAD` and `git log --oneline develop..HEAD`. Group changed files into: SCSS (`packages/core`, `packages/{theme}`), HTML components (`packages/html/src/<folder>/`), tests (`units/`, `packages/html/src/<folder>/tests/`), and other (scripts, CI, docs). Ignore generated `packages/*/docs/*.md` and `tests/**` output.
2. **Find linked issues.** Look for issue numbers in the branch name and commit messages (`#1234`, `Fixes #1234`). Ask the user if none are found and the change isn't trivial.
3. **Summarize SCSS/theme changes** (skip if none):
   - Variables added, changed, or removed — per theme. Read the diffs of `_variables.scss` files; don't list every line, group by component.
   - Layout/theme mixin changes that affect rendering (new state styles, structural changes).
   - **Breaking changes:** removed or renamed variables, changed class names, changed HTML structure. Commits with `BREAKING CHANGE:` must appear here.
4. **For each added or edited HTML component** (skip if none):
   - **Idea** — read the spec's `@ux` JSDoc annotations and props/defaults. One or two sentences.
   - **Rendering** — new component: "after" HTML only; edited component: "before" and "after", based on the diff.
   - **Scenarios** — one HTML snippet per scenario in the test fixtures (e.g. collapsed/expanded, with/without status), not just one state.
   - **Accessibility** — copy the `@aria`, `@keyboard`, and `@ux` annotations from the spec as-is.
5. **Build the visual reference table** — one row per component with its own test fixture (see format below).

## Output format

```md
## Summary

<1–3 sentences: what changed and why.>

Fixes #<issue>

## SCSS changes

- **<component>** — <what changed> (<themes>)

**Breaking changes:** <list, or "None">

## <Component name>

**Idea:** <from @ux annotations>

**Before:** <HTML snippet — omit for new components>

**After:** <HTML snippet>

<Additional snippets for other scenarios>

**Accessibility:**
- <@aria / @keyboard / @ux bullets, copied from the spec>

## Visual & Rendering Reference

| Component | HTML Test | Screenshot (Meridian) |
|-----------|-----------|-----------------------|
| <Component> | [<file>.html](<blob-url>/tests/<folder>/<file>.html) | [screenshot](<blob-url>/tests/_output/meridian/<folder>/<file>.png) |
```

Omit sections that don't apply (no SCSS changes → no "SCSS changes"; no HTML components → no component sections or table).

`<blob-url>` is `https://github.com/<owner>/<repo>/blob/<branch>` — take owner/repo from `git remote get-url origin` and the current branch name.

## Rules

- Base every HTML snippet on the actual JSX render in the spec file — don't invent markup or class names.
- Keep snippets short; trim repeated siblings and long filler text.
- Represent icons as `<span class="k-icon k-svg-icon" aria-hidden="true"><!-- icon-name --></span>`.
- Don't guess accessibility behavior — if it isn't documented in the spec, leave it out.
- If several public components share one test fixture, mention that in prose instead of forcing separate table rows.
- Verify the generated-file paths against an existing component (e.g. `packages/html/src/popover/tests/popover.tsx` → `tests/popover/popover.html`, `tests/_output/meridian/popover/popover.png`). Screenshots under `tests/_output/` are committed by CI ("update visual previews"), so for new components add a note that screenshot links resolve after CI runs.
- Return the description in chat. If the user wants a file, write it outside the repository (e.g. the session artifacts folder) so it isn't committed by accident.
