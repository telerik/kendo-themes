import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { DropdownGrid } from "../../packages/html/src/dropdowngrid/dropdowngrid.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "dropdown-grid";
const group = component;
const className = DropdownGrid.className;
const dependencyClassNames = [
    "k-svg-icon",
    "k-input",
    "k-floating-label-container",
    "k-popup",
    "k-table"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/dropdowngrid/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/dropdowngrid/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/dropdowngrid/_layout.scss' as *;

    @include kendo-${component}-grid--layout();
    @include kendo-${component}-grid--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const dropdowngridSelectors = getSelectorsSpecificity(result.css, {
    filter: DropdownGrid.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  dropdowngridSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, DropdownGrid);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, DropdownGrid.className, dependencyClassNames, [...expected, ...unexpected], false);
