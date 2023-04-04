import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../utils';

export const LISTITEM_CLASSNAME = `k-list-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled,
];

const options = {};

export type KendoListItemProps = {
    text?: string;
    groupLabel?: string;
    showIcon?: boolean;
    iconName?: string;
    checked?: boolean;
    showCheckbox?: boolean;
};

export type KendoListItemState = { [K in (typeof states)[number]]?: boolean };

export const ListItem = (
    props: KendoListItemProps &
        KendoListItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
        groupLabel,
        showIcon,
        iconName,
        showCheckbox,
        checked,
        hover,
        focus,
        selected,
        disabled,
        ...other
    } = props;

    const textOrChildren = text
        ? text
        : props.children;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                LISTITEM_CLASSNAME,
                stateClassNames(LISTITEM_CLASSNAME, {
                    hover,
                    focus,
                    disabled,
                    selected,
                })
            )}
        >
            {showCheckbox && <Checkbox checked={checked} />}
            {showIcon && <Icon name={iconName} />}
            <span className="k-list-item-text">{textOrChildren}</span>
            {groupLabel && groupLabel !== '' && <div className="k-list-item-group-label">{groupLabel}</div>}
        </li>
    );
};

ListItem.states = states;
ListItem.options = options;
ListItem.className = LISTITEM_CLASSNAME;

export default ListItem;
