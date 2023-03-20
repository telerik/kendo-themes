import { Icon } from '../icon';
import { classNames } from '../utils';

export enum notificatonActionType {
    CLOSE = 'close'
}

const className = `k-notification-action`;

export type KendoNotificationActionProps = {
    type?: notificatonActionType | string;
};

export const NotificationAction = (
    props: KendoNotificationActionProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type
    } = props;

    let icon;

    switch (type) {
        case notificatonActionType.CLOSE:
            icon = <Icon name="x" />;
            break;
        default:
            return <Icon name={type} />;
    }

    return (
        <span className={classNames(
            props.className,
            className,
            `k-notification-${type}-action`
        )}>
            {icon}
        </span>
    );
};
