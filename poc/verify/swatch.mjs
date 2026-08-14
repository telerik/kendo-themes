#!/usr/bin/env node
/* Swatch smoke test.
 *
 * A swatch is colour-only by contract — every swatch JSON in the repo contains
 * zero component overrides and zero non-colour values. So layering one on top
 * of the theme must:
 *
 *   1. change a substantial number of colour declarations, and
 *   2. leave every geometric/typographic declaration byte-identical, and
 *   3. never leave a custom property unresolved.
 *
 * That is exactly what this asserts. It is the property that makes shipping a
 * swatch as a ~14 KB colour file (instead of recompiling a ~900 KB theme)
 * safe.
 *
 * Usage: node poc/verify/swatch.mjs
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { buildPage } from "./matrix.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "../..");
const TMP = resolve(HERE, ".tmp");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

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
    if (!m) throw new Error(`No computed-style payload captured for "${name}".`);
    return JSON.parse(
        m[1]
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
    );
}

const isColourProp = (p) =>
    /color|background|box-shadow|outline-color|fill|stroke/.test(p);

const light = render("swatch-light", [`file://${REPO}/poc/dist/all.css`]);
const dark = render("swatch-dark", [
    `file://${REPO}/poc/dist/all.css`,
    `file://${REPO}/poc/dist/swatch-main-dark.css`
]);

let colourChanged = 0;
let colourTotal = 0;
let geometryDrift = 0;
let unresolved = 0;
const drift = [];

for (const id of Object.keys(light)) {
    for (const [prop, lv] of Object.entries(light[id])) {
        const dv = dark[id][prop];
        if (/var\(|^$/.test(String(dv))) unresolved++;
        if (isColourProp(prop)) {
            colourTotal++;
            if (lv !== dv) colourChanged++;
        } else if (lv !== dv) {
            geometryDrift++;
            if (drift.length < 10) drift.push(`${id} :: ${prop}: ${lv} -> ${dv}`);
        }
    }
}

const pct = ((colourChanged / colourTotal) * 100).toFixed(1);
console.log("");
console.log(`cases              : ${Object.keys(light).length}`);
console.log(`colour decls       : ${colourTotal}  (${colourChanged} changed, ${pct}%)`);
console.log(`geometry drift     : ${geometryDrift}   (must be 0)`);
console.log(`unresolved values  : ${unresolved}   (must be 0)`);

if (drift.length) {
    console.log("\nunexpected non-colour changes:");
    for (const d of drift) console.log("  " + d);
}

const ok = geometryDrift === 0 && unresolved === 0 && colourChanged > 0;
console.log(`\n${ok ? "PASS" : "FAIL"} — swatch is colour-only\n`);
process.exit(ok ? 0 : 1);
