/**
 * Example: How to generate a11y docs in a consuming product repo.
 *
 * This file is NOT shipped with the package — it demonstrates the
 * pattern each product repo should follow.
 *
 * Usage (from the product repo root):
 *   npx tsx scripts/generate-a11y-docs.ts
 *   # or bundle with esbuild and run with node
 */

import * as fs from 'fs';
import * as path from 'path';
import * as htmlExports from '@progress/kendo-themes-html';
import {
    buildRegistry,
    generateA11yDocs,
    ANGULAR_PRESET,
    type A11yGeneratorOptions,
    type ComponentMeta,
} from '@progress/kendo-themes-html';

// ---------------------------------------------------------------------------
// 1. Source reader — reads .spec.tsx from the installed package for JSDoc
//    extraction. Alternatively, skip the sourceReader if you don't need
//    descriptions and @see cross-references.
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
// 3. Configure the generator with product-specific options
//
//    The key option is `outputPath` — it maps each component to the correct
//    file location in YOUR repo's docs structure.
// ---------------------------------------------------------------------------
const options: A11yGeneratorOptions = {
    ...ANGULAR_PRESET,

    // Override output path to match your repo's layout
    outputPath: (component: ComponentMeta) => {
        // Example: Angular docs live under docs/{component}/accessibility/aria-support_{component}.md
        // Adjust the function to match your actual folder structure.
        return path.join('docs', component.id, 'accessibility', `aria-support_${component.id}.md`);
    },
};

// ---------------------------------------------------------------------------
// 4. Generate and write files
// ---------------------------------------------------------------------------
const pages = generateA11yDocs(registry, options);

let count = 0;
for (const page of pages) {
    if (page.markdown && page.outputPath) {
        const dir = path.dirname(page.outputPath);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(page.outputPath, page.markdown, 'utf-8');
        count++;
    }
}

console.log(`Generated ${count} a11y documentation pages.`);
