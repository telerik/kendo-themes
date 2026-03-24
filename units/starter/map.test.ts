import "./theme.env.js";
import { Map } from "../../packages/html/src/map/map.spec";
import { testKendoComponent } from "../utility";

const component = Map.moduleName;
const group = component;
const className = Map.className;

const dependencyClassNames = [
    "k-button",
    // "k-scroller", // no specific k-scroller class name; there are multiple km-{} classes
    "k-svg-icon"
];

const expected = [
    "kendo-map-zoom-control-button-padding-x" // Variable customizations work, but is used by another variable.
];
const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
