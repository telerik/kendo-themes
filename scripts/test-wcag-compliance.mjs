#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * WCAG Compliance Tester
 *
 * Comprehensive WCAG 2.2 Level AA/AAA compliance testing using axe-core.
 * Tests all accessibility rules beyond just color contrast.
 *
 * By default, filters out page-level violations (landmarks, headings, etc.)
 * that are not component-specific issues.
 *
 * Usage:
 *   npm run test:wcag                    # Test all components
 *   npm run test:wcag button             # Test specific component
 *   npm run test:wcag -- --level=aaa     # Test for AAA compliance
 *   npm run test:wcag -- --include-page-level  # Include page-level violations
 *   npm run test:wcag -- --summary       # Summary only (no details)
 *   npm run test:wcag -- --verbose       # Detailed output
 */

import { Browser } from '@progress/kendo-e2e';
import AxeBuilder from '@axe-core/webdriverjs';
import { createServer } from 'http-server';
import { globSync } from 'glob';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const PORT = 18113;
const HOST = 'localhost';
const TESTS_PATH = './tests';
const COMPONENT_PAGE_EXT = '.html';
const THEME = "default";
const SWATCH = "all";

// Page-level rules to exclude (not component-specific)
const PAGE_LEVEL_RULES = [
    'region',              // Page must have at least one landmark
    'landmark-one-main',   // Document should have one main landmark
    'landmark-unique',     // Landmarks should have unique roles or labels
    'page-has-heading-one',// Page should contain a level-one heading
    'bypass',              // Page should have means to bypass repeated blocks
    'html-has-lang',       // <html> element must have lang attribute
    'document-title',      // Documents must have <title> element
    'landmark-no-duplicate-banner', // Document should not have duplicate banner
    'landmark-no-duplicate-contentinfo', // Document should not have duplicate contentinfo
    'meta-viewport',       // Zooming and scaling should not be disabled
    'duplicate-id',        // IDs used on page must be unique (often test harness issue)
];

// Get component name and options from command line
const args = process.argv.slice(2);
const componentFilter = args.find(a => !a.startsWith('--'));
const levelArg = args.find(a => a.startsWith('--level='));
const complianceLevel = levelArg ? levelArg.split('=')[1].toUpperCase() : 'AA';
const verboseMode = args.includes('--verbose');
const summaryOnly = args.includes('--summary');
const includePageLevel = args.includes('--include-page-level');

// WCAG 2.2 Success Criteria mapping
const WCAG_CRITERIA = {
    'A': [
        '1.1.1', '1.2.1', '1.2.2', '1.2.3', '1.3.1', '1.3.2', '1.3.3',
        '1.4.1', '1.4.2', '2.1.1', '2.1.2', '2.1.4', '2.2.1', '2.2.2',
        '2.3.1', '2.4.1', '2.4.2', '2.4.3', '2.4.4', '2.5.1', '2.5.2',
        '2.5.3', '2.5.4', '3.1.1', '3.2.1', '3.2.2', '3.3.1', '3.3.2',
        '4.1.1', '4.1.2', '4.1.3'
    ],
    'AA': [
        '1.2.4', '1.2.5', '1.3.4', '1.3.5', '1.4.3', '1.4.4', '1.4.5',
        '1.4.10', '1.4.11', '1.4.12', '1.4.13', '2.4.5', '2.4.6', '2.4.7',
        '2.4.11', '2.5.7', '2.5.8', '3.1.2', '3.2.3', '3.2.4', '3.2.6',
        '3.3.3', '3.3.4', '3.3.7', '3.3.8'
    ],
    'AAA': [
        '1.2.6', '1.2.7', '1.2.8', '1.2.9', '1.3.6', '1.4.6', '1.4.7',
        '1.4.8', '1.4.9', '2.2.3', '2.2.4', '2.2.5', '2.2.6', '2.3.2',
        '2.3.3', '2.4.8', '2.4.9', '2.4.10', '2.5.5', '2.5.6', '3.1.3',
        '3.1.4', '3.1.5', '3.1.6', '3.2.5', '3.3.5', '3.3.6', '3.3.9'
    ]
};

/**
 * Get axe-core tags for compliance level
 */
function getAxeTags(level) {
    const tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'];

    if (level === 'AAA') {
        tags.push('wcag2aaa', 'wcag21aaa', 'wcag22aaa');
    }

    tags.push('best-practice');

    return tags;
}

/**
 * Map axe violation to WCAG success criterion
 */
