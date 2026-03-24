import "./theme.env.js";
import { Captcha } from "../../packages/html/src/captcha/captcha.spec";
import { testKendoComponent } from "../utility";

const component = Captcha.moduleName;
const group = component;
const className = Captcha.className;

const dependencyClassNames = [
    "k-input",
    "k-button",
    "k-svg-icon",
    // "k-textbox", - Textbox selector has no styles.
    "k-slider",
];

const expected = [
    "kendo-captcha-spacer", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
