#!/usr/bin/env node

/**
 * Migrate SassDoc annotations from theme packages to core.
 *
 * Usage:
 *   node scripts/migrate-sassdoc.js                  # all components
 *   node scripts/migrate-sassdoc.js button badge      # specific components
 *   node scripts/migrate-sassdoc.js --dry-run          # preview changes
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CORE_DIR = path.join(ROOT, 'packages/core/scss/components');
const THEMES = ['meridian', 'fluent', 'bootstrap', 'classic', 'default', 'material'];

const dryRun = process.argv.includes('--dry-run');
const requestedComponents = process.argv.slice(2).filter(a => !a.startsWith('--'));

// ──────────────────────────────────────────────
// Parsing helpers
// ──────────────────────────────────────────────

/**
 * Parse a SCSS _variables.scss file and extract:
 * - variable declarations ($kendo-*) with their preceding /// doc blocks
 * - everything else (comments, @use, @forward, blank lines)
 *
 * Returns an array of "chunks", each being either:
 *   { type: 'variable', name: string, doc: string[], lines: string[] }
 *   { type: 'other', lines: string[] }
 */
function parseScssFile(content) {
    const rawLines = content.split('\n');
    const chunks = [];
    let i = 0;

    while (i < rawLines.length) {
        // Collect any /// doc block
        const docLines = [];
        while (i < rawLines.length && rawLines[i].trimStart().startsWith('///')) {
            docLines.push(rawLines[i]);
            i++;
        }

        // Check if the next non-blank line is a variable declaration
        if (i < rawLines.length && /^\$kendo-/.test(rawLines[i].trimStart())) {
            // Collect the full variable declaration (may span multiple lines for maps)
            const varLines = [];
            varLines.push(rawLines[i]);
            i++;

            // Multi-line variable: keep going until we find !default; or a line ending with ;
            if (!varLines[varLines.length - 1].includes('!default;')) {
                while (i < rawLines.length) {
                    varLines.push(rawLines[i]);
                    i++;
                    if (varLines[varLines.length - 1].includes('!default;')) {
                        break;
                    }
                }
            }

            // Extract variable name
            const nameMatch = varLines[0].match(/^\$([a-zA-Z0-9_-]+)/);
            const varName = nameMatch ? `$${nameMatch[1]}` : null;

            chunks.push({
                type: 'variable',
                name: varName,
                doc: docLines,
                lines: varLines
            });
        } else if (docLines.length > 0) {
            // Doc lines not followed by a variable — treat as 'other'
            chunks.push({ type: 'other', lines: docLines });
            // Also consume the current non-variable line
            if (i < rawLines.length) {
                // But only if it wasn't already consumed
            }
        } else if (i < rawLines.length) {
            // Regular line (comment, @use, @forward, blank, etc.)
            const otherLines = [rawLines[i]];
            i++;
            // Batch consecutive non-doc, non-variable lines
            while (i < rawLines.length &&
                   !rawLines[i].trimStart().startsWith('///') &&
                   !/^\$kendo-/.test(rawLines[i].trimStart())) {
                otherLines.push(rawLines[i]);
                i++;
            }
            chunks.push({ type: 'other', lines: otherLines });
        }
    }

    return chunks;
}

/**
 * Build a map of variable name → doc block from a parsed file.
 */
function buildDocMap(chunks) {
    const map = new Map();
    for (const chunk of chunks) {
        if (chunk.type === 'variable' && chunk.doc.length > 0 && chunk.name) {
            map.set(chunk.name, chunk.doc);
        }
    }
    return map;
}

/**
 * Build a set of variable names from a parsed file.
 */
function buildVarSet(chunks) {
    const set = new Set();
    for (const chunk of chunks) {
        if (chunk.type === 'variable' && chunk.name) {
            set.add(chunk.name);
        }
    }
    return set;
}

/**
 * Reconstruct file content from chunks.
 */
function reconstructFile(chunks) {
    const allLines = [];
    for (const chunk of chunks) {
        if (chunk.type === 'variable') {
            allLines.push(...chunk.doc);
            allLines.push(...chunk.lines);
        } else {
            allLines.push(...chunk.lines);
        }
    }
    return allLines.join('\n');
}

// ──────────────────────────────────────────────
// Core migration logic
// ──────────────────────────────────────────────

function getThemeVarFile(theme, component) {
    return path.join(ROOT, 'packages', theme, 'scss', component, '_variables.scss');
}

function getCoreVarFile(component) {
    return path.join(CORE_DIR, component, '_variables.scss');
}

