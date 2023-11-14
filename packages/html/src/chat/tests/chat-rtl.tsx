import { ChatMessage, ChatMessageGroup, ChatNormal, ChatWithOptions, ChatWithToolbar } from '..';


const styles = `
    .k-chat {
        height: 250px;
    }

    /* needed for test */
    .k-chat .k-chat-bubble {
        white-space: normal;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Chat normal</span>
            <span>Chat with option button</span>
            <section>
                <ChatNormal dir="rtl">
                    <div className="k-timestamp">Day, Month 7, 2023</div>
                    <ChatMessageGroup>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatWithOptions dir="rtl">
                    <div className="k-timestamp">Day, Month 7, 2023</div>
                    <ChatMessageGroup>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                </ChatWithOptions>
            </section>

            <span>Chat with toolbar</span>
            <span></span>

            <section>
                <ChatWithToolbar dir="rtl">
                    <div className="k-timestamp">Day, Month 7, 2023</div>
                    <ChatMessageGroup>
                        <ChatMessage className="k-only" />
                    </ChatMessageGroup>
                </ChatWithToolbar>
            </section>

        </div>
    </>
);
