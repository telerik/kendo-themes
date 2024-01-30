import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

export const GANTTCOLUMNSTABLE_CLASSNAME = `k-gantt-columns`;

export const GanttColumnsTable = (
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