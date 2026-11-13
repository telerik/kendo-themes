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

const unexpected = [
    "kendo-slider-thumb-transition-speed", // Default value of $kendo-slider-draghandle-transition-speed.
    "kendo-slider-thumb-transition-function" // Default value of $kendo-slider-draghandle-transition-function.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
