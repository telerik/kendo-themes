import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { TreeviewGroup } from './treeview-group';
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
    children?: React.JSX.Element | React.JSX.Element[];
    hasChildren?: boolean;
    expanded?: boolean;
    text?: string;
    showIcon?: boolean;
    icon?: string;
    showCheckbox?: boolean;
    checked?: boolean;
    dir?: 'ltr' | 'rtl';
    level?: number;
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
        ...other
    } = props;

    const _hasChildren = hasChildren || children;

    const listChildren : React.JSX.Element[] = [];

    if (children) {
        if (Array.isArray(children)) {
            children.map((child, index) => {
                if ( child.type === TreeviewGroup) {
                    listChildren.push(
                        <TreeviewGroup {...child.props} dir={dir} level={level + 1} key={index}>
                            {child.props.children}
                        </TreeviewGroup>
                    );
                }
            });
        } else {
            if ( children.type === TreeviewGroup) {
                listChildren.push(
                    <TreeviewGroup {...children.props} dir={dir} level={level + 1}>
                        {children.props.children}
                    </TreeviewGroup>
                );
            }
        }
    }

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TREEVIEWITEM_CLASSNAME
            )}
            style={{ '--kendo-treeview-level': level } as React.CSSProperties}
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
                    <Checkbox checked={checked} disabled={disabled} />
                )}
                <TreeviewLeaf
                    className={leafClassName}
                    text={text}
                    showIcon={showIcon}
                    icon={icon}
                />
            </span>
            {expanded && _hasChildren && (
                <>
                    {listChildren}
                </>
            )}
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
