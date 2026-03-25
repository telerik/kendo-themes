# A11y Documentation Generator

Generates WAI-ARIA accessibility documentation JSON files from the `ariaSpec` objects defined on html package components.

Replaces `@progress/wct-a11y-spec` as the source of truth — the `ariaSpec` on each component's `.spec.tsx` is now the single canonical definition.

## Output Format

Produces a JSON array per component in the format consumed by the [Kendo UI Design System docs](https://www.telerik.com/design-system/docs/). Each element is an object with a single key:

```json
[
    { "h2": "Accessibility Support" },
    { "p": "Out of the box, the Telerik and Kendo UI Breadcrumb ..." },
    { "h3": "WAI-ARIA" },
    { "table": { "headers": ["Selector", "Attribute", "Usage"], "rows": [...] } },
    { "link": { "title": "ToolBar accessibility specification", "source": "{{toolbar_a11y_link}}" } },
    { "h3": "Testing" },
    { "h3": "Screen Readers" },
    { "table": { "headers": ["Environment", "Tool"], "rows": [...] } }
]
```

## Architecture

| File | Purpose |
|---|---|
| `types.ts` | TypeScript interfaces — `AriaSpec`, `AriaRule`, `ComponentMeta`, `A11yJsonElement`, `A11yDocPage`, `A11yGeneratorOptions` |
| `component-registry.ts` | Discovers components with `ariaSpec` from html package exports; parses `@see` cross-references from JSDoc |
| `json-renderer.ts` | Builds the JSON array: intro, WAI-ARIA table(s), cross-links, testing, screen readers |
| `page-generator.ts` | Public API — `generateA11yDoc()` / `generateA11yDocs()` |
| `index.ts` | Barrel export |
| `examples/consumer-usage.ts` | Reference script showing Design System integration |

## Usage

The generator is a library API exported from `@progress/kendo-themes-html`. The consuming repo (e.g. kendo-design-system) calls it to produce JSON files:

```typescript
import * as fs from 'fs';
import * as path from 'path';
import * as htmlExports from '@progress/kendo-themes-html';
import { buildRegistry, generateA11yDocs } from '@progress/kendo-themes-html';

// Source reader for JSDoc extraction (optional — enables descriptions and @see)
function createSourceReader() {
    const pkgSrcDir = path.resolve('node_modules/@progress/kendo-themes-html/src');
    return (folderName: string): string | null => {
        const folderPath = path.join(pkgSrcDir, folderName);
        if (!fs.existsSync(folderPath)) return null;
        const specFiles = fs.readdirSync(folderPath).filter(f => f.endsWith('.spec.tsx'));
        for (const f of specFiles) {
            const content = fs.readFileSync(path.join(folderPath, f), 'utf-8');
            if (content.includes('.ariaSpec')) return content;
        }
        return null;
    };
}

const registry = buildRegistry(
    htmlExports as unknown as Record<string, unknown>,
    createSourceReader(),
);

const pages = generateA11yDocs(registry, {
    outputPath: (c) => path.join('dist', 'design-system', `${c.displayName}.json`),
});

for (const page of pages) {
    fs.mkdirSync(path.dirname(page.outputPath!), { recursive: true });
    fs.writeFileSync(page.outputPath!, JSON.stringify(page.json, null, 4), 'utf-8');
}
```

## Cross-References

Complex components (Grid, ComboBox, etc.) reference other components via `@see` JSDoc tags. The generator handles two patterns:

### Standalone cross-link (e.g. Pager)

When a `@see` target is a standalone component that doesn't have inline rules in the parent, the generator produces a cross-link section:

```json
{ "h4": "Pager" },
{ "p": "For the Grid Pager WAI-ARIA spec, please review the Pager component." },
{ "link": { "title": "Pager accessibility specification", "source": "{{pager_a11y_link}}" } }
```

### Section with cross-link + inline rules (e.g. Grid Toolbar)

When a `@see` target matches a section that also has its own inline rules, both the cross-link and the rules table are included:

```json
{ "h4": "Grid Toolbar" },
{ "p": "Grid Toolbar follows the specification of the ToolBar component." },
{ "link": { "title": "ToolBar accessibility specification", "source": "{{toolbar_a11y_link}}" } },
{ "table": { "headers": ["Selector", "Attribute", "Usage"], "rows": [...] } }
```

### Internal sub-component (e.g. Grid Filter Menu)

When a section has no matching `@see` reference, only the inline rules table is included:

```json
{ "h4": "Grid Filter Menu" },
{ "table": { "headers": ["Selector", "Attribute", "Usage"], "rows": [...] } }
```

## Options

| Option | Type | Description |
|---|---|---|
| `componentNameMap` | `Record<string, string>` | Display name overrides (e.g. `{ 'dropdownlist': 'DropDownList' }`) |
| `includeComponents` | `string[]` | Whitelist of component ids |
| `excludeComponents` | `string[]` | Blacklist of component ids |
| `outputPath` | `(component) => string` | Resolve output file path per component |
