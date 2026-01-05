# Exercise 01: Repo Orientation & Architecture Map

**Goal:** Understand the kendo-themes monorepo structure and produce an architecture diagram.

---

## Steps

### 1. Explore the Package Structure (5 min)

Open the `packages/` directory and note the 8 packages:

| Package | Purpose |
|---------|---------|
| `core` | Design system foundation (variables, mixins, functions) |
| `default` | Default Kendo theme |
| `bootstrap` | Bootstrap-styled theme |
| `material` | Material Design theme |
| `classic` | Classic Kendo theme |
| `fluent` | Microsoft Fluent theme |
| `utils` | Utility-first CSS classes (standalone) |
| `html` | React component specs for visual testing |

### 2. Use Copilot Chat to Understand Dependencies (3 min)

Open Copilot Chat (Ctrl/Cmd + Shift + I) and ask:

```
/explain How do the packages in this monorepo depend on each other? 
Look at package.json files in packages/default, packages/core, and packages/utils.
```

### 3. Verify the Core → Theme Dependency (2 min)

Open [packages/default/package.json](packages/default/package.json) and find:
```json
"dependencies": {
  "@progress/kendo-theme-core": "..."
}
```

This confirms: **All themes depend on `core`**.

### 4. Generate the Architecture Diagram (5 min)

Open Copilot Chat and paste the prompt from `repo-orientation.prompt.md`.

Review the generated Mermaid diagram and save it to `docs/architecture.mmd`.

### 5. Validate the Diagram (2 min)

Install the Mermaid Preview extension (if not already) and open `docs/architecture.mmd` to verify the diagram renders correctly.

### 6. Commit Your Work (3 min)

```bash
git add docs/architecture.mmd
git commit -m "docs(architecture): add monorepo package dependency diagram"
```

---

## Copilot Features Used

- [x] **Copilot Chat** — `/explain` for understanding dependencies
- [x] **Inline suggestions** — Generating Mermaid syntax
- [ ] `/tests` — Not applicable (no code changes)

---

## Tips

- The `html` package depends on themes for testing, but themes don't depend on `html`.
- The `utils` package is standalone—it only depends on `core` for color system access.
- Use the VS Code Mermaid extension for live preview.

---

## Time Estimate

~20 minutes
