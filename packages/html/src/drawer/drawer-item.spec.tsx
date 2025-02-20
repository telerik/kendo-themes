
import { classNames, stateClassNames, States, ThemeColor } from '../misc';
import { Icon } from '../icon';

export const DRAWERITEM_CLASSNAME = `k-drawer-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {
    iconThemeColor: [
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.light,
        ThemeColor.dark
    ],
};

const defaultOptions = {
    level: 0
} as const;

export type KendoDrawerItemProps = {
    icon?: string;
    iconThemeColor?: (typeof options.iconThemeColor)[number];
    text?: string;
    link?: boolean;
    expanded?: boolean;
    hasChildren?: boolean;
    level?: number | string;
};

export type KendoDrawerItemState = { [K in (typeof states)[number]]?: boolean };

export const DrawerItem = (
    props: KendoDrawerItemProps &
        KendoDrawerItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        icon,
        iconThemeColor,
        text,
        level = defaultOptions.level,
        hover,
        focus,
        selected,
        disabled,
        expanded,
        hasChildren
    } = props;

    return (
        <li className={classNames(
            props.className,
            DRAWERITEM_CLASSNAME,
            stateClassNames(DRAWERITEM_CLASSNAME, {
                hover,
                focus,
                selected,
                disabled
            }),
            {
                [`k-level-${level}`]: level || level === 0
            }
        )}>
            {icon && ( <Icon icon= {icon} themeColor={iconThemeColor} /> )}
            {text && ( <span className="k-item-text">{text}</span> )}
            {hasChildren && (
                <>
                    <span className="k-spacer"></span>
                    <span className="k-drawer-toggle">
                        <Icon icon={`chevron-${expanded ? "up" : "down"}`} />
                    </span>
                </>
            )}
            {props.children}
        </li>
    );
};

DrawerItem.states = states;
DrawerItem.options = options;
DrawerItem.className = DRAWERITEM_CLASSNAME;
DrawerItem.defaultOptions = defaultOptions;

export default DrawerItem;
