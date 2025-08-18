import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Filter } from "../../packages/html/src/filter/filter.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "filter";
const group = component;
const className = Filter.className;
const dependencyClassNames = [
    "k-button",
    "k-input",
    "k-checkbox",
    // "k-datetimepicker", // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    "k-dropdownlist",
    // "k-numerictextbox", // Empty selector for .k-numerictextbox {}
    "k-toolbar"
];
const expected = [];
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

  const filterSelectors = getSelectorsSpecificity(result.css, {
    filter: Filter.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  filterSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Filter);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Filter.className, dependencyClassNames, [...expected, ...unexpected]);
