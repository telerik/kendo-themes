import * as React from 'react';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { Table } from './table.spec';

const TABLE_HEADER_WRAP_CLASSNAME = 'k-table-header-wrap';

const states = [
    States.hover,
    States.focus,
    States.disabled
];

const options = {};

export type KendoTableHeaderWrapProps = {
    children?: React.ReactNode;
};

export type KendoTableHeaderWrapState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const TableHeaderWrap: KendoComponent<KendoTableHeaderWrapProps &
        KendoTableHeaderWrapState &
        React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTableHeaderWrapProps &
        KendoTableHeaderWrapState &
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
                TABLE_HEADER_WRAP_CLASSNAME,
                stateClassNames(TABLE_HEADER_WRAP_CLASSNAME, {
                    hover,
                    focus,
                    disabled
                })
            )}>
            {children}
        </div>
    );
};

TableHeaderWrap.states = states;
TableHeaderWrap.options = options;
TableHeaderWrap.className = TABLE_HEADER_WRAP_CLASSNAME;
TableHeaderWrap.defaultOptions = defaultOptions;
TableHeaderWrap.moduleName = Table.moduleName;
TableHeaderWrap.folderName = Table.folderName;

export default TableHeaderWrap;
