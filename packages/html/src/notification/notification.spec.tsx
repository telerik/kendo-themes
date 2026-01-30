import { Icon } from '../icon';
import { classNames, optionClassNames, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { NOTIFICATION_FOLDER_NAME, NOTIFICATION_MODULE_NAME } from './constants';
export const NOTIFICATION_CLASSNAME = `k-notification`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.undefined,
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
    id?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
};

const defaultOptions = {
    closable: false
};

export const Notification: KendoComponent<KendoNotificationProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoNotificationProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        actions,
        themeColor,
        text,
        icon,
        closable = defaultOptions.closable,
        id = 'k-notification',
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        ...other
    } = props;

    const contentId = `${id}-content`;

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
            )}
            role="alert"
            aria-live="polite"
            {...(ariaLabel && { 'aria-label': ariaLabel })}
            {...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
            aria-describedby={contentId}
        >
            {icon && <Icon className="k-notification-status" icon={icon} />}

            {props.children
                ?
                <div id={contentId} className="k-notification-content">
                    {text}
                    {props.children}
                </div>
                :
                <>
                    {text && <div id={contentId} className="k-notification-content">{text}</div>}
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
Notification.moduleName = NOTIFICATION_MODULE_NAME;
Notification.folderName = NOTIFICATION_FOLDER_NAME;

export default Notification;
