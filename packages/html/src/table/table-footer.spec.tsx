import * as React from 'react';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';

const TABLE_FOOTER_CLASSNAME = 'k-table-footer';

const states = [];

const options = {};

export type KendoTableFooterProps = {
    children?: React.ReactNode;
};

export type KendoTableFooterState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const TableFooter: KendoComponent<KendoTableFooterProps &
        KendoTableFooterState &
        React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTableFooterProps &
        KendoTableFooterState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TABLE_FOOTER_CLASSNAME
            )}>
            {children}
        </div>
    );
};

TableFooter.states = states;
TableFooter.options = options;
TableFooter.className = TABLE_FOOTER_CLASSNAME;
TableFooter.defaultOptions = defaultOptions;
TableFooter.moduleName = "table";
TableFooter.folderName = "table";

export default TableFooter;
