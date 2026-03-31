/**
 * Generate a11y documentation JSON files for all components.
 *
 * Compiles the a11y-docs generator from TypeScript, reads ariaSpec from the
 * built html package, and produces JSON files under dist/_meta/a11y/.
 *
 * Prerequisites: run `npm run build` first (needs the CJS dist).
 *
 * Usage:
 *   node scripts/generate-a11y-docs.js
 */

const fs = require("fs");
const p = require("path");
const esbuild = require("esbuild");

// --- Compile generator from TS ---
const generatorEntry = p.resolve(__dirname, "a11y-docs/generator.ts");
const generatorOut = p.resolve(__dirname, "a11y-docs/.generator.cjs");

esbuild.buildSync({
    entryPoints: [generatorEntry],
    outfile: generatorOut,
    format: "cjs",
    platform: "node",
    bundle: true,
    logLevel: "error",
});

const { buildRegistry, generateA11yDocs } = require(generatorOut);

// --- Load built component exports ---
const dist = p.resolve(__dirname, "../dist/cjs/index.js");

if (!fs.existsSync(dist)) {
    console.error("Error: dist not found. Run `npm run build` first."); // eslint-disable-line no-console
    process.exit(1);
}

const html = require(dist);

// --- Generate ---
const registry = buildRegistry(html);
const outDir = p.resolve(__dirname, "../dist/_meta/a11y");

const pages = generateA11yDocs(registry, {
    outputPath: (component) => p.join(outDir, `${component.displayName}.json`),
});

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

let count = 0;
for (const page of pages) {
    const filePath = page.outputPath || p.join(outDir, `${page.displayName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(page.json, null, 2) + "\n");
    count++;
}

// Clean up compiled generator
fs.unlinkSync(generatorOut);

console.log(`Generated ${count} a11y doc(s) in ${p.relative(process.cwd(), outDir)}/`); // eslint-disable-line no-console
