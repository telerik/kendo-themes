import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
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
GanttTasksTable.moduleName = GANTT_MODULE_NAME;
GanttTasksTable.folderName = GANTT_FOLDER_NAME;
