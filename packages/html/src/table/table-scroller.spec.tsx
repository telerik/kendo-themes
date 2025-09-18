import * as React from 'react';
import { KendoComponent } from '../_types/component';
import { TABLE_FOLDER_NAME, TABLE_MODULE_NAME } from './constants';
import { classNames } from '../misc';

const TABLE_SCROLLER_CLASSNAME = 'k-table-scroller';

const states = [];

const options = {};

export type KendoTableScrollerProps = {
    children?: React.ReactNode;
};

export type KendoTableScrollerState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const TableScroller: KendoComponent<KendoTableScrollerProps &
        KendoTableScrollerState &
        React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTableScrollerProps &
        KendoTableScrollerState &
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
                TABLE_SCROLLER_CLASSNAME
            )}>
            {children}
        </div>
    );
};

TableScroller.states = states;
TableScroller.options = options;
TableScroller.className = TABLE_SCROLLER_CLASSNAME;
TableScroller.defaultOptions = defaultOptions;
TableScroller.moduleName = TABLE_MODULE_NAME;
TableScroller.folderName = TABLE_FOLDER_NAME;

export default TableScroller;
