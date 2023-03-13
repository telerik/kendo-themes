import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../utils-new';

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
    showArrow?: boolean;
    arrowIconName?: string;
    dir?: string;
    children?: JSX.Element[];
};

export type KendoMenuItemState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    dir: 'ltr'
};

export const MenuItem = (
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
        showArrow,
        arrowIconName,
        dir = defaultProps.dir,
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
                MENUITEM_CLASSNAME,
                "k-item",
                stateClassNames(MENUITEM_CLASSNAME, {
                    focus,
                    disabled,
                }),
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
                {icon && <Icon className="k-menu-link-icon" name={icon} />}
                <span className="k-menu-link-text">{text}</span>
                {showArrow && <span className="k-menu-expand-arrow"><Icon name={expandArrowName} /></span>}
            </span>
            {contentTemplate}
        </li>
    );
};

MenuItem.states = states;
MenuItem.options = options;
MenuItem.className = MENUITEM_CLASSNAME;

export default MenuItem;
