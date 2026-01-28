import React from 'react';
import { TreeviewGroup } from './treeview-group';
import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { TREEVIEW_FOLDER_NAME, TREEVIEW_MODULE_NAME } from './constants';
export const TREEVIEW_CLASSNAME = `k-treeview`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoTreeviewOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoTreeviewProps = KendoTreeviewOptions & {
    children?: React.ReactNode;
    dir?: 'ltr' | 'rtl';
};

export type KendoTreeviewState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
};

export const Treeview: KendoComponent<KendoTreeviewProps & KendoTreeviewState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTreeviewProps &
        KendoTreeviewState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        children,
        dir,
        ...other
    } = props;

    return (
        <div
            {...other}
            dir={dir}
            className={classNames(
                props.className,
                TREEVIEW_CLASSNAME,
                optionClassNames(TREEVIEW_CLASSNAME, {
                    size,
                })
            )}
        >
            <TreeviewGroup className="k-treeview-lines" dir={dir}>
                {React.Children.map(children, (child, index) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child, { dir, key: index } as React.Attributes)
                        : child
                )}
            </TreeviewGroup>
        </div>
    );
};

Treeview.states = states;
Treeview.options = options;
Treeview.className = TREEVIEW_CLASSNAME;
Treeview.defaultOptions = defaultOptions;
Treeview.moduleName = TREEVIEW_MODULE_NAME;
Treeview.folderName = TREEVIEW_FOLDER_NAME;

export default Treeview;
