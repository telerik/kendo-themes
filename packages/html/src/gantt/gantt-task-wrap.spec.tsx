import { classNames } from '../misc';

export const GANTTTASKWRAP_CLASSNAME = 'k-task-wrap';

const states = [];

const options = {};

export type KendoGanttTaskWrapProps = {
    type?: "single" | "milestone" | "summary";
};

export const GanttTaskWrap = (
    props: KendoGanttTaskWrapProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type = "single",
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GANTTTASKWRAP_CLASSNAME,
                {
                    [`k-milestone-wrap`]: type === "milestone",
                    [`k-summary-wrap`]: type === "summary"
                }
            )}>
        </div>
    );
};

GanttTaskWrap.states = states;
GanttTaskWrap.options = options;
GanttTaskWrap.className = GANTTTASKWRAP_CLASSNAME;

export default GanttTaskWrap;
