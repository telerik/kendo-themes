import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

export const GRIDFOOTERTABLE_CLASSNAME = `k-grid-footer-table`;

export const GridFooterTable = (
    props: KendoTableOptions &
        React.HTMLAttributes<HTMLTableElement>
) => (
    <Table
        size="medium"
        {...props}
        className={classNames(
            props.className,
            GRIDFOOTERTABLE_CLASSNAME,
        )}
    >
        {props.children}
    </Table>
);
