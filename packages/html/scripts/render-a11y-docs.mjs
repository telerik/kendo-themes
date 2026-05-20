#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { globSync } from 'glob';
import nunjucks from 'nunjucks';

const htmlRoot = resolve(dirname(new URL(import.meta.url).pathname), '..');
const miscDir = join(htmlRoot, 'misc');
const srcDir = join(htmlRoot, 'src');
const outDir = join(htmlRoot, 'docs');

const toPascalCase = (str) => str.replace(/(^|-)([a-z])/g, (_, _sep, ch) => ch.toUpperCase());

nunjucks.configure(miscDir, { autoescape: false });

const template = readFileSync(join(miscDir, 'accessibility.md.njk'), 'utf8');
const files = globSync('*/behavior/accessibility.json', { cwd: srcDir });

mkdirSync(outDir, { recursive: true });

for (const file of files.sort()) {
    const component = file.split('/')[0];
    const json = JSON.parse(readFileSync(join(srcDir, file), 'utf8'));

    const ariaSpec = json.ariaSpec || [];
    const kbSpec = json.kbSpec || [];

    if (!ariaSpec.length && !kbSpec.length) {
        continue;
    }

    const md = nunjucks.renderString(template, {
        name: toPascalCase(component),
        ariaSpec,
        kbSpec
    });

    writeFileSync(join(outDir, `${component}.md`), md.trim() + '\n');
}
