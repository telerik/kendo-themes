import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = 'k-scheduler-content';

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
