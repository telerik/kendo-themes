# Acceptance Criteria — Exercise 01

## Required Deliverables

- [ ] **Architecture diagram exists** at `docs/architecture.mmd`
- [ ] **Diagram is valid Mermaid syntax** (renders without errors)
- [ ] **Diagram shows all 8 packages** with correct dependencies
- [ ] **Commit follows Conventional Commits** format

---

## Verification Commands

```bash
# Check file exists
test -f docs/architecture.mmd && echo "✓ Diagram exists" || echo "✗ Missing"

# Validate Mermaid syntax (requires mmdc CLI or VS Code extension)
# If mmdc is installed:
# npx -y @mermaid-js/mermaid-cli mmdc -i docs/architecture.mmd -o /dev/null

# Check commit message
git log -1 --pretty=format:"%s" | grep -E "^docs\(.*\):" && echo "✓ Valid commit" || echo "✗ Invalid commit format"
```

---

## Expected Diagram Content

The diagram should show:

1. **Core package** as the foundation
2. **Theme packages** (default, bootstrap, material, classic, fluent) depending on core
3. **Utils package** depending on core
4. **HTML package** depending on themes (for testing)

---

## Evidence of Learning

After completing this exercise, you should be able to answer:

1. Which package contains the design system foundation?
   - **Answer:** `packages/core`

2. What is the relationship between theme packages?
   - **Answer:** They are siblings, all depending on `core`, not on each other.

3. Why is `packages/utils` considered "low-risk"?
   - **Answer:** It's standalone (doesn't affect themes) and has minimal dependencies.

---

## Rollback

If you need to undo:

```bash
git checkout HEAD~1 -- docs/architecture.mmd
# or
rm docs/architecture.mmd
git checkout develop -- docs/  # if docs/ existed before
```
