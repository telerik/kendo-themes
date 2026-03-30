# Update Checklist Reference

Detailed checklists the agent should follow during each step of the update procedure.

## Variable Addition Checklist

When adding a new `$kendo-{component}-*` variable:

### Core (`packages/core/scss/components/{component}/_variables.scss`)

- [ ] Add declaration with `null !default`
- [ ] SassDoc `///` comments are generally **not** needed in core — exceptions: `$kendo-{component}-theme-colors` and `$kendo-{component}-sizes` maps
- [ ] Place near related variables (e.g., all padding vars together, all color vars together)

### Each targeted theme (`packages/{theme}/scss/{component}/_variables.scss`)

- [ ] Add declaration with concrete value and `!default`
- [ ] Add SassDoc `///` comment (can match core's description)
- [ ] Add `@group {component}` annotation
- [ ] Add entry to the `@forward` map at the bottom of the file
- [ ] **Fluent only:** Wrap value in `var( --kendo-{var-name}, #{value} )`

### Layout/Theme references

- [ ] Reference the new variable in `_layout.scss` or `_theme.scss` (core and/or theme, as appropriate)
- [ ] If the variable is a structural property (padding, display, gap), it goes in `_layout.scss`
- [ ] If the variable is a visual property (color, background, shadow), it goes in `_theme.scss`

## Variable Value Change Checklist

When changing an existing variable's value:

- [ ] Update only the targeted theme(s) `_variables.scss`
- [ ] Do NOT change the core `null` declaration
- [ ] Update the SassDoc comment if the description no longer fits
- [ ] Verify the `@forward` map still includes this variable
- [ ] Check for derived/calc variables that depend on this one
- [ ] **Fluent only:** Update both the SCSS value and the CSS custom property fallback
- [ ] Regenerate docs: `npm run docs`

## Variable Removal Checklist

When removing a variable:

- [ ] Confirm with the user that a breaking change is acceptable, OR add a deprecation comment
- [ ] Remove from core `_variables.scss`
- [ ] Remove from all theme `_variables.scss` files
- [ ] Remove from all `@forward` maps
- [ ] Remove references from `_layout.scss` and `_theme.scss`
- [ ] Remove from HTML spec if referenced in comments
- [ ] Update any unit tests that reference the variable
- [ ] Regenerate docs: `npm run docs`

### Deprecation (alternative to removal)

```scss
// Deprecated — will be removed in the next major version.
// @deprecated Use $kendo-{component}-new-var instead.
$kendo-{component}-old-var: $kendo-{component}-new-var !default;
```

## State Addition Checklist

When adding a new component state (e.g., `selected`, `invalid`):

### Core

- [ ] Add state class handling in `_theme.scss` (e.g., `.k-{component}.k-selected { ... }`)
- [ ] Add state-specific variables to `_variables.scss` (e.g., `$kendo-{component}-selected-bg: null !default;`)
- [ ] If state affects structure, add to `_layout.scss` too

### Themes

- [ ] Add state variables with values to each targeted theme's `_variables.scss`
- [ ] Add to `@forward` maps
- [ ] Add state class handling to theme `_theme.scss` if it extends core's pattern

### HTML spec

- [ ] Add state to the `states` array (e.g., `States.selected`)
- [ ] Add state prop to the render function
- [ ] Add state to the type definition (`Kendo{ComponentName}State`)
- [ ] Add `stateClassNames` mapping in the render function

### Tests

- [ ] Create or update `{component}-states.tsx` test file
- [ ] Add export to `tests/index.ts`

## Option Addition Checklist

When adding a new option or option value (e.g., new size `xlarge`):

### Core

- [ ] Add size-specific variables: `$kendo-{component}-xl-padding-x: null !default;`, etc.
- [ ] Add to the size/option map in `_layout.scss`

### Themes

- [ ] Add concrete values for size-specific variables in targeted themes
- [ ] Add to `@forward` maps

### HTML spec

- [ ] Add to `options` object (e.g., `size: [..., Size.xlarge]`)
- [ ] Add to `Options` type
- [ ] Verify `optionClassNames` generates the correct CSS class

### Tests

- [ ] Create or update the relevant test file (e.g., `{component}-sizes.tsx`)
- [ ] Add export to `tests/index.ts`

## Layout/Structure Change Checklist

When changing HTML structure or CSS layout:

### Core

- [ ] Update `_layout.scss` mixin with new selectors or property changes
- [ ] Add new variables for any new CSS properties

### Themes

- [ ] Update theme `_layout.scss` only if the theme overrides the affected part
- [ ] Most themes just call `@include kendo-{component}--layout-base()` — core changes propagate automatically

### HTML spec

- [ ] Update render function with new HTML structure
- [ ] Update TypeScript types if props changed
- [ ] Verify `classNames()` calls produce correct CSS classes

### Templates

- [ ] Update ALL templates in `templates/` that render this component
- [ ] Check for prop drilling — new structural elements may need new props

### Tests

- [ ] Update ALL test files that render this component directly
- [ ] Verify test output matches the new structure

## Visual Test Decision Matrix

Use this to decide which test files need to be added or updated:

| Change type | Test file needed |
|-------------|-----------------|
| New state added | `{component}-states.tsx` — add or update |
| New size option | `{component}-sizes.tsx` — add or update |
| New fillMode option | `{component}-fillmodes.tsx` — add or update |
| New themeColor option | `{component}-themecolors.tsx` or `{component}-{fillMode}.tsx` — add or update |
| Layout/structure change | `{component}-default.tsx` — update to reflect new structure |
| New sub-element | Dedicated test file or update `{component}-default.tsx` |
| Color/visual-only change | No new test needed — existing tests will show the visual diff in screenshots |
| New rounded option | `{component}-rounded.tsx` — add or update |

## @forward Map Update Pattern

When adding a variable to a theme's `@forward` map, follow this exact pattern:

```scss
@forward "@progress/kendo-theme-core/scss/components/{component}/_variables.scss" with (
    // ... existing entries ...
    $kendo-{component}-existing-var: $kendo-{component}-existing-var,
    $kendo-{component}-new-var: $kendo-{component}-new-var       // ← add here, alphabetically or grouped logically
);
```

**Critical:** The left side is the core variable name, the right side is the theme's local variable of the same name. They must match exactly.
