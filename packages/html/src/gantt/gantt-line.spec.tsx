import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Gantt } from './gantt.spec';
export const GANTTLINE_CLASSNAME = 'k-gantt-line';

const states = [];

const options = {};

export type KendoGanttLineProps = {
    orientation?: "horizontal" | "vertical";
};

const defaultOptions = {
    orientation: "horizontal"
};

export const GanttLine: KendoComponent<KendoGanttLineProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGanttLineProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultOptions.orientation,
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GANTTLINE_CLASSNAME,
                {
                    [`k-gantt-line-h`]: orientation === "horizontal",
                    [`k-gantt-line-v`]: orientation === "vertical"
                }
            )}>
        </div>
    );
};

GanttLine.states = states;
GanttLine.options = options;
GanttLine.className = GANTTLINE_CLASSNAME;
GanttLine.defaultOptions = defaultOptions;
GanttLine.moduleName = Gantt.moduleName;
GanttLine.folderName = Gantt.folderName;

export default GanttLine;
