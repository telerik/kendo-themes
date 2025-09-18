import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
import { Gantt } from './gantt.spec';
export const GANTTROWSTABLE_CLASSNAME = `k-gantt-rows`;

export const GanttRowsTable: KendoComponent<KendoTableOptions & React.HTMLAttributes<HTMLTableElement>> = (
    props: KendoTableOptions &
        React.HTMLAttributes<HTMLTableElement>
) => (
    <Table
        size="medium"
        {...props}
        className={classNames(
            props.className,
            GANTTROWSTABLE_CLASSNAME,
        )}
    >
        {props.children}
    </Table>
);

GanttRowsTable.className = GANTTROWSTABLE_CLASSNAME;
GanttRowsTable.moduleName = Gantt.moduleName;
GanttRowsTable.folderName = Gantt.folderName;
