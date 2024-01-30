import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

export const GANTTROWSTABLE_CLASSNAME = `k-gantt-rows`;

export const GanttRowsTable = (
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