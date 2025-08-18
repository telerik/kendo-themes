import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { DropdownList } from "../../packages/html/src/dropdownlist/dropdownlist.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "dropdown-list";
const group = component;
const className = DropdownList.className;
const dependencyClassNames = [
    "k-input",
    "k-popup",
    "k-list",
    "k-floating-label-container"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/dropdownlist/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/dropdownlist/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/dropdownlist/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const dropdownlistSelectors = getSelectorsSpecificity(result.css, {
    filter: DropdownList.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  dropdownlistSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, DropdownList);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, DropdownList.className, dependencyClassNames, [...expected, ...unexpected], false);
