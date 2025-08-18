import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { ImageEditor } from "../../packages/html/src/imageeditor/imageeditor.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "image-editor";
const group = component;
const className = ImageEditor.className;
const dependencyClassNames = [
    "k-toolbar",
    "k-form",
    // "k-dropdownlist", // .k-dropdownlist {} @extend .k-dropdown-list; .k-dropdown-list{} is empty;
    // "k-numerictextbox", // Empty selector for .k-numerictextbox {}
    "k-checkbox"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/imageeditor/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/imageeditor/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/imageeditor/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const imageeditorSelectors = getSelectorsSpecificity(result.css, {
    filter: ImageEditor.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  imageeditorSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, ImageEditor);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, ImageEditor.className, dependencyClassNames, [...expected, ...unexpected], false);
