import { classNames } from '../misc';

export const GANTTTASK_CLASSNAME = 'k-task';

const states = [];

const options = {};

export type KendoGanttTaskProps = {
    type?: "single" | "milestone" | "summary";
};

const defaultProps = {
    type: "single"
};

export const GanttTask = (
    props: KendoGanttTaskProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type = defaultProps.type,
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
GanttTask.defaultProps = defaultProps;

export default GanttTask;