import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { TileLayout } from "../../packages/html/src/tilelayout/tilelayout.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "tile-layout";
const group = component;
const className = TileLayout.className;
const dependencyClassNames = ["k-card", "k-svg-icon"];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/tilelayout/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/tilelayout/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/tilelayout/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const tilelayoutSelectors = getSelectorsSpecificity(result.css, {
    filter: TileLayout.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  tilelayoutSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, TileLayout);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, TileLayout.className, dependencyClassNames, [...expected, ...unexpected]);
