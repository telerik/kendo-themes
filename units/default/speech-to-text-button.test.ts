import "./theme.env.js";
import { SpeechToTextButton } from "../../packages/html/src/speech-to-text-button/speech-to-text-button.spec";
import { testKendoComponent } from "../utility";

const component = SpeechToTextButton.moduleName;
const group = component;
const className = null; // There are no styles applied to .k-speech-to-text-button

const dependencyClassNames = ["k-button"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
