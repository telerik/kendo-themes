import * as React from 'react';
import { KendoComponent } from '../_types/component';
import { Table } from './table.spec';
import { classNames } from '../misc';

const className = `k-table-th`;

export type KendoTableThProps = {
    text?: string;
    colspan?: any;
    rowspan?: any;
};

export const TableTh: KendoComponent<KendoTableThProps &
    React.HTMLAttributes<HTMLTableCellElement>> = (
    props: KendoTableThProps &
    React.HTMLAttributes<HTMLTableCellElement>
) => {
    const {
        text,
        colspan,
        rowspan,
        ...other
    } = props;

    const textOrChildren = text
        ? text
        : props.children;

    return (
        <th
            colSpan={colspan}
            rowSpan={rowspan}
            {...other}
            className={classNames(
                props.className,
                className,
            )}
        >
            {textOrChildren}
        </th>
    );
};

TableTh.className = className;
TableTh.moduleName = Table.moduleName;
TableTh.folderName = Table.folderName;
