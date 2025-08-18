import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { DateRangePicker } from "../../packages/html/src/daterangepicker/daterangepicker.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "date-range-picker";
const group = component;
const className = DateRangePicker.className;
const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-popup",
    "k-svg-icon"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/daterangepicker/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/daterangepicker/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/daterangepicker/_layout.scss' as *;

    @include kendo-date-range-picker--layout();
    @include kendo-date-range-picker--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const dateRangePickerSelectors = getSelectorsSpecificity(result.css, {
    filter: DateRangePicker.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  dateRangePickerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, DateRangePicker);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, DateRangePicker.className, dependencyClassNames, [...expected, ...unexpected], false);
