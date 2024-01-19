import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

export const GRIDHEADERTABLE_CLASSNAME = `k-grid-header-table`;

export const GridHeaderTable = (
    props: KendoTableOptions &
        React.HTMLAttributes<HTMLTableElement>
) => (
    <Table
        size="medium"
        {...props}
        className={classNames(
            props.className,
            GRIDHEADERTABLE_CLASSNAME,
        )}
    >
        {props.children}
    </Table>
);
