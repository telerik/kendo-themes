import { Notification, NotificationAction } from '../../notification';


const styles = `
    body {
        background: #fcfcfc;
    }

    #test-area {
        justify-items: start;
    }

    .k-notification-container {
        margin: 0;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">LTR</span>

            <div>
                <div className="k-notification-container">
                    <Notification text="Default notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification closable={true} text="Closable notification" actions={ <NotificationAction type="close" /> } />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="primary" text="Primary notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="secondary" text="Secondary notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="tertiary" text="Tertiary notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="info" text="Info notification" icon="info-circle" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="success" text="Success notification" icon="check-outline" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="warning" text="Warning notification" icon="exclamation-circle" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="error" text="Error notification" icon="x-outline" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="dark" text="Dark notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="light" text="Light notification" />
                </div>
            </div>
            <div>
                <div className="k-notification-container">
                    <Notification themeColor="inverse" text="Inverse notification" />
                </div>
            </div>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification text="Default notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification closable={true} text="Closable notification" actions={ <NotificationAction type="close" /> } />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="primary" text="Primary notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="secondary" text="Secondary notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="tertiary" text="Tertiary notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="info" text="Info notification" icon="info-circle" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="success" text="Success notification" icon="check-outline" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="warning" text="Warning notification" icon="exclamation-circle" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="error" text="Error notification" icon="x-outline" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="dark" text="Dark notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="light" text="Light notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-notification-container">
                    <Notification themeColor="inverse" text="Inverse notification" />
                </div>
            </div>

        </div>
    </>
);
