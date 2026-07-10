import { Icon } from '../icon';
import { classNames, optionClassNames, ThemeColor, nextId } from '../misc';

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

/**
 * @aria {role="status"} Notification element should be marked as a status. Uses status instead of alert to avoid interrupting screen reader workflow.
 * @aria {aria-live="polite"} The aria-live value must be polite so it will not obscure other essential information.
 * @aria {aria-describedby=".k-notification-content id"} Used so that the content of the Notification will be announced by assistive technologies.
 * @aria {aria-hidden="true"} The close button icon should not be present in the accessibility tree.
 * @ux {Auto-dismiss} Disappears automatically after a configurable timeout.
 * @ux {Viewport position} Can be anchored to any corner of the viewport.
 * @ux {Status variants} Supports info, success, warning, and error types.
 * @ux {Stacking} Multiple notifications stack and can be dismissed independently.
 */
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

/**
 * @see https://www.w3.org/TR/wai-aria-1.2/#alert WAI-ARIA spec: Role Alert
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/alert/ ARIA Practices: Alert
 */

export default Notification;
