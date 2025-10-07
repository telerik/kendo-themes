import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
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
SchedulerStickyCell.moduleName = SCHEDULER_MODULE_NAME;
SchedulerStickyCell.folderName = SCHEDULER_FOLDER_NAME;
