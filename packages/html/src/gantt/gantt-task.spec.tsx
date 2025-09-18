import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
export const GANTTTASK_CLASSNAME = 'k-task';

const states = [];

const options = {};

export type KendoGanttTaskProps = {
    type?: "single" | "milestone" | "summary";
};

const defaultOptions = {
    type: "single"
};

export const GanttTask: KendoComponent<KendoGanttTaskProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGanttTaskProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type = defaultOptions.type,
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GANTTTASK_CLASSNAME,
                {
                    [`k-task-single`]: type === "single",
                    [`k-task-milestone`]: type === "milestone",
                    [`k-task-summary`]: type === "summary"
                }
            )}>
        </div>
    );
};

GanttTask.states = states;
GanttTask.options = options;
GanttTask.className = GANTTTASK_CLASSNAME;
GanttTask.defaultOptions = defaultOptions;
GanttTask.moduleName = GANTT_MODULE_NAME;
GanttTask.folderName = GANTT_FOLDER_NAME;

export default GanttTask;
