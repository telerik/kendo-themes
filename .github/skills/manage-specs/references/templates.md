# HTML Templates

Create or update reusable template files in `packages/html/src/{component}/templates/`.

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

Shared rules are in [context.md](context.md). Template-specific:

- Import from the spec file (`../{component}.spec`), not the component index — avoids circular imports. Older templates import from `..`; don't copy that.
- `props: any` is intentional — templates accept any combination of the component's props.
- No `key` props; callers add them when mapping.
- Satisfy required props (e.g. `text` on Chip).
- One variant per template — a template showing everything is a test.
