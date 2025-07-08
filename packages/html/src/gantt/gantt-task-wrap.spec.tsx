import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const GANTTTASKWRAP_CLASSNAME = 'k-task-wrap';

const states = [];

const options = {};

export type KendoGanttTaskWrapProps = {
    type?: "single" | "milestone" | "summary";
};

const defaultOptions = {
    type: "single"
};

export const GanttTaskWrap: KendoComponent<KendoGanttTaskWrapProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGanttTaskWrapProps &
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
GanttTaskWrap.defaultOptions = defaultOptions;

export default GanttTaskWrap;
