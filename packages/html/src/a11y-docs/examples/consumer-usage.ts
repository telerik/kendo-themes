/**
 * Example: How to generate a11y docs JSON for the Design System.
 *
 * This file is NOT shipped with the package — it demonstrates the
 * pattern the consuming repo should follow.
 *
 * Usage (from the consuming repo root):
 *   npx tsx scripts/generate-a11y-docs.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import * as htmlExports from '@progress/kendo-themes-html';
import { buildRegistry, generateA11yDocs } from '@progress/kendo-themes-html';

// ---------------------------------------------------------------------------
// 1. Source reader — reads .spec.tsx from the installed package for JSDoc
//    extraction (needed for descriptions and @see cross-references).
// ---------------------------------------------------------------------------
function createSourceReader() {
    const pkgSrcDir = path.resolve('node_modules/@progress/kendo-themes-html/src');

    return (folderName: string): string | null => {
        const folderPath = path.join(pkgSrcDir, folderName);
        if (!fs.existsSync(folderPath)) return null;

        const specFiles = fs.readdirSync(folderPath).filter((f: string) => f.endsWith('.spec.tsx'));
        for (const f of specFiles) {
            const content = fs.readFileSync(path.join(folderPath, f), 'utf-8');
            if (content.includes('.ariaSpec')) return content;
        }
        return null;
    };
}

// ---------------------------------------------------------------------------
// 2. Build the component registry
// ---------------------------------------------------------------------------
const registry = buildRegistry(
    htmlExports as unknown as Record<string, unknown>,
    createSourceReader(),
);

console.log(`Found ${registry.size} components with ariaSpec`);

// ---------------------------------------------------------------------------
// 3. Generate JSON files
// ---------------------------------------------------------------------------
const outDir = path.join('dist', 'design-system');

const pages = generateA11yDocs(registry, {
    outputPath: (c) => path.join(outDir, `${c.displayName}.json`),
});

fs.mkdirSync(outDir, { recursive: true });

for (const page of pages) {
    if (page.outputPath) {
        fs.writeFileSync(page.outputPath, JSON.stringify(page.json, null, 4), 'utf-8');
    }
}

console.log(`Generated ${pages.length} a11y JSON files in ${outDir}/`);
