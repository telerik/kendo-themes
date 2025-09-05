
import { classNames, stateClassNames, States } from '../misc';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
export const DRAWERITEM_CLASSNAME = `k-drawer-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = { };

const defaultOptions = {
    level: 0
} as const;

export type KendoDrawerItemProps = {
    icon?: string;
    text?: string;
    link?: boolean;
    expanded?: boolean;
    hasChildren?: boolean;
    level?: number | string;
};

export type KendoDrawerItemState = { [K in (typeof states)[number]]?: boolean };

export const DrawerItem: KendoComponent<KendoDrawerItemProps & KendoDrawerItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoDrawerItemProps &
        KendoDrawerItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        icon,
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
            {icon && ( <Icon icon= {icon}/> )}
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
DrawerItem.moduleName = "drawer";
DrawerItem.folderName = "drawer";

export default DrawerItem;
