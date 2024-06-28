import { Notification, NotificationAction } from "..";

export const IconNotificationClosable = (props) => (
    <Notification
        closable={true}
        text="Notification"
        icon="exclamation-circle"
        actions={<NotificationAction type="close" />}
        {...props} />
);

export default IconNotificationClosable;
