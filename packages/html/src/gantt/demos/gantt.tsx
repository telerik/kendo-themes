import { GanttNormal } from '../templates/gantt-normal';

const options = {};
const states = [];
const variants = [];
const defaults = {};
const modifiers = [];

export const GanttDemo = () => {
  return (
    <GanttNormal flexBasis="40%" gridContentHeight="197px" style={{ width: "90%", height: "367px" }} />
  );
};


GanttDemo.options = options;
GanttDemo.states = states;
GanttDemo.variants = variants;
GanttDemo.defaultOptions = defaults;
GanttDemo.modifiers = modifiers;

export default GanttDemo;

