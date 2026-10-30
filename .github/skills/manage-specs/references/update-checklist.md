# Update Checklists (HTML)

HTML checklists for adding states, options, or structure to an existing component. The SCSS half is in the `manage-themes` skill (`references/update-checklist.md`).

## State Addition Checklist

### Spec

- [ ] Add state to the `states` array (e.g., `States.selected`)
- [ ] Add state prop to the render function
- [ ] Add state to the type definition (`Kendo{ComponentName}State`)
- [ ] Add `stateClassNames` mapping in the render function

### Tests

- [ ] Create or update `{component}-states.tsx` test file

## Option Addition Checklist

### Spec

- [ ] Add to `options` object (e.g., `size: [..., Size.xlarge]`)
- [ ] Add to `Options` type
- [ ] Verify `optionClassNames` generates the correct CSS class

### Tests

- [ ] Create or update the relevant test file (e.g., `{component}-sizes.tsx`)

## Layout/Structure Change Checklist

### Spec

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
