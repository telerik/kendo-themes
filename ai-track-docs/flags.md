# Feature Flags

> Configuration flags for optional behavior in kendo-themes.

---

## Overview

Feature flags allow consumers to enable/disable non-critical behaviors at compile time. All flags have **safe defaults** that preserve backward compatibility.

## Available Flags

### `$kendo-enable-user-select-utils`

**Package:** `@progress/kendo-theme-utils`  
**Location:** `packages/utils/scss/interactivity/_user-select.scss`  
**Default:** `true` (enabled)

Controls generation of user-select utility classes (`.k-user-select-none`, `.k-user-select-auto`, etc.).

#### Usage

```scss
// Disable user-select utilities to reduce CSS output
@use "@progress/kendo-theme-utils/scss/interactivity/_user-select.scss" as * with (
    $kendo-enable-user-select-utils: false
);

// Or keep enabled (default behavior)
@use "@progress/kendo-theme-utils/scss/interactivity/_user-select.scss" as *;
```

#### Generated Classes (when enabled)

| Class | CSS |
|-------|-----|
| `.k-user-select-none` | `user-select: none` |
| `.k-user-select-auto` | `user-select: auto` |
| `.k-user-select-text` | `user-select: text` |
| `.k-user-select-all` | `user-select: all` |
| `.k-user-select-contain` | `user-select: contain` |

---

## Existing Flags (Reference)

| Flag | Package | Default | Description |
|------|---------|---------|-------------|
| `$kendo-enable-shadows` | core | `true` | Enable box shadows |
| `$kendo-enable-rounded` | core | `true` | Enable border radius |
| `$kendo-enable-gradients` | core | `true` | Enable background gradients |
| `$kendo-enable-transitions` | core | `true` | Enable CSS transitions |
| `$kendo-nested-disabled` | core | `true` | Adjust opacity for nested disabled elements |
| `$kendo-enable-focus-contrast` | core | `false` | Enhanced focus contrast for a11y |
| `$kendo-enable-typography` | core | `false` | Enable typography utilities |
| `$kendo-important` | utils | `true` | Generate `!important` utility variants |

---

## Adding New Flags

When adding a new feature flag:

1. **Use a descriptive name**: `$kendo-enable-{feature}-{scope}`
2. **Set safe default**: Usually `true` for existing features, `false` for experimental
3. **Add SassDoc comment**: Document type, group, and purpose
4. **Add ON/OFF tests**: See `units/utils/feature-flags.test.ts`
5. **Document here**: Add entry to this file

### Template

```scss
/// Feature flag to enable/disable {feature} utility classes.
/// Safe default is `{default}` ({enabled/disabled}).
/// @group utils-flags
/// @type Boolean
$kendo-enable-{feature}: {default} !default;

@if $kendo-enable-{feature} {
    // Feature implementation
}
```
