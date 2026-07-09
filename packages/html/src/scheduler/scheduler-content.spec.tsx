import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const className = 'k-scheduler-content';

/**
 * @aria {aria-selected} Used to signify the currently selected row in Agenda view.
 * @aria {role="rowheader"} Must have role explicitly set as it has been removed by the <table> role set (none/presentation).
 * @aria {role="gridcell"} Must have role explicitly set as it has been removed by the <table> role set (none/presentation).
 * @aria {tabindex="0"} Scrollable elements need to be focusable to ensure scrolling with arrow keys is available (does not apply to agenda view).
 */
export const SchedulerContent: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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

SchedulerContent.className = className;
SchedulerContent.moduleName = SCHEDULER_MODULE_NAME;
SchedulerContent.folderName = SCHEDULER_FOLDER_NAME;

