import { Notification } from "../notification.spec";
import { NotificationAction } from "../notification-action";

export const NotificationClosable = (props) => (
    <Notification
        closable={true}
        text="Notification"
        actions={<NotificationAction type="close" />}
        {...props} />
);
