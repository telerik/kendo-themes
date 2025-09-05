import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
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
};

export type KendoMenuItemState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    iconPosition: 'before'
};

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
                    selected,
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
                {icon && iconPosition === 'before' && <Icon className="k-menu-link-icon" icon={icon} />}
                <span className="k-menu-link-text">{text}</span>
                {icon && iconPosition === 'after' && <Icon className="k-menu-link-icon" icon={icon} />}
                {showArrow && <span className="k-menu-expand-arrow"><Icon icon={expandArrowName} /></span>}
            </span>
            {contentTemplate}
        </li>
    );
};

MenuItem.states = states;
MenuItem.options = options;
MenuItem.className = MENUITEM_CLASSNAME;
MenuItem.defaultOptions = defaultOptions;
MenuItem.moduleName = "menu";
MenuItem.folderName = "menu";

export default MenuItem;
