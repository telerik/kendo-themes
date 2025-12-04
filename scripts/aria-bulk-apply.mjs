#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Bulk ARIA Application Helper
 *
 * This script helps manage the systematic application of ARIA attributes
 * to all components in the HTML package.
 *
 * Usage:
 *   node scripts/aria-bulk-apply.mjs status          # Show current progress
 *   node scripts/aria-bulk-apply.mjs plan            # Generate application plan
 *   node scripts/aria-bulk-apply.mjs next            # Show next component to work on
 *   node scripts/aria-bulk-apply.mjs complete [name] # Mark component as complete
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const PROGRESS_FILE = path.join(rootDir, '.github', 'docs', 'aria-application-progress.json');
const ARIA_DIR = path.join(rootDir, 'aria');

/**
 * Component dependency levels (apply in this order)
 */
const COMPONENT_PRIORITIES = {
    // Level 1: Base components (no dependencies)
    'base': ['icon', 'badge', 'skeleton', 'avatar', 'label'],

    // Level 2: Simple standalone components
    'simple': ['button', 'checkbox', 'radio', 'switch', 'rating', 'chip', 'loader', 'progressbar', 'circular-progressbar', 'chunk-progressbar'],

    // Level 3: Input components
    'inputs': ['input', 'textbox', 'textarea', 'numerictextbox', 'maskedtextbox', 'dateinput', 'colorinput', 'signature', 'captcha', 'onetimepassword'],

    // Level 4: Picker components (depend on inputs)
    'pickers': ['datepicker', 'timepicker', 'datetimepicker', 'daterangepicker', 'colorpicker', 'colorgradient', 'colorpalette', 'flatcolorpicker'],

    // Level 5: List/dropdown components
    'lists': ['listbox', 'listview', 'dropdownlist', 'combobox', 'autocomplete', 'multiselect', 'dropdowntree', 'multiselecttree', 'multicolumncombobox'],

    // Level 6: Button groups and menus
    'button-groups': ['buttongroup', 'splitbutton', 'dropdownbutton', 'floatingactionbutton', 'actionsheet'],

    // Level 7: Navigation components
    'navigation': ['menu', 'contextmenu', 'breadcrumb', 'stepper', 'bottomnavigation', 'appbar', 'toolbar', 'tabstrip', 'drawer'],

    // Level 8: Containers
    'containers': ['card', 'expansionpanel', 'panelbar', 'splitter', 'tilelayout', 'gridlayout', 'stacklayout', 'window', 'dialog', 'popover', 'notification'],

    // Level 9: Calendar components
    'calendars': ['calendar', 'multiviewcalendar', 'infinitecalendar'],

    // Level 10: Data components (complex, use many other components)
    'data': ['pager', 'grid', 'treelist', 'pivotgrid', 'filter', 'columnmenu', 'columnchooser', 'propertygrid', 'orgchart', 'taskboard'],

    // Level 11: Complex composite components
    'complex': ['scheduler', 'gantt', 'spreadsheet', 'editor', 'imageeditor', 'chat', 'aiprompt', 'filemanager', 'pdfviewer', 'mediaplayer', 'dockmanager'],

    // Level 12: Charts and visualization
    'charts': ['chart', 'stockchart', 'sparkline', 'treemap', 'sankey', 'chartwizard', 'map', 'arcgauge', 'circulargauge', 'lineargauge', 'radialgauge']
};

/**
 * Get all components with ARIA specs
 */
function getComponentsWithSpecs() {
    const specs = fs.readdirSync(ARIA_DIR)
        .filter(f => f.endsWith('_aria.md'))
        .map(f => f.replace('_aria.md', ''));
    return specs;
}



/**
 * Load or initialize progress tracking
 */
function loadProgress() {
    if (fs.existsSync(PROGRESS_FILE)) {
        return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    }

    // Initialize progress file
    const components = getComponentsWithSpecs();
    const progress = {
        version: '1.0.0',
        lastUpdated: new Date().toISOString(),
        components: {}
    };

    components.forEach(name => {
        progress.components[name] = {
            status: 'pending',
            specExists: true,
            priority: getComponentPriority(name),
            complianceScore: null,
            violations: { critical: 0, serious: 0, moderate: 0, minor: 0 },
            notes: ''
        };
    });

    return progress;
}

