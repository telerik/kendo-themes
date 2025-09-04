import { Icon } from '../icon';
import { classNames, optionClassNames, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
export const NOTIFICATION_CLASSNAME = `k-notification`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.light,
        ThemeColor.dark,
        ThemeColor.inverse
    ],
};

export type KendoNotificationOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoNotificationProps = KendoNotificationOptions & {
    actions?: React.JSX.Element | React.JSX.Element[];
    closable?: boolean;
    text?: string;
    icon?: string;
};

const defaultOptions = {
    themeColor: ThemeColor.base,
    closable: false
};

export const Notification: KendoComponent<KendoNotificationProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoNotificationProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        actions,
        themeColor = defaultOptions.themeColor,
        text,
        icon,
        closable = defaultOptions.closable,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                NOTIFICATION_CLASSNAME,
                optionClassNames(NOTIFICATION_CLASSNAME, {
                    themeColor,
                }),
                {
                    'k-notification-closable': closable
                }
            )}>
            {icon && <Icon className="k-notification-status" icon={icon} />}

            {props.children
                ?
                <div className="k-notification-content">
                    {text}
                    {props.children}
                </div>
                :
                <>
                    {text && <div className="k-notification-content">{text}</div>}
                </>
            }

            { actions && <span className="k-notification-actions">{actions}</span> }

        </div>
    );
};

Notification.states = states;
Notification.options = options;
Notification.className = NOTIFICATION_CLASSNAME;
Notification.defaultOptions = defaultOptions;
Notification.moduleName = "notification";
Notification.folderName = "notification";

export default Notification;
