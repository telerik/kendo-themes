#!/usr/bin/env node
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsPath = path.join(__dirname, '..', 'components.json');

const queryNames = process.argv.slice(2);

if (queryNames.length === 0) {
    process.stderr.write('Usage: node scripts/get_components.mjs <ComponentName> [ComponentName...]\n');
    process.exit(1);
}

const data = JSON.parse(readFileSync(componentsPath, 'utf8'));
const components = data.components || {};
const results = {};
const missing = [];

for (const queryName of queryNames) {
    if (components[queryName]) {
        results[queryName] = components[queryName];
    } else {
        missing.push(queryName);
    }
}

process.stdout.write(`${JSON.stringify({
    _component: data._component,
    _option: data._option,
    components: results,
    ['theme_options']: data.theme_options,
    missing
}, null, 2)}\n`);

if (missing.length > 0) {
    process.exitCode = 2;
}
