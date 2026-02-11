import { Notification } from "../notification.spec";

export const IconNotification = (props) => (
    <Notification
        text="Notification"
        icon="exclamation-circle"
        {...props}
    />
);
