import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { MediaPlayer } from "../../packages/html/src/mediaplayer/mediaplayer.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "media-player";
const group = component;
const className = MediaPlayer.className;
const dependencyClassNames = [
    "k-slider",
    "k-toolbar",
    "k-svg-icon"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/mediaplayer/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/mediaplayer/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/mediaplayer/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const mediaplayerSelectors = getSelectorsSpecificity(result.css, {
    filter: MediaPlayer.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  mediaplayerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, MediaPlayer);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, MediaPlayer.className, dependencyClassNames, [...expected, ...unexpected]);
