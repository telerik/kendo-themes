/**
 * Generate a11y documentation JSON files for all components.
 *
 * Reads ariaSpec from the built html package and produces JSON files
 * under packages/html/docs/ in the format consumed by the Design System.
 *
 * Prerequisites: run `npm run build` first (needs the CJS dist).
 *
 * Usage:
 *   node scripts/generate-a11y-docs.js
 */

const fs = require("fs");
const p = require("path");

const dist = p.resolve(__dirname, "../dist/cjs/index.js");

if (!fs.existsSync(dist)) {
    console.error("Error: dist not found. Run `npm run build` first."); // eslint-disable-line no-console
    process.exit(1);
}

const html = require(dist);

const { buildRegistry, generateA11yDocs } = html;

const registry = buildRegistry(html);
const docsDir = p.resolve(__dirname, "../docs");

const pages = generateA11yDocs(registry, {
    outputPath: (component) => p.join(docsDir, `${component.displayName}.json`),
});

if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
}

let count = 0;
for (const page of pages) {
    const filePath = page.outputPath || p.join(docsDir, `${page.displayName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(page.json, null, 2) + "\n");
    count++;
}

console.log(`Generated ${count} a11y doc(s) in ${p.relative(process.cwd(), docsDir)}/`); // eslint-disable-line no-console
