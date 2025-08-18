import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { MenuButton } from "../../packages/html/src/menu-button/menu-button.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "menu-button";
const group = component;
const className = MenuButton.className;
const dependencyClassNames = ["k-button", "k-menu"];
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

  const menuButtonSelectors = getSelectorsSpecificity(result.css, {
    filter: MenuButton.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  menuButtonSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, MenuButton);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, MenuButton.className, dependencyClassNames, [...expected, ...unexpected]);
