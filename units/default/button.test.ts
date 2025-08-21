import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold, calculateSpecificityThresholdWithBreakdown, formatSpecificityBreakdown } from "../specificity-analyzer";
import { Button } from "../../packages/html/src/button/button.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "button";
const group = component;
const className = Button.className;
const dependencyClassNames = ["k-badge", "k-svg-icon"];
const expected = [
    "kendo-button-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-inner-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-border-width", // Variable customizations work, but is used by another variable.
];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/button/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/button/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/button/_layout.scss' as *;

    @include kendo-button--layout();
    @include kendo-button--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const buttonSelectors = getSelectorsSpecificity(result.css, {
    filter: Button.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  buttonSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Button);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        // Get detailed breakdown for debugging when test fails
        const result = calculateSpecificityThresholdWithBreakdown(selector, Button);
        const breakdownInfo = formatSpecificityBreakdown(result.breakdown);

        throw new Error(
          `${error.message}\n` +
          `Source: ${sourceLocation}\n` +
          `\nSpecificity Breakdown:\n${breakdownInfo}`
        );
      }
    });
  });
});

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
