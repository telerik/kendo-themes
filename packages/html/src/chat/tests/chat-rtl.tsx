import { ChatHeader } from '../chat-header';
import { ChatNormal } from '../templates/chat-normal';
import { ChatMessage } from '../chat-message';
import { ChatMessageReference } from '../chat-message-reference';
import { ChatMessageGroup } from '../chat-message-group';
import { ToolbarItem } from '../../toolbar/toolbar-item.spec';
import { FileBoxWrapper } from '../../file-box/file-box-wrapper.spec';
import { FileBox } from '../../file-box/file-box.spec';

const styles = `
    .k-chat {
        min-height: 300px;
        height: 300px;
        min-width: auto;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Chat with Header</span>
            <span>Pin file - receiver</span>
            <span>Pin file - Sender</span>
            <section>
                 <ChatNormal dir="rtl" header={
                    <ChatHeader>
                        <ToolbarItem>Alex</ToolbarItem>
                    </ChatHeader>
                }>
                    <ChatMessageGroup>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender">
                        <ChatMessage />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal dir="rtl" pinned={<ChatMessageReference pinned content={<FileBox />} closeable />}>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage files={
                            <>
                                <FileBoxWrapper>
                                    <FileBox />
                                </FileBoxWrapper>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal dir="rtl" pinned={<ChatMessageReference type="sender" pinned content={<FileBox />} closeable />}>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage files={
                            <FileBoxWrapper>
                                <FileBox />
                            </FileBoxWrapper>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <span>Pin message / receiver</span>
            <span>Pin message / sender</span>
            <span></span>
            <section>
                <ChatNormal dir="rtl" pinned={<ChatMessageReference pinned content={"I really appreciate it.I’ve been trying to diversify,"} closeable />}>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null} author={null}>
                        <ChatMessage text="I really appreciate it.I’ve been trying to diversify," />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal dir="rtl" pinned={<ChatMessageReference pinned type="sender" content={"I really appreciate it.I’ve been trying to diversify,"} closeable />}>
                    <ChatMessageGroup author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage text="I really appreciate it.I’ve been trying to diversify," />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section></section>

            <span>Reply message / receiver</span>
            <span>Reply message / sender</span>
            <span></span>

            <section>
                <ChatNormal dir="rtl" replied={<ChatMessageReference content={"I really appreciate it.I’ve been trying to diversify,"} closeable />} >
                    <ChatMessageGroup type="sender" author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null} author={null}>
                        <ChatMessage text="I really appreciate it.I’ve been trying to diversify," />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal dir="rtl" replied={<ChatMessageReference type="sender" content={"I really appreciate it.I’ve been trying to diversify,"} closeable />} >
                    <ChatMessageGroup author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage text="I really appreciate it.I’ve been trying to diversify," />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section></section>
        </div>
    </>
);