function migrateComponent(component) {
    const coreFile = getCoreVarFile(component);
    if (!fs.existsSync(coreFile)) {
        console.log(`  ⏭  Skipping ${component}: no core _variables.scss`);
        return { component, skipped: true };
    }

    const coreContent = fs.readFileSync(coreFile, 'utf8');
    const coreChunks = parseScssFile(coreContent);
    const coreVarNames = buildVarSet(coreChunks);

    // Collect doc maps from all themes (priority: meridian first)
    const themeDocMaps = [];
    const themeChunksMap = new Map();
    const themeVarSets = new Map();

    for (const theme of THEMES) {
        const themeFile = getThemeVarFile(theme, component);
        if (!fs.existsSync(themeFile)) continue;

        const themeContent = fs.readFileSync(themeFile, 'utf8');
        const chunks = parseScssFile(themeContent);
        const docMap = buildDocMap(chunks);
        const varSet = buildVarSet(chunks);

        themeDocMaps.push({ theme, docMap });
        themeChunksMap.set(theme, { chunks, filePath: themeFile, originalContent: themeContent });
        themeVarSets.set(theme, varSet);
    }

    // Step 1: Find docs for each core variable from themes
    let docsAdded = 0;
    for (const chunk of coreChunks) {
        if (chunk.type !== 'variable' || !chunk.name) continue;
        if (chunk.doc.length > 0) continue; // already documented

        // Find doc from themes (meridian first)
        for (const { theme, docMap } of themeDocMaps) {
            if (docMap.has(chunk.name)) {
                chunk.doc = [...docMap.get(chunk.name)];
                docsAdded++;
                break;
            }
        }
    }

    // Step 2: Check for theme-only variables that appear in 2+ themes
    const themeOnlyVarCounts = new Map(); // varName → count
    const themeOnlyVarDocs = new Map(); // varName → doc block

    for (const [theme, varSet] of themeVarSets) {
        for (const varName of varSet) {
            if (!coreVarNames.has(varName)) {
                themeOnlyVarCounts.set(varName, (themeOnlyVarCounts.get(varName) || 0) + 1);
                if (!themeOnlyVarDocs.has(varName)) {
                    // Try to get doc from this theme
                    for (const { theme: t, docMap } of themeDocMaps) {
                        if (docMap.has(varName)) {
                            themeOnlyVarDocs.set(varName, docMap.get(varName));
                            break;
                        }
                    }
                }
            }
        }
    }

    // Note: we do NOT add theme-only variables to core automatically.
    // This would change compilation behavior. We only migrate docs.
    // Log any that appear in 2+ themes for manual review.
    const sharedThemeOnly = [];
    for (const [varName, count] of themeOnlyVarCounts) {
        if (count >= 2) {
            sharedThemeOnly.push(varName);
        }
    }

    // Write updated core file
    const newCoreContent = reconstructFile(coreChunks);
    if (newCoreContent !== coreContent) {
        if (!dryRun) {
            fs.writeFileSync(coreFile, newCoreContent, 'utf8');
        }
    }

    // Step 3: Strip docs from theme files for shared variables
    let themeDocsStripped = 0;
    for (const [theme, { chunks, filePath, originalContent }] of themeChunksMap) {
        for (const chunk of chunks) {
            if (chunk.type !== 'variable' || !chunk.name) continue;
            if (chunk.doc.length === 0) continue;

            // Only strip if this variable exists in core
            if (coreVarNames.has(chunk.name)) {
                themeDocsStripped += chunk.doc.length;
                chunk.doc = [];
            }
        }

        const newContent = reconstructFile(chunks);
        if (newContent !== originalContent) {
            if (!dryRun) {
                fs.writeFileSync(filePath, newContent, 'utf8');
            }
        }
    }

    return {
        component,
        skipped: false,
        docsAdded,
        themeDocsStripped,
        sharedThemeOnly: sharedThemeOnly.length > 0 ? sharedThemeOnly : undefined
    };
}

// ──────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────

function main() {
    let components;
    if (requestedComponents.length > 0) {
        components = requestedComponents;
    } else {
        components = fs.readdirSync(CORE_DIR)
            .filter(d => fs.statSync(path.join(CORE_DIR, d)).isDirectory())
            .sort();
    }

    console.log(`\n🔄 Migrating SassDoc annotations for ${components.length} components${dryRun ? ' (DRY RUN)' : ''}...\n`);

    const results = [];
    let totalDocsAdded = 0;
    let totalDocsStripped = 0;

    for (const comp of components) {
        const result = migrateComponent(comp);
        results.push(result);
        if (!result.skipped) {
            totalDocsAdded += result.docsAdded;
            totalDocsStripped += result.themeDocsStripped;
            const status = result.docsAdded > 0 ? '✅' : '⬜';
            process.stdout.write(`  ${status} ${comp}: +${result.docsAdded} core docs, -${result.themeDocsStripped} theme doc lines`);
            if (result.sharedThemeOnly) {
                process.stdout.write(` ⚠️ ${result.sharedThemeOnly.length} shared theme-only vars`);
            }
            process.stdout.write('\n');
        }
    }

    console.log(`\n📊 Summary:`);
    console.log(`  Components processed: ${results.filter(r => !r.skipped).length}`);
    console.log(`  Docs added to core: ${totalDocsAdded}`);
    console.log(`  Doc lines stripped from themes: ${totalDocsStripped}`);
    console.log(`  Skipped: ${results.filter(r => r.skipped).length}`);

    // Report shared theme-only variables
    const withShared = results.filter(r => r.sharedThemeOnly);
    if (withShared.length > 0) {
        console.log(`\n⚠️  Components with theme-only variables in 2+ themes (not added to core):`);
        for (const r of withShared) {
            console.log(`  ${r.component}: ${r.sharedThemeOnly.join(', ')}`);
        }
    }
}

main();
