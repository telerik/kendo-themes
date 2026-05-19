#!/usr/bin/env node
/* eslint-disable no-console */
import { writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');

const HTML_DIST_ENTRY = path.join(REPO_ROOT, 'packages/html/dist/cjs/index.js');
const OUTPUT_PATH = path.join(REPO_ROOT, 'skills/kendo-themes/components.json');

const require = createRequire(import.meta.url);

if (!existsSync(HTML_DIST_ENTRY)) {
    console.error('Missing packages/html build output. Run `npm run build --prefix packages/html` first.');
    process.exit(1);
}

const htmlPackage = require(HTML_DIST_ENTRY);

function sortStrings(values) {
    return Array.from(new Set(values)).sort((left, right) => left.localeCompare(right));
}

function sortObject(value) {
    if (Array.isArray(value)) {
        return value.map(sortObject);
    }

    if (value && typeof value === 'object') {
        return Object.keys(value)
            .sort((left, right) => left.localeCompare(right))
            .reduce((acc, key) => {
                acc[key] = sortObject(value[key]);
                return acc;
            }, {});
    }

    return value;
}

function normalizeValues(values) {
    if (!Array.isArray(values)) {
        return [];
    }

    return sortStrings(
        values.filter((value) => value !== undefined && value !== null)
    );
}

function normalizeOptions(options) {
    return Object.entries(options || {})
        .sort(([left], [right]) => left.localeCompare(right))
        .reduce((acc, [optionName, optionValues]) => {
            acc[optionName] = normalizeValues(optionValues);
            return acc;
        }, {});
}

function isComponentExport(candidate) {
    return typeof candidate === 'function' &&
        typeof candidate.className === 'string' &&
        Boolean(candidate.moduleName) &&
        Boolean(candidate.folderName);
}

function toComponentTuple(component) {
    const tuple = [ component.className ];

    if (component.states.length === 0 && component.optionEntries.length === 0) {
        return tuple;
    }

    tuple.push(component.states);

    if (component.optionEntries.length > 0) {
        tuple.push(component.optionEntries);
    }

    return tuple;
}

function serializeOneLine(value) {
    if (Array.isArray(value)) {
        return `[${value.map((item) => serializeOneLine(item)).join(',')}]`;
    }

    if (value && typeof value === 'object') {
        return `{${Object.entries(value).map(([key, item]) => `${JSON.stringify(key)}:${serializeOneLine(item)}`).join(',')}}`;
    }

    return JSON.stringify(value);
}

function formatCatalog(catalog) {
    const componentEntries = Object.entries(catalog.components)
        .map(([name, tuple]) => `    ${JSON.stringify(name)}: ${serializeOneLine(tuple)}`);

    const themeOptionEntries = Object.entries(catalog.theme_options)
        .map(([name, values]) => `    ${JSON.stringify(name)}: ${serializeOneLine(values)}`);

    return [
        '{',
        `  "_component": ${serializeOneLine(catalog._component)},`,
        `  "_option": ${serializeOneLine(catalog._option)},`,
        '  "components": {',
        `${componentEntries.join(',\n')}`,
        '  },',
        '  "theme_options": {',
        `${themeOptionEntries.join(',\n')}`,
        '  }',
        '}',
        ''
    ].join('\n');
}

const components = Object.entries(htmlPackage)
    .filter(([, candidate]) => isComponentExport(candidate))
    .map(([exportName, component]) => {
        const states = normalizeValues(component.states);
        const options = normalizeOptions(component.options);
        const optionEntries = Object.entries(options).map(([optionName, optionValues]) => [
            optionName,
            optionValues
        ]);

        return {
            exportName,
            className: component.className,
            states,
            optionEntries
        };
    })
    .sort((left, right) => left.exportName.localeCompare(right.exportName));

const themeOptions = sortObject(
    Object.entries(htmlPackage)
        .filter(([, candidate]) => isComponentExport(candidate))
        .reduce((acc, [, component]) => {
            const options = normalizeOptions(component.options);

            for (const [optionName, optionValues] of Object.entries(options)) {
                if (!acc[optionName]) {
                    acc[optionName] = [];
                }

                acc[optionName].push(...optionValues);
            }

            return acc;
        }, {})
);

for (const optionName of Object.keys(themeOptions)) {
    themeOptions[optionName] = sortStrings(themeOptions[optionName]);
}

const catalog = {
    _component: ['className', 'states', 'options'],
    _option: ['name', 'values'],
    components: components.reduce((acc, component) => {
        acc[component.exportName] = toComponentTuple(component);
        return acc;
    }, {}),
    ['theme_options']: themeOptions
};

writeFileSync(
    OUTPUT_PATH,
    formatCatalog(sortObject(catalog)),
    'utf8'
);

console.log(`Generated ${path.relative(REPO_ROOT, OUTPUT_PATH)} with ${components.length} component entries.`);
