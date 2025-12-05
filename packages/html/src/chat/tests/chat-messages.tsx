import { ChatMessage, ChatNormal, ChatTimestamp, ChatMessageGroup } from '..';


const styles = `
    .k-chat {
        height: 1230px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Message</span>
            <span>Message</span>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup type="sender">
                        <ChatMessage selected text="(Selected) Message with Author, Avatar, Time and Status." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" author={null}>
                        <ChatMessage selected time={null} statusIcon='check-circle' text="(Selected) Message with Avatar and Status with icon." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender">
                        <ChatMessage text="Message with Author and Avatar." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage selected text="(Selected) Message with Author, Time and Status." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" >
                        <ChatMessage selected status={null} text="(Selected) Message with Author, Avatar and Time." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage text="Very long message text that tests message overflowing behavior. Very long message text that tests message overflowing behavior." />
                    </ChatMessageGroup>
                    <ChatTimestamp>Messages with short content</ChatTimestamp>
                    <ChatMessageGroup type="sender">
                        <ChatMessage selected text="OK" />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender">
                        <ChatMessage text="OK" />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage selected text="OK" />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" >
                        <ChatMessage selected status={null} text="OK" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup>
                        <ChatMessage selected text="(Selected) Message with Author, Avatar, Time and Status." />
                    </ChatMessageGroup>
                    <ChatMessageGroup author={null}>
                        <ChatMessage selected time={null} statusIcon='check-circle' text="(Selected) Message with Avatar and Status with icon." />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage text="Message with Author and Avatar." />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage selected text="(Selected) Message with Author, Time and Status." />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage selected status={null} text="(Selected) Message with Author, Avatar and Time." />
                    </ChatMessageGroup>
                     <ChatMessageGroup avatar={null} author={null}>
                        <ChatMessage text="Very long message text that tests message overflowing behavior. Very long message text that tests message overflowing behavior." />
                    </ChatMessageGroup>
                    <ChatTimestamp>Messages with short content</ChatTimestamp>
                    <ChatMessageGroup>
                        <ChatMessage selected text="OK" />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage text="OK" />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage selected text="OK" />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage selected status={null} text="OK" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
