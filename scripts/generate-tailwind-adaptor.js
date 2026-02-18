#!/usr/bin/env node

/**
 * Generates a Tailwind CSS adaptor that maps Kendo design tokens
 * to Tailwind v4 theme variables.
 *
 * Usage: node scripts/generate-tailwind-adaptor.js
 */

const fs = require('fs');
const path = require('path');
const sass = require('sass');

const outputFile = path.resolve(__dirname, '../kendo-tailwind-adaptor.css');

// Token categories: [scssMapName, kendoPrefix, tailwindPrefix, keyTransform?]
const categories = [
    ['colors', 'color', 'color'],
    ['fontFamilies', 'font-family', 'font', k => k === 'monospace' ? 'mono' : k],
    ['fontWeights', 'font-weight', 'font-weight'],
    ['fontSizes', 'font-size', 'text'],
    ['lineHeights', 'line-height', 'leading'],
    ['letterSpacings', 'letter-spacing', 'tracking'],
    ['borderRadii', 'border-radius', 'radius', k => ({ xxl: '2xl', xxxl: '3xl' })[k] || k],
    ['elevation', 'elevation', 'shadow'],
    ['spacing', 'spacing', 'spacing'],
];

// SCSS to extract all design token maps
const scssCode = `
@use "sass:meta";
@use "packages/core/scss/color-system/index.scss" as *;
@use "packages/core/scss/typography/index.scss" as *;
@use "packages/core/scss/spacing/index.scss" as *;
@use "packages/core/scss/border-radii/index.scss" as *;
@use "packages/core/scss/elevation/index.scss" as *;

@mixin extract($name, $map) {
    @each $k, $v in $map {
        --#{$name}-#{if(meta.type-of($k) == "number", "" + $k, $k)}: #{$v};
    }
}

:root {
    @include extract("colors", $kendo-colors);
    @include extract("fontFamilies", $kendo-font-families);
    @include extract("fontWeights", $kendo-font-weights);
    @include extract("fontSizes", $kendo-font-sizes);
    @include extract("lineHeights", $kendo-line-heights);
    @include extract("letterSpacings", $kendo-letter-spacings);
    @include extract("borderRadii", $kendo-border-radii);
    @include extract("elevation", $kendo-elevation);
    @include extract("spacing", $kendo-spacing);
}`;

// Extract tokens from compiled CSS
function parseTokens(css) {
    const tokens = {};
    const re = /--(\w+)-([\w.-]+):\s*([^;]+);/g;
    let m;
    while ((m = re.exec(css))) {
        (tokens[m[1]] ??= {})[m[2]] = m[3].trim();
    }
    return tokens;
}

// Escape dots for CSS custom property names
const esc = s => s.replace(/\./g, '\\.');

// Generate the Tailwind theme
function generate(tokens) {
    const lines = ['@theme kendo {'];

    for (const [name, kendoPrefix, twPrefix, transform] of categories) {
        const map = tokens[name];
        if (!map) { continue; }

        lines.push(`\n  /* ${name.replace(/([A-Z])/g, ' $1').trim()} */`);
        for (const key of Object.keys(map)) {
            const twKey = transform ? transform(key) : key;
            lines.push(`  --${twPrefix}-${esc(twKey)}: var(--kendo-${kendoPrefix}-${esc(key)});`);
        }
    }

    // Static breakpoints
    lines.push(`\n  /* Breakpoints */`);
    lines.push(`  --breakpoint-sm: 576px;`);
    lines.push(`  --breakpoint-md: 768px;`);
    lines.push(`  --breakpoint-lg: 992px;`);
    lines.push(`  --breakpoint-xl: 1200px;`);
    lines.push(`  --breakpoint-2xl: 1400px;`);

    lines.push('}');
    return lines.join('\n');
}

// Main
try {
    const { css } = sass.compileString(scssCode, {
        loadPaths: [path.resolve(__dirname, '..')],
        logger: sass.Logger.silent
    });

    const output = generate(parseTokens(css));
    fs.writeFileSync(outputFile, output);
    console.log(`Generated ${outputFile}`); // eslint-disable-line no-console
} catch (e) {
    console.error('Error:', e.message); // eslint-disable-line no-console
    process.exit(1);
}
