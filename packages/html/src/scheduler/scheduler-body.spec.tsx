import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const className = 'k-scheduler-body';

/**
 * @aria {aria-live="polite"} The new date of the Scheduler view will be announced upon navigation to a new time span or view type.
 * @aria {aria-label} The <select> element visible on the toolbar on small screens must have its aria-label set.
 */
export const SchedulerBody: KendoComponent<React.HTMLAttributes<HTMLDivElement> & { as: 'div' } | React.HTMLAttributes<HTMLTableRowElement> & { as: 'tr' }> = (
    props: React.HTMLAttributes<HTMLDivElement> & { as: 'div' }
    | React.HTMLAttributes<HTMLTableRowElement> & { as: 'tr' }
) => {
    const {
        as: Component = 'div',
        ...other
    } = props;

    return (
        <Component
            {...other}
            className={classNames(
                className,
                props.className
            )}
        >
            {props.children}
        </Component>
    );
};

SchedulerBody.className = className;
SchedulerBody.moduleName = SCHEDULER_MODULE_NAME;
SchedulerBody.folderName = SCHEDULER_FOLDER_NAME;
