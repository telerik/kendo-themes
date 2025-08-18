import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { PanelBar } from "../../packages/html/src/panelbar/panelbar.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "panelbar";
const group = component;
const className = PanelBar.className;
const dependencyClassNames = ["k-svg-icon", "k-list"];
const expected = [
    "kendo-panelbar-item-level-count", // Variable customizations work, but is used by another variable.
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

  const panelbarSelectors = getSelectorsSpecificity(result.css, {
    filter: PanelBar.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  panelbarSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, PanelBar);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, PanelBar.className, dependencyClassNames, [...expected, ...unexpected]);
