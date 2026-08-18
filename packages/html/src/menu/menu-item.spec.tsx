import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { MENU_FOLDER_NAME, MENU_MODULE_NAME } from './constants';
export const MENUITEM_CLASSNAME = `k-menu-item`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {};

export type KendoMenuItemProps = {
    text?: string;
    icon?: string;
    iconPosition?: "before" | "after";
    first?: boolean;
    last?: boolean;
    showArrow?: boolean;
    arrowIconName?: string;
    dir?: "rtl" | "ltr";
    children?: React.JSX.Element[];
    expanded?: boolean;
};

export type KendoMenuItemState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    iconPosition: 'before'
};

/**
 * @aria {role="menuitem"} Announces the Menu item role.
 * @aria {aria-haspopup="menu"} Indicates a popup menu is associated with the item.
 * @aria {aria-disabled="true"} Informs assistive technologies that a Menu item is disabled.
 * @aria {tabindex="0"} The focused item has tabindex 0.
 * @aria {aria-controls="ul.k-menu-group id"} Points to the ID of the submenu. Only present when the item controls a submenu element.
 * @aria {aria-expanded} state for expandable items
 * @ux {Action trigger} Clicking the item executes its associated action or navigates to its link.
 * @ux {Submenu indicator} Displays an arrow when the item has a nested submenu.
 * @ux {Disabled state} When disabled, the item is non-interactive.
 * @ux {Separator} A horizontal line variant visually divides groups of items.
 */
export const MenuItem: KendoComponent<KendoMenuItemProps & KendoMenuItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoMenuItemProps &
        KendoMenuItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        hover,
        focus,
        active,
        selected,
        disabled,
        icon,
        text,
        first,
        last,
        showArrow,
        arrowIconName,
        iconPosition = defaultOptions.iconPosition,
        dir,
        children,
        expanded,
        ...other
    } = props;

    let expandArrowName = arrowIconName;

    if ( !expandArrowName ) {
        expandArrowName = dir === 'rtl'
            ? 'chevron-left'
            : 'chevron-right';
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
                    selected,
                }),
                {
                    ["k-first"]: first,
                    ["k-last"]: last,
                }
            )}
            role="menuitem"
            {...(showArrow && { 'aria-haspopup': 'menu' as const })}
            {...(showArrow && { 'aria-expanded': expanded ? 'true' : 'false' })}
            {...(disabled && { 'aria-disabled': 'true' })}
            {...(focus && { tabIndex: 0 })}
        >
            <span

                className={classNames(
                    "k-link k-menu-link"
                )}>
                {icon && iconPosition === 'before' && <Icon className="k-menu-link-icon" icon={icon} />}
                <span className="k-menu-link-text">{text}</span>
                {icon && iconPosition === 'after' && <Icon className="k-menu-link-icon" icon={icon} />}
                {showArrow && <span className="k-menu-expand-arrow" aria-hidden="true"><Icon icon={expandArrowName} /></span>}
            </span>
            {children}
        </li>
    );
};

MenuItem.states = states;
MenuItem.options = options;
MenuItem.className = MENUITEM_CLASSNAME;
MenuItem.defaultOptions = defaultOptions;
MenuItem.moduleName = MENU_MODULE_NAME;
MenuItem.folderName = MENU_FOLDER_NAME;

export default MenuItem;
