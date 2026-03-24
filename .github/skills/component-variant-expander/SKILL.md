---
name: component-variant-expander
description: "Adds a new variant (size, fill mode, theme color, or state) to an existing Kendo UI component across all layers: core SCSS variables, all five theme packages (@forward + values), layout/theme mixin logic, HTML spec options/types, and a visual test scenario. Use when adding a new size, fill mode, theme color, or state to an existing component. Not for creating a new component (use component-generator) or changing an existing variant's value."
compatibility: Designed for VS Code Copilot (agent mode) and Claude Code
---

# Skill: Component Variant Expander (A2)

Add a **new variant** to an existing component across all layers: SCSS variables → mixin logic → HTML spec → tests.

## Pre-Flight: Read Context First

1. `.github/skills/shared/repo-conventions.md`
2. The component's existing files in core and default:
   - `packages/core/scss/components/[component]/_variables.scss`
   - `packages/core/scss/components/[component]/_layout.scss` / `_theme.scss`
   - `packages/default/scss/[component]/_variables.scss`
   - `packages/default/scss/[component]/_layout.scss` / `_theme.scss`
3. `packages/html/src/[component]/[component].spec.tsx` — existing options/states definition
4. Comparable variant in another component (e.g., how `button` handles `fillMode="outline"`)

---

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `COMPONENT` | ✅ | Component name (e.g., `chip`, `badge`, `button`) |
| `VARIANT_TYPE` | ✅ | `size`, `fillMode`, `themeColor`, `state`, or `custom` |
| `VARIANT_VALUE` | ✅ | The new variant value (e.g., `xlarge`, `ghost`, `brand`) |
| `DESCRIPTION` | ✅ | Purpose of this variant |
| `VISUAL_SPEC` | ⬜ | Design values: padding, colors, font sizes, etc. |

---

## Step-by-Step Workflow

### Step 1 — Classify the Variant Type

**Size variant** (e.g., `xlarge`):
- New SCSS size variables: `$kendo-[component]-xl-padding-x`, `$kendo-[component]-xl-font-size`, etc.
- New entry in the `$kendo-[component]-sizes` map (if one exists)
- CSS class: `.k-[component]-xl`
- HTML spec: add `Size.xlarge` to the `options.size` array

**Fill mode variant** (e.g., `ghost`):
- New SCSS fill-mode variable group: `$kendo-[component]-ghost-bg`, `$kendo-[component]-ghost-text`, etc.
- New CSS class block in `_theme.scss`: `.k-[component]-ghost { ... }`
- HTML spec: add `FillMode.ghost` to the `options.fillMode` array (or add custom type)

**Theme color variant** (e.g., `brand`):
- May require a JSON swatch entry in `packages/[theme]/lib/swatches/`
- Or a new entry in `$kendo-[component]-theme-colors` map
- CSS class: `.k-[component]-brand`

**State variant** (e.g., `generating`, `readonly`):
- New SCSS state variables: `$kendo-[component]-[state]-bg`, etc.
- CSS class: `.k-[state]` (uses shared state class from design system)
- HTML spec: add `States.[state]` to `states` array
- Ensure `stateClassNames()` or manual logic handles the new state

**Custom structural variant** (e.g., `horizontal` layout):
- Define variant-specific CSS class: `.k-[component]-horizontal`
- New variable group if visual properties change
- HTML spec: add custom option type if no shared type fits

### Step 2 — Add SCSS Variables to Core

In `packages/core/scss/components/[component]/_variables.scss`:

```scss
// [VariantType] variant
$kendo-[component]-[variant]-padding-x: null !default;
$kendo-[component]-[variant]-padding-y: null !default;
$kendo-[component]-[variant]-font-size: null !default;
$kendo-[component]-[variant]-bg: null !default;
$kendo-[component]-[variant]-text: null !default;
$kendo-[component]-[variant]-border: null !default;
// hover/focus/disabled states for this variant
$kendo-[component]-[variant]-hover-bg: null !default;
$kendo-[component]-[variant]-focus-shadow: null !default;
$kendo-[component]-[variant]-disabled-bg: null !default;
```

### Step 3 — Add Values in Each Theme Package

For each of `default`, `classic`, `material`, `fluent`, `bootstrap`:

