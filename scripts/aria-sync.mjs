#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * ARIA Sync Tool - Comprehensive accessibility compliance workflow
 *
 * Usage:
 *   npm run aria:sync [component]     # Sync single component
 *   npm run aria:sync --changed       # Sync all changed components (git diff)
 *   npm run aria:sync --all           # Sync all components with specs
 *   npm run aria:sync --check         # Check only, don't modify (for CI)
 *
 * Workflow:
 *   1. Analyze component rendering (TSX -> HTML structure)
 *   2. Check/create/update ARIA spec
 *   3. Validate spec selectors against actual HTML
 *   4. Run ARIA + WCAG tests
 *   5. Report gaps with actionable suggestions
 *   6. Optionally iterate until passing
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync, readdirSync } from 'fs';
import { createInterface } from 'readline';
import { join } from 'path';

// Import shared utilities from generate-aria-spec
import {
    ROOT,
    HTML_SRC,
    ARIA_DIR,
    UTILITY_CLASSES,
    readExistingSpec,
} from './generate-aria-spec.mjs';

const TESTS_DIR = join(ROOT, 'tests');

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
};

function log(msg, color = 'reset') {
    console.log(`${colors[color]}${msg}${colors.reset}`);
}

function header(msg) {
    const line = '-'.repeat(60);
    console.log(`\n${colors.bold}${colors.cyan}${line}${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}${msg}${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}${line}${colors.reset}`);
}

async function prompt(question) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer.toLowerCase().trim());
        });
    });
}

function exec(cmd, options = {}) {
    try {
        return execSync(cmd, {
            encoding: 'utf-8',
            stdio: options.silent ? 'pipe' : 'inherit',
            cwd: ROOT,
            ...options
        });
    } catch (e) {
        if (options.silent) {
            return { error: true, stderr: e.stderr, stdout: e.stdout };
        }
        throw e;
    }
}

