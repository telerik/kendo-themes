import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
export const GRIDHEADERTABLE_CLASSNAME = `k-grid-header-table`;

export const GridHeaderTable: KendoComponent<KendoTableOptions & React.HTMLAttributes<HTMLTableElement>> = (
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

GridHeaderTable.className = GRIDHEADERTABLE_CLASSNAME;
GridHeaderTable.moduleName = "grid";
GridHeaderTable.folderName = "grid";
