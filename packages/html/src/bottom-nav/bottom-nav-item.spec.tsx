import { classNames, stateClassNames, States } from '../misc';
import { Icon } from '../icon';
import { KendoComponent } from '../_types/component';
const BOTTOM_NAV_ITEM_CLASSNAME = 'k-bottom-nav-item';

const states = [
    States.focus,
    States.selected,
    States.disabled
];

const options = {};

export type KendoBottomNavItemProps = {
    icon?: string;
    text?: string;
    link?: string;
};

export type KendoBottomNavItemState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

/**
 * @aria {role="link"} Associate the link purpose of the bottom navigation items.
 * @aria {aria-current="true"} Indicates the selected navigation item.
 * @ux {Selection} Clicking the item selects it and marks it as active.
 * @ux {Icon and label} Displays an icon above a text label.
 * @ux {Disabled state} When disabled, the item is non-interactive and visually dimmed.
 */
export const BottomNavItem: KendoComponent<KendoBottomNavItemProps & KendoBottomNavItemState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoBottomNavItemProps &
        KendoBottomNavItemState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        focus,
        selected,
        disabled,
        icon,
        text,
        link
    } = props;

    return (
        <span className={classNames(
            BOTTOM_NAV_ITEM_CLASSNAME,
            stateClassNames(BOTTOM_NAV_ITEM_CLASSNAME, {
                focus,
                selected,
                disabled
            })
        )}
            role="link"
            {...(selected && { 'aria-current': 'true' })}
            {...(!text && !link && icon && { 'aria-label': icon })}
        >
            { icon && <Icon className="k-bottom-nav-item-icon" icon={icon} size="xlarge" /> }

            { text && <span className="k-bottom-nav-item-text">{text}</span> }

            { link && <div className="k-bottom-nav-link"><span>{link}</span></div> }
        </span>
    );
};

BottomNavItem.states = states;
BottomNavItem.options = options;
BottomNavItem.className = BOTTOM_NAV_ITEM_CLASSNAME;
BottomNavItem.defaultOptions = defaultOptions;
BottomNavItem.moduleName = null;
BottomNavItem.folderName = null;

export default BottomNavItem;
