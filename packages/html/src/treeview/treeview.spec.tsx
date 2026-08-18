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

/**
 * @aria {role="tree"} The root list element of the treeview.
 * @aria {role="group"} The ul element that wraps child nodes.
 * @ux {Expand / Collapse} Nodes with children can be expanded to reveal them.
 * @ux {Selection} A node is selected by clicking its label.
 * @ux {Multi-select} Multiple nodes can be selected with Ctrl/Shift click.
 * @ux {Checkboxes} Optional checkboxes provide hierarchical multi-selection with parent/child propagation.
 * @ux {Drag and drop} Nodes can be dragged to a new position within the tree.
 */
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
 * @keyboard {Enter} Selects the focused tree view item when the selection mode is single or multiple. When the selection mode is multiple and there are other selected items, they get deselected.
 * @keyboard {Space} Checks the checkbox of the TreeView node.
 * @keyboard {ArrowUp} Goes to the previous tree node. The focus is moved to the previous node and its tabindex is set to `0`.
 * @keyboard {ArrowDown} Goes to the next tree node. The focus is moved to the next node and its tabindex is set to `0`.
 * @keyboard {ArrowLeft} If the node is expanded, collapses it and the focus remains on the item. If the node is collapsed, the focus is moved to its parent.
 * @keyboard {ArrowRight} If the node is collapsed, expands it and the focus remains on the item. If the node is expanded, the focus is moved to the first child node.
 * @keyboard {Home} Moves the focus to the first node in the tree without opening or closing a node.
 * @keyboard {End} Moves the focus to the last node in the tree that is focusable without opening a node.
 * @keyboard {Control/Cmd(Mac) + Enter} Selects the focused item. When the item is already selected, it gets deselected.
 * @keyboard {Printable Characters} Typing `M` or any other printable character focuses the next or the first item in the list.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-1/treeview-1a.html WAI-ARIA Authoring Practices: File Directory Treeview Example
 */

export default Treeview;
