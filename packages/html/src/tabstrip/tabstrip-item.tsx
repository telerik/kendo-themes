import { Icon, IconButton } from '..';
import { States, classNames, stateClassNames } from '../misc';

export const TABSTRIPITEM_CLASSNAME = `k-tabstrip-item`;

const states = [
    States.active,
    States.hover,
    States.disabled,
    States.focus,
];

const options = {};

export type KendoTabStripItemProps = {
    dragging?: boolean;
    value?: string;
    first?: boolean;
    last?: boolean;
    closable?: boolean;
    icon?: string;
    iconPosition?: "before" | "after";
    actions?: React.JSX.Element | string;
};

export type KendoTabStripItemState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    iconPosition: "before",
};

export const TabStripItem = (
    props: KendoTabStripItemProps &
        KendoTabStripItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        dragging,
        active,
        hover,
        focus,
        disabled,
        children,
        first,
        last,
        closable,
        icon,
        iconPosition  = defaultOptions.iconPosition,
        value,
        actions,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TABSTRIPITEM_CLASSNAME,
                stateClassNames(TABSTRIPITEM_CLASSNAME, {
                    hover,
                    active,
                    disabled,
                    focus,
                }),
                {
                    ["k-tabstrip-dragging"]: dragging,
                    ["k-first"]: first,
                    ["k-last"]: last,
                }
            )}>
            <span className="k-link">
                {icon && iconPosition === 'before' && <Icon icon={icon} />}
                {value && <span className="k-link-text">{value}</span>}
                {icon && iconPosition === 'after' && <Icon icon={icon} />}
            </span>
            {(actions || closable) && <span className="k-item-actions">
                {actions}
                {closable && <IconButton fillMode="flat" icon="x"/>}
            </span>}
            {children}
        </li>
    );
};

TabStripItem.states = states;
TabStripItem.options = options;
TabStripItem.className = TABSTRIPITEM_CLASSNAME;
TabStripItem.item = defaultOptions;

export default TabStripItem;
