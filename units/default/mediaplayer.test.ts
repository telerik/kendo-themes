import "./theme.env.js";
import { MediaPlayer } from "../../packages/html/src/mediaplayer/mediaplayer.spec";
import { testKendoComponent } from "../utility";

const component = MediaPlayer.moduleName;
const group = "mediaplayer";
const className = MediaPlayer.className;

const dependencyClassNames = [
    "k-slider",
    "k-toolbar",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
