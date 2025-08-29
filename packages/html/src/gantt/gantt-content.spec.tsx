import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = `k-gantt-content`;

export const GanttContent: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}>
        {props.children}
    </div>
);

GanttContent.className = className;
