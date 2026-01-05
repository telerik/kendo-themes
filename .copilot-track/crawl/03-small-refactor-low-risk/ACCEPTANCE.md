# Acceptance Criteria — Exercise 03

## Required Deliverables

- [ ] **Refactor implemented** in `packages/utils/scss/`
- [ ] **Diff is small** (< 50 lines changed)
- [ ] **CSS output unchanged** (or intentionally minimal change)
- [ ] **Lint passes** (`npm run lint:styles`)
- [ ] **Tests pass** (`npm run test:units`)
- [ ] **Commit follows Conventional Commits** format

---

## Verification Commands

```bash
# Verify lint
npm run lint:styles

# Verify tests
npm run test:units

# Check diff size
git diff --stat HEAD~1 | tail -1
# Should show something like: "1 file changed, 3 insertions(+), 1 deletion(-)"

# Verify commit message
git log -1 --pretty=format:"%s" | grep -E "^(refactor|fix|feat)\(utils\):" \
  && echo "✓ Valid commit" || echo "✗ Invalid commit format"
```

---

## Safe Refactor Examples

### Example 1: Add `!default` Flag
```scss
// Before
$kendo-example-spacing: 8px;

// After
$kendo-example-spacing: 8px !default;
```

### Example 2: Extract Repeated Value
```scss
// Before
.k-example-a { padding: 4px 8px; }
.k-example-b { padding: 4px 8px; }

// After
$kendo-example-padding: 4px 8px !default;
.k-example-a { padding: $kendo-example-padding; }
.k-example-b { padding: $kendo-example-padding; }
```

### Example 3: Improve Comment
```scss
// Before
$kendo-spacing: 4px; // spacing

// After
/// Base spacing unit used throughout utility classes.
/// @group spacing
$kendo-spacing: 4px !default;
```

---

## Evidence of Learning

After completing this exercise, you should be able to answer:

1. Why is `packages/utils` considered low-risk?
   - **Answer:** It's standalone and doesn't affect theme packages.

2. Why do we check CSS output before and after?
   - **Answer:** To ensure the refactor doesn't change visual behavior.

3. What does `!default` do in Sass?
   - **Answer:** Allows consumers to override the value before importing.

---

## Rollback

```bash
# Undo last commit (keep changes staged)
git reset --soft HEAD~1

# Or fully revert
git checkout develop -- packages/utils/
```
