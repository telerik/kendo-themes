import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
export const GRIDFOOTERTABLE_CLASSNAME = `k-grid-footer-table`;

export const GridFooterTable: KendoComponent<KendoTableOptions & React.HTMLAttributes<HTMLTableElement>> = (
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

GridFooterTable.className = GRIDFOOTERTABLE_CLASSNAME;
GridFooterTable.moduleName = "grid";
GridFooterTable.folderName = "grid";
