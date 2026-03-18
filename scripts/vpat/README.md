# VPAT / Accessibility Conformance Report Generator

Generates VPAT® 2.5Rev WCAG Edition reports from automated accessibility test data. Output formats: **Markdown**, **HTML**, and **PDF**.

## Programmatic API

The generator is exported from the `@progress/kendo-themes-html` package.

```ts
import { generateVpatReport } from '@progress/kendo-themes-html';
import { writeFileSync } from 'fs';

// Generate with defaults
const report = generateVpatReport();

writeFileSync('vpat-report.md', report.markdown);
writeFileSync('vpat-report.html', report.html);

// Generate with product-specific overrides
const report = generateVpatReport({
    product: { name: 'Kendo UI for Angular', version: '17.0.0' },
    knownExceptions: [
        {
            wcagCriteria: '1.4.3',
            criteriaName: 'Contrast (Minimum)',
            wcagLevel: 'AA',
            wcagUrl: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
            axeRuleId: 'color-contrast',
            conformanceLevel: 'Partially Supports',
            affectedComponents: ['BottomNavigation', 'Chip'],
            explanation: 'Some color themes do not achieve minimum contrast.'
        }
    ],
    additionalProductNotes: {
        'Angular-Specific Notes': 'ARIA attributes are managed reactively.'
    }
});

// Access structured data
console.log(report.data.a11yAnalysis?.totalTemplates);
console.log(report.data.config.knownExceptions?.length);
```

### `generateVpatReport(overrides?, options?)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `overrides` | `VpatOverrides` | Product info, known exceptions, additional notes. Product fields replace defaults; `knownExceptions` with matching `wcagCriteria`+`axeRuleId` replace base entries, new ones are appended; `additionalProductNotes` are merged. |
| `options.a11yReport` | `VpatA11yReport` | Custom a11y test report (overrides the bundled baseline). |
| `options.contrastReport` | `VpatContrastReport` | Custom contrast report (overrides the bundled baseline). |

**Returns** `VpatReport`:

| Field | Type | Description |
|-------|------|-------------|
| `markdown` | `string` | Full VPAT report in Markdown format. |
| `html` | `string` | Full VPAT report as a standalone HTML document. |
| `data.config` | `VpatConfig` | Merged configuration used for generation. |
| `data.a11yAnalysis` | `VpatTestAnalysis \| null` | Analyzed test results. |
| `data.contrastReport` | `VpatContrastReport \| null` | Contrast report data. |

## CLI Usage

```bash
# Generate Markdown report (default)
node scripts/vpat/generate-vpat.mjs

# Generate HTML report
node scripts/vpat/generate-vpat.mjs --format html

# Custom output path
node scripts/vpat/generate-vpat.mjs --format md --out ./output/vpat.md

# With product-specific overrides
node scripts/vpat/generate-vpat.mjs --overrides path/to/overrides.json
node scripts/vpat/generate-vpat.mjs --overrides path/to/overrides.json --format html
```

### CLI Arguments

| Argument | Default | Description |
|----------|---------|-------------|
| `--format` | `md` | Output format: `md` (Markdown) or `html`. |
| `--out` | `./vpat-report.{ext}` | Output file path. |
| `--overrides` | *(none)* | Path to a JSON overrides file. |
| `--a11y-report` | *(bundled)* | Path to a custom a11y report JSON file. |
| `--contrast-report` | *(bundled)* | Path to a custom contrast report JSON file. |

### Custom Test Data

By default, the generator uses baseline test data bundled in the `@progress/kendo-themes-html` package. To use custom report data:

```bash
node scripts/vpat/generate-vpat.mjs --a11y-report path/to/a11y-report.json
node scripts/vpat/generate-vpat.mjs --contrast-report path/to/contrast-report.json
```

## Generating PDF

```bash
# Generate Markdown first
node scripts/vpat/generate-vpat.mjs --format md --out vpat-report.md

# Convert to PDF using md-to-pdf
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
            "wcagUrl": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
            "axeRuleId": "color-contrast",
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

Overrides with the same `wcagCriteria` + `axeRuleId` combination as a base exception will replace it; new entries are appended.
