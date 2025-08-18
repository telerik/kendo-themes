import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { MaskedTextbox } from "../../packages/html/src/maskedtextbox/maskedtextbox.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "masked-textbox";
const group = component;
const className = MaskedTextbox.className;
const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-svg-icon"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/maskedtextbox/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/maskedtextbox/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/maskedtextbox/_layout.scss' as *;

    @include kendo-masked-textbox--layout();
    @include kendo-masked-textbox--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const maskedTextboxSelectors = getSelectorsSpecificity(result.css, {
    filter: MaskedTextbox.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  maskedTextboxSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, MaskedTextbox);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, MaskedTextbox.className, dependencyClassNames, [...expected, ...unexpected], false);