1. Add variables with SassDoc + values
2. Add to `@forward` map

```scss
/// The background color of the [variant] [ComponentName].
/// @group [component]
$kendo-[component]-[variant]-bg: k-color( [token] ) !default;

@forward "..." with (
    // ... existing entries ...
    $kendo-[component]-[variant]-bg: $kendo-[component]-[variant]-bg,
);
```

### Step 4 — Add Mixin Logic

**For size variants** — add to the sizes iteration in `_layout.scss`:

```scss
xl: (
    padding-x: $kendo-[component]-xl-padding-x,
    padding-y: $kendo-[component]-xl-padding-y,
    font-size: $kendo-[component]-xl-font-size,
    line-height: $kendo-[component]-xl-line-height
),
```

**For fill mode / custom variants** — add block in `_theme.scss`:

```scss
// [Variant] [ComponentName]
&.k-[component]-[variant] {
    @include fill(
        $kendo-[component]-[variant]-text,
        $kendo-[component]-[variant]-bg,
        $kendo-[component]-[variant]-border
    );

    &:hover,
    &.k-hover {
        @include fill(
            $kendo-[component]-[variant]-hover-text,
            $kendo-[component]-[variant]-hover-bg,
            $kendo-[component]-[variant]-hover-border
        );
    }
}
```

**For state variants** — add CSS block in `_theme.scss` appropriate for the state:

```scss
&.k-[state] {
    @include fill(
        $kendo-[component]-[state]-text,
        $kendo-[component]-[state]-bg,
        $kendo-[component]-[state]-border
    );
}
```

### Step 5 — Update HTML Spec

**`packages/html/src/[component]/[component].spec.tsx`**

Add the new variant to the appropriate options/states array:

```tsx
// For size variants:
const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large, Size.xlarge ],
    //                                                              ^^^ new
};

// For fill mode variants:
const options = {
    fillMode: [ ..., 'ghost' as const ],   // or FillMode.ghost if added to misc/theme.ts
};

// For state variants:
const states = [
    States.hover, States.focus, States.active, States.disabled, States.generating,
    //                                                            ^^^ new
] as const;
```

Update the TypeScript type:

```tsx
// If using custom variant not in shared enums:
export type KendoChipOptions = {
    fillMode?: (typeof options.fillMode)[number] | null;
    // becomes:
    fillMode?: (typeof options.fillMode)[number] | 'ghost' | null;
};
```

### Step 6 — Add Test Scenario

Create or update `packages/html/src/[component]/tests/[component]-[variant].tsx`:

```tsx
import { MyComponent } from '../../[component]';

export default () => (
    <div id="test-area">
        {/* All existing variants for comparison */}
        <MyComponent fillMode="solid">Solid</MyComponent>
        {/* New variant */}
        <MyComponent fillMode="ghost">Ghost</MyComponent>
        <MyComponent fillMode="ghost" hover>Ghost Hover</MyComponent>
        <MyComponent fillMode="ghost" disabled>Ghost Disabled</MyComponent>
    </div>
);
```

---

## Post-Generation Validation Checklist

- [ ] Core variables are `null !default`
- [ ] All 5 theme packages have the new variant variables with SassDoc + values
- [ ] All new variables present in `@forward` maps
- [ ] Layout/theme mixin additions follow the existing variant iteration pattern
- [ ] HTML spec `options` or `states` array updated
- [ ] TypeScript types updated to include new variant
- [ ] Test file added/updated for visual coverage

## Verify Build

```bash
npm run sass         # No errors
npm run lint:styles  # Stylelint clean
npm run build        # HTML build clean (no TS errors)
npm run build:tests  # Test components build OK
```

---

## Edge Cases

- **Variant already partially exists**: Check all 5 theme packages — don't add where it exists, but add where it's missing.
- **Shared enum doesn't have the new value** (e.g., `Size.xlarge` not in `misc/theme.ts`): Add it to `packages/html/src/misc/theme.ts` if it's a genuinely universal value; otherwise use a component-local `as const` type.
- **Variant requires CSS-only addition** (no new variables needed): Still check HTML spec and test file for completeness.
- **Bootstrap/material theme uses a fundamentally different variant system**: Note as a TODO comment and flag for manual review.

---