// Component Discovery
function getChangedComponents() {
    try {
        const diff = execSync('git diff --name-only HEAD~1', { encoding: 'utf-8', cwd: ROOT });
        const staged = execSync('git diff --cached --name-only', { encoding: 'utf-8', cwd: ROOT });
        const files = [...diff.split('\n'), ...staged.split('\n')].filter(f => f);

        const components = new Set();
        for (const file of files) {
            const match = file.match(/packages\/html\/src\/([^/]+)\//);
            if (match) {
                components.add(match[1]);
            }
            const ariaMatch = file.match(/aria\/([^_]+)_aria\.md$/);
            if (ariaMatch) {
                components.add(ariaMatch[1]);
            }
        }
        return Array.from(components);
    } catch {
        return [];
    }
}

function getComponentsWithSpecs() {
    return readdirSync(ARIA_DIR)
        .filter(f => f.endsWith('_aria.md'))
        .map(f => f.replace('_aria.md', ''));
}

// Spec Analysis - extends readExistingSpec with rule parsing
function parseSpec(component) {
    const content = readExistingSpec(component);
    if (!content) {
        return null;
    }

    const specPath = join(ARIA_DIR, `${component}_aria.md`);
    const rules = [];

    // Parse markdown tables
    const rowRegex = /^\|\s*(\.k-[^\s|]+[^|]*?)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|$/gm;
    let match;

    while ((match = rowRegex.exec(content)) !== null) {
        const [, selector, attribute, usage] = match;
        if (selector && !selector.includes('---')) {
            rules.push({
                selector: selector.trim().replace(/`/g, ''),
                attribute: attribute.trim().replace(/`/g, ''),
                usage: usage.trim()
            });
        }
    }

    return { path: specPath, content, rules };
}

// HTML Analysis
function getTestFiles(component) {
    const testDir = join(TESTS_DIR, component);
    if (!existsSync(testDir)) {
        return [];
    }
    return readdirSync(testDir)
        .filter(f => f.endsWith('.html'))
        .map(f => join(testDir, f));
}

function analyzeHTML(component) {
    const testFiles = getTestFiles(component);
    if (testFiles.length === 0) {
        return { error: 'No test HTML files found. Run: npm run build:tests && npm run test:render-test-pages ' + component };
    }

    const selectors = new Set();
    const elements = { buttons: [], inputs: [], textareas: [], links: [], lists: [] };

    for (const file of testFiles) {
        const html = readFileSync(file, 'utf-8');

        // Extract all k- classes
        const classMatches = html.matchAll(/class="([^"]*k-[^"]*)"/g);
        for (const match of classMatches) {
            const classes = match[1].split(/\s+/).filter(c => c.startsWith('k-'));
            classes.forEach(c => selectors.add(`.${c}`));
        }

        // Detect interactive elements
        if (html.includes('<button') || html.includes('k-button')) {
            elements.buttons.push('found');
        }
        if (html.includes('<input')) {
            elements.inputs.push('found');
        }
        if (html.includes('<textarea')) {
            elements.textareas.push('found');
        }
        if (html.includes('<a ') || html.includes('k-link')) {
            elements.links.push('found');
        }
        if (html.includes('<ul') || html.includes('<ol') || html.includes('role="list"')) {
            elements.lists.push('found');
        }
    }

    return {
        testFiles,
        selectors: Array.from(selectors).sort(),
        elements,
        hasButtons: elements.buttons.length > 0,
        hasInputs: elements.inputs.length > 0,
        hasTextareas: elements.textareas.length > 0,
        hasLinks: elements.links.length > 0,
        hasLists: elements.lists.length > 0,
    };
}

function validateSpecSelectors(spec, htmlAnalysis) {
    if (!spec || !htmlAnalysis.selectors) {
        return { valid: [], invalid: [], missing: [] };
    }

    const htmlSelectors = new Set(htmlAnalysis.selectors);
    const valid = [];
    const invalid = [];

    for (const rule of spec.rules) {
        // Extract base selector (first class)
        const baseSelector = rule.selector.split(/[\s.]/)[1];
        if (baseSelector && htmlSelectors.has(`.${baseSelector}`)) {
            valid.push(rule);
        } else {
            invalid.push(rule);
        }
    }

    // Find selectors in HTML that aren't in spec (using shared UTILITY_CLASSES filter)
    const specSelectors = new Set(spec.rules.map(r => r.selector.split(/[\s.]/)[1]).filter(Boolean));
    const missing = htmlAnalysis.selectors.filter(s => {
        const cls = s.replace('.', '');
        return !specSelectors.has(cls) &&
               !UTILITY_CLASSES.has(cls) &&
               !cls.match(/^k-(d-|flex-|align-|justify-)/);
    });

    return { valid, invalid, missing };
}

// Test Runners
function runTests(component) {
    const results = {
        aria: { passed: false, violations: 0, coverage: 0 },
        wcag: { passed: false, violations: 0, score: 0 },
    };

    // Render test pages first
    try {
        exec(`npm run test:render-test-pages ${component}`, { silent: true });
    } catch {
        // Ignore render errors
    }

    // Run ARIA tests
    try {
        const ariaOutput = exec(`npm run test:aria ${component}`, { silent: true, stdio: 'pipe' });
        if (typeof ariaOutput === 'string') {
            results.aria.passed = ariaOutput.includes('All ARIA attribute validations passed');
            const violMatch = ariaOutput.match(/Total violations: (\d+)/);
            results.aria.violations = violMatch ? parseInt(violMatch[1]) : 0;
            const covMatch = ariaOutput.match(/(\d+(?:\.\d+)?)%/);
            results.aria.coverage = covMatch ? parseFloat(covMatch[1]) : 100;
        }
    } catch (e) {
        results.aria.passed = false;
        if (e.stdout) {
            const violMatch = e.stdout.match(/Total violations: (\d+)/);
            results.aria.violations = violMatch ? parseInt(violMatch[1]) : 0;
        }
    }

    // Run WCAG tests
    try {
        const wcagOutput = exec(`npm run test:wcag ${component}`, { silent: true, stdio: 'pipe' });
        if (typeof wcagOutput === 'string') {
            results.wcag.passed = wcagOutput.includes('All pages meet WCAG');
            const violMatch = wcagOutput.match(/Total Violations: (\d+)/);
            results.wcag.violations = violMatch ? parseInt(violMatch[1]) : 0;
            const scoreMatch = wcagOutput.match(/Average Compliance Score: ([\d.]+)%/);
            results.wcag.score = scoreMatch ? parseFloat(scoreMatch[1]) : 100;
        }
    } catch (e) {
        results.wcag.passed = false;
        if (e.stdout) {
            const violMatch = e.stdout.match(/Total Violations: (\d+)/);
            results.wcag.violations = violMatch ? parseInt(violMatch[1]) : 0;
        }
    }

    return results;
}

// Spec Generation
function generateSpec(component) {
    try {
        exec(`npm run aria:generate ${component} -- --force`, { silent: true });
        return true;
    } catch {
        return false;
    }
}

// Main Sync Workflow
async function syncComponent(component, options = {}) {
    const { checkOnly = false, verbose = false } = options;

    header(`Syncing: ${component}`);

    // Step 1: Check component exists
    const componentDir = join(HTML_SRC, component);
    if (!existsSync(componentDir)) {
        log(`  X Component not found: ${component}`, 'red');
        return { success: false, reason: 'not-found' };
    }
    log(`  OK Component found`, 'green');

    // Step 2: Check/build test HTML
    log(`\n  Checking test HTML...`, 'cyan');
    let htmlAnalysis = analyzeHTML(component);

    if (htmlAnalysis.error) {
        log(`  WARN ${htmlAnalysis.error}`, 'yellow');
        if (!checkOnly) {
            log(`  Building test pages...`, 'dim');
            exec('npm run build:tests', { silent: true });
            exec(`npm run test:render-test-pages ${component}`, { silent: true });
            htmlAnalysis = analyzeHTML(component);
        }
    }

    if (htmlAnalysis.error) {
        log(`  X Cannot analyze HTML: ${htmlAnalysis.error}`, 'red');
        return { success: false, reason: 'no-html' };
    }

    log(`  OK Found ${htmlAnalysis.testFiles.length} test file(s)`, 'green');
    log(`  OK Found ${htmlAnalysis.selectors.length} unique k-* selectors`, 'green');

    // Step 3: Check/create ARIA spec
    log(`\n  Checking ARIA spec...`, 'cyan');
    let spec = parseSpec(component);

    if (!spec) {
        log(`  WARN No ARIA spec found`, 'yellow');
        if (checkOnly) {
            return { success: false, reason: 'no-spec' };
        }

        log(`  Generating initial spec...`, 'dim');
        generateSpec(component);
        spec = parseSpec(component);

        if (spec) {
            log(`  OK Generated spec with ${spec.rules.length} rules`, 'green');
        } else {
            log(`  X Failed to generate spec`, 'red');
            return { success: false, reason: 'gen-failed' };
        }
    } else {
        log(`  OK Spec exists with ${spec.rules.length} rules`, 'green');
    }

    // Step 4: Validate spec selectors against HTML
    log(`\n  Validating spec selectors...`, 'cyan');
    const validation = validateSpecSelectors(spec, htmlAnalysis);

    if (validation.invalid.length > 0) {
        log(`  WARN ${validation.invalid.length} selector(s) not found in HTML:`, 'yellow');
        validation.invalid.slice(0, 5).forEach(r => {
            log(`      ${r.selector}`, 'dim');
        });
    }

    if (validation.missing.length > 0 && verbose) {
        log(`  INFO ${validation.missing.length} HTML selector(s) not in spec`, 'dim');
    }

    // Step 5: Run tests
    log(`\n  Running accessibility tests...`, 'cyan');
    const testResults = runTests(component);

    // ARIA results
    if (testResults.aria.passed) {
        log(`  OK ARIA: PASSED`, 'green');
    } else {
        log(`  X ARIA: ${testResults.aria.violations} violation(s)`, 'red');
    }

    // WCAG results
    if (testResults.wcag.passed) {
        log(`  OK WCAG: PASSED (${testResults.wcag.score}%)`, 'green');
    } else {
        log(`  X WCAG: ${testResults.wcag.violations} violation(s) (${testResults.wcag.score}%)`, 'red');
    }

    // Step 6: Summary
    const allPassed = testResults.aria.passed && testResults.wcag.passed;

    log(`\n  ${'-'.repeat(40)}`, 'dim');
    if (allPassed) {
        log(`  PASS ${component}: FULLY COMPLIANT`, 'green');
    } else {
        log(`  FAIL ${component}: NEEDS WORK`, 'red');
        log(`\n  Suggestions:`, 'cyan');

        if (!testResults.aria.passed) {
            log(`     * Run: npm run test:aria ${component} -- --verbose`, 'dim');
            log(`     * Fix ARIA violations in the component TSX`, 'dim');
        }
        if (!testResults.wcag.passed) {
            log(`     * Run: npm run test:wcag ${component} -- --verbose`, 'dim');
            log(`     * Check for missing labels, roles, or landmarks`, 'dim');
        }
    }

    return {
        success: allPassed,
        component,
        spec: { rules: spec?.rules.length || 0 },
        html: { selectors: htmlAnalysis.selectors.length },
        tests: testResults,
    };
}

// Interactive Mode
async function interactiveSync(component) {
    let iteration = 1;
    let result;

    while (true) {
        if (iteration > 1) {
            header(`Iteration ${iteration}: ${component}`);
        }

        result = await syncComponent(component, { verbose: iteration > 1 });

        if (result.success) {
            log(`\nSUCCESS ${component} is fully compliant!`, 'green');
            break;
        }

        const answer = await prompt(`\n  Retry after fixing? (y/n): `);
        if (answer !== 'y' && answer !== 'yes') {
            break;
        }

        iteration++;
    }

    return result;
}

// CLI
async function main() {
    const args = process.argv.slice(2);

    const checkOnly = args.includes('--check');
    const verbose = args.includes('--verbose') || args.includes('-v');
    const changed = args.includes('--changed');
    const all = args.includes('--all');
    const interactive = args.includes('--interactive') || args.includes('-i');

    const components = args.filter(a => !a.startsWith('-'));

    let targetComponents = [];

    if (changed) {
        targetComponents = getChangedComponents();
        if (targetComponents.length === 0) {
            log('No changed components detected.', 'dim');
            process.exit(0);
        }
        log(`Changed components: ${targetComponents.join(', ')}`, 'cyan');
    } else if (all) {
        targetComponents = getComponentsWithSpecs();
        log(`Processing ${targetComponents.length} components with specs...`, 'cyan');
    } else if (components.length > 0) {
        targetComponents = components;
    } else {
        console.log(`
${colors.bold}ARIA Sync Tool${colors.reset} - Accessibility compliance workflow

${colors.cyan}Usage:${colors.reset}
  npm run aria:sync [component]     Sync single component
  npm run aria:sync --changed       Sync changed components (git diff)
  npm run aria:sync --all           Sync all components with specs
  npm run aria:sync --check         Check only, don't modify (for CI)

${colors.cyan}Options:${colors.reset}
  -i, --interactive    Interactive mode (retry loop)
  -v, --verbose        Verbose output
  --check              Check only, exit non-zero on failures

${colors.cyan}Workflow:${colors.reset}
  1. Analyzes component rendering (TSX -> HTML)
  2. Checks/creates ARIA spec
  3. Validates spec selectors
  4. Runs ARIA + WCAG tests
  5. Reports gaps with suggestions

${colors.cyan}Examples:${colors.reset}
  npm run aria:sync prompt-box
  npm run aria:sync button dialog --verbose
  npm run aria:sync --changed --check
`);
        process.exit(0);
    }

    const results = [];

    for (const component of targetComponents) {
        let result;
        if (interactive && !checkOnly) {
            result = await interactiveSync(component);
        } else {
            result = await syncComponent(component, { checkOnly, verbose });
        }
        results.push(result);
    }

    // Final summary
    if (results.length > 1) {
        header('Summary');

        const passed = results.filter(r => r.success);
        const failed = results.filter(r => !r.success);

        log(`  PASS Passed: ${passed.length}`, 'green');
        if (passed.length > 0) {
            passed.forEach(r => log(`     * ${r.component}`, 'dim'));
        }

        if (failed.length > 0) {
            log(`  FAIL Failed: ${failed.length}`, 'red');
            failed.forEach(r => log(`     * ${r.component} (${r.reason || 'tests failed'})`, 'dim'));
        }
    }

    // Exit code for CI
    const allPassed = results.every(r => r.success);
    if (checkOnly && !allPassed) {
        process.exit(1);
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
