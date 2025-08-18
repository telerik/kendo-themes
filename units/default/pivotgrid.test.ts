import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { PivotGrid } from "../../packages/html/src/pivotgrid/pivotgrid.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "pivotgrid";
const group = component;
const className = PivotGrid.className;
const dependencyClassNames = [
    "k-dialog",
    "k-treeview",
    "k-grid",
    "k-svg-icon",
    "k-list"
];
const expected = [
    "kendo-pivotgrid-configurator-shadow" // Variable customizations work, but is used by another variable.
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

  const pivotgridSelectors = getSelectorsSpecificity(result.css, {
    filter: PivotGrid.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  pivotgridSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, PivotGrid);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, PivotGrid.className, dependencyClassNames, [...expected, ...unexpected]);
