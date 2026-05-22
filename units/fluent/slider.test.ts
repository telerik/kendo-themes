import "./theme.env.js";
import { Slider } from "../../packages/html/src/slider/slider.spec";
import { testKendoComponent } from "../utility";

const component = Slider.moduleName;
const group = component;
const className = Slider.className;

const dependencyClassNames = [
    "k-button",
    "k-tooltip",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

// $kendo-slider-thumb-transition-speed and $kendo-slider-thumb-transition-function
// feed their respective draghandle counterparts and are not used directly in CSS output.
// When both thumb and draghandle vars are configured independently, the draghandle test
// value overrides the thumb value so thumb test values never appear in output.
testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected, "kendo-slider-thumb-transition-speed", "kendo-slider-thumb-transition-function"]);
