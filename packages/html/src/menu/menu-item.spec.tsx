import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

export const MENUITEM_CLASSNAME = `k-menu-item`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.disabled
];

const options = {};

export type KendoMenuItemProps = {
    text?: string;
    icon?: string;
    first?: boolean;
    last?: boolean;
    showArrow?: boolean;
    arrowIconName?: string;
    dir?: string;
    children?: React.JSX.Element[];
    popup?: React.JSX.Element;
};

export type KendoMenuItemState = { [K in (typeof states)[number]]?: boolean };

export const MenuItem = (
    props: KendoMenuItemProps &
        KendoMenuItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        hover,
        focus,
        active,
        disabled,
        icon,
        text,
        first,
        last,
        showArrow,
        arrowIconName,
        dir,
        children,
        popup,
        ...other
    } = props;

    const contentTemplate = <></>;

    if (children) {
        children.forEach( child => {
            const component = child.type;

            if (component === 'MenuItemContent') {
                contentTemplate.props.children.push( child );
                return;
            }
        });
    }

    let expandArrowName = arrowIconName;

    if ( !expandArrowName ) {
        expandArrowName = dir === 'rtl'
            ? 'caret-alt-left'
            : 'caret-alt-right';
    }

    return (

        <li
            {...other}
            className={classNames(
                props.className,
                MENUITEM_CLASSNAME, //TODO Unify MenuItem & MenuListItem states
                "k-item",
                stateClassNames(MENUITEM_CLASSNAME, {
                    focus,
                    disabled,
                    hover,
                    active,
                }),
                {
                    ["k-first"]: first,
                    ["k-last"]: last,
                }
            )}>
            <span

                className={classNames(
                    "k-link k-menu-link"
                )}>
                {icon && <Icon className="k-menu-link-icon" icon={icon} />}
                <span className="k-menu-link-text">{text}</span>
                {showArrow && <span className="k-menu-expand-arrow"><Icon icon={expandArrowName} /></span>}
            </span>
            {contentTemplate}
            {popup}
        </li>
    );
};

MenuItem.states = states;
MenuItem.options = options;
MenuItem.className = MENUITEM_CLASSNAME;

export default MenuItem;
