import { Icon } from '../icon';
import { classNames, optionClassNames, ThemeColor, nextId } from '../misc';

import { KendoComponent } from '../_types/component';
import { NOTIFICATION_FOLDER_NAME, NOTIFICATION_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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
        ...other
    } = props;

    const contentId = nextId('notification-content');
    const hasContent = Boolean(text || props.children);

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
            role="status"
            aria-live="polite"
            aria-describedby={hasContent ? contentId : undefined}
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

Notification.ariaSpec = a11ySpec.ariaSpec;

export default Notification;
