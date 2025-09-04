---
name: Theme Migration Issue
about: Report problems when upgrading between theme versions or migrating between themes
title: '[MIGRATION] '
labels: Breaking Change
assignees: ''
---

## Migration Issue Description

A clear and concise description of the migration problem.

## Migration Details

### Migration Type

- [ ] Version upgrade (same theme)
- [ ] Theme change (different theme)
- [ ] Framework migration (e.g., jQuery to Angular)
- [ ] Build system change

### Version Information

#### From (Previous)

- Theme: [e.g., Default theme]
- Version: [e.g., 5.12.0]
- Package: [e.g., @progress/kendo-theme-default]

#### To (Current)

- Theme: [e.g., Default theme]
- Version: [e.g., 6.0.0]
- Package: [e.g., @progress/kendo-theme-default]

## Breaking Changes Encountered

### Visual Changes

- [ ] Component appearance changed
- [ ] Color scheme differences
- [ ] Layout/spacing issues
- [ ] Typography changes
- [ ] Icon changes

### CSS/SASS Changes

- [ ] Variable names changed
- [ ] CSS class names changed
- [ ] SASS mixin changes
- [ ] File structure changes
- [ ] Import path changes

### Build System Changes

- [ ] Package structure changed
- [ ] Build configuration needed updates
- [ ] Dependencies changed
- [ ] Bundle size differences

## Expected Behavior

What did you expect to happen during the migration?

## Actual Behavior

What actually happened? What broke or changed unexpectedly?

## Steps to Reproduce

1. Start with theme version '...'
2. Upgrade to theme version '...'
3. Observe the issue at '...'

## Code Changes Required

### Before Migration

```css
/* CSS/SASS code that worked in the previous version */
```

```html
<!-- HTML that worked in the previous version -->
```

### After Migration

```css
/* CSS/SASS code needed for the new version */
```

```html
<!-- HTML needed for the new version -->
```

## Migration Documentation

### Available Resources

- [ ] I followed the official migration guide
- [ ] I checked the changelog
- [ ] I reviewed breaking changes documentation
- [ ] No migration documentation was available

### Documentation Issues

Were there any problems with the migration documentation?

## Environment Information

### Framework/Suite

- [ ] Kendo UI for jQuery
- [ ] Kendo UI for Angular
- [ ] Kendo UI for React
- [ ] Kendo UI for Vue
- [ ] Telerik UI for Blazor
- [ ] Telerik UI for ASP.NET Core
- [ ] Telerik UI for ASP.NET MVC
- [ ] Custom HTML implementation

### Build System

- Build tool: [e.g., Webpack, Vite, Angular CLI]
- CSS preprocessing: [e.g., SASS, PostCSS]
- Package manager: [e.g., npm, yarn]

## Impact Assessment

### Severity

- [ ] Critical - Migration is blocked
- [ ] High - Significant effort required
- [ ] Medium - Some manual changes needed
- [ ] Low - Minor adjustments required

### Affected Components

List the components affected by this migration issue:

## Workaround

Did you find a workaround for this migration issue?

## Additional Context

Add any other context about the migration problem here.

---
