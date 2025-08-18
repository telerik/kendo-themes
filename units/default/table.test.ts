import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Table } from "../../packages/html/src/table/table.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "table";
const group = component;
const className = Table.className;
const dependencyClassNames = [];
const expected = [
    "kendo-table-header-gradient", // Variable customizations work, but is used by another variable.
    "kendo-table-highlighted-bg", // Variable customizations work, but is used by another variable.
    "kendo-table-highlighted-font-weight", // Variable customizations work, but is used by another variable.
    "kendo-table-selected-highlighted-bg", // Variable customizations work, but is used by another variable.
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

  const tableSelectors = getSelectorsSpecificity(result.css, {
    filter: Table.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  tableSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Table);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Table.className, dependencyClassNames, [...expected, ...unexpected]);
