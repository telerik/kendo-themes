#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Pre-commit A11y Check Script
 * Detects a11y-related file changes and runs accessibility tests
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
            resolve(answer.toLowerCase());
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

async function main() {
    const args = process.argv.slice(2);
    const isFromHook = args.includes('--from-hook');
    const checkOnly = args.includes('--check-only');

    const stagedFiles = getStagedFiles();
    const a11yFiles = stagedFiles.filter(f =>
        f.match(/packages\/html\/src\/.*\.tsx?$/) ||
        f.match(/aria\/.*_aria\.md$/)
    );

    if (a11yFiles.length === 0) {
        log('No accessibility-related files staged.', 'dim');
        process.exit(0);
    }

    const components = extractComponents(a11yFiles);

    log('\n🔍 Accessibility-related files changed:', 'cyan');
    a11yFiles.slice(0, 5).forEach(f => log(`   ${f}`));
    if (a11yFiles.length > 5) {
        log(`   ... and ${a11yFiles.length - 5} more`);
    }

    log(`\nComponents affected: ${components.join(', ')}`, 'cyan');

    const missingSpecs = components.filter(c => !hasAriaSpec(c));
    if (missingSpecs.length > 0) {
        log(`\n⚠️  Missing ARIA specs for: ${missingSpecs.join(', ')}`, 'yellow');
        log('   Consider creating specs in aria/[component]_aria.md', 'dim');
    }

    if (isFromHook) {
        const answer = await prompt('\nRun accessibility tests? (y/n/s[kip]): ');
        if (answer === null) {
            log('⚠️  Unable to prompt for input. Running accessibility tests by default.', 'yellow');
        }
        if (answer === 's' || answer === 'skip') {
            log('⏭️  Skipping - will validate in CI', 'yellow');
            process.exit(0);
        }
        if (answer && answer !== 'y' && answer !== 'yes') {
            log('⏭️  Skipping accessibility tests', 'dim');
            process.exit(0);
        }
    }

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

    if (!allPassed) {
        log('\n❌ Some components have accessibility violations.', 'red');
        log('   Run `npm run test:aria [component] -- --verbose` for details.', 'dim');
        if (checkOnly) {
            process.exit(1);
        } else {
            log('\n   Commit will proceed. Fix violations before merging.', 'yellow');
        }
    } else {
        log('\n✅ All accessibility checks passed!', 'green');
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
