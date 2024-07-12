import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

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
    first?: boolean;
    last?: boolean;
    showArrow?: boolean;
    arrowIconName?: string;
    dir?: string;
    children?: React.JSX.Element[];
    popup?: React.JSX.Element;
};

export type KendoMenuListItemState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    dir: 'ltr'
} as const;

export const MenuListItem = (
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
        dir = defaultProps.dir,
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
                {icon && <Icon className="k-menu-link-icon" icon={icon} />}
                <span className="k-menu-link-text">{text}</span>
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
MenuListItem.defaultProps = defaultProps;

export default MenuListItem;
