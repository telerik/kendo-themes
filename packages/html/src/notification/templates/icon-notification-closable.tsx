import { Notification } from "../notification.spec";
import { NotificationAction } from "../notification-action";

export const IconNotificationClosable = (props) => (
    <Notification
        closable={true}
        text="Notification"
        icon="exclamation-circle"
        actions={<NotificationAction type="close" />}
        {...props} />
);
