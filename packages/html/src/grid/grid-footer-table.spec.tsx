import { classNames } from '../misc';
import { Table, KendoTableOptions } from '../table';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
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
GridFooterTable.moduleName = GRID_MODULE_NAME;
GridFooterTable.folderName = GRID_FOLDER_NAME;
