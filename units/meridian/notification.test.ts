import "./theme.env.js";
import { Notification } from "../../packages/html/src/notification/notification.spec";
import { testKendoComponent } from "../utility";

const component = Notification.moduleName;
const group = component;
const className = Notification.className;

const dependencyClassNames = ["k-popup", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
