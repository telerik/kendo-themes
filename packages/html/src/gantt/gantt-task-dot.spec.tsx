import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
export const GANTTTASKWDOT_CLASSNAME = 'k-task-dot';

const states = [];

const options = {};

export type KendoGanttTaskDotProps = {
    position?: "start" | "end";
};

const defaultOptions = {
    position: "start"
};

export const GanttTaskDot: KendoComponent<KendoGanttTaskDotProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGanttTaskDotProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        position = defaultOptions.position,
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GANTTTASKWDOT_CLASSNAME,
                {
                    [`k-task-start`]: position === "start",
                    [`k-task-end`]: position === "end"
                }
            )}>
        </div>
    );
};

GanttTaskDot.states = states;
GanttTaskDot.options = options;
GanttTaskDot.className = GANTTTASKWDOT_CLASSNAME;
GanttTaskDot.defaultOptions = defaultOptions;
GanttTaskDot.moduleName = GANTT_MODULE_NAME;
GanttTaskDot.folderName = GANTT_FOLDER_NAME;

export default GanttTaskDot;
