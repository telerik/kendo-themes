import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = 'k-scheduler-group';

const states = [];

const options = {};

const defaultOptions = {
    orientation: "horizontal"
};

export type KendoSchedulerGroupProps = {
    orientation?: "horizontal" | "vertical";
};

export const SchedulerGroup: KendoComponent<KendoSchedulerGroupProps & React.HTMLAttributes<HTMLDivElement>> = (
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
SchedulerGroup.moduleName = "scheduler";
SchedulerGroup.folderName = "scheduler";

export default SchedulerGroup;
