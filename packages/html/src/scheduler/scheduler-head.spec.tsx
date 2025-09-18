import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Scheduler } from './scheduler.spec';
const className = 'k-scheduler-head';

export const SchedulerHead: KendoComponent<React.HTMLAttributes<HTMLDivElement> & { as: 'div' } | React.HTMLAttributes<HTMLTableRowElement> & { as: 'tr' }> = (
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

SchedulerHead.className = className;
SchedulerHead.moduleName = Scheduler.moduleName;
SchedulerHead.folderName = Scheduler.folderName;
