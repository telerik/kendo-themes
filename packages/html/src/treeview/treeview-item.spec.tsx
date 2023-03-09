import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../utils-new';
import TreeviewLeaf from './treeview-leaf';

export const TREEVIEWITEM_CLASSNAME = `k-treeview-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled,
];

const options = {};

export type KendoTreeviewItemProps = {
    leafClassName?: string;
    hasChildren?: boolean;
    expanded?: boolean;
    text?: string;
    showIcon?: boolean;
    icon?: string;
    showCheckbox?: boolean;
    checked?: boolean;
};

export type KendoTreeviewItemState = { [K in (typeof states)[number]]?: boolean };

export const TreeviewItem = (
    props: KendoTreeviewItemProps &
        KendoTreeviewItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        leafClassName,
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
        ...other
    } = props;

    const _hasChildren = hasChildren || props.children;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TREEVIEWITEM_CLASSNAME
            )}
        >
            <span className="k-treeview-mid">
                {_hasChildren && (
                    <span
                        className={classNames(
                            "k-treeview-toggle",
                            stateClassNames("k-treeview-toggle", { disabled })
                        )}>
                        <Icon name={expanded ? 'caret-alt-down' : 'caret-alt-right'} />
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
                    {props.children}
                </>
            )}
        </li>
    );
};

TreeviewItem.states = states;
TreeviewItem.options = options;
TreeviewItem.className = TREEVIEWITEM_CLASSNAME;

export default TreeviewItem;
