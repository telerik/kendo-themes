import { ChatMessage, ChatMessageGroup, ChatNormal } from '..';


const styles = `
    .k-chat {
        width: 400px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Bubble states - Sender</span>
            <span>Bubble states - Receiver</span>
            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender">
                        <ChatMessage text="Normal" />
                        <ChatMessage text="Hover" hover />
                        <ChatMessage text="Active" active />
                        <ChatMessage text="Focused" focus/>
                        <ChatMessage text="Selected" selected/>
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatMessageGroup>
                        <ChatMessage text="Normal" />
                        <ChatMessage text="Hover" hover />
                        <ChatMessage text="Active" active />
                        <ChatMessage text="Focused" focus/>
                        <ChatMessage text="Selected" selected/>
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
