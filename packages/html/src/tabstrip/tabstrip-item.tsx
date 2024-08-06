import { States, classNames, stateClassNames } from '../misc';

export const TABSTRIPITEM_CLASSNAME = `k-item`;

const states = [
    States.active,
    States.hover,
    States.disabled,
    States.focus,
];

const options = {};

export type KendoTabStripItemProps = {
    dragging?: boolean;
    value?: string | React.JSX.Element;
    first?: boolean;
    last?: boolean;
};

export type KendoTabStripItemState = { [K in (typeof states)[number]]?: boolean };

export const TabStripItem = (
    props: KendoTabStripItemProps &
        KendoTabStripItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        value = "Item",
        dragging,
        active,
        hover,
        focus,
        disabled,
        children,
        first,
        last,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TABSTRIPITEM_CLASSNAME,
                stateClassNames(TABSTRIPITEM_CLASSNAME, {
                    hover,
                    active,
                    disabled,
                    focus,
                }),
                {
                    ["k-tabstrip-dragging"]: dragging,
                    ["k-first"]: first,
                    ["k-last"]: last,
                }
            )}>
            <span className="k-link">{value}</span>
            {children}
        </li>
    );
};

TabStripItem.states = states;
TabStripItem.options = options;
TabStripItem.className = TABSTRIPITEM_CLASSNAME;

export default TabStripItem;
