import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Grid } from "../../packages/html/src/grid/grid.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "grid";
const group = component;
const className = Grid.className;
const dependencyClassNames = [
    "k-progressbar",
    "k-button",
    "k-actions",
    "k-toolbar",
    "k-input",
    // "k-textbox",  // Empty selector for .k-textbox {}
    "k-checkbox",
    "k-radio",
    // "k-validator", // Empty selector for .k-validator {}
    // "k-autocomplete", // Empty selector for .k-autocomplete {}
    // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    "k-dropdownlist",
    "k-numerictextbox",
    "k-menu",
    "k-dialog",
    "k-pager",
    "k-chip",
    //" k-skeleton", // Placeholder-line @extends .k-skeleton
    "k-list",
    "k-table",
    "k-tabstrip"
];
const expected = [
    "kendo-grid-padding-x", // Variable customizations work, but is used by another variable.
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

  const gridSelectors = getSelectorsSpecificity(result.css, {
    filter: Grid.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  gridSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Grid);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Grid.className, dependencyClassNames, [...expected, ...unexpected]);
