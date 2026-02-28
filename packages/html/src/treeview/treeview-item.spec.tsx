import React from 'react';
import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';
import TreeviewLeaf from './treeview-leaf';

import { KendoComponent } from '../_types/component';
import { TREEVIEW_FOLDER_NAME, TREEVIEW_MODULE_NAME } from './constants';
export const TREEVIEWITEM_CLASSNAME = `k-treeview-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {};

const defaultOptions = {};

export type KendoTreeviewItemProps = {
    leafClassName?: string;
    children?: React.ReactNode;
    hasChildren?: boolean;
    expanded?: boolean;
    text?: string;
    showIcon?: boolean;
    icon?: string;
    showCheckbox?: boolean;
    checked?: boolean;
    dir?: 'ltr' | 'rtl';
    level?: number;
    /** @aria aria-selected="true" when node is selected */
    ariaSelected?: boolean;
};

export type KendoTreeviewItemState = { [K in (typeof states)[number]]?: boolean };

export const TreeviewItem: KendoComponent<KendoTreeviewItemProps & KendoTreeviewItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoTreeviewItemProps &
        KendoTreeviewItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        leafClassName,
        children,
        hasChildren,
        expanded,
        text,
        showIcon,
        icon,
        showCheckbox,
        checked,
        hover,
        focus,
        selected,
        disabled,
        dir,
        level = 1,
        ariaSelected,
        ...other
    } = props;

    const _hasChildren = hasChildren || children;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TREEVIEWITEM_CLASSNAME
            )}
            style={{ '--kendo-treeview-level': level } as React.CSSProperties}
            role="treeitem"
            aria-expanded={_hasChildren ? (expanded ? 'true' : 'false') : undefined}
            aria-checked={showCheckbox ? (checked ? 'true' : 'false') : undefined}
            aria-selected={ariaSelected ? 'true' : undefined}
            aria-disabled={disabled ? 'true' : undefined}
        >
            <span
                className={classNames(
                    "k-treeview-item-content",
                    stateClassNames("k-treeview-item-content", {
                        hover,
                        focus,
                        selected,
                        disabled
                    })
                )}
            >
                {_hasChildren && (
                    <span
                        className={classNames(
                            "k-treeview-toggle",
                            stateClassNames("k-treeview-toggle", { disabled })
                        )}>
                        <Icon icon={expanded ? 'chevron-down' : dir === 'rtl' ? 'chevron-left' : 'chevron-right'} />
                    </span>
                )}
                {showCheckbox && (
                    <Checkbox checked={checked} disabled={disabled} aria-label={text} tabIndex={-1} />
                )}
                <TreeviewLeaf
                    className={leafClassName}
                    text={text}
                    showIcon={showIcon}
                    icon={icon}
                />
            </span>
            {expanded && _hasChildren &&
                React.Children.map(children, (child, index) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child, { dir, level: level + 1, key: index } as React.Attributes)
                        : child
                )
            }
        </li>
    );
};

TreeviewItem.states = states;
TreeviewItem.options = options;
TreeviewItem.className = TREEVIEWITEM_CLASSNAME;
TreeviewItem.defaultOptions = defaultOptions;
TreeviewItem.moduleName = TREEVIEW_MODULE_NAME;
TreeviewItem.folderName = TREEVIEW_FOLDER_NAME;

export default TreeviewItem;
