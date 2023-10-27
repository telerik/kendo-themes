import { Notification, NotificationClosable } from '../../notification';


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
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            {Notification.options.themeColor.map((color) => (
                <div>
                    <div className="k-notification-container">
                        <NotificationClosable themeColor={color} text={`${color} notification`} />
                    </div>
                </div>
            ))}

        </div>
    </>
);
