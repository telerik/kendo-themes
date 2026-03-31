# VPAT / Accessibility Conformance Report Generator

Generates VPAT® 2.5Rev WCAG Edition reports from automated accessibility test data. Output format: **Markdown** (convert to PDF via `npx md-to-pdf`).

## Programmatic API

The generator is exported from the `@progress/kendo-themes-html` package.

```ts
import { generateVpatReport } from '@progress/kendo-themes-html';
import { readFileSync, writeFileSync } from 'fs';

// Generate with defaults (config only, no test data)
const report = generateVpatReport();
writeFileSync('vpat-report.md', report.markdown);

// Generate with product-specific overrides and test data
const report = generateVpatReport(
    {
        product: { name: 'Kendo UI for Angular', version: '17.0.0' },
        knownExceptions: [
            {
                wcagCriteria: '1.4.3',
                criteriaName: 'Contrast (Minimum)',
                wcagLevel: 'AA',
                conformanceLevel: 'Partially Supports',
                affectedComponents: ['BottomNavigation', 'Chip'],
                explanation: 'Some color themes do not achieve minimum contrast.'
            }
        ],
        additionalProductNotes: {
            'Angular-Specific Notes': 'ARIA attributes are managed reactively.'
        }
    },
    {
        a11yReport: JSON.parse(readFileSync('a11y-report.json', 'utf-8')),
        contrastReport: JSON.parse(readFileSync('contrast-report.json', 'utf-8'))
    }
);
```

### `generateVpatReport(overrides?, options?)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `overrides` | `VpatOverrides` | Product info, known exceptions, additional notes. Product fields replace defaults; `knownExceptions` with matching `wcagCriteria` replace base entries, new ones are appended; `additionalProductNotes` are merged. |
| `options.a11yReport` | `object` | A11y test report JSON (output of `test-a11y-unified.mjs`). |
| `options.contrastReport` | `object` | Contrast test report JSON (output of `test-contrast.mjs`). |

**Returns** `VpatReport`:

| Field | Type | Description |
|-------|------|-------------|
| `markdown` | `string` | Full VPAT report in Markdown format. |
| `data.config` | `VpatConfig` | Merged configuration used for generation. |
| `data.a11yAnalysis` | `object \| null` | Analyzed test results (templates, ARIA/WCAG pass/fail counts, component results, discovered violations). |
| `data.contrastReport` | `unknown` | Contrast report data (passthrough). |

## CLI Usage

Requires the HTML package to be built first: `npm run build --prefix packages/html`

```bash
# Generate Markdown report
node scripts/vpat/generate-vpat.mjs

# Custom output path
node scripts/vpat/generate-vpat.mjs --out ./output/vpat.md

# With product-specific overrides
node scripts/vpat/generate-vpat.mjs --overrides path/to/overrides.json

# With test report data
node scripts/vpat/generate-vpat.mjs --a11y-report path/to/a11y-report.json --contrast-report path/to/contrast-report.json
```

### CLI Arguments

| Argument | Default | Description |
|----------|---------|-------------|
| `--out` | `./vpat-report.md` | Output file path. |
| `--overrides` | *(none)* | Path to a JSON overrides file. |
| `--a11y-report` | *(none)* | Path to an a11y report JSON file. |
| `--contrast-report` | *(none)* | Path to a contrast report JSON file. |

## Generating PDF

```bash
node scripts/vpat/generate-vpat.mjs --out vpat-report.md
npx md-to-pdf vpat-report.md
```

## Overrides JSON Format

```json
{
    "product": {
        "name": "Kendo UI for Angular",
        "version": "17.0.0",
        "description": "..."
    },
    "knownExceptions": [
        {
            "wcagCriteria": "1.4.3",
            "criteriaName": "Contrast (Minimum)",
            "wcagLevel": "AA",
            "conformanceLevel": "Partially Supports",
            "affectedComponents": ["BottomNavigation", "Chip"],
            "explanation": "..."
        }
    ],
    "additionalProductNotes": {
        "Section Title": "Content for this section."
    }
}
```

Overrides with the same `wcagCriteria` as a base exception will replace it; new entries are appended.
