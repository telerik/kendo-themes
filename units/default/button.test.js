require("./theme.env.js");
require("../utility"); // This will register the custom matcher
const { testKendoComponent, getSelectorsSpecificity, calculateSpecificityThreshold } = require("../utility");
const sass = require("sass");
const path = require("path");
const { describe, it, expect } = require("@jest/globals");

const component = "button";
const group = component;
const className = "k-button";

const dependencyClassNames = ["k-badge", "k-svg-icon"];

const expected = [
    "kendo-button-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-button-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-button-font-size", // Variable customizations work, but is used by another variable.
    "kendo-button-line-height", // Variable customizations work, but is used by another variable.
    "kendo-button-sm-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-md-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-lg-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-inner-calc-size", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

// Button specificity tests
describe("button specificity", () => {
    // Compile button styles at file scope
    const result = sass.compileString(
        `
    @use '../packages/${process.env.THEME}/scss/index.scss' as *;
    @include kendo-button--styles();
`,
        {
            loadPaths: [path.resolve(__dirname, "../../node_modules"), path.resolve(__dirname, "../../packages/default/scss")],
            sourceMap: true,
            sourceMapIncludeSources: true,
        }
    );

    const buttonSelectors = getSelectorsSpecificity(result.css, {
        filter: ".k-button",
        sourceMap: result.sourceMap,
    });

    // Test each selector for exact specificity match using calculated threshold as expected value
    buttonSelectors.forEach((selectorInfo) => {
        const { selector, specificityValue, sourceLocation } = selectorInfo;
        const expectedSpecificity = calculateSpecificityThreshold(selector, 0); // Use threshold as exact expected value

        it(`"${selector}"`, () => {
            expect(specificityValue).toHaveSpecificity(expectedSpecificity, sourceLocation);
        });
    });
});

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
