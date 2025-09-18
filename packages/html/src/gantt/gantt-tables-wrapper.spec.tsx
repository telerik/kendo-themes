import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
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
GanttTables.moduleName = GANTT_MODULE_NAME;
GanttTables.folderName = GANTT_FOLDER_NAME;
