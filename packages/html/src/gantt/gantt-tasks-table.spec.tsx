import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
import { Gantt } from './gantt.spec';
export const GANTTTASKSTABLE_CLASSNAME = `k-gantt-tasks`;

export const GanttTasksTable: KendoComponent<KendoTableOptions & React.HTMLAttributes<HTMLTableElement>> = (
    props: KendoTableOptions &
        React.HTMLAttributes<HTMLTableElement>
) => (
    <Table
        size="medium"
        {...props}
        className={classNames(
            props.className,
            GANTTTASKSTABLE_CLASSNAME,
        )}
    >
        {props.children}
    </Table>
);

GanttTasksTable.className = GANTTTASKSTABLE_CLASSNAME;
GanttTasksTable.moduleName = Gantt.moduleName;
GanttTasksTable.folderName = Gantt.folderName;
