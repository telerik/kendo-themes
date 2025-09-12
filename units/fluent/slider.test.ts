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

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
