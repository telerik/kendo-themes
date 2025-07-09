const postcss = require('postcss');

/**
 * Calculate CSS selector specificity according to CSS spec
 * Returns [a, b, c] where:
 * a = number of IDs
 * b = number of classes, attributes, and pseudo-classes
 * c = number of type selectors and pseudo-elements
 */
function calculateSpecificity(selector) {
    // Remove pseudo-elements and clean selector
    const cleanSelector = selector
        .replace(/::?[\w-]+(\([^)]*\))?/g, match => {
            // Count pseudo-elements (::before, ::after) as type selectors
            if (match.startsWith('::')) {
                return ' PSEUDO_ELEMENT ';
            }
            // Count pseudo-classes (:hover, :focus) as classes
            return ' PSEUDO_CLASS ';
        })
        .replace(/\s+/g, ' ')
        .trim();

    let ids = 0;
    let classes = 0;
    let types = 0;

    // Count IDs
    ids += (cleanSelector.match(/#[\w-]+/g) || []).length;

    // Count classes and attributes
    classes += (cleanSelector.match(/\.[\w-]+/g) || []).length;
    classes += (cleanSelector.match(/\[[\w-]+[^[\]]*\]/g) || []).length;
    classes += (cleanSelector.match(/PSEUDO_CLASS/g) || []).length;

    // Count type selectors
    const typeMatches = cleanSelector
        .replace(/#[\w-]+/g, '') // Remove IDs
        .replace(/\.[\w-]+/g, '') // Remove classes
        .replace(/\[[\w-]+[^[\]]*\]/g, '') // Remove attributes
        .replace(/PSEUDO_CLASS/g, '') // Remove pseudo-classes
        .replace(/PSEUDO_ELEMENT/g, ' TYPE ') // Mark pseudo-elements as types
        .split(/\s+/)
        .filter(part => {
            const trimmed = part.trim();
            return trimmed &&
                   trimmed !== '>' &&
                   trimmed !== '+' &&
                   trimmed !== '~' &&
                   trimmed !== ',' &&
                   !trimmed.startsWith('#') &&
                   !trimmed.startsWith('.') &&
                   !trimmed.startsWith('[');
        });

    types += typeMatches.filter(match => match === 'TYPE').length;
    types += typeMatches.filter(match =>
        match !== 'TYPE' &&
        /^[a-zA-Z][\w-]*$/.test(match)
    ).length;

    return [ids, classes, types];
}

/**
 * Parse CSS and extract all selectors with their specificity
 */
function analyzeSpecificity(css) {
    const root = postcss.parse(css);
    const selectors = [];

    root.walkRules(rule => {
        rule.selectors.forEach(selector => {
            const specificity = calculateSpecificity(selector);
            const specificityValue = specificity[0] * 100 + specificity[1] * 10 + specificity[2];

            selectors.push({
                selector: selector.trim(),
                specificity,
                specificityValue,
            });
        });
    });

    return selectors;
}

/**
 * Group selectors by component based on class patterns
 */
function groupSelectorsByComponent(selectors) {
    const componentGroups = {};

    selectors.forEach(selectorInfo => {
        const { selector } = selectorInfo;

        // Extract base component name from k-* classes
        const componentMatch = selector.match(/\.k-([a-z]+)/);
        if (componentMatch) {
            const component = componentMatch[1];
            if (!componentGroups[component]) {
                componentGroups[component] = [];
            }
            componentGroups[component].push(selectorInfo);
        } else {
            // Group non-kendo selectors
            if (!componentGroups['__other__']) {
                componentGroups['__other__'] = [];
            }
            componentGroups['__other__'].push(selectorInfo);
        }
    });

    return componentGroups;
}


function createSpecificityMap(css) {
    const selectors = analyzeSpecificity(css);
    const componentGroups = groupSelectorsByComponent(selectors);
    return componentGroups;
}

module.exports = {
    calculateSpecificity,
    analyzeSpecificity,
    groupSelectorsByComponent,
    createSpecificityMap
};
