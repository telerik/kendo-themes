import { Icon } from '../icon';
import { classNames } from '../misc';

export const GROUPMENUITEM_ACTION_CLASSNAME = `k-group-menu-item-action`;

export enum groupMenuItemActionType {
    REMOVE = 'remove',
    ADD = 'add',
    DRAG = 'drag'
};

export type KendoGroupMenuItemActionProps = {
    type?: groupMenuItemActionType | string;
};

export const GroupMenuItemAction = (
    props: KendoGroupMenuItemActionProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        type,
        ...other
    } = props;

    let icon;

    switch (type) {
        case groupMenuItemActionType.REMOVE:
            icon = <Icon icon="x-circle" size="medium" />;
            break;
        case groupMenuItemActionType.ADD:
            icon = <Icon themeColor="primary" icon="plus-circle" size="medium" />;
            break;
        case groupMenuItemActionType.DRAG:
            icon = <Icon icon="handle-drag" size="medium" />;
            break;
        default:
            return <Icon icon={type} size="medium" />;
    }

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                GROUPMENUITEM_ACTION_CLASSNAME,
                `k-group-menu-item-${type}-action`
            )}
        >
            {icon}
        </span>
    );
};
