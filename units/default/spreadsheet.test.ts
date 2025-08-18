import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Spreadsheet } from "../../packages/html/src/spreadsheet/spreadsheet.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "spreadsheet";
const group = component;
const className = Spreadsheet.className;
const dependencyClassNames = [
    "k-button",
    "k-checkbox",
    "k-radio",
    "k-colorpicker",
    // "k-combobox", // .k-combobox {} selector is empty
    // "k-datetimepicker", // .k-datetimepicker {} selector is empty
    // "k-dropdownlist", // .k-dropdownlist {} selector is empty
    "k-toolbar",
    "k-upload",
    "k-menu",
    "k-window",
    "k-tabstrip",
    "k-treeview",
    "k-svg-icon",
    "k-list"
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

  const spreadsheetSelectors = getSelectorsSpecificity(result.css, {
    filter: Spreadsheet.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  spreadsheetSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Spreadsheet);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Spreadsheet.className, dependencyClassNames, [...expected, ...unexpected]);
