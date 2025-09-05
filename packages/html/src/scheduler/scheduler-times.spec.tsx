import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = 'k-scheduler-times';

export const SchedulerTimes: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            className,
            props.className
        )}
    >
        {props.children}
    </div>
);

SchedulerTimes.className = className;
SchedulerTimes.moduleName = "scheduler";
SchedulerTimes.folderName = "scheduler";
