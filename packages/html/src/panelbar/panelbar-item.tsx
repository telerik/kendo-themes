import { Icon } from '../icon';
import { States, classNames, stateClassNames } from '../misc';

export const PANELBARITEM_CLASSNAME = `k-panelbar-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {};

export type KendoPanelBarItemProps = {
    header?: boolean;
    level?: number;
    expanded?: boolean;
    icon?: string;
    iconClass?: string;
    text?: string;
};

export type PanelBarItemState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    level: 0,
    expanded: false,
    text: "Item"
};

export const PanelBarItem = (
    props: KendoPanelBarItemProps &
    React.HTMLAttributes<HTMLLIElement> &
    PanelBarItemState
) => {
    const {
        text = defaultOptions.text,
        level = defaultOptions.level,
        expanded = defaultOptions.expanded,
        header,
        hover,
        focus,
        selected,
        disabled,
        icon,
        iconClass,
        children,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                PANELBARITEM_CLASSNAME,
                {
                    ["k-panelbar-header"]: header,
                    [`k-level-${level}`]: level || level === 0,
                    ["k-expanded"]: expanded
                }
            )}
        >
            <span
                className={classNames(
                    "k-link",
                    stateClassNames("k-link", {
                        hover,
                        focus,
                        disabled,
                        selected,
                    })
                )}
            >
                {icon && <Icon className="k-panelbar-item-icon" icon={icon}/>}
                {iconClass && !icon && <span className={`k-panelbar-item-icon ${iconClass}`}/>}

                <span className="k-panelbar-item-text">{text}</span>

                {children &&
                    <Icon className={classNames(
                        "k-panelbar-toggle",
                        expanded
                            ? "k-panelbar-collapse"
                            : "k-panelbar-expand"
                    )} icon={`chevron-${expanded ? "up" : "down"}`}/>
                }
            </span>

            {expanded && children }
        </li>
    );
};

PanelBarItem.states = states;
PanelBarItem.options = options;
PanelBarItem.className = PANELBARITEM_CLASSNAME;
PanelBarItem.defaultOptions = defaultOptions;

export default PanelBarItem;
