import "./theme.env.js";
import { ListGroup } from "../../packages/html/src/listgroup/listgroup.spec";
import { testKendoComponent } from "../utility";

const component = ListGroup.moduleName;
const group = component;
const className = ListGroup.className;

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);


