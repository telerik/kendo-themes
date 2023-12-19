import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

export const GRIDTABLE_CLASSNAME = `k-grid-table`;

export const GridTable = (
    props: KendoTableOptions &
        React.HTMLAttributes<HTMLTableElement>
) => (
    <Table
        size="medium"
        {...props}
        className={classNames(
            props.className,
            GRIDTABLE_CLASSNAME,
        )}
    >
        {props.children}
    </Table>
);
