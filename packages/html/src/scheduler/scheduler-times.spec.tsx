import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Scheduler } from './scheduler.spec';
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
SchedulerTimes.moduleName = Scheduler.moduleName;
SchedulerTimes.folderName = Scheduler.folderName;
