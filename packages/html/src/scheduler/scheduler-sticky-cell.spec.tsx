import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Scheduler } from './scheduler.spec';
const className = 'k-sticky-cell';

export const SchedulerStickyCell: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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

SchedulerStickyCell.className = className;
SchedulerStickyCell.moduleName = Scheduler.moduleName;
SchedulerStickyCell.folderName = Scheduler.folderName;
