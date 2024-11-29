import { NotificationNormal, NotificationClosable, IconNotification, IconNotificationClosable } from '..';
import { AnimationContainer } from '../../animation-container';


const styles = `
    #test-area {
        justify-items: start;
    }

    .k-animation-container {
        position: static;
        overflow: visible;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">

            <span className="k-colspan-all k-col-span-full">LTR</span>
            <div>
                <AnimationContainer>
                    <NotificationNormal text="Default notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <IconNotification text="Icon notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <NotificationClosable text="Closable notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <IconNotificationClosable text="Closable notification with icon" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <IconNotificationClosable text="Closable notification with icon and very long text start ............. ............ .................... .......... ............ end" />
                </AnimationContainer>
            </div>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <div dir="rtl">
                <AnimationContainer>
                    <NotificationNormal text="Default notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <IconNotification text="Icon notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <NotificationClosable text="Closable notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <IconNotificationClosable text="Closable notification with icon" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <IconNotificationClosable text="Closable notification with icon and very long text start ............. ............ .................... .......... ............ end" />
                </AnimationContainer>
            </div>

        </div>
    </>
);
