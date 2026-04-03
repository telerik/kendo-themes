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
            <TreeviewGroup className="k-treeview-lines" role="tree" dir={dir}>
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

/**
 * @ariaSpec
 * Treeview implements the WAI-ARIA tree pattern.
 *
 * - Root list (.k-treeview-lines): role="tree"
 * - Child groups: role="group"
 * - Items: role="treeitem" with aria-expanded, aria-selected, aria-checked
 * - Checkboxes: aria-label matching item text, tabindex=-1 (not keyboard-focusable)
 */
Treeview.ariaSpec = {
    selector: '.k-treeview',
    rules: [
        { selector: '.k-treeview-lines', attribute: 'role=tree', usage: 'The root list element of the treeview.' },
        { selector: '.k-treeview-group:not(.k-treeview-lines)', attribute: 'role=group', usage: 'The ul element that wraps child nodes.' },
        { selector: '.k-treeview-item', attribute: 'role=treeitem', usage: 'The li element rendered for a tree node.' },
        { selector: '.k-treeview-item', attribute: 'aria-expanded=true/false (when present)', usage: 'Announces the expanded state of the node.' },
        { selector: '.k-treeview-item', attribute: 'aria-checked=true/false (when present)', usage: 'Announces the checked state of the node when checkboxes are enabled.' },
        { selector: '.k-treeview-item', attribute: 'aria-selected=true (when present)', usage: 'Announces the selected state of the node when selection is enabled.' },
        { selector: '.k-treeview-item .k-checkbox', attribute: 'aria-label', usage: 'The checkbox input must have an accessible name matching the treeview item text.' },
        { selector: '.k-treeview-item .k-checkbox', attribute: 'tabindex=-1', usage: 'The checkbox input must not be in the tab order. Keyboard interaction is handled by the treeitem.' },
    ]
};

export default Treeview;
