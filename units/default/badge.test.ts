import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Badge } from "../../packages/html/src/badge/badge.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "badge";
const group = component;
const className = Badge.className;
const dependencyClassNames = ["k-svg-icon"];
const expected = [
    "kendo-badge-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-badge-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-badge-font-size", // Variable customizations work, but is used by another variable.
    "kendo-badge-line-height", // Variable customizations work, but is used by another variable.
    "kendo-badge-min-width", // Variable customizations work, but is used by another variable.
];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/${component}/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/${component}/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/${component}/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const badgeSelectors = getSelectorsSpecificity(result.css, {
    filter: Badge.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  badgeSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Badge);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Badge.className, dependencyClassNames, [...expected, ...unexpected]);
