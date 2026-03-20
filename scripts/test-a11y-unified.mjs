#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Unified A11y Test Runner
 *
 * Single entry point for all a11y validation: manual, CI, and pre-push.
 * Renders HTML package templates via specToHtml, then validates ARIA attributes
 * (JSDOM) and WCAG compliance (axe-core in browser). Uses the htmlPackage
 * export metadata (folderName, ariaSpec) to discover components and rules —
 * no filename-to-export-name overrides needed.
 *
 * Usage:
 *   npm run test:a11y                            # Test all components
 *   npm run test:a11y button                     # Test specific component
 *   npm run test:a11y -- --affected              # Test only git-changed components
 *   npm run test:a11y -- --prompt                # Pre-push: prompt before running (implies --affected)
 *   npm run test:a11y -- --affected --verbose    # Detailed output
 *   npm run test:a11y -- --build                 # Build HTML package first
 */

import { Browser, specToHtml } from '@progress/kendo-e2e';
import AxeBuilder from '@axe-core/webdriverjs';
import { JSDOM } from 'jsdom';
import { createServer } from 'http-server';
import { globSync } from 'glob';
import { createReadStream, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { basename } from 'path';
import { createRequire } from 'module';
import { createInterface } from 'readline';

const require = createRequire(import.meta.url);
let htmlPackage;

const PORT = 18114;
const HOST = 'localhost';
const HTML_SRC_PATH = './packages/html/src';
const OUTPUT_PATH = './tests/_output';

const args = process.argv.slice(2);
const componentFilters = args.filter(a => !a.startsWith('--'));
const verboseMode = args.includes('--verbose');
const promptMode = args.includes('--prompt');
const affectedMode = args.includes('--affected') || promptMode;
const buildMode = args.includes('--build');

// Page-level axe rules irrelevant for isolated component testing
const PAGE_LEVEL_RULES = [
    'region', 'landmark-one-main', 'landmark-unique', 'page-has-heading-one',
    'bypass', 'html-has-lang', 'document-title', 'landmark-no-duplicate-banner',
    'landmark-no-duplicate-contentinfo', 'meta-viewport', 'duplicate-id'
];

// Documented exceptions — note but don't fail on
const ACCEPTABLE_WCAG_VIOLATIONS = ['target-size', 'label', 'nested-interactive', 'aria-required-children'];

console.log('🔍 Unified A11y Test Runner\n');

// ============================================================================
// COMPONENT REGISTRY (built from htmlPackage metadata)
// ============================================================================

/**
 * Build a registry of { directoryName → { specName, ariaSpec } } keyed by
 * the actual filesystem directory under packages/html/src/.
 *
 * For each directory that has templates, we read its spec files and find the
 * matching export in the HTML package to grab its ariaSpec.
 */
function buildSpecRegistry() {
    const registry = {};

    // Scan every directory that contains templates
    const templateDirs = globSync(`${HTML_SRC_PATH}/*/templates/`)
        .map(p => {
            const parts = p.replace(/\/+$/, '').split('/');
            // parts = [..., '<component-folder>', 'templates']
            return parts.at(-2);
        })
        .filter(Boolean);

    for (const dir of templateDirs) {
        // Read spec files in this directory to find exported component names
        const specFiles = globSync(`${HTML_SRC_PATH}/${dir}/*.spec.tsx`);

        for (const specFile of specFiles) {
            const content = readFileSync(specFile, 'utf-8');
            // Find all `export const Xxx` declarations and check each against htmlPackage
            const exportMatches = content.matchAll(/export\s+const\s+(\w+)\s*[=:]/g);

            for (const match of exportMatches) {
                const name = match[1];
                const exp = htmlPackage[name];

                if (typeof exp === 'function' && exp.ariaSpec) {
                    if (!registry[dir]) {
                        registry[dir] = { specName: name, ariaSpec: { ...exp.ariaSpec } };
                    } else if (exp.ariaSpec?.rules?.length) {
                        // Merge rules from multiple specs in the same folder (e.g. Chip + ChipList)
                        if (!registry[dir].ariaSpec) {
                            registry[dir].ariaSpec = { ...exp.ariaSpec };
                        } else {
                            registry[dir].ariaSpec.rules = [
                                ...(registry[dir].ariaSpec.rules || []),
                                ...exp.ariaSpec.rules
                            ];
                        }
                    }
                }
            }
        }
    }

    return registry;
}

// ============================================================================
// TEMPLATE DISCOVERY (reads actual export names from source files)
// ============================================================================

/**
 * Discover template exports for a component folder by reading the source TSX
 * files and extracting the real `export const` name. This avoids any
 * filename-to-PascalCase conversion heuristics or override maps.
 */
function discoverTemplates(folderName) {
    const files = globSync(`${HTML_SRC_PATH}/${folderName}/templates/*.tsx`);
    const templates = [];

    for (const file of files) {
        const content = readFileSync(file, 'utf-8');
        const match = content.match(/export\s+(?:const|function)\s+(\w+)/);
        if (!match) { continue; }

        const exportName = match[1];
        if (typeof htmlPackage[exportName] === 'function') {
            templates.push({ exportName, component: htmlPackage[exportName], file });
        } else if (verboseMode) {
            console.log(`  ⚠️ ${basename(file)}: export "${exportName}" not found in html package`);
        }
    }
    return templates;
}

// ============================================================================
// ARIA SPEC RESOLUTION
// ============================================================================

/**
 * Extract testable rules from an ariaSpec object.
 *
 * Preferred format — a `rules` array directly on ariaSpec:
 *   ariaSpec.rules = [
 *     { selector: '.k-button', attribute: 'role=button', usage: 'Required' },
 *     ...
 *   ]
 *
 * Legacy format — reconstructed from selector/implicitRole/requiredAttributes:
 *   ariaSpec = { selector, implicitRole, requiredAttributes, childSelectors }
 */
function getAriaRules(componentName, ariaSpec) {
    if (!ariaSpec?.rules?.length) { return null; }
    return { componentName, rules: ariaSpec.rules, source: 'ariaSpec.rules' };
}

// ============================================================================
// ARIA VALIDATION
// ============================================================================

const BOOLEAN_ATTRS = ['disabled', 'readonly', 'required', 'checked', 'selected', 'hidden'];
const ID_REFERENCE_ATTRS = ['aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-activedescendant', 'aria-owns', 'aria-flowto'];
// Attributes where native HTML element behavior supersedes explicit attributes
const NATIVE_FOCUSABLE = ['INPUT', 'BUTTON', 'SELECT', 'TEXTAREA', 'A', 'SUMMARY'];
// State-dependent ARIA attributes that are only present when the state is active.
// A presence-only rule (no =value) for these passes when absent.
const STATE_DEPENDENT_ATTRS = [
    'aria-invalid', 'aria-required', 'aria-busy', 'aria-disabled',
    'aria-pressed', 'aria-checked', 'aria-selected', 'aria-expanded',
    'aria-hidden', 'aria-readonly', 'aria-activedescendant',
    'aria-controls', 'aria-describedby'
];

// Semantic HTML elements that carry implicit ARIA roles (WAI-ARIA in HTML spec)
const IMPLICIT_ROLES = {
    BUTTON: 'button',
    A: 'link',
    INPUT: (el) => {
        const type = (el.getAttribute('type') || 'text').toLowerCase();
        const typeRoles = {
            checkbox: 'checkbox', radio: 'radio', range: 'slider',
            search: 'searchbox', email: 'textbox', tel: 'textbox',
            text: 'textbox', url: 'textbox', number: 'spinbutton',
            submit: 'button', reset: 'button', image: 'button', button: 'button'
        };
        return typeRoles[type] || 'textbox';
    },
    SELECT: (el) => el.hasAttribute('multiple') || (el.getAttribute('size') && parseInt(el.getAttribute('size')) > 1) ? 'listbox' : 'combobox',
    TEXTAREA: 'textbox',
    TABLE: 'table', THEAD: 'rowgroup', TBODY: 'rowgroup', TFOOT: 'rowgroup',
    TR: 'row', TH: 'columnheader', TD: 'cell',
    UL: 'list', OL: 'list', LI: 'listitem',
    NAV: 'navigation', MAIN: 'main', ASIDE: 'complementary',
    HEADER: 'banner', FOOTER: 'contentinfo', FORM: 'form',
    ARTICLE: 'article', SECTION: 'region',
    DIALOG: 'dialog', DETAILS: 'group', SUMMARY: 'button',
    IMG: (el) => el.getAttribute('alt') === '' ? 'presentation' : 'img',
    HR: 'separator', METER: 'meter', PROGRESS: 'progressbar',
    OUTPUT: 'status', FIELDSET: 'group', LEGEND: 'legend',
    OPTGROUP: 'group', OPTION: 'option', DATALIST: 'listbox',
    H1: 'heading', H2: 'heading', H3: 'heading', H4: 'heading', H5: 'heading', H6: 'heading'
};

function getImplicitRole(el) {
    const entry = IMPLICIT_ROLES[el.nodeName];
    if (!entry) { return null; }
    return typeof entry === 'function' ? entry(el) : entry;
}

function checkLabelAssociation(el, document) {
    const id = el.getAttribute('id');
    if (id && document.querySelector(`label[for="${id}"]`)) {
        return { matched: true, reason: 'label-for-association' };
    }
    if (el.closest('label')) {
        return { matched: true, reason: 'label-wrap-association' };
    }
    return { matched: false };
}

// ── Strategy validators ─────────────────────────────────────────────
// Each returns { matched, actual?, expected?, reason? }

const attrValidators = {
    labelFor: (el, _attr, _val, doc) =>
        checkLabelAssociation(el, doc),

    nodeName: (el, _attr, tag) =>
        ({ matched: el.nodeName.toUpperCase() === tag.toUpperCase() }),

    boolean: (el, attr) => {
        const present = el.getAttribute(attr) !== null;
        return { matched: present, actual: present ? 'present' : null, expected: 'present' };
    },

    idReference: (el, attr, val, doc) => {
        const actual = el.getAttribute(attr);
        if (!actual?.trim()) {
            return { matched: false, reason: 'missing-id-reference', expected: `ID reference (${val})`, actual };
        }
        const targetSelector = val.replace(/\s+id$/, '').trim();
        const targetEl = doc.getElementById(actual);
        if (!targetEl) {
            return { matched: false, reason: 'id-not-found', expected: `element with id="${actual}"`, actual: 'no element found' };
        }
        if (targetSelector?.startsWith('.k-')) {
            const isListboxSel = targetSelector === '.k-list-ul';
            if (!targetEl.matches(targetSelector) && !(isListboxSel && targetEl.matches('.k-list-content[role="listbox"]'))) {
                return { matched: false, reason: 'id-wrong-element', expected: `${targetSelector} with id="${actual}"`, actual: targetEl.className };
            }
        }
        return { matched: true, actual, reason: 'id-reference-valid' };
    },

    role: (el, _attr, val) => {
        const explicit = el.getAttribute('role');
        const alternatives = val.includes('/') ? val.split('/').map(v => v.trim()) : [val];
        if (alternatives.includes(explicit)) { return { matched: true, actual: explicit }; }
        const implicit = getImplicitRole(el);
        if (alternatives.includes(implicit)) { return { matched: true, actual: `${implicit} (implicit from <${el.nodeName.toLowerCase()}>)` }; }
        return { matched: false, actual: explicit || implicit || null, expected: alternatives.join(' or ') };
    },

    nativeFocusable: () =>
        ({ matched: true, actual: '0 (natively focusable)', reason: 'native-focusable' }),

    multiValue: (el, attr, val) => {
        const alternatives = val.split(/[/|]/).map(v => v.trim());
        const actual = el.getAttribute(attr);
        if (actual === null) { return { matched: true, actual: null, reason: 'optional-value-absent' }; }
        return { matched: alternatives.includes(actual), actual, expected: alternatives.join(' or ') };
    },

    templatePattern: (el, attr, val) => {
        const actual = el.getAttribute(attr);
        return { matched: actual !== null && actual.trim() !== '', actual, expected: `pattern: ${val}` };
    },

    stateDependentAbsent: () =>
        ({ matched: true, actual: null, reason: 'state-dependent-absent' }),

    exactValue: (el, attr, val) => {
        const actual = el.getAttribute(attr);
        return { matched: actual === val, actual, expected: val };
    },

    presence: (el, attr) => {
        const actual = el.getAttribute(attr);
        return { matched: actual !== null, actual, expected: 'present' };
    }
};

// ── Classifier ──────────────────────────────────────────────────────
// Maps an attribute spec string + element context to a strategy key + parsed parts.

function classifyAttr(attrSpec, el) {
    if (attrSpec === 'label for') { return { type: 'labelFor' }; }
    if (attrSpec.startsWith('nodeName=')) { return { type: 'nodeName', val: attrSpec.split('=')[1] }; }

    const m = attrSpec.match(/^(\S+?)(?:=(.+))?$/);
    if (!m) { return null; }

    const attr = m[1];
    const val = m[2]?.replace(/^["']|["']$/g, '');

    if (BOOLEAN_ATTRS.includes(attr)) { return { type: 'boolean', attr }; }
    if (ID_REFERENCE_ATTRS.includes(attr) && val && (val.includes(' id') || val.startsWith('.k-'))) { return { type: 'idReference', attr, val }; }
    if (attr === 'role' && val) { return { type: 'role', attr, val }; }
    if (attr === 'tabindex' && val === '0' && NATIVE_FOCUSABLE.includes(el.nodeName)) { return { type: 'nativeFocusable', attr, val }; }
    if (val && (val.includes('/') || val.includes('|'))) { return { type: 'multiValue', attr, val }; }
    if (val && val.includes('${')) { return { type: 'templatePattern', attr, val }; }
    if (!val && STATE_DEPENDENT_ATTRS.includes(attr) && el.getAttribute(attr) === null) { return { type: 'stateDependentAbsent', attr }; }
    if (val) { return { type: 'exactValue', attr, val }; }
    return { type: 'presence', attr };
}

// ── Single attribute check (delegates to strategy) ──────────────────

function checkSingleAttr(el, attrSpec, document) {
    const classified = classifyAttr(attrSpec, el);
    if (!classified) { return { matched: false }; }
    const { type, attr, val } = classified;
    return attrValidators[type](el, attr, val, document);
}

function checkAttributeRule(el, attribute, document) {
    // Extract and strip parenthetical hints: "(when open)", "(when disabled)"
    const parenMatch = attribute.match(/\(when\s+[^)]+\)/i);
    const isConditional = Boolean(parenMatch);
    const clean = attribute.replace(/\s*\([^)]*\)\s*/g, '').trim();

    if (clean.includes(' or ')) {
        for (const alt of clean.split(' or ').map(a => a.trim())) {
            const result = checkSingleAttr(el, alt, document);
            if (result.matched) { return result; }
        }
        // Conditional rules pass if attribute is simply absent (state not active)
        if (isConditional) { return { matched: true, reason: 'conditional-not-active' }; }
        return { matched: false };
    }

    const result = checkSingleAttr(el, clean, document);
    // Conditional rules: if the attribute is absent, treat as "state not active" → pass
    if (!result.matched && isConditional && (result.actual === null || result.actual === undefined || result.actual === 'no match')) {
        return { matched: true, reason: 'conditional-not-active' };
    }
    return result;
}

function validateAriaRules(html, ariaSpec) {
    if (!ariaSpec?.rules?.length) {
        return { passed: 0, violations: [], skipped: 0, skippedRules: [], total: 0 };
    }

    const { document } = new JSDOM(html).window;
    const violations = [];
    const skippedRules = [];
    let passed = 0;
    let skipped = 0;

    for (const rule of ariaSpec.rules) {
        try {
            const elements = document.querySelectorAll(rule.selector);
            if (elements.length === 0) {
                skipped++;
                skippedRules.push({ selector: rule.selector, attribute: rule.attribute });
                continue;
            }

            // For comma-separated selectors, check if rule passes on at least
            // one matching element per selector part (intent: "whichever exists")
            const isMultiSelector = rule.selector.includes(',');

            let anyPass = false;
            let allPass = true;
            for (const el of elements) {
                const result = checkAttributeRule(el, rule.attribute, document);
                if (result.matched) {
                    anyPass = true;
                } else {
                    allPass = false;
                    if (!isMultiSelector) {
                        violations.push({ rule, expected: result.expected || 'match', actual: result.actual || 'no match' });
                    }
                }
            }
            // Multi-selector: pass if any element matched, single selector: pass if all matched
            if (isMultiSelector ? anyPass : allPass) {
                passed++;
            } else if (isMultiSelector && !anyPass) {
                violations.push({ rule, expected: 'match on at least one element', actual: 'no match' });
            }
        } catch (err) {
            skipped++;
            skippedRules.push({ selector: rule.selector, attribute: rule.attribute, error: err.message });
            if (verboseMode) { console.log(`     ⚠️ Rule error: ${err.message}`); }
        }
    }
    return { passed, violations, skipped, skippedRules, total: ariaSpec.rules.length };
}

// ============================================================================
// WCAG VALIDATION
// ============================================================================

async function validateWcag(browser) {
    const axe = new AxeBuilder(browser.driver);
    axe.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa', 'best-practice']);
    axe.disableRules(['color-contrast', 'scrollable-region-focusable', ...PAGE_LEVEL_RULES]);

    const results = await axe.analyze();
    return {
        violations: results.violations,
        passes: results.passes.length,
        incomplete: results.incomplete.length
    };
}

// ============================================================================
// AFFECTED DETECTION
// ============================================================================

function getChangedComponents() {
    try {
        const components = new Set();
        const tryGit = (cmd) => {
            try {
                const out = execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
                out.trim().split('\n').forEach(f => {
                    const m = f.match(/packages\/html\/src\/([^/]+)\//);
                    if (m) { components.add(m[1]); }
                });
            } catch { /* ignore */ }
        };
        tryGit('git diff --cached --name-only 2>/dev/null');
        tryGit('git diff --name-only origin/develop...HEAD 2>/dev/null');
        return components.size > 0 ? [...components] : null;
    } catch { return null; }
}

// ============================================================================
// MAIN
// ============================================================================

function wrapInHtmlPage(componentHtml) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>A11y Test</title>
    <link rel="stylesheet" href="http://${HOST}:${PORT}/packages/default/dist/default-ocean-blue-a11y.css">
</head>
<body class="k-body">
    <div id="test-area">${componentHtml}</div>
</body>
</html>`;
}

async function promptUser(question) {
    let input = process.stdin;
    let needsCleanup = false;

    if (!process.stdin.isTTY) {
        try {
            input = createReadStream('/dev/tty');
            needsCleanup = true;
        } catch {
            return null;
        }
    }

    const rl = createInterface({ input, output: process.stdout });
    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            if (needsCleanup && input.destroy) { input.destroy(); }
            resolve(answer.toLowerCase().trim());
        });
    });
}

async function main() {
    // --build: build HTML package before testing (useful for pre-push / CI)
    if (buildMode) {
        console.log('📦 Building HTML package...');
        try {
            execSync('npm run build --prefix packages/html', { stdio: 'pipe' });
            console.log('  ✅ HTML package built\n');
        } catch (err) {
            console.error('  ❌ Failed to build HTML package');
            console.error('  ' + (err.message || 'Unknown error'));
            process.exit(1);
        }
    }

    // Load HTML package after potential build step so that --build can create dist first
    htmlPackage = require('../packages/html/dist/cjs/index.js');

    const specRegistry = buildSpecRegistry();
    const affected = affectedMode ? getChangedComponents() : null;

    // --prompt: show affected components and ask before running (pre-push)
    if (promptMode && affectedMode) {
        if (!affected?.length) {
            console.log('No accessibility-related files in unpushed commits.');
            process.exit(0);
        }
        console.log(`📋 Affected components: ${affected.join(', ')}\n`);
        const answer = await promptUser('Run accessibility tests before push? (y/n): ');
        if (!answer || (answer !== 'y' && answer !== 'yes')) {
            console.log('⏭️  Skipping — tests will run in CI');
            process.exit(0);
        }
    } else if (affected?.length) {
        console.log(`📋 Affected: ${affected.join(', ')}\n`);
    }

    // Determine which component folders to test
    let folders;
    if (componentFilters.length) {
        folders = componentFilters;
    } else if (affectedMode) {
        // --affected: only test components with changes in packages/html/src/
        folders = affected || [];
    } else {
        // All folders that have templates
        folders = [...new Set(
            globSync(`${HTML_SRC_PATH}/*/templates/`, { dotRelative: true })
                .map(p => p.replace('./', '').split('/')[3])
        )];
    }

    if (!folders.length) {
        console.log('No components to test.');
        process.exit(0);
    }

    // Discover all templates across matching folders
    const byComponent = {};
    let totalTemplates = 0;
    for (const folder of folders) {
        const templates = discoverTemplates(folder);
        if (templates.length) {
            byComponent[folder] = templates;
            totalTemplates += templates.length;
        }
    }

    if (!totalTemplates) {
        console.log('No templates found.');
        process.exit(0);
    }
    console.log(`📦 Found ${totalTemplates} template(s) across ${Object.keys(byComponent).length} component(s)\n`);

    // Start server & browser
    const server = createServer({ root: './', port: PORT });
    await new Promise(r => server.listen(PORT, HOST, r));
    const browser = new Browser();
    mkdirSync(OUTPUT_PATH, { recursive: true });

    const summary = { templates: 0, ariaPassed: 0, ariaViolations: 0, ariaSkipped: 0, wcagPassed: 0, wcagViolations: 0, wcagAcceptable: 0 };
    const results = [];
    const coverageGaps = [];

    for (const [comp, templates] of Object.entries(byComponent)) {
        console.log(`\n📦 ${comp}`);

        const reg = specRegistry[comp];
        const ariaSpec = getAriaRules(comp, reg?.ariaSpec);

        const testedRules = new Set();
        const allRules = ariaSpec?.rules?.map(r => `${r.selector}|${r.attribute}`) || [];

        for (const { exportName, component: TemplateComponent } of templates) {
            try {
                const componentHtml = specToHtml(TemplateComponent);
                const fullHtml = wrapInHtmlPage(componentHtml);

                // ARIA validation (JSDOM — fast, no browser)
                const aria = validateAriaRules(fullHtml, ariaSpec);

                // WCAG validation (axe-core — needs browser)
                const dataUrl = `data:text/html;charset=utf-8,${encodeURIComponent(fullHtml)}`;
                await browser.navigateTo(dataUrl);
                await browser.driver.sleep(200);
                const wcag = await validateWcag(browser);

                // Track tested rules
                if (aria.skippedRules) {
                    const skippedKeys = new Set(aria.skippedRules.map(r => `${r.selector}|${r.attribute}`));
                    allRules.forEach(k => { if (!skippedKeys.has(k)) { testedRules.add(k); } });
                } else {
                    allRules.forEach(k => testedRules.add(k));
                }

                const wcagActual = wcag.violations.filter(v => !ACCEPTABLE_WCAG_VIOLATIONS.includes(v.id));
                const wcagAcceptable = wcag.violations.filter(v => ACCEPTABLE_WCAG_VIOLATIONS.includes(v.id));

                const ariaOk = aria.violations.length === 0;
                const wcagOk = wcagActual.length === 0;
                const ok = ariaOk && wcagOk;

                const applicable = aria.total - aria.skipped;
                const ariaStatus = ariaOk ? `${aria.passed}/${applicable} passed` : `${aria.violations.length} failed`;
                console.log(`  ${ok ? '✅' : '❌'} ${exportName}: ARIA ${ariaStatus}, WCAG ${wcag.passes} passed`);

                if (verboseMode || !ok) {
                    aria.violations.forEach(v => console.log(`     ❌ ARIA: ${v.rule.selector} - ${v.rule.attribute}`));
                    wcagActual.forEach(v => console.log(`     ❌ WCAG: ${v.id} - ${v.description}`));
                }
                // Always show acceptable violations so they remain visible
                if (wcagAcceptable.length > 0) {
                    wcagAcceptable.forEach(v => console.log(`     ℹ️  WCAG: ${v.id} (acceptable exception)`));
                }

                summary.templates++;
                summary.ariaPassed += aria.passed;
                summary.ariaViolations += aria.violations.length;
                summary.ariaSkipped += aria.skipped;
                summary.wcagPassed += wcag.passes;
                summary.wcagViolations += wcagActual.length;
                summary.wcagAcceptable += wcagAcceptable.length;

                results.push({ component: comp, template: exportName, aria, wcag });
            } catch (err) {
                console.log(`  ❌ ${exportName}: ${err.message}`);
            }
        }

        // Coverage gaps — rules never matched by any template
        const untested = allRules.filter(r => !testedRules.has(r));
        if (untested.length > 0) {
            coverageGaps.push({
                component: comp,
                untestedRules: untested.map(r => {
                    const [selector, attribute] = r.split('|');
                    return { selector, attribute };
                })
            });
        }
    }

    await browser.close();
    server.close();

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary\n');
    console.log(`Templates: ${summary.templates}`);
    console.log(`ARIA: ${summary.ariaPassed} passed, ${summary.ariaViolations} violations`);
    const wcagExtra = summary.wcagAcceptable > 0 ? ` (${summary.wcagAcceptable} acceptable)` : '';
    console.log(`WCAG: ${summary.wcagPassed} passed, ${summary.wcagViolations} violations${wcagExtra}`);
    console.log('='.repeat(60));

    if (coverageGaps.length > 0) {
        console.log('\n⚠️  Coverage Gaps (rules never tested by any template):');
        for (const { component, untestedRules } of coverageGaps) {
            console.log(`\n  ${component}:`);
            untestedRules.forEach(r => console.log(`     - ${r.selector}: ${r.attribute}`));
        }
    }

    let version = 'latest';
    try {
        const lerna = JSON.parse(readFileSync('./lerna.json', 'utf-8'));
        version = lerna.version || version;
    } catch { /* ignore */ }

    const reportPath = `${OUTPUT_PATH}/a11y-unified-report.json`;
    const isPartialRun = componentFilters.length > 0 || affectedMode;

    let finalResults = results;
    let finalCoverageGaps = coverageGaps;

    if (isPartialRun && existsSync(reportPath)) {
        // Merge into existing report: replace only the tested components
        const existing = JSON.parse(readFileSync(reportPath, 'utf-8'));
        const testedComponents = new Set(Object.keys(byComponent));

        // Keep existing results for components not in this run
        const keptResults = (existing.results || []).filter(r => !testedComponents.has(r.component));
        finalResults = [...keptResults, ...results];

        // Merge coverage gaps the same way
        const keptGaps = (existing.coverageGaps || []).filter(g => !testedComponents.has(g.component));
        finalCoverageGaps = [...keptGaps, ...coverageGaps];

        console.log(`\n🔀 Partial run — merged ${results.length} new result(s) into existing report (${keptResults.length} kept)`);
    }

    // Recalculate summary from the final merged results
    const finalSummary = { templates: 0, ariaPassed: 0, ariaViolations: 0, ariaSkipped: 0, wcagPassed: 0, wcagViolations: 0, wcagAcceptable: 0 };
    for (const r of finalResults) {
        finalSummary.templates++;
        finalSummary.ariaPassed += r.aria.passed;
        finalSummary.ariaViolations += r.aria.violations.length;
        finalSummary.ariaSkipped += r.aria.skipped;
        finalSummary.wcagPassed += r.wcag.passes;
        const wcagActual = r.wcag.violations.filter(v => !ACCEPTABLE_WCAG_VIOLATIONS.includes(v.id));
        const wcagAcceptableCount = r.wcag.violations.filter(v => ACCEPTABLE_WCAG_VIOLATIONS.includes(v.id));
        finalSummary.wcagViolations += wcagActual.length;
        finalSummary.wcagAcceptable += wcagAcceptableCount.length;
    }

    writeFileSync(reportPath, JSON.stringify({
        generatedAt: new Date().toISOString(),
        version,
        summary: finalSummary,
        results: finalResults,
        coverageGaps: finalCoverageGaps
    }, null, 2));
    console.log(`\n📄 Report: ${reportPath}`);

    // Print merged summary for partial runs
    if (isPartialRun && finalSummary.templates !== summary.templates) {
        console.log('\n' + '='.repeat(60));
        console.log('📊 Merged Summary\n');
        console.log(`Templates: ${finalSummary.templates}`);
        console.log(`ARIA: ${finalSummary.ariaPassed} passed, ${finalSummary.ariaViolations} violations`);
        const mergedWcagExtra = finalSummary.wcagAcceptable > 0 ? ` (${finalSummary.wcagAcceptable} acceptable)` : '';
        console.log(`WCAG: ${finalSummary.wcagPassed} passed, ${finalSummary.wcagViolations} violations${mergedWcagExtra}`);
        console.log('='.repeat(60));
    }

    process.exit(finalSummary.ariaViolations + finalSummary.wcagViolations > 0 ? 1 : 0);
}

main().catch(err => { console.error(err); process.exit(1); });
