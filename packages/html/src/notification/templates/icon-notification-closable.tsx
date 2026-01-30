import { Notification, NotificationAction } from "..";

export const IconNotificationClosable = (props) => (
    <Notification
        closable={true}
        text="Notification"
        icon="exclamation-circle"
        aria-label="Notification"
        actions={<NotificationAction type="close" />}
        {...props} />
);
