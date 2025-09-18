import * as React from 'react';
import { classNames, stateClassNames, States } from '../misc';
import { TableHeaderWrap } from './table-header-wrap.spec';
import Table from './table.spec';

import { KendoComponent } from '../_types/component';

const TABLE_HEADER_CLASSNAME = 'k-table-header';

const states = [
    States.hover,
    States.focus,
    States.disabled
];

const options = {};

export type KendoTableHeaderProps = {
    children?: React.ReactNode;
};

export type KendoTableHeaderState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const TableHeader: KendoComponent<KendoTableHeaderProps &
        KendoTableHeaderState &
        React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTableHeaderProps &
        KendoTableHeaderState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        hover,
        focus,
        disabled,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TABLE_HEADER_CLASSNAME,
                stateClassNames(TABLE_HEADER_CLASSNAME, {
                    hover,
                    focus,
                    disabled
                })
            )}>
            <TableHeaderWrap>
                <Table>{children}</Table>
            </TableHeaderWrap>
        </div>
    );
};

TableHeader.states = states;
TableHeader.options = options;
TableHeader.className = TABLE_HEADER_CLASSNAME;
TableHeader.defaultOptions = defaultOptions;
TableHeader.moduleName = Table.moduleName;
TableHeader.folderName = Table.folderName;

export default TableHeader;
