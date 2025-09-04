import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = `k-gantt-tables`;

export const GanttTables: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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

GanttTables.className = className;
GanttTables.moduleName = "gantt";
GanttTables.folderName = "gantt";
