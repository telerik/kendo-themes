import * as React from 'react';
import { Icon } from '../icon';
import { classNames } from '../utils';

export enum notificatonActionType {
    CLOSE = 'close'
}

export interface NotificationActionProps {
    className?: string;
    type?: notificatonActionType | string;
}

export class NotificationAction extends React.Component<NotificationActionProps> {

    render() {

        const {
            className,
            type
        } = this.props;

        let icon;

        switch (type) {
            case notificatonActionType.CLOSE:
                icon = <Icon name="x" />;
                break;
            default:
                return <Icon name={type} />;
        }

        return (
            <span
                className={classNames(
                    className,
                    'k-notification-action',
                    `k-notification-${type}-action`
                )}
            >
                {icon}
            </span>
        );
    }
}
