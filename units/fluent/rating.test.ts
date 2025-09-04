import "./theme.env.js";
import { Rating } from "../../packages/html/src/rating/rating.spec";
import { testKendoComponent } from "../utility";

const component = Rating.moduleName;
const group = component;
const className = Rating.className;

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
