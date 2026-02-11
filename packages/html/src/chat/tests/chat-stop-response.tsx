import { ChatMessage } from '../chat-message';
import { ChatNormal } from '../templates/chat-normal';
import { ChatStopResponse } from '../templates/chat-stop-response';
import { ChatMessageGroup } from '../chat-message-group';
import { SkeletonNormal } from '../../skeleton/templates/skeleton-normal';


const styles = `
    .k-chat {
        height: 500px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Chat Stop Response Button</span>
            <span></span>

            <section>
                <ChatNormal value="Give me an example content.">
                    <>
                        <div className="k-timestamp">Day, Month 7, 2023</div>
                        <ChatMessageGroup fullWidth avatar={null}>
                            <ChatMessage />
                        </ChatMessageGroup>
                    </>
                </ChatNormal>
            </section>

            <section>
                <ChatStopResponse>
                    <>
                        <div className="k-timestamp">Day, Month 7, 2023</div>
                        <ChatMessageGroup fullWidth avatar={null}>
                            <ChatMessage />
                        </ChatMessageGroup>
                        <ChatMessageGroup type="sender" fullWidth avatar={null}>
                            <ChatMessage text="Give me an example content." />
                        </ChatMessageGroup>
                        <ChatMessageGroup fullWidth avatar={null}>
                            <ChatMessage text={null} content={
                                <div className="k-skeleton-container" style={{ width: "100%" }}>
                                    <SkeletonNormal style={{ width: "100%" }} />
                                    <SkeletonNormal style={{ width: "100%" }} />
                                    <SkeletonNormal style={{ width: "100%" }} />
                                    <SkeletonNormal style={{ width: "75%" }} />
                                </div>
                            } />
                        </ChatMessageGroup>
                    </>
                </ChatStopResponse>
            </section>
        </div>
    </>
);
