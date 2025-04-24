import { Icon } from '../icon';
import { classNames, Size, stateClassNames, States } from '../misc';

export const GROUPMENUITEM_ACTION_CLASSNAME = `k-group-menu-item-action`;

const states = [
    States.hover,
    States.disabled,
    States.selected
];

export type KendoGroupMenuItemActionStates = { [K in (typeof states)[number]]?: boolean };

const options = {
    size: [Size.small, Size.medium, Size.large]
};

export type KendoGroupMenuItemActionOptions = {
    size?: (typeof options.size)[number];
}

const defaultOptions = {
    size: Size.medium as KendoGroupMenuItemActionOptions['size']
};

export enum groupMenuItemActionType {
    REMOVE = 'remove',
    ADD = 'add',
    DRAG = 'drag',
    UP = 'up',
    DOWN = 'down'
};

export type KendoGroupMenuItemActionProps = {
    type?: groupMenuItemActionType | string;
};

export const GroupMenuItemAction = (
    props: KendoGroupMenuItemActionProps & KendoGroupMenuItemActionOptions & KendoGroupMenuItemActionStates &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        hover,
        disabled,
        selected,
        size = defaultOptions.size,
        type,
        ...other
    } = props;

    let icon;

    switch (type) {
        case groupMenuItemActionType.REMOVE:
            icon = <Icon icon="x-circle" size={size} />;
            break;
        case groupMenuItemActionType.ADD:
            icon = <Icon icon="plus-circle" size={size} />;
            break;
        case groupMenuItemActionType.DRAG:
            icon = <Icon icon="handle-drag-dots" size={size} />;
            break;
        case groupMenuItemActionType.UP:
            icon = <Icon icon="chevron-up" size={size} />;
            break;
        case groupMenuItemActionType.DOWN:
            icon = <Icon icon="chevron-down" size={size} />;
            break;
        default:
            icon = <Icon icon={type} size={size} />;
            break;
    }

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                GROUPMENUITEM_ACTION_CLASSNAME,
                stateClassNames(GROUPMENUITEM_ACTION_CLASSNAME, {
                    selected,
                    hover,
                    disabled
                }),
                `k-group-menu-item-${type}-action`
            )}
        >
            {icon}
        </span>
    );
};


GroupMenuItemAction.options = states;
GroupMenuItemAction.options = options;
GroupMenuItemAction.className = GROUPMENUITEM_ACTION_CLASSNAME;
GroupMenuItemAction.defaultOptions = defaultOptions;

export default GroupMenuItemAction;
