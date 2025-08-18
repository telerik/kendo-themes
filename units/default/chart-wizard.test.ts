import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { ChartWizard } from "../../packages/html/src/chart-wizard/chart-wizard.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "chart-wizard";
const group = component;
const className = ChartWizard.className;
const dependencyClassNames = [
    "k-svg-icon",
    "k-window",
    "k-splitter",
    // "k-dataviz",
    "k-expander",
    "k-grid",
    "k-tabstrip",
    "k-listview",
    "k-form",
    // "k-combobox" // The .k-combobox selector is empty.
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

  const chartWizardSelectors = getSelectorsSpecificity(result.css, {
    filter: ChartWizard.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  chartWizardSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, ChartWizard);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, ChartWizard.className, dependencyClassNames, [...expected, ...unexpected]);
