import { Notification, NotificationClosable } from '..';
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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            {Notification.options.themeColor.map((themeColor) => (
                <div>
                    <AnimationContainer>
                        <NotificationClosable themeColor={themeColor} text={`${themeColor} notification`} />
                    </AnimationContainer>
                </div>
            ))}

        </div>
    </>
);
