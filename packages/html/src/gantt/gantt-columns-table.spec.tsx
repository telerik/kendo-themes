import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
export const GANTTCOLUMNSTABLE_CLASSNAME = `k-gantt-columns`;

/**
 * @aria {aria-label} The view selector dropdown must have an accessible name.
 * @aria {role="presentation"} The columns grid is presentational.
 * @aria {aria-hidden="true"} The current time marker is decorative.
 * @aria {aria-hidden="true"} Resize handles are decorative.
 * @aria {aria-label} Drag cells must have an accessible name.
 */
export const GanttColumnsTable: KendoComponent<KendoTableOptions & React.HTMLAttributes<HTMLTableElement>> = (
    props: KendoTableOptions &
        React.HTMLAttributes<HTMLTableElement>
) => (
    <Table
        {...props}
        className={classNames(
            props.className,
            GANTTCOLUMNSTABLE_CLASSNAME,
        )}
        role="presentation"
    >
        {props.children}
    </Table>
);

GanttColumnsTable.className = GANTTCOLUMNSTABLE_CLASSNAME;
GanttColumnsTable.moduleName = GANTT_MODULE_NAME;
GanttColumnsTable.folderName = GANTT_FOLDER_NAME;

