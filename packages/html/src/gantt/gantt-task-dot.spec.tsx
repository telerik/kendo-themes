import { classNames } from '../misc';

export const GANTTTASKWDOT_CLASSNAME = 'k-task-dot';

const states = [];

const options = {};

export type KendoGanttTaskDotProps = {
    position?: "start" | "end";
};

const defaultOptions = {
    position: "start"
};

export const GanttTaskDot = (
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

export default GanttTaskDot;
