import { NotificationNormal, NotificationClosable, IconNotification, IconNotificationClosable } from '..';
import { AnimationContainer } from '../../animation-container';

const styles = `
    .k-notification-group, .k-animation-container {
        position: static;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-col-span-1">LTR</span>
            <span className="k-col-span-1">RTL</span>

            <div className="k-notification-group">
                <AnimationContainer>
                    <NotificationNormal text="Default notification" />
                </AnimationContainer>
                <AnimationContainer>
                    <IconNotification text="Icon notification" />
                </AnimationContainer>
                <AnimationContainer>
                    <NotificationClosable text="Closable notification" />
                </AnimationContainer>
                <AnimationContainer>
                    <IconNotificationClosable text="Closable notification with icon" />
                </AnimationContainer>
            </div>

            <div className="k-notification-group k-rtl">
                <AnimationContainer>
                    <NotificationNormal text="Default notification" />
                </AnimationContainer>
                <AnimationContainer>
                    <IconNotification text="Icon notification" />
                </AnimationContainer>
                <AnimationContainer>
                    <NotificationClosable text="Closable notification" />
                </AnimationContainer>
                <AnimationContainer>
                    <IconNotificationClosable text="Closable notification with icon" />
                </AnimationContainer>
            </div>
        </div>
    </>
);
