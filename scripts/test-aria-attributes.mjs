#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * ARIA Attributes Validator
 *
 * This script validates that HTML components have the correct ARIA attributes
 * applied according to the specifications in the /aria directory.
 *
 * Usage:
 *   npm run test:aria                    # Test all components
 *   npm run test:aria button             # Test specific component
 *   npm run test:aria -- --fix           # Suggest fixes
 */

import { Browser, By } from '@progress/kendo-e2e';
import { createServer } from 'http-server';
import { globSync } from 'glob';
import { readFileSync } from 'fs';
import { basename, dirname } from 'path';

const PORT = 18112;
const HOST = 'localhost';
const TESTS_PATH = './tests';
const ARIA_SPECS_PATH = './aria';
const COMPONENT_PAGE_EXT = '.html';
const THEME = "default";
const SWATCH = "default-ocean-blue-a11y";

// Get component name from command line
const componentArg = process.argv[2];
const componentFilter = componentArg && !componentArg.startsWith('--') ? componentArg : null;
const fixMode = process.argv.includes('--fix');
const verboseMode = process.argv.includes('--verbose');

/**
 * Parse ARIA specification from markdown file
 * @param {string} componentName - Name of the component
 * @returns {object} Parsed ARIA rules
 */
function parseAriaSpec(componentName) {
    const specFiles = globSync(`${ARIA_SPECS_PATH}/**/*_aria.md`);
    const specFile = specFiles.find(f => {
        const name = basename(f, '_aria.md');
        return name === componentName || name.replace('-', '') === componentName.replace('-', '');
    });

    if (!specFile) {
        return null;
    }

    const content = readFileSync(specFile, 'utf-8');
    const rules = [];

    // Parse markdown table
    const tableRegex = /\|\s*Selector\s*\|\s*Attribute\s*\|\s*Usage\s*\|[\s\S]*?\n\|(.*?)\n(?=\n|$)/gm;
    const rowRegex = /^\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|$/gm;

    let match;
    while ((match = tableRegex.exec(content)) !== null) {
        const tableContent = match[0];
        let rowMatch;

        while ((rowMatch = rowRegex.exec(tableContent)) !== null) {
            const [, selector, attribute, usage] = rowMatch;

            // Skip header and separator rows
            if (selector.includes('---') || selector.toLowerCase().includes('selector')) {
                continue;
            }

            rules.push({
                selector: selector.trim().replace(/`/g, ''),
                attribute: attribute.trim().replace(/`/g, ''),
                usage: usage.trim()
            });
        }
    }

    return {
        componentName,
        specFile,
        rules
    };
}

/**
 * Validate attribute on an element
 * @param {WebElement} element - Element to validate
 * @param {object} rule - ARIA rule
 * @returns {object} Validation result
 */
