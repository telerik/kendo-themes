import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
export const GANTTTASK_CLASSNAME = 'k-task';

const states = [];

const options = {};

export type KendoGanttTaskProps = {
    type?: "single" | "milestone" | "summary";
    ariaLevel?: number;
};

const defaultOptions = {
    type: "single"
};

/**
 * @aria {aria-hidden="true"} The progress drag handle is decorative.
 * @ux {Bar representation} Renders the task as a horizontal bar whose width represents duration.
 * @ux {Drag} The bar can be dragged horizontally to change the task start date.
 * @ux {Resize} Dragging the bar's right edge changes the task end date.
 * @ux {Progress handle} A drag handle inside the bar adjusts the completion percentage.
 */
export const GanttTask: KendoComponent<KendoGanttTaskProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGanttTaskProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type = defaultOptions.type,
        ariaLevel,
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
            )}
            role="treeitem"
            {...(ariaLevel !== undefined && { 'aria-level': ariaLevel })}>
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
