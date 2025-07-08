import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
export const GANTTCOLUMNSTABLE_CLASSNAME = `k-gantt-columns`;

export const GanttColumnsTable: KendoComponent<KendoTableOptions & React.HTMLAttributes<HTMLTableElement>> = (
    props: KendoTableOptions &
        React.HTMLAttributes<HTMLTableElement>
) => (
    <Table
        size="medium"
        {...props}
        className={classNames(
            props.className,
            GANTTCOLUMNSTABLE_CLASSNAME,
        )}
    >
        {props.children}
    </Table>
);

GanttColumnsTable.className = GANTTCOLUMNSTABLE_CLASSNAME;
