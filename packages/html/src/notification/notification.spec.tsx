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

/**
 * Accessibility specification for Notification.
 *
 * Uses role="status" (implicit aria-live="polite") instead of role="alert"
 * (implicit aria-live="assertive") because notifications are non-critical
 * status messages that should not interrupt the user's current task.
 *
 * @todo The closable notification's dismiss action is not keyboard-interactable.
 *   The close icon is currently a `<span>` with `aria-hidden="true"`, meaning it is
 *   invisible to assistive technologies and unreachable via Tab/Enter. A future
 *   improvement should render the close action as a `<button>` (or add `role="button"`
 *   with `tabindex="0"` and keydown handler) so that keyboard and screen reader users
 *   can dismiss the notification. This will require a structural change to the
 *   NotificationAction component and corresponding updates to the ariaSpec rules
 *   (e.g. adding `button-name`, `aria-label="Close"` on the dismiss button).
 *
 * @wcag 4.1.3 Status Messages - status role for notification messages
 */
Notification.ariaSpec = {
    selector: '.k-notification',
    rules: [
        { selector: '.k-notification', attribute: 'role=status', usage: 'Notification element should be marked as a status. Uses status instead of alert to avoid interrupting screen reader workflow.' },
        { selector: '.k-notification', attribute: 'aria-live=polite', usage: 'The aria-live value must be polite so it will not obscure other essential information.' },
        { selector: '.k-notification', attribute: 'aria-describedby=.k-notification-content id', usage: 'Used so that the content of the Notification will be announced by assistive technologies.' },
        { selector: '.k-notification .k-svg-i-x, .k-notification .k-i-x', attribute: 'aria-hidden=true', usage: 'The close button icon should not be present in the accessibility tree.' },
    ]
};

export default Notification;
