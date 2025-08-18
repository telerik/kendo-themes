import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Map } from "../../packages/html/src/map/map.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "map";
const group = component;
const className = Map.className;
const dependencyClassNames = [
    "k-button",
    // "k-scroller", // no specific k-scroller class name; there are multiple km-{} classes
    "k-svg-icon"
];
const expected = [
    "kendo-map-zoom-control-button-padding-x" // Variable customizations work, but is used by another variable.
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

  const mapSelectors = getSelectorsSpecificity(result.css, {
    filter: Map.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  mapSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Map);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Map.className, dependencyClassNames, [...expected, ...unexpected]);
