import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Orgchart } from "../../packages/html/src/orgchart/orgchart.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "orgchart";
const group = component;
const className = Orgchart.className;
const dependencyClassNames = [
    "k-svg-icon",
    "k-form",
    // "k-textbox", // .k-textbox {} selector is empty
    // "k-dropdownlist", // .k-dropdownlist {} @extend .k-dropdown-list; .k-dropdown-list{} is empty;
    "k-upload",
    "k-menu",
    "k-card",
    "k-window"
];
const expected = [
    "kendo-orgchart-spacer", // Variable customizations work, but is used by another variable.
    "kendo-orgchart-card-padding-y" // Variable customizations work, but is used by another variable.
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

  const orgchartSelectors = getSelectorsSpecificity(result.css, {
    filter: Orgchart.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  orgchartSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Orgchart);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Orgchart.className, dependencyClassNames, [...expected, ...unexpected]);
