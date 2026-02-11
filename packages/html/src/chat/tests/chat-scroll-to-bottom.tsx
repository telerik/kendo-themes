import { ChatMessage } from '../chat-message';
import { ChatNormal } from '../templates/chat-normal';
import { ChatMessageGroup } from '../chat-message-group';
import { ChatTimestamp } from '../chat-timestamp';
import { ChatMessageReference } from '../chat-message-reference';
import { ChatHeader } from '../chat-header';
import { ToolbarItem } from '../../toolbar/toolbar-item.spec';
import { FileBoxWrapper } from '../../file-box/file-box-wrapper.spec';
import { FileBox } from '../../file-box/file-box.spec';

const styles = `
    .k-chat {
        height: 600px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Scroll to bottom</span>
            <span>Scroll to bottom - Chat with header and pinned message</span>
            <section>
                <ChatNormal scrollToBottom={true}>
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
                <ChatNormal scrollToBottom={true} header={<ChatHeader><ToolbarItem>Alex</ToolbarItem></ChatHeader>}
                    pinned={<ChatMessageReference type="sender" pinned content={<FileBox />} closeable />}>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage files={
                            <FileBoxWrapper>
                                <FileBox />
                            </FileBoxWrapper>
                        } />
                    </ChatMessageGroup>
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

        </div>
    </>
);

