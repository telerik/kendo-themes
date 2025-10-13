import { ChatMessage, ChatNormal, ChatMessageGroup} from '..';

const styles = `
    .k-chat {
        min-height: 370px;
        min-width: auto;
    }

    .k-chat .k-chat-user-status {
        background: lightGreen;
        width: 10px;
        height: 10px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <div>User status</div>
            <span></span>
            <span></span>
            <section>
                <ChatNormal>
                    <ChatMessageGroup status>
                        <ChatMessage text="Sure :) Send it over whenever you are ready!" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatMessageGroup status>
                        <ChatMessage selected text="Sure :) Send it over whenever you are ready!" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section></section>
        </div>
    </>
);
