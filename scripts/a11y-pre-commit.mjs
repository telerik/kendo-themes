#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Pre-commit/Pre-push A11y Check Script
 *
 * Usage:
 *   --info-only     Show changed a11y files (pre-commit, non-blocking)
 *   --check-only    Run tests and block on failure (pre-push)
 *   --prompt        Prompt to skip (for pre-push with option to bypass)
 *   (no args)       Interactive mode for manual runs
 */

import { execSync } from 'child_process';
import { existsSync, createReadStream } from 'fs';
import { createInterface } from 'readline';
import path from 'path';

const ARIA_DIR = 'aria';

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

function getStagedFiles() {
    try {
        const output = execSync('git diff --cached --name-only', { encoding: 'utf-8' });
        return output.trim().split('\n').filter(f => f);
    } catch {
        return [];
    }
}

function extractComponents(files) {
    const components = new Set();
    for (const file of files) {
        const tsxMatch = file.match(/packages\/html\/src\/([^/]+)\//);
        if (tsxMatch) {
            components.add(tsxMatch[1]);
        }
        const ariaMatch = file.match(/aria\/([^_]+)_aria\.md$/);
        if (ariaMatch) {
            components.add(ariaMatch[1]);
        }
    }
    return Array.from(components);
}

function hasAriaSpec(component) {
    return existsSync(path.join(ARIA_DIR, `${component}_aria.md`));
}

async function prompt(question) {
    let input = process.stdin;

    // Use /dev/tty if stdin is not a TTY (like in git hooks)
    if (!process.stdin.isTTY) {
        try {
            input = createReadStream('/dev/tty');
        } catch {
            return null;
        }
    }

    const rl = createInterface({ input, output: process.stdout });
    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer.toLowerCase().trim());
        });
    });
}

function testComponent(component) {
    log(`\n  Testing ${component}...`, 'cyan');
    let ariaPassed = true;
    let wcagPassed = true;

    try {
        execSync(`npm run test:render-test-pages ${component}`, { stdio: 'pipe' });
    } catch {
        log('    Warning: Could not render test pages', 'yellow');
    }

    try {
        execSync(`npm run test:aria ${component}`, { stdio: 'pipe' });
        log('    ✅ ARIA validation passed', 'green');
    } catch {
        log('    ❌ ARIA validation failed', 'red');
        ariaPassed = false;
    }

    try {
        execSync(`npm run test:wcag ${component}`, { stdio: 'pipe' });
        log('    ✅ WCAG compliance passed', 'green');
    } catch {
        log('    ❌ WCAG compliance failed', 'red');
        wcagPassed = false;
    }

    return { ariaPassed, wcagPassed };
}

function showInfo(a11yFiles, components, missingSpecs) {
    log('\n🔍 Accessibility-related files changed:', 'cyan');
    a11yFiles.slice(0, 5).forEach(f => log(`   ${f}`));
    if (a11yFiles.length > 5) {
        log(`   ... and ${a11yFiles.length - 5} more`);
    }

    log(`\nComponents affected: ${components.join(', ')}`, 'cyan');

    if (missingSpecs.length > 0) {
        log(`\n⚠️  Missing ARIA specs for: ${missingSpecs.join(', ')}`, 'yellow');
        log('   Consider creating specs in aria/[component]_aria.md', 'dim');
    }

    log('\n💡 Tip: A11y tests will run on push. Run manually with:', 'dim');
    log(`   npm run test:aria ${components[0]}`, 'dim');
}

function runTests(components) {
    log('\n📋 Running accessibility validation...', 'cyan');

    let allPassed = true;
    const results = [];

    for (const component of components) {
        if (!hasAriaSpec(component)) {
            log(`\n  ⏭️  Skipping ${component} (no ARIA spec)`, 'yellow');
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
    const infoOnly = args.includes('--info-only');
    const checkOnly = args.includes('--check-only');
    const promptMode = args.includes('--prompt');

    const stagedFiles = getStagedFiles();
    const a11yFiles = stagedFiles.filter(f =>
        f.match(/packages\/html\/src\/.*\.tsx?$/) ||
        f.match(/aria\/.*_aria\.md$/)
    );

    if (a11yFiles.length === 0) {
        if (!infoOnly) {
            log('No accessibility-related files staged.', 'dim');
        }
        process.exit(0);
    }

    const components = extractComponents(a11yFiles);
    const missingSpecs = components.filter(c => !hasAriaSpec(c));

    // Info-only mode: just show what changed (pre-commit)
    if (infoOnly) {
        showInfo(a11yFiles, components, missingSpecs);
        process.exit(0);
    }

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
            log('   Run `npm run test:aria [component] -- --verbose` for details.', 'dim');
            log('   Fix violations before pushing, or use --no-verify to bypass.', 'dim');
            process.exit(1);
        } else {
            log('\n✅ All accessibility checks passed!', 'green');
        }
        process.exit(0);
    }

    // Check-only mode: run tests and fail on violations (pre-push, no prompt)
    if (checkOnly) {
        showInfo(a11yFiles, components, missingSpecs);
        const { allPassed } = runTests(components);

        if (!allPassed) {
            log('\n❌ Push blocked: accessibility violations detected.', 'red');
            log('   Run `npm run test:aria [component] -- --verbose` for details.', 'dim');
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
        log('   Run `npm run test:aria [component] -- --verbose` for details.', 'dim');
    } else {
        log('\n✅ All accessibility checks passed!', 'green');
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
