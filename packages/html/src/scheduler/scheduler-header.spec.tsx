import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const className = 'k-scheduler-header';

export const SchedulerHeader: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            className,
            props.className
        )}
    >
        <div className="k-scheduler-header-wrap">
            {props.children}
        </div>
    </div>
);

SchedulerHeader.className = className;
SchedulerHeader.moduleName = SCHEDULER_MODULE_NAME;
SchedulerHeader.folderName = SCHEDULER_FOLDER_NAME;
