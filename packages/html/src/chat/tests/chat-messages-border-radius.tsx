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
                    <ChatTimestamp>Single message in a group</ChatTimestamp>
                    <ChatMessageGroup type="sender">
                        <ChatMessage text="Single message in a group" />
                    </ChatMessageGroup>
                    <ChatTimestamp>Multiple messages in a group with Avatar</ChatTimestamp>
                    <ChatMessageGroup type="sender">
                        <ChatMessage text="Message 1 with longer text." />
                        <ChatMessage text="Message 2." />
                        <ChatMessage text="Message 3." />
                        <ChatMessage text="M 4" />
                    </ChatMessageGroup>
                     <ChatTimestamp>Multiple messages in a group without Avatar</ChatTimestamp>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text="Message 1 with longer text." />
                        <ChatMessage text="Message 2." />
                        <ChatMessage text="M 3" />
                    </ChatMessageGroup>
                     <ChatTimestamp>Two messages in a group</ChatTimestamp>
                    <ChatMessageGroup type="sender">
                        <ChatMessage text="Message 1 with longer text." />
                        <ChatMessage text="Message 2." />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatTimestamp>Single message in a group</ChatTimestamp>
                    <ChatMessageGroup>
                        <ChatMessage text="Single message in a group" />
                    </ChatMessageGroup>
                    <ChatTimestamp>Multiple messages in a group with Avatar</ChatTimestamp>
                    <ChatMessageGroup>
                        <ChatMessage text="Message 1 with longer text." />
                        <ChatMessage text="Message 2." />
                        <ChatMessage text="Message 3." />
                        <ChatMessage text="M 4" />
                    </ChatMessageGroup>
                     <ChatTimestamp>Multiple messages in a group without Avatar</ChatTimestamp>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text="Message 1 with longer text." />
                        <ChatMessage text="Message 2." />
                        <ChatMessage text="M 3" />
                    </ChatMessageGroup>
                     <ChatTimestamp>Two messages in a group</ChatTimestamp>
                    <ChatMessageGroup>
                        <ChatMessage text="Message 1 with longer text." />
                        <ChatMessage text="Message 2." />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
