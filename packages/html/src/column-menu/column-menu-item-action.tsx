import { Icon } from '../icon';
import { classNames } from '../misc';

export const COLUMNMENUITEM_ACTION_CLASSNAME = `k-columnmenu-item-action`;

export enum columnMenuItemActionType {
    REMOVE = 'remove',
    ADD = 'add',
    DRAG = 'drag'
};

export type KendoColumnMenuItemActionProps = {
    type?: columnMenuItemActionType | string;
};

export const ColumnMenuItemAction = (
    props: KendoColumnMenuItemActionProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        type,
        ...other
    } = props;

    let icon;

    switch (type) {
        case columnMenuItemActionType.REMOVE:
            icon = <Icon icon="x-circle" size="medium" />;
            break;
        case columnMenuItemActionType.ADD:
            icon = <Icon themeColor="primary" icon="plus-circle" size="medium" />;
            break;
        case columnMenuItemActionType.DRAG:
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
                COLUMNMENUITEM_ACTION_CLASSNAME,
                `k-columnmenu-item-${type}-action`
            )}
        >
            {icon}
        </span>
    );
};
