import { Notification, NotificationAction } from "..";

export const NotificationClosable = (props) => (
    <Notification
        closable={true}
        text="Notification"
        aria-label="Notification"
        actions={<NotificationAction type="close" />}
        {...props} />
);
