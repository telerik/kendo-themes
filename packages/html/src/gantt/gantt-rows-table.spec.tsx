import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
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
GanttRowsTable.moduleName = GANTT_MODULE_NAME;
GanttRowsTable.folderName = GANTT_FOLDER_NAME;
