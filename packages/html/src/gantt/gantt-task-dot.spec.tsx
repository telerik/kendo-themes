import { classNames } from '../misc';

export const GANTTTASKWDOT_CLASSNAME = 'k-task-dot';

const states = [];

const options = {};

export type KendoGanttTaskDotProps = {
    position?: "start" | "end";
};

export const GanttTaskDot = (
    props: KendoGanttTaskDotProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        position = "start",
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

export default GanttTaskDot;
