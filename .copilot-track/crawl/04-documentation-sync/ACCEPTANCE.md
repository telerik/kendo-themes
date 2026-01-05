# Acceptance Criteria — Exercise 04

## Required Deliverables

- [ ] **SassDoc comments added** to at least 3 variables
- [ ] **`npm run docs`** completes successfully
- [ ] **`npm run docs:check`** passes
- [ ] **Comments follow SassDoc format** (`///`, `@group`, `@type`)
- [ ] **Commit follows Conventional Commits** format

---

## Verification Commands

```bash
# Generate documentation
npm run docs

# Check documentation consistency
npm run docs:check

# Verify commit message
git log -1 --pretty=format:"%s" | grep -E "^docs\(.*\):" \
  && echo "✓ Valid commit" || echo "✗ Invalid commit format"
```

---

## SassDoc Comment Template

```scss
/// Brief description of what this variable controls.
/// @group component-name
/// @type Color|Number|String|List|Map
$kendo-variable-name: value !default;
```

---

## Example Documentation Update

### Before
```scss
$kendo-button-border-width: 1px !default;
$kendo-button-border-radius: 4px !default;
```

### After
```scss
/// The border width for button components.
/// @group button
/// @type Number
$kendo-button-border-width: 1px !default;

/// The border radius for button components.
/// @group button
/// @type Number
$kendo-button-border-radius: 4px !default;
```

---

## Evidence of Learning

After completing this exercise, you should be able to answer:

1. What tool generates documentation from SCSS comments?
   - **Answer:** SassDoc

2. What's the difference between `//` and `///` in SCSS?
   - **Answer:** `///` is a SassDoc comment that gets parsed; `//` is ignored.

3. Why is `@group` important?
   - **Answer:** It organizes variables by component in generated docs.

---

## Rollback

```bash
# Undo documentation changes
git checkout develop -- packages/core/scss/
git checkout develop -- packages/utils/scss/
```