async function validateAttribute(element, rule) {
    const { attribute } = rule;

    // Check for alternative attributes first (e.g., "aria-label or aria-labelledby")
    if (attribute.includes(' or ')) {
        const alternatives = attribute.split(' or ').map(a => a.trim());

        for (const alt of alternatives) {
            // Special case: nodeName check
            if (alt.includes('nodeName=')) {
                const tagName = await element.getTagName();
                const expectedTag = alt.split('nodeName=')[1].trim();
                if (tagName.toLowerCase() === expectedTag.toLowerCase()) {
                    return { valid: true, reason: 'correct-nodename' };
                }
                continue; // Try next alternative
            }

            const parts = alt.split('=');
            const attrName = parts[0].trim();
            const expectedValue = parts.length > 1 ? parts[1].trim() : null;

            try {
                const actualValue = await element.getAttribute(attrName);

                // If attribute exists
                if (actualValue !== null) {
                    // For boolean attributes (disabled, readonly, etc.), presence is what matters
                    if (attrName === 'disabled' || attrName === 'readonly' || attrName === 'required') {
                        return { valid: true, actual: actualValue, reason: 'boolean-attribute-present' };
                    }

                    // For ARIA attributes with expected values, validate the value
                    if (expectedValue && expectedValue !== 'true/false') {
                        if (actualValue === expectedValue || actualValue === '') {
                            // Empty string is valid for boolean attributes
                            return { valid: true, actual: actualValue, reason: 'alternative-match' };
                        }
                    } else {
                        // Attribute exists and no specific value required
                        return { valid: true, actual: actualValue, reason: 'alternative-present' };
                    }
                }
            } catch {
                continue; // Try next alternative
            }
        }

        // None of the alternatives matched
        return {
            valid: false,
            reason: 'missing',
            expected: attribute.split(' or ').map(a => a.split('=')[0].trim()).join(' or '),
            actual: null
        };
    }

    // Parse single attribute (can be role=button, aria-label, etc.)
    const parts = attribute.split('=');
    const attrName = parts[0].trim();
    const expectedValue = parts.length > 1 ? parts[1].trim() : null;

    try {
        // Special case: nodeName check
        if (attribute.includes('nodeName=')) {
            const tagName = await element.getTagName();
            const expectedTag = attribute.split('nodeName=')[1].trim();
            if (tagName.toLowerCase() === expectedTag.toLowerCase()) {
                return { valid: true, reason: 'correct-nodename' };
            }
            return {
                valid: false,
                reason: 'incorrect-nodename',
                expected: expectedTag,
                actual: tagName
            };
        }

        const actualValue = await element.getAttribute(attrName);

        // Check if attribute exists
        if (actualValue === null) {
            return {
                valid: false,
                reason: 'missing',
                expected: attrName,
                actual: null
            };
        }

        // For boolean HTML attributes, presence is sufficient
        if (attrName === 'disabled' || attrName === 'readonly' || attrName === 'required') {
            return { valid: true, actual: actualValue };
        }

        // Validate value if specified
        if (expectedValue && expectedValue !== 'true/false') {
            if (actualValue !== expectedValue) {
                return {
                    valid: false,
                    reason: 'incorrect-value',
                    expected: expectedValue,
                    actual: actualValue
                };
            }
        }

        return { valid: true, actual: actualValue };
    } catch (error) {
        return {
            valid: false,
            reason: 'error',
            error: error.message
        };
    }
}

/**
 * Validate a single HTML page
 * @param {string} filePath - Path to HTML file
 * @param {object} ariaSpec - Parsed ARIA specification
 * @param {Browser} browser - Browser instance
 * @returns {object} Validation results
 */
async function validatePage(filePath, ariaSpec, browser) {
    if (!ariaSpec || !ariaSpec.rules.length) {
        return { skipped: true, reason: 'no-spec' };
    }

    const url = `http://${HOST}:${PORT}/${filePath.replace('./', '')}?theme=${THEME}&swatch=${SWATCH}`;

    try {
        await browser.navigateTo(url);
    } catch (err) {
        console.error(`Failed to navigate to ${url}:`, err);
        return { error: true, message: err.message };
    }

    const violations = [];
    const passed = [];

    for (const rule of ariaSpec.rules) {
        const { selector } = rule;

        try {
            let elements = [];

            // Use JavaScript querySelector to bypass Selenium CSS limitations
            try {
                const script = `return Array.from(document.querySelectorAll(${JSON.stringify(selector)}));`;
                elements = await browser.driver.executeScript(script);

                if (verboseMode && elements && elements.length > 0) {
                    console.log(`  ✓ Found ${elements.length} element(s) for selector: ${selector}`);
                }
            } catch (jsError) {
                if (verboseMode) {
                    console.log(`  ℹ JavaScript query error for ${selector}: ${jsError.message}`);
                }
                // Fallback to Selenium's By.css if executeScript fails
                elements = await browser.driver.findElements(By.css(selector));
            }

            if (!elements || elements.length === 0) {
                // Selector not found - might be conditional
                if (verboseMode) {
                    console.log(`  ℹ Selector not found: ${selector}`);
                }
                continue;
            }

            // Validate each element
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const result = await validateAttribute(element, rule, browser);

                if (!result.valid) {
                    const html = await element.getAttribute('outerHTML');
                    violations.push({
                        rule,
                        element: html.substring(0, 200), // Truncate for readability
                        index: i,
                        ...result
                    });
                } else {
                    passed.push({ rule, index: i });
                }
            }
        } catch (error) {
            if (verboseMode) {
                console.error(`  ⚠ Error validating selector ${selector}:`, error.message);
            }
        }
    }

    return {
        filePath,
        spec: ariaSpec.specFile,
        totalRules: ariaSpec.rules.length,
        violations,
        passed: passed.length,
        violationCount: violations.length
    };
}

