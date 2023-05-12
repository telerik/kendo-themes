import { Icon } from '../icon';
import { classNames } from '../misc';

const className = `k-notification-action`;

export type KendoNotificationActionProps = {
    type?: string;
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
        case 'close':
            icon = <Icon icon="x" />;
            break;
        default:
            return <Icon icon={type} />;
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
