import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Appbar } from "../../packages/html/src/appbar/appbar.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "appbar";
const group = component;
const className = Appbar.className;
const dependencyClassNames = [];
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

  const appbarSelectors = getSelectorsSpecificity(result.css, {
    filter: Appbar.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  appbarSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Appbar);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Appbar.className, dependencyClassNames, [...expected, ...unexpected]);
