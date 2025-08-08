import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
export const MENULISTITEM_CLASSNAME = `k-menu-item`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {};


export type KendoMenuListItemProps = {
    text?: string;
    icon?: string;
    iconPosition?: string;
    first?: boolean;
    last?: boolean;
    showArrow?: boolean;
    arrowIconName?: string;
    dir?: "rtl" | "ltr";
    children?: React.JSX.Element[];
    popup?: React.JSX.Element;
};

export type KendoMenuListItemState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    dir: 'ltr',
    iconPosition: 'before'
} as const;

export const MenuListItem: KendoComponent<KendoMenuListItemProps & KendoMenuListItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoMenuListItemProps &
        KendoMenuListItemState &
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
        dir = defaultOptions.dir,
        children,
        popup,
        ...other
    } = props;

    const contentTemplate = <></>;

    if (children) {
        children.forEach( child => {
            const component = child.type;

            if (component === 'MenuListItemContent') {
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
                MENULISTITEM_CLASSNAME, //TODO Unify MenuItem & MenuListItem states
                "k-item",
                stateClassNames(MENULISTITEM_CLASSNAME, {
                    focus,
                    disabled
                }),
                {
                    ["k-first"]: first,
                    ["k-last"]: last,
                }
            )}>
            <span

                className={classNames(
                    "k-link k-menu-link",
                    stateClassNames("k-menu-link", {
                        hover,
                        active,
                        selected,
                        disabled
                    }),
                )}>
                {icon && iconPosition === 'before' && <Icon className="k-menu-link-icon" icon={icon} />}
                <span className="k-menu-link-text">{text}</span>
                {icon && iconPosition === 'after' && <Icon className="k-menu-link-icon" icon={icon} />}
                {showArrow && <span className="k-menu-expand-arrow"><Icon icon={expandArrowName} /></span>}
            </span>
            {contentTemplate}
            {popup}
        </li>
    );
};

MenuListItem.states = states;
MenuListItem.options = options;
MenuListItem.className = MENULISTITEM_CLASSNAME;
MenuListItem.defaultOptions = defaultOptions;

export default MenuListItem;
