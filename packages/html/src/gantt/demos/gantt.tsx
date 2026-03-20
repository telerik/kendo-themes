import { GanttNormal } from '../templates/gantt-normal';
import { Gantt } from '../gantt.spec';

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
GanttDemo.className = Gantt.className;

export default GanttDemo;

