import { classNames } from '../misc';

export const GANTTLINE_CLASSNAME = 'k-gantt-line';

const states = [];

const options = {};

export type KendoGanttLineProps = {
    orientation?: "horizontal" | "vertical";
};

const defaultProps = {
    orientation: "horizontal"
};

export const GanttLine = (
    props: KendoGanttLineProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultProps.orientation,
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
GanttLine.defaultProps = defaultProps;

export default GanttLine;