function mapToWCAGCriteria(violation) {
    const tags = violation.tags || [];
    const criteria = [];

    tags.forEach(tag => {
        const match = tag.match(/wcag(\d{1})(\d)(\d)/);
        if (match) {
            criteria.push(`${match[1]}.${match[2]}.${match[3]}`);
        }
    });

    return criteria;
}

/**
 * Test a single page for WCAG compliance
 */
async function testPage(filePath, browser) {
    const url = `http://${HOST}:${PORT}/${filePath.replace('./', '')}?theme=${THEME}&swatch=${SWATCH}`;

    try {
        await browser.navigateTo(url);
    } catch (err) {
        console.error(`Failed to navigate to ${url}:`, err);
        return { error: true, message: err.message };
    }

    // Configure axe-core
    const axe = new AxeBuilder(browser.driver);
    axe.withTags(getAxeTags(complianceLevel));

    // Run analysis
    const results = await axe.analyze();

    // Filter out page-level violations unless explicitly requested
    let violations = results.violations;
    let filteredCount = 0;

    if (!includePageLevel) {
        const filtered = violations.filter(v => !PAGE_LEVEL_RULES.includes(v.id));
        filteredCount = violations.length - filtered.length;
        violations = filtered;
    }

    // Categorize results
    const categorized = {
        violations: violations.map(v => ({
            ...v,
            wcagCriteria: mapToWCAGCriteria(v),
            severity: v.impact
        })),
        filteredPageLevel: filteredCount,
        passes: results.passes.map(p => ({
            id: p.id,
            description: p.description,
            wcagCriteria: mapToWCAGCriteria(p)
        })),
        incomplete: results.incomplete.map(i => ({
            id: i.id,
            description: i.description,
            wcagCriteria: mapToWCAGCriteria(i),
            nodes: i.nodes.length
        })),
        inapplicable: results.inapplicable.length
    };

    return {
        filePath,
        timestamp: results.timestamp,
        ...categorized
    };
}

/**
 * Generate compliance score
 */
function calculateComplianceScore(result) {
    const totalChecks = result.passes.length + result.violations.length;
    if (totalChecks === 0) {return 0;}

    const score = (result.passes.length / totalChecks) * 100;
    return Math.round(score * 10) / 10;
}

/**
 * Group violations by WCAG criterion
 */
function groupByWCAGCriteria(results) {
    const grouped = {};

    results.forEach(result => {
        result.violations.forEach(violation => {
            violation.wcagCriteria.forEach(criterion => {
                if (!grouped[criterion]) {
                    grouped[criterion] = {
                        criterion,
                        level: getWCAGLevel(criterion),
                        violations: [],
                        affectedPages: new Set()
                    };
                }

                grouped[criterion].violations.push({
                    page: result.filePath,
                    rule: violation.id,
                    description: violation.description,
                    impact: violation.impact,
                    nodeCount: violation.nodes.length
                });

                grouped[criterion].affectedPages.add(result.filePath);
            });
        });
    });

    // Convert Sets to arrays
    Object.values(grouped).forEach(group => {
        group.affectedPages = Array.from(group.affectedPages);
        group.pageCount = group.affectedPages.length;
    });

    return grouped;
}

/**
 * Get WCAG level for criterion
 */
function getWCAGLevel(criterion) {
    if (WCAG_CRITERIA.A.includes(criterion)) {return 'A';}
    if (WCAG_CRITERIA.AA.includes(criterion)) {return 'AA';}
    if (WCAG_CRITERIA.AAA.includes(criterion)) {return 'AAA';}
    return 'Unknown';
}

/**
 * Print summary report
 */
