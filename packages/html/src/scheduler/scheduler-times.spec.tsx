import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const className = 'k-scheduler-times';

/**
 * @aria {role="none"|\"presentation"} Times sidebar tables must have their semantics removed. The role propagates to child th/tr elements, resolving empty-table-header violations.
 */
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
SchedulerTimes.moduleName = SCHEDULER_MODULE_NAME;
SchedulerTimes.folderName = SCHEDULER_FOLDER_NAME;

