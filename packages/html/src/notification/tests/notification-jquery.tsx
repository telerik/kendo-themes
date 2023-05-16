import { Notification, NotificationAction } from '../../notification';
import { AnimationContainer } from '../../animation-container';


const styles = `
    body {
        background: #fcfcfc;
    }

    #test-area {
        justify-items: start;
    }

    .k-animation-container {
        position: static;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">LTR</span>

            <div>
                <AnimationContainer>
                    <Notification text="Default notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification closable={true} text="Closable notification" actions={ <NotificationAction type="close" /> } />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="primary" text="Primary notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="secondary" text="Secondary notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="tertiary" text="Tertiary notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="info" text="Info notification" icon="info-circle" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="success" text="Success notification" icon="check-outline" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="warning" text="Warning notification" icon="exclamation-circle" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="error" text="Error notification" icon="x-outline" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="dark" text="Dark notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="light" text="Light notification" />
                </AnimationContainer>
            </div>
            <div>
                <AnimationContainer>
                    <Notification themeColor="inverse" text="Inverse notification" />
                </AnimationContainer>
            </div>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification text="Default notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification closable={true} text="Closable notification" actions={ <NotificationAction type="close" /> } />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="primary" text="Primary notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="secondary" text="Secondary notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="tertiary" text="Tertiary notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="info" text="Info notification" icon="info-circle" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="success" text="Success notification" icon="check-outline" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="warning" text="Warning notification" icon="exclamation-circle" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="error" text="Error notification" icon="x-outline" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="dark" text="Dark notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="light" text="Light notification" />
                </AnimationContainer>
            </div>
            <div dir="rtl">
                <AnimationContainer>
                    <Notification themeColor="inverse" text="Inverse notification" />
                </AnimationContainer>
            </div>

        </div>
    </>
);
