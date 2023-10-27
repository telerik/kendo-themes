import { NotificationNormal, NotificationClosable, IconNotification, IconNotificationClosable } from '../../notification';


const styles = `
    #test-area {
        justify-items: start;
    }

    .k-notification-container {
        margin: 0;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">LTR</span>
            <div>
                <div className="k-notification-container">
                    <NotificationNormal text="Default notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <IconNotification text="Icon notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <NotificationClosable text="Closable notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <IconNotificationClosable text="Closable notification with icon" />
                </div>
            </div>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <div dir="rtl">
                <div className="k-notification-container">
                    <NotificationNormal text="Default notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <IconNotification text="Icon notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <NotificationClosable text="Closable notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <IconNotificationClosable text="Closable notification with icon" />
                </div>
            </div>

        </div>
    </>
);
