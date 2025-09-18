import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Gantt } from './gantt.spec';
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
GanttContent.moduleName = Gantt.moduleName;
GanttContent.folderName = Gantt.folderName;
