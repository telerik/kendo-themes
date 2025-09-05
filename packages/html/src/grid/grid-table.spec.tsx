import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
export const GRIDTABLE_CLASSNAME = `k-grid-table`;

export const GridTable: KendoComponent<KendoTableOptions & React.HTMLAttributes<HTMLTableElement>> = (
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

GridTable.className = GRIDTABLE_CLASSNAME;
GridTable.moduleName = "grid";
GridTable.folderName = "grid";
