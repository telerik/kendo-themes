import { classNames } from '../misc';

const className = 'k-scheduler-group';

const states = [];

const options = {};

const defaultOptions = {
    orientation: "horizontal"
};

export type KendoSchedulerGroupProps = {
    orientation?: "horizontal" | "vertical";
};

export const SchedulerGroup = (
    props: KendoSchedulerGroupProps &
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
                className,
                props.className,
                {
                    'k-group-horizontal': orientation === 'horizontal',
                }
            )}
        >
            {props.children}
        </div>
    );
};

SchedulerGroup.states = states;
SchedulerGroup.options = options;
SchedulerGroup.defaultOptions = defaultOptions;
SchedulerGroup.className = className;

export default SchedulerGroup;
