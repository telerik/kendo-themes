import { classNames } from '../misc';

const className = 'k-scheduler-group';

const states = [];

const options = {};

export type KendoSchedulerGroupProps = {
    orientation?: "horizontal" | "vertical";
};

export const SchedulerGroup = (
    props: KendoSchedulerGroupProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = "horizontal",
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
SchedulerGroup.className = className;

export default SchedulerGroup;
