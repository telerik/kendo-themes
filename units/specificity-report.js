const fs = require('fs');
const path = require('path');

function generateSpecificityReport(specificityDataPath, outputPath) {
    // Read the specificity JSON data
    const specificityData = JSON.parse(fs.readFileSync(specificityDataPath, 'utf8'));

    let markdown = `# CSS Specificity Analysis Report\n\n`;
    markdown += `Generated on: ${new Date().toISOString()}\n\n`;

    // Calculate overall statistics
    const allSpecificityValues = [];
    const componentStats = {};

    Object.entries(specificityData).forEach(([componentName, selectors]) => {
        const componentValues = selectors.map(s => s.specificityValue);
        allSpecificityValues.push(...componentValues);

        componentStats[componentName] = {
            count: selectors.length,
            min: Math.min(...componentValues),
            max: Math.max(...componentValues),
            avg: componentValues.reduce((sum, val) => sum + val, 0) / componentValues.length,
            selectors: selectors
        };
    });

    const overallMax = Math.max(...allSpecificityValues);
    const overallAvg = allSpecificityValues.reduce((sum, val) => sum + val, 0) / allSpecificityValues.length;

    // Overall Statistics
    markdown += `## Overall Statistics\n\n`;
    markdown += `- **Total Selectors**: ${allSpecificityValues.length.toLocaleString()}\n`;
    markdown += `- **Maximum Specificity**: ${overallMax}\n`;
    markdown += `- **Average Specificity**: ${overallAvg.toFixed(2)}\n`;
    markdown += `- **Components Analyzed**: ${Object.keys(specificityData).length}\n\n`;

    // Component Summary Table
    markdown += `## Component Summary\n\n`;
    markdown += `| Component | Selectors | Min | Max | Average |\n`;
    markdown += `|-----------|-----------|-----|-----|----------|\n`;

    // Sort components by average specificity (descending)
    const sortedComponents = Object.entries(componentStats)
        .sort(([,a], [,b]) => b.avg - a.avg);

    sortedComponents.forEach(([componentName, stats]) => {
        const displayName = componentName === '__other__' ? 'Other/Global' : componentName;
        markdown += `| ${displayName} | ${stats.count.toLocaleString()} | ${stats.min} | ${stats.max} | ${stats.avg.toFixed(2)} |\n`;
    });

    markdown += `\n`;

    // Specificity Distribution
    markdown += `## Specificity Distribution\n\n`;
    const buckets = {
        'Low (1-10)': 0,
        'Medium (11-50)': 0,
        'High (51-100)': 0,
        'Very High (101+)': 0
    };

    allSpecificityValues.forEach(value => {
        if (value <= 10) {
            buckets['Low (1-10)']++;
        } else if (value <= 50) {
            buckets['Medium (11-50)']++;
        } else if (value <= 100) {
            buckets['High (51-100)']++;
        } else {
            buckets['Very High (101+)']++;
        }
    });

    Object.entries(buckets).forEach(([range, count]) => {
        const percentage = (count / allSpecificityValues.length * 100).toFixed(1);
        markdown += `- **${range}**: ${count.toLocaleString()} selectors (${percentage}%)\n`;
    });

    markdown += `\n`;

    // Top 10 Most Specific Selectors
    markdown += `## Top 10 Most Specific Selectors\n\n`;
    const allSelectors = [];
    Object.entries(specificityData).forEach(([componentName, selectors]) => {
        selectors.forEach(selector => {
            allSelectors.push({
                ...selector,
                component: componentName
            });
        });
    });

    const topSelectors = allSelectors
        .sort((a, b) => b.specificityValue - a.specificityValue)
        .slice(0, 10);

    markdown += `| Rank | Selector | Component | Specificity |\n`;
    markdown += `|------|----------|-----------|-------------|\n`;

    topSelectors.forEach((selector, index) => {
        const displayComponent = selector.component === '__other__' ? 'Other/Global' : selector.component;
        const truncatedSelector = selector.selector.length > 60
            ? selector.selector.substring(0, 57) + '...'
            : selector.selector;
        markdown += `| ${index + 1} | \`${truncatedSelector}\` | ${displayComponent} | ${selector.specificityValue} |\n`;
    });

    // Write the markdown file
    fs.writeFileSync(outputPath, markdown, 'utf8');
}

module.exports = { generateSpecificityReport };

// If run directly
if (require.main === module) {
    const theme = process.env.THEME || 'default';
    const specificityDataPath = path.resolve(__dirname, theme, 'dist', 'specificity', `${theme}-specificity-data.json`);
    const outputPath = path.resolve(__dirname, theme, 'dist', 'specificity', `${theme}-specificity-report.md`);

    if (fs.existsSync(specificityDataPath)) {
        generateSpecificityReport(specificityDataPath, outputPath);
    } else {
        // eslint-disable-next-line no-console
        console.error(`Specificity data file not found: ${specificityDataPath}`);
        // eslint-disable-next-line no-console
        console.log('Please run the theme tests first to generate specificity data.');
    }
}
