import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Pager } from "../../packages/html/src/pager/pager.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "pager";
const group = component;
const className = Pager.className;
const dependencyClassNames = [
    "k-dropdownlist",
    "k-svg-icon",
    "k-button"
];
const expected = [
    "kendo-pager-padding-x", // Variable customizations works, but is used by another variable.
    "kendo-pager-item-border-width" // Variable customizations work, but is used for calculations.
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

  const pagerSelectors = getSelectorsSpecificity(result.css, {
    filter: Pager.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  pagerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Pager);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Pager.className, dependencyClassNames, [...expected, ...unexpected]);
