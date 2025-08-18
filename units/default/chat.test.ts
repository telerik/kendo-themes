import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Chat } from "../../packages/html/src/chat/chat.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "chat";
const group = component;
const className = Chat.className;
const dependencyClassNames = ["k-input", "k-card", "k-svg-icon", "k-toolbar"];
const expected = [
    "kendo-chat-quick-reply-shadow-opacity", // Variable customizations work, but is used by another variable.
    "kendo-chat-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-chat-padding-y", // Variable customizations work, but is used by another variable.
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

  const chatSelectors = getSelectorsSpecificity(result.css, {
    filter: Chat.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  chatSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Chat);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Chat.className, dependencyClassNames, [...expected, ...unexpected]);