/**
 * Save progress
 */
function saveProgress(progress) {
    progress.lastUpdated = new Date().toISOString();
    const dir = path.dirname(PROGRESS_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

/**
 * Get component priority level
 */
function getComponentPriority(name) {
    for (const [level, components] of Object.entries(COMPONENT_PRIORITIES)) {
        if (components.includes(name)) {
            return level;
        }
    }
    return 'unknown';
}

/**
 * Get priority order number
 */
function getPriorityOrder(priority) {
    const order = ['base', 'simple', 'inputs', 'pickers', 'lists', 'button-groups', 'navigation', 'containers', 'calendars', 'data', 'complex', 'charts', 'unknown'];
    return order.indexOf(priority);
}

/**
 * Show current progress status
 */
function showStatus() {
    const progress = loadProgress();
    const components = Object.entries(progress.components);

    const statusCounts = {
        pending: 0,
        'in-progress': 0,
        completed: 0,
        blocked: 0
    };

    components.forEach(([, data]) => {
        statusCounts[data.status]++;
    });

    console.log('\n📊 ARIA Application Progress\n');
    console.log('═'.repeat(50));
    console.log(`Total Components: ${components.length}`);
    console.log(`✅ Completed: ${statusCounts.completed} (${Math.round(statusCounts.completed / components.length * 100)}%)`);
    console.log(`🔄 In Progress: ${statusCounts['in-progress']}`);
    console.log(`⏳ Pending: ${statusCounts.pending}`);
    console.log(`🚫 Blocked: ${statusCounts.blocked}`);
    console.log('═'.repeat(50));

    // Show by priority
    console.log('\n📋 By Priority Level:\n');
    for (const [level, names] of Object.entries(COMPONENT_PRIORITIES)) {
        const levelComponents = names.filter(n => progress.components[n]);
        if (levelComponents.length === 0) {continue;}

        const completed = levelComponents.filter(n => progress.components[n].status === 'completed').length;
        const total = levelComponents.length;
        const percentage = Math.round(completed / total * 100);

        console.log(`${level.padEnd(15)} ${completed}/${total} (${percentage}%)`);
    }

    // Show recently completed
    const recentlyCompleted = components
        .filter(([, data]) => data.status === 'completed')
        .sort((a, b) => (b[1].completedAt || '').localeCompare(a[1].completedAt || ''))
        .slice(0, 5);

    if (recentlyCompleted.length > 0) {
        console.log('\n🎉 Recently Completed:\n');
        recentlyCompleted.forEach(([name, data]) => {
            const score = data.complianceScore ? `${data.complianceScore}%` : 'N/A';
            console.log(`  • ${name} (Score: ${score})`);
        });
    }

    console.log();
}

/**
 * Generate application plan
 */
function generatePlan() {
    const progress = loadProgress();

    console.log('\n📋 ARIA Application Plan\n');
    console.log('═'.repeat(50));
    console.log('Components grouped by dependency level:\n');

    for (const [level, names] of Object.entries(COMPONENT_PRIORITIES)) {
        const levelComponents = names.filter(n => progress.components[n]);
        if (levelComponents.length === 0) {
            continue;
        }

        console.log(`\n${level.toUpperCase()} (${levelComponents.length} components)`);
        console.log('─'.repeat(50));        levelComponents.forEach(name => {
            const data = progress.components[name];
            const status = {
                'pending': '⏳',
                'in-progress': '🔄',
                'completed': '✅',
                'blocked': '🚫'
            }[data.status];

            console.log(`  ${status} ${name}`);
        });
    }

    console.log('\n' + '═'.repeat(50));
    console.log('\n💡 Recommendation: Apply ARIA level by level, completing');
    console.log('   all components in one level before moving to the next.\n');
}

/**
 * Show next component to work on
 */
function showNext() {
    const progress = loadProgress();
    const components = Object.entries(progress.components);

    // Find next pending component by priority
    const pending = components
        .filter(([, data]) => data.status === 'pending')
        .sort((a, b) => {
            const orderA = getPriorityOrder(a[1].priority);
            const orderB = getPriorityOrder(b[1].priority);
            if (orderA !== orderB) {return orderA - orderB;}
            return a[0].localeCompare(b[0]);
        });

    if (pending.length === 0) {
        console.log('\n🎉 All components completed!\n');
        return;
    }

    const [name, data] = pending[0];

    console.log('\n🎯 Next Component to Work On\n');
    console.log('═'.repeat(50));
    console.log(`Component: ${name}`);
    console.log(`Priority: ${data.priority}`);
    console.log(`Spec: aria/${name}_aria.md`);
    console.log(`TSX: packages/html/src/${name}/`);
    console.log('═'.repeat(50));
    console.log('\n📝 Steps to Apply:\n');
    console.log('1. Read spec: cat aria/' + name + '_aria.md');
    console.log('2. Invoke agent: @accessibility-specialist apply ARIA to ' + name);
    console.log('3. Build: npm run build:tests');
    console.log('4. Render: npm run test:render-test-pages ' + name);
    console.log('5. Test: npm run test:aria ' + name);
    console.log('6. Validate: npm run test:wcag ' + name);
    console.log('7. Mark complete: node scripts/aria-bulk-apply.mjs complete ' + name);
    console.log();

    // Show dependencies (other base components in same or lower level)
    const sameLevelPending = components
        .filter(([n, d]) => d.priority === data.priority && d.status === 'pending' && n !== name)
        .map(([n]) => n);

    if (sameLevelPending.length > 0) {
        console.log(`ℹ️  ${sameLevelPending.length} other pending components at same level:\n`);
        sameLevelPending.slice(0, 5).forEach(n => console.log(`   • ${n}`));
        if (sameLevelPending.length > 5) {
            console.log(`   ... and ${sameLevelPending.length - 5} more`);
        }
        console.log();
    }
}

/**
 * Mark component as complete
 */
function markComplete(componentName, score = null, violations = null) {
    const progress = loadProgress();

    if (!progress.components[componentName]) {
        console.error(`\n❌ Component "${componentName}" not found in progress tracking.\n`);
        return;
    }

    progress.components[componentName].status = 'completed';
    progress.components[componentName].completedAt = new Date().toISOString();

    if (score !== null) {
        progress.components[componentName].complianceScore = parseFloat(score);
    }

    if (violations !== null) {
        progress.components[componentName].violations = violations;
    }

    saveProgress(progress);

    console.log(`\n✅ Marked "${componentName}" as completed!\n`);

    // Show next component
    const next = Object.entries(progress.components)
        .filter(([, data]) => data.status === 'pending')
        .sort((a, b) => {
            const orderA = getPriorityOrder(a[1].priority);
            const orderB = getPriorityOrder(b[1].priority);
            if (orderA !== orderB) {return orderA - orderB;}
            return a[0].localeCompare(b[0]);
        })[0];

    if (next) {
        console.log(`📌 Next: ${next[0]} (${next[1].priority})\n`);
    } else {
        console.log('🎉 All components completed!\n');
    }
}

/**
 * Main CLI
 */
const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
    case 'status':
        showStatus();
        break;
    case 'plan':
        generatePlan();
        break;
    case 'next':
        showNext();
        break;
    case 'complete': {
        if (!arg) {
            console.error('\n❌ Usage: node scripts/aria-bulk-apply.mjs complete <component-name>\n');
            process.exit(1);
        }
        markComplete(arg);
        break;
    }
    case 'init': {
        const progress = loadProgress();
        saveProgress(progress);
        console.log('\n✅ Progress tracking initialized!\n');
        console.log(`   File: ${PROGRESS_FILE}\n`);
        break;
    }
    default:
        console.log(`
Bulk ARIA Application Helper

Usage:
  node scripts/aria-bulk-apply.mjs <command>

Commands:
  status              Show current progress
  plan                Generate application plan
  next                Show next component to work on
  complete <name>     Mark component as complete
  init                Initialize progress tracking

Examples:
  node scripts/aria-bulk-apply.mjs status
  node scripts/aria-bulk-apply.mjs next
  node scripts/aria-bulk-apply.mjs complete button
`);
        break;
}
