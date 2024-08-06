import { classNames, stateClassNames, States } from '../misc';
import { Icon } from '../icon';

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

export const BottomNavItem = (
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
        )}>
            { icon && <Icon className="k-bottom-nav-item-icon" icon={icon} size="xlarge" /> }

            { text && <span className="k-bottom-nav-item-text">{text}</span> }

            { link && <div className="k-bottom-nav-link"><span>{link}</span></div> }
        </span>
    );
};

BottomNavItem.states = states;
BottomNavItem.options = options;
BottomNavItem.className = BOTTOM_NAV_ITEM_CLASSNAME;

export default BottomNavItem;
