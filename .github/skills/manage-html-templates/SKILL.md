---
name: manage-html-templates
description: Create or update reusable HTML templates for a Kendo UI component in the HTML package. Templates are preset configurations of a component spec, used by visual tests and documentation. Use this skill when the user wants to add a template variant, create a preset configuration, or add a reusable component shorthand.
argument-hint: "[component] [variant] e.g. chip icon, button icon-text"
metadata:
  internal: true
---

# Add HTML Template

Create or update reusable template files in `packages/html/src/{component}/templates/`.

## When to use

When the user asks to add a new template variant for a component (e.g., "add an icon chip template", "create a horizontal card template"), or when scaffolding a new component that needs default templates. Not for visual tests (use `manage-html-tests`) or spec changes (use `manage-html-specs`).

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| **Component name** | Yes | kebab-case (e.g., `chip`, `button`, `card`) |
| **Template variant** | Yes | What the template represents (e.g., `normal`, `icon`, `removable`, `horizontal`) |
| **Preset props** | No | Which props the template pre-sets (e.g., `icon="folder"`, `text="Chip"`) |
| **Description** | No | One sentence describing the template's purpose |

## Procedure

### Step 1: Read the component spec

Read `packages/html/src/{component}/{component}.spec.tsx` to understand:
- The component's exported name (e.g., `Button`, `Chip`, `Badge`)
- Available props, options, and states
- The component's render function and HTML structure

### Step 2: Check existing templates

List `packages/html/src/{component}/templates/` to see what already exists. Avoid duplicating existing templates.

### Step 3: Plan the template

A template is a thin wrapper around the spec component that pre-sets certain props to represent a common usage pattern. Templates should:
- Import the component from its spec file (`../{component}.spec`)
- Accept `props: any` and spread them onto the component
- Pre-set the distinguishing props for this variant
- Export a named PascalCase constant

Common template patterns:

| Pattern | What it pre-sets | Example |
|---------|-----------------|---------|
| Normal/default | Minimal text content | `<Chip text="text" {...props} />` |
| Icon variant | An icon prop | `<Button icon="folder" {...props} children={undefined} />` |
| Icon + text | Both icon and text | `<Button icon="folder" text="Open" {...props} />` |
| With sub-elements | Enables optional sub-elements | `<Chip showAvatar {...props} />` |
| Removable/actions | Adds action elements | `<Chip actions={<ChipAction />} {...props} />` |
| Composite | Wraps multiple sub-components | A card with header, body, footer |

### Step 4: Create the template file

Create `packages/html/src/{component}/templates/{component}-{variant}.tsx`:

**Simple template** (single prop preset):

```tsx
import { {ComponentName} } from '../{component}.spec';

export const {ComponentName}{Variant} = (props: any) => <{ComponentName} text="Content" {...props} />;
```

**Icon-only template** (removes children):

```tsx
import { {ComponentName} } from '../{component}.spec';

export const {ComponentName}Icon = (props: any) => (
    <{ComponentName}
        icon="folder"
        {...props}
        aria-label={props['aria-label'] || "Folder"}
        children={undefined}
    />
);
```

**Template with sub-components:**

```tsx
import { {ComponentName} } from '../{component}.spec';
import { Icon } from '../../icon';

export const {ComponentName}{Variant} = (props: any) => (
    <{ComponentName} {...props}>
        <Icon icon="check" />
        <span className="k-{component}-text">{props.children || 'Content'}</span>
    </{ComponentName}>
);
```

**Rules:**
- Import the component from `../{component}.spec` (relative path to spec file)
- Use default import or named import matching how the spec exports it
- Export a **named** PascalCase constant: `{ComponentName}{Variant}`
- Accept `(props: any)` and spread `{...props}` so callers can override any prop
- Props spread should come **after** preset props so callers can override, unless a prop should be enforced (like `children={undefined}` for icon-only)
- Keep templates minimal — they're presets, not full components
- For icon-only variants, add a default `aria-label` for accessibility
- Do not add `id="test-area"` — that belongs in test files, not templates

### Step 5: Export from component index

Add the template export to `packages/html/src/{component}/index.ts`:

```typescript
export * from './templates/{component}-{variant}';
```

Place it after the spec export and among other template exports, in a logical order.

### Step 6: Validate

```bash
npm run typecheck --prefix packages/html 2>&1
```

Fix any TypeScript errors before proceeding.

## Updating an existing template

When updating an existing template:

1. **Read the existing template** to understand its current props and structure
2. **Modify only what's needed** — don't restructure working templates
3. **Check if tests import this template** — changes may affect visual test output
4. **Verify the index.ts export** is still correct after changes

## Naming conventions

| Component | Variant | File name | Export name |
|-----------|---------|-----------|-------------|
| `button` | text | `text-button.tsx` | `TextButton` |
| `button` | icon | `icon-button.tsx` | `IconButton` |
| `button` | icon + text | `icon-text-button.tsx` | `IconTextButton` |
| `chip` | normal | `chip-normal.tsx` | `ChipNormal` |
| `chip` | icon | `chip-icon.tsx` | `ChipIcon` |
| `chip` | removable | `chip-removable.tsx` | `ChipRemovable` |
| `badge` | normal | `badge-normal.tsx` | `BadgeNormal` |
| `card` | normal | `card-normal.tsx` | `CardNormal` |
| `card` | horizontal | `card-horizontal.tsx` | `CardHorizontal` |

The file naming uses either `{component}-{variant}.tsx` or `{variant}-{component}.tsx` — follow the existing pattern in the component's templates directory. When creating templates for a new component, prefer `{component}-{variant}.tsx`.

## Gotchas

- Templates import from the **spec file** (`../{component}.spec`), not from the component index — this avoids circular dependencies.
- Some older templates import from `..` (the index). Both work, but prefer importing from the spec directly for new templates.
- Templates must be **stateless** — no React hooks, no event handlers, no side effects. They render static HTML.
- The `props: any` type is intentional — it allows passing any combination of the component's props without strict typing at the template level.
- Don't add `key` props in templates — those are added by calling code when mapping.
- Check if the component has required props (like `text` on Chip) — templates should always satisfy required props.
- Keep templates focused on one variant — a "kitchen sink" template that shows everything is a test, not a template.
