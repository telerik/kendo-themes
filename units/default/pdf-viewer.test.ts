import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { PDFViewer } from "../../packages/html/src/pdf-viewer/pdf-viewer.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "pdf-viewer";
const group = component;
const className = PDFViewer.className;
const dependencyClassNames = [
    // "k-combobox", // The .k-combobox selector is empty.
    "k-toolbar",
    "k-dialog",
    "k-pager",
    "k-svg-icon",
    "k-external-dropzone", // The dependency is to kendo-dropzone--styles()
    "k-window"
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

  const pdfViewerSelectors = getSelectorsSpecificity(result.css, {
    filter: PDFViewer.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  pdfViewerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, PDFViewer);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, PDFViewer.className, dependencyClassNames, [...expected, ...unexpected]);
