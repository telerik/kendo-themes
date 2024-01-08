import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

export const GANTTTASKSTABLE_CLASSNAME = `k-gantt-tasks`;

export const GanttTasksTable = (
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