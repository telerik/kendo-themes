import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
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
