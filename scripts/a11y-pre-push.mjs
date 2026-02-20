#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Pre-push A11y Check Script
 *
 * Detects accessibility-related files in unpushed commits and runs
 * ARIA + WCAG validation for affected components.
 *
 * Usage:
 *   --prompt        Prompt before running tests (default for pre-push hook)
 *   --check-only    Run tests and block on failure (no prompt)
 *   (no args)       Interactive mode for manual runs
 */

import { execSync } from 'child_process';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
let htmlPackage;
try {
    htmlPackage = require('../packages/html/dist/cjs/index.js');
} catch {
    htmlPackage = null;
}

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    dim: '\x1b[2m'
};

function log(msg, color = 'reset') {
    console.log(`${colors[color]}${msg}${colors.reset}`);
}

function getChangedFiles() {
    try {
        // Check files changed in unpushed commits (HEAD vs origin)
        const output = execSync('git diff --name-only origin/$(git rev-parse --abbrev-ref HEAD)..HEAD 2>/dev/null || git diff --name-only HEAD~1..HEAD', { encoding: 'utf-8' });
        return output.trim().split('\n').filter(f => f);
    } catch {
        return [];
    }
}

function extractComponents(files) {
    const components = new Set();

    // Skip shared/utility folders that are not standalone components
    const skipComponents = new Set(['input', 'spinbutton']);

    for (const file of files) {
        const tsxMatch = file.match(/packages\/html\/src\/([^/]+)\//);
        if (tsxMatch) {
            const componentName = tsxMatch[1];
            if (!skipComponents.has(componentName)) {
                components.add(componentName);
            }
        }
    }
    return Array.from(components);
}

function hasAriaSpec(component) {
    if (!htmlPackage) { return false; }
    // Check if any exported spec component from this folder has ariaSpec.rules
    for (const [, exp] of Object.entries(htmlPackage)) {
        if (typeof exp === 'function' && exp.folderName === component && exp.ariaSpec?.rules) {
            return true;
        }
    }
    return false;
}

async function prompt(question) {
    let input = process.stdin;
    let needsCleanup = false;

    // Use /dev/tty if stdin is not a TTY (like in git hooks)
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
            if (needsCleanup && input.destroy) {
                input.destroy();
            }
            resolve(answer.toLowerCase().trim());
        });
    });
}

function testComponent(component) {
    log(`\n  Testing ${component}...`, 'cyan');

    try {
        execSync(`node ./scripts/test-a11y-unified.mjs ${component}`, { stdio: 'pipe' });
        log('    ✅ A11y validation passed', 'green');
        return { ariaPassed: true, wcagPassed: true };
    } catch {
        log('    ❌ A11y validation failed', 'red');
        return { ariaPassed: false, wcagPassed: false };
    }
}

function showInfo(a11yFiles, components, missingSpecs) {
    log('\n🔍 Accessibility-related files changed:', 'cyan');
    a11yFiles.slice(0, 5).forEach(f => log(`   ${f}`));
    if (a11yFiles.length > 5) {
        log(`   ... and ${a11yFiles.length - 5} more`);
    }

    log(`\nComponents affected: ${components.join(', ')}`, 'cyan');

    if (missingSpecs.length > 0) {
        log(`\n⚠️  Missing ariaSpec.rules for: ${missingSpecs.join(', ')}`, 'yellow');
        log('   Add ariaSpec.rules to the component spec in packages/html/src/[component]/[component].spec.tsx', 'dim');
    }

    log('\n💡 Tip: A11y tests will run on push. Run manually with:', 'dim');
    log(`   npm run test:a11y ${components[0]}`, 'dim');
}