function printSummary(results, criteriaGroups) {
    console.log('\n' + '='.repeat(70));
    console.log('📊 WCAG Compliance Summary\n');

    const totalViolations = results.reduce((sum, r) => sum + r.violations.length, 0);
    const totalPasses = results.reduce((sum, r) => sum + r.passes.length, 0);
    const totalFiltered = results.reduce((sum, r) => sum + (r.filteredPageLevel || 0), 0);
    const avgScore = results.reduce((sum, r) => sum + calculateComplianceScore(r), 0) / results.length;

    console.log(`Compliance Level: WCAG 2.2 Level ${complianceLevel}`);
    console.log(`Pages Tested: ${results.length}`);
    console.log(`Total Checks Passed: ${totalPasses}`);
    console.log(`Total Violations: ${totalViolations}`);
    if (totalFiltered > 0) {
        console.log(`  (${totalFiltered} page-level violations filtered out)`);
    }
    console.log(`Average Compliance Score: ${avgScore.toFixed(1)}%\n`);

    // Violations by severity
    const bySeverity = {
        critical: 0,
        serious: 0,
        moderate: 0,
        minor: 0
    };

    results.forEach(r => {
        r.violations.forEach(v => {
            if (v.severity) {bySeverity[v.severity]++;}
        });
    });

    console.log('Violations by Severity:');
    console.log(`  🔴 Critical: ${bySeverity.critical}`);
    console.log(`  🟠 Serious: ${bySeverity.serious}`);
    console.log(`  🟡 Moderate: ${bySeverity.moderate}`);
    console.log(`  🔵 Minor: ${bySeverity.minor}\n`);

    // Violations by WCAG level
    const byLevel = { A: 0, AA: 0, AAA: 0 };
    Object.values(criteriaGroups).forEach(group => {
        byLevel[group.level] += group.violations.length;
    });

    console.log('Violations by WCAG Level:');
    console.log(`  Level A: ${byLevel.A}`);
    console.log(`  Level AA: ${byLevel.AA}`);
    console.log(`  Level AAA: ${byLevel.AAA}\n`);

    // Top violated criteria
    const topCriteria = Object.values(criteriaGroups)
        .sort((a, b) => b.violations.length - a.violations.length)
        .slice(0, 5);

    if (topCriteria.length > 0) {
        console.log('Top 5 Most Violated Success Criteria:');
        topCriteria.forEach((group, idx) => {
            console.log(`  ${idx + 1}. ${group.criterion} (Level ${group.level})`);
            console.log(`     ${group.violations.length} violation(s) across ${group.pageCount} page(s)`);
        });
        console.log();
    }
}

/**
 * Main test function
 */
async function testWCAGCompliance() {
    console.log(`🔍 WCAG ${complianceLevel} Compliance Tester\n`);

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

    console.log(`Found ${files.length} test file(s) to analyze\n`);

    // Start server
    const server = createServer({
        root: './',
        port: PORT
    });
    server.listen(PORT, HOST);

    // Start browser
    const browser = new Browser();

    const results = [];

    for (const file of files) {
        if (!summaryOnly) {
            console.log(`Testing ${file}...`);
        }

        const result = await testPage(file, browser);

        if (result.error) {
            console.error(`  ❌ Error: ${result.message}`);
            continue;
        }

        results.push(result);

        if (!summaryOnly) {
            const score = calculateComplianceScore(result);
            const status = result.violations.length === 0 ? '✅' : '❌';
            console.log(`  ${status} Score: ${score}% (${result.violations.length} violation(s), ${result.passes.length} passed)`);

            if (verboseMode && result.violations.length > 0) {
                result.violations.slice(0, 3).forEach(v => {
                    console.log(`     • ${v.id}: ${v.description.substring(0, 60)}...`);
                });
                if (result.violations.length > 3) {
                    console.log(`     ... and ${result.violations.length - 3} more`);
                }
            }
        }
    }

    // Cleanup
    await browser.close();
    server.close();

    // Generate reports
    const criteriaGroups = groupByWCAGCriteria(results);
    printSummary(results, criteriaGroups);

    // Save detailed report
    const report = {
        meta: {
            timestamp: new Date().toISOString(),
            complianceLevel,
            filesTesteд: results.length,
            wcagVersion: '2.2'
        },
        summary: {
            totalViolations: results.reduce((sum, r) => sum + r.violations.length, 0),
            totalPasses: results.reduce((sum, r) => sum + r.passes.length, 0),
            avgScore: results.reduce((sum, r) => sum + calculateComplianceScore(r), 0) / results.length
        },
        criteriaGroups,
        detailedResults: results
    };

    const reportPath = './tests/_output/wcag-compliance-report.json';
    try {
        mkdirSync(dirname(reportPath), { recursive: true });
        writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`📄 Detailed report saved to: ${reportPath}\n`);
    } catch (err) {
        console.error('Failed to save report:', err.message);
    }

    // Exit with appropriate code
    const hasViolations = report.summary.totalViolations > 0;

    if (hasViolations) {
        console.log('❌ WCAG compliance test failed\n');
        if (!verboseMode) {
            console.log('Run with --verbose for detailed violation information\n');
        }
        process.exit(1);
    } else {
        console.log(`✅ All pages meet WCAG 2.2 Level ${complianceLevel} requirements\n`);
        process.exit(0);
    }
}

// Run tests
testWCAGCompliance().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