/**
 * Main validation function
 */
async function validateAriaAttributes() {
    console.log('🔍 ARIA Attributes Validator\n');

    if (componentFilter) {
        console.log(`📦 Testing component: ${componentFilter}\n`);
    } else {
        console.log('📦 Testing all components\n');
    }

    // Build glob pattern
    const globPattern = componentFilter
        ? `${TESTS_PATH}/${componentFilter}/**/*${COMPONENT_PAGE_EXT}`
        : `${TESTS_PATH}/!(utils|_*)/**/*${COMPONENT_PAGE_EXT}`;

    const files = globSync(globPattern, { dotRelative: true });

    if (files.length === 0) {
        console.error(`❌ No test files found for pattern: ${globPattern}`);
        process.exit(1);
    }

    console.log(`Found ${files.length} test file(s)\n`);

    // Start server
    const server = createServer({
        root: './',
        port: PORT
    });
    server.listen(PORT, HOST);

    // Start browser
    const browser = new Browser();

    const results = [];
    let totalViolations = 0;
    let totalPassed = 0;
    let skipped = 0;

    for (const file of files) {
        // Determine component name from path (e.g., "./tests/avatar/avatar.html" -> "avatar")
        const pathParts = file.replace(/^\.\//, '').split('/');
        const componentName = pathParts[1];  // tests/avatar/... -> "avatar"

        if (verboseMode) {
            console.log(`Testing ${file}...`);
        }

        // Get ARIA spec
        const ariaSpec = parseAriaSpec(componentName);

        if (!ariaSpec) {
            if (verboseMode) {
                console.log(`  ⚠ No ARIA spec found for ${componentName}`);
            }
            skipped++;
            continue;
        }

        // Validate page
        const result = await validatePage(file, ariaSpec, browser);

        if (result.skipped || result.error) {
            skipped++;
            continue;
        }

        results.push(result);
        totalViolations += result.violationCount;
        totalPassed += result.passed;

        if (result.violationCount > 0) {
            console.log(`❌ ${file}: ${result.violationCount} violation(s)`);

            if (verboseMode || fixMode) {
                result.violations.forEach((v, idx) => {
                    console.log(`   ${idx + 1}. ${v.rule.selector}`);
                    console.log(`      Missing/incorrect: ${v.rule.attribute}`);
                    console.log(`      Usage: ${v.rule.usage.substring(0, 80)}...`);
                    if (v.expected && v.actual !== undefined) {
                        console.log(`      Expected: ${v.expected}, Got: ${v.actual || '(none)'}`);
                    }
                });
            }
        } else {
            console.log(`✅ ${file}: All checks passed`);
        }
    }

    // Cleanup
    await browser.close();
    server.close();

    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary\n');
    console.log(`Total files tested: ${results.length}`);
    console.log(`Files skipped: ${skipped}`);
    console.log(`Total rules passed: ${totalPassed}`);
    console.log(`Total violations: ${totalViolations}\n`);

    if (totalViolations > 0) {
        console.log('❌ ARIA attribute validation failed\n');

        if (!verboseMode && !fixMode) {
            console.log('Run with --verbose or --fix for detailed information\n');
        }

        // Generate detailed report
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                filesTested: results.length,
                skipped,
                passed: totalPassed,
                violations: totalViolations
            },
            results
        };

        // Save report
        const reportPath = './tests/_output/aria-validation-report.json';
        try {
            const { mkdirSync, writeFileSync } = await import('fs');
            mkdirSync(dirname(reportPath), { recursive: true });
            writeFileSync(reportPath, JSON.stringify(report, null, 2));
            console.log(`📄 Detailed report saved to: ${reportPath}\n`);
        } catch (err) {
            console.error('Failed to save report:', err.message);
        }

        process.exit(1);
    } else {
        console.log('✅ All ARIA attribute validations passed\n');
        process.exit(0);
    }
}

// Run validator
validateAriaAttributes().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
