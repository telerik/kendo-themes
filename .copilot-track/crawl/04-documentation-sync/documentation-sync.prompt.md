# Documentation Sync — Copilot Prompt

## Instructions

Use these prompts with Copilot Chat to find and fix documentation gaps.

---

## Prompt 1: Find Undocumented Variables

```
Scan packages/core/scss/components/button/_variables.scss and list all variables 
that are missing SassDoc documentation (/// comments).

For each missing variable, note:
1. Variable name
2. Current value
3. What it likely controls (based on naming)
```

---

## Prompt 2: Generate SassDoc Comments

```
Generate SassDoc comments for these variables in packages/core/scss/components/button/_variables.scss:

[paste list of undocumented variables]

Follow this format for each:
/// Brief description.
/// @group button
/// @type [appropriate type]

Ensure descriptions are clear and match the variable's purpose.
```

---

## Prompt 3: Validate Documentation Style

```
/explain Review the SassDoc comments in packages/core/scss/components/button/_variables.scss

Check for:
1. Consistency in @group values (should all be "button")
2. Correct @type annotations (Color, Number, String, List, Map)
3. Clear, concise descriptions
4. Any missing annotations that should be added

List any issues found.
```

---

## Prompt 4: Check Related Documentation

```
Compare the SassDoc comments in:
- packages/core/scss/components/button/_variables.scss
- packages/default/scss/button/_variables.scss

Are they consistent? Should the theme-specific file reference the core file?
```

---

## PR Summary Snippet

```markdown
### Summary
Synced SassDoc documentation for [component] variables.

### Changes
- Added `///` documentation to [N] variables
- Ensured consistent `@group` annotations
- Added `@type` annotations for better IDE support

### Verification
- [x] `npm run docs` generates without errors
- [x] `npm run docs:check` passes
- [x] Documentation renders correctly in generated output

### Type
- [x] Documentation only (no code changes)
```

---

## Commit Message Template

```
docs(component): sync SassDoc comments with implementation

- Added documentation to N variables
- Standardized @group annotations
- Added @type annotations

Refs: Crawl Exercise 04
```

---

## Tips for Good Documentation

1. **Be concise**: "The button's background color" not "This variable controls what color the background of the button will be"

2. **Use consistent types**:
   - `Color` for color values
   - `Number` for dimensions (px, em, %)
   - `String` for font names, etc.
   - `List` for shorthand properties
   - `Map` for complex structures

3. **Reference related variables**:
   ```scss
   /// The button's hover background color.
   /// @group button
   /// @type Color
   /// @see $kendo-button-bg
   $kendo-button-hover-bg: darken($kendo-button-bg, 10%) !default;
   ```
