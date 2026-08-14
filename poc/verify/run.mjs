#!/usr/bin/env node
/* Renders the variant matrix twice — once against the Sass-built theme, once
 * against the CSS POC — and diffs the computed styles.
 *
 * Usage: node poc/verify/run.mjs [--verbose] [--only=button|textbox] */

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { buildPage } from "./matrix.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "../..");
const TMP = resolve(HERE, ".tmp");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const verbose = process.argv.includes("--verbose");
const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const only = onlyArg ? onlyArg.split("=")[1] : null;

mkdirSync(TMP, { recursive: true });

function render(name, cssHrefs) {
    const file = resolve(TMP, `${name}.html`);
    writeFileSync(file, buildPage(cssHrefs));
    const out = execFileSync(
        CHROME,
        [
            "--headless",
            "--disable-gpu",
            "--no-sandbox",
            "--allow-file-access-from-files",
            "--virtual-time-budget=8000",
            "--dump-dom",
            file
        ],
        { encoding: "utf8", maxBuffer: 256 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] }
    );
    const m = out.match(/@@BEGIN@@([\s\S]*?)@@END@@/);
    if (!m) {
        throw new Error(`No computed-style payload captured for "${name}".`);
    }
    // The DOM dump HTML-escapes the JSON payload.
    const json = m[1]
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    return JSON.parse(json);
}

const baseline = render("baseline", [
    `file://${REPO}/packages/meridian/dist/all.css`
]);
const poc = render("poc", [`file://${REPO}/poc/dist/all.css`]);

let checked = 0;
let mismatched = 0;
const failures = [];

for (const [id, expected] of Object.entries(baseline)) {
    if (only && !id.startsWith(only)) { continue; }
    const actual = poc[id];
    if (!actual) {
        failures.push({ id, prop: "*", expected: "<present>", actual: "<missing>" });
        mismatched++;
        continue;
    }
    for (const [prop, want] of Object.entries(expected)) {
        checked++;
        const got = actual[prop];
        if (got !== want) {
            mismatched++;
            failures.push({ id, prop, expected: want, actual: got });
        }
    }
}

writeFileSync(resolve(HERE, "diff.json"), JSON.stringify(failures, null, 2));

const byProp = new Map();
const byCase = new Map();
for (const f of failures) {
    byProp.set(f.prop, (byProp.get(f.prop) || 0) + 1);
    const comp = f.id.split("|")[0];
    byCase.set(comp, (byCase.get(comp) || 0) + 1);
}

/* eslint-disable no-console */
console.log(`\ncases        : ${Object.keys(baseline).length}`);
console.log(`declarations : ${checked}`);
console.log(`mismatches   : ${mismatched}`);
console.log(
    `parity       : ${(((checked - mismatched) / checked) * 100).toFixed(2)}%`
);

if (failures.length) {
    console.log("\nmismatches by property:");
    [...byProp.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
        .forEach(([p, n]) => console.log(`  ${String(n).padStart(5)}  ${p}`));
    console.log("\nmismatches by component:");
    [...byCase.entries()]
        .sort((a, b) => b[1] - a[1])
        .forEach(([p, n]) => console.log(`  ${String(n).padStart(5)}  ${p}`));

    if (verbose) {
        console.log("\nfirst 40 mismatches:");
        failures.slice(0, 40).forEach((f) => {
            console.log(`  ${f.id}\n    ${f.prop}\n      want: ${f.expected}\n      got : ${f.actual}`);
        });
    } else {
        console.log("\n(full detail in poc/verify/diff.json — rerun with --verbose for inline)");
    }
}

process.exit(mismatched === 0 ? 0 : 1);
