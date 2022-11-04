import * as React from 'react';
import { classNames } from '../utils';
import { Icon } from '../icon/';
import { NotificationActionProps } from '../notification';

export interface NotificationProps {
    actions?: React.ReactElement<NotificationActionProps> | React.ReactElement<NotificationActionProps>[];
    className?: string;
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    dir?: string;
    closable?: boolean;
    text?: string;
    icon?: string;
    children?: React.ReactNode;
}

export class Notification extends React.Component<NotificationProps> {

    static defaultProps = {
        themeColor: 'base',
        closable: false
    };

    render() {
        const {
            actions,
            className,
            themeColor,
            text,
            icon,
            closable,
            children,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                dir={this.props.dir}
                className={classNames(
                    className,
                    'k-notification',
                    {
                        [`k-notification-${themeColor}`]: themeColor !== 'base',
                        'k-notification-closable': closable
                    }
                )}>
                {icon && <Icon className="k-notification-status" name={icon} />}

                {children
                    ?
                    <div className="k-notification-content">
                        {text}
                        {children}
                    </div>
                    :
                    <>
                        {text && <div className="k-notification-content">{text}</div>}
                    </>
                }

                { actions && <span className="k-notification-actions">{actions}</span> }

            </div>
        );
    }
}
