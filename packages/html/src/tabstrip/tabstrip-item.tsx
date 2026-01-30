import { Icon } from '../icon/icon.spec';
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
    'aria-controls'?: string;
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
        'aria-controls': ariaControls,
        ...other
    } = props;

    const ariaSelected = active ? 'true' : undefined;

    const ariaProps = {
        ...(ariaSelected && { 'aria-selected': ariaSelected }),
        ...(ariaControls && { 'aria-controls': ariaControls }),
    } as React.HTMLAttributes<HTMLLIElement>;

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
            )}
            role="tab"
            {...ariaProps}>
            <span className="k-link">
                {icon && iconPosition === 'before' && <Icon icon={icon} />}
                {value && <span className="k-link-text">{value}</span>}
                {icon && iconPosition === 'after' && <Icon icon={icon} />}
            </span>
            {(actions || closable) && <span className="k-item-actions" role="presentation">
                {actions}
                {closable && <span className="k-link-action" title="Close"><Icon icon="x" /></span>}
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
