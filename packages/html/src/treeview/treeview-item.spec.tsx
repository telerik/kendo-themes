/* eslint-disable no-nested-ternary */
import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { TreeviewGroup } from './treeview-group';
import { classNames, stateClassNames, States } from '../misc';
import TreeviewLeaf from './treeview-leaf';

export const TREEVIEWITEM_CLASSNAME = `k-treeview-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {};

const defaultProps = {};

export type KendoTreeviewItemProps = {
    leafClassName?: string;
    children?: JSX.Element | JSX.Element[];
    hasChildren?: boolean;
    expanded?: boolean;
    text?: string;
    showIcon?: boolean;
    icon?: string;
    showCheckbox?: boolean;
    checked?: boolean;
    top?: boolean;
    bottom?: boolean;
    dir?: 'ltr' | 'rtl';
};

export type KendoTreeviewItemState = { [K in (typeof states)[number]]?: boolean };

export const TreeviewItem = (
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
        top,
        bottom,
        dir,
        ...other
    } = props;

    const _hasChildren = hasChildren || children;

    const listChildren : JSX.Element[] = [];

    if (children) {
        if (Array.isArray(children)) {
            children.map((child, index) => {
                if ( child.type === TreeviewGroup) {
                    listChildren.push(
                        <TreeviewGroup {...child.props} dir={dir} key={index}>
                            {child.props.children}
                        </TreeviewGroup>
                    );
                }
            });
        } else {
            if ( children.type === TreeviewGroup) {
                listChildren.push(
                    <TreeviewGroup {...children.props} dir={dir}>
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
        >
            <span className={classNames(
                {
                    ["k-treeview-top"]: top,
                    ["k-treeview-bot"]: bottom,
                    ["k-treeview-mid"]: !top && !bottom,
                }
            )}>
                {_hasChildren && (
                    <span
                        className={classNames(
                            "k-treeview-toggle",
                            stateClassNames("k-treeview-toggle", { disabled })
                        )}>
                        <Icon icon={expanded ? 'caret-alt-down' : dir === 'rtl' ? 'caret-alt-left' : 'caret-alt-right'} />
                    </span>
                )}
                {showCheckbox && (
                    <Checkbox checked={checked} disabled={disabled} />
                )}
                <TreeviewLeaf
                    className={classNames(
                        leafClassName,
                        stateClassNames(leafClassName, { disabled })
                    )}
                    text={text}
                    showIcon={showIcon}
                    icon={icon}
                    hover={hover}
                    focus={focus}
                    selected={selected}
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
TreeviewItem.defaultProps = defaultProps;

export default TreeviewItem;