function runTests(components) {
    log('\n📋 Running accessibility validation...', 'cyan');

    // Build HTML package to ensure we're testing current templates
    log('\n  Building HTML package...', 'cyan');
    try {
        execSync('npm run build --prefix packages/html', { stdio: 'pipe' });
        log('    ✅ HTML package built', 'green');
    } catch (error) {
        log('    ❌ Failed to build HTML package', 'red');
        log('    ' + (error.message || 'Unknown error'), 'dim');
        return { allPassed: false, results: [] };
    }

    let allPassed = true;
    const results = [];

    for (const component of components) {
        if (!hasAriaSpec(component)) {
            log(`\n  ⏭️  Skipping ${component} (no ariaSpec.rules)`, 'yellow');
            continue;
        }
        const result = testComponent(component);
        results.push({ component, ...result });
        if (!result.ariaPassed || !result.wcagPassed) {
            allPassed = false;
        }
    }

    log('\n' + '─'.repeat(50));
    log('📊 Summary:', 'cyan');

    for (const r of results) {
        const status = r.ariaPassed && r.wcagPassed ? '✅' : '❌';
        const details = [];
        if (!r.ariaPassed) {
            details.push('ARIA');
        }
        if (!r.wcagPassed) {
            details.push('WCAG');
        }
        const suffix = details.length ? ` (${details.join(', ')} failed)` : '';
        log(`   ${status} ${r.component}${suffix}`);
    }

    return { allPassed, results };
}

async function main() {
    const args = process.argv.slice(2);
    const checkOnly = args.includes('--check-only');
    const promptMode = args.includes('--prompt');

    const changedFiles = getChangedFiles();
    const a11yFiles = changedFiles.filter(f =>
        f.match(/packages\/html\/src\/.*\.tsx?$/)
    );

    if (a11yFiles.length === 0) {
        log('No accessibility-related files in unpushed commits.', 'dim');
        process.exit(0);
    }

    const components = extractComponents(a11yFiles);
    const missingSpecs = components.filter(c => !hasAriaSpec(c));

    // Prompt mode: ask before running (pre-push with skip option)
    if (promptMode) {
        showInfo(a11yFiles, components, missingSpecs);
        const answer = await prompt('\nRun accessibility tests before push? (y/n/s[kip]): ');

        if (answer === 's' || answer === 'skip') {
            log('⏭️  Skipping - tests will run in CI', 'yellow');
            process.exit(0);
        }
        if (answer !== 'y' && answer !== 'yes') {
            log('⏭️  Skipping accessibility tests', 'dim');
            process.exit(0);
        }

        // Proceed to run tests
        const { allPassed } = runTests(components);
        if (!allPassed) {
            log('\n❌ Push blocked: accessibility violations detected.', 'red');
            log('   Run `npm run test:a11y [component] -- --verbose` for details.', 'dim');
            log('   Fix violations before pushing, or use --no-verify to bypass.', 'dim');
            process.exit(1);
        }

        log('\n✅ All accessibility checks passed!', 'green');
        // Ensure all output is flushed before exiting
        await new Promise(resolve => setImmediate(resolve));
        process.exit(0);
    }

    // Check-only mode: run tests and fail on violations (pre-push, no prompt)
    if (checkOnly) {
        showInfo(a11yFiles, components, missingSpecs);
        const { allPassed } = runTests(components);

        if (!allPassed) {
            log('\n❌ Push blocked: accessibility violations detected.', 'red');
            log('   Run `npm run test:a11y [component] -- --verbose` for details.', 'dim');
            log('   Fix violations before pushing, or use --no-verify to bypass.', 'dim');
            process.exit(1);
        } else {
            log('\n✅ All accessibility checks passed!', 'green');
        }
        process.exit(0);
    }

    // Interactive mode: for manual runs
    showInfo(a11yFiles, components, missingSpecs);
    const { allPassed } = runTests(components);

    if (!allPassed) {
        log('\n❌ Some components have accessibility violations.', 'red');
        log('   Run `npm run test:a11y [component] -- --verbose` for details.', 'dim');
    } else {
        log('\n✅ All accessibility checks passed!', 'green');
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
