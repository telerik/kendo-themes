import { Notification, NotificationClosable } from '../../notification';
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
            {Notification.options.themeColor.map((color) => (
                <div>
                    <AnimationContainer>
                        <NotificationClosable themeColor={color} text={`${color} notification`} />
                    </AnimationContainer>
                </div>
            ))}

        </div>
    </>
);
