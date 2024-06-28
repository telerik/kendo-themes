import { Notification, NotificationAction } from "..";

export const NotificationClosable = (props) => (
    <Notification
        closable={true}
        text="Notification"
        actions={<NotificationAction type="close" />}
        {...props} />
);

export default NotificationClosable;
