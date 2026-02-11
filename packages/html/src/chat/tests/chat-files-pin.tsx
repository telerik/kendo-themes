import { ChatHeader } from '../chat-header';
import { ChatNormal } from '../templates/chat-normal';
import { ChatMessage } from '../chat-message';
import { ChatMessageReference } from '../chat-message-reference';
import { ChatMessageGroup } from '../chat-message-group';
import { Popup } from '../../popup/popup.spec';
import { MenuListItem } from '../../menu/menu-list-item.spec';
import { ContextMenu } from '../../context-menu/context-menu.spec';
import { ToolbarItem } from '../../toolbar/toolbar-item.spec';
import { FileBoxWrapper } from '../../file-box/file-box-wrapper.spec';
import { FileBox } from '../../file-box/file-box.spec';

const styles = `
    .k-chat {
        min-height: 500px;
    }

    .k-animation-container:has(.receiver) {
        top: 200px;
        left: 150px;
    }

    .k-animation-container:has(.sender) {
        top: 790px;
        left: 190px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Pin file menu - Receiver</span>
            <span>Pin file - receiver</span>
            <span>Pin file - receiver - Chat with Header</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                </FileBoxWrapper>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal pinned={<ChatMessageReference pinned content={<FileBox />} closeable />}>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                </FileBoxWrapper>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal header={<ChatHeader><ToolbarItem>Alex</ToolbarItem></ChatHeader>}
                    pinned={<ChatMessageReference pinned content={<FileBox />} closeable />}>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                </FileBoxWrapper>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup receiver">
                <ContextMenu>
                    <MenuListItem first text="Download" icon="download-light"></MenuListItem>
                    <MenuListItem text="Pin" icon="pin-outline" selected></MenuListItem>
                </ContextMenu>
            </Popup>

            <span>Pin file menu - Sender</span>
            <span>Pin file - Sender</span>
            <span>Pin file - Sender - Chat with Header</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage files={
                            <FileBoxWrapper layout='vertical'>
                                <FileBox />
                            </FileBoxWrapper>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal pinned={<ChatMessageReference type="sender" pinned content={<FileBox />} closeable />}>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage files={
                            <FileBoxWrapper layout='vertical'>
                                <FileBox />
                            </FileBoxWrapper>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal header={<ChatHeader><ToolbarItem>Alex</ToolbarItem></ChatHeader>}
                    pinned={<ChatMessageReference type="sender" pinned content={<FileBox />} closeable />}>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage files={
                            <FileBoxWrapper layout='vertical'>
                                <FileBox />
                            </FileBoxWrapper>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup sender">
                <ContextMenu>
                    <MenuListItem first text="Download" icon="download-light"></MenuListItem>
                    <MenuListItem text="Pin" icon="pin-outline" selected></MenuListItem>
                    <MenuListItem last text="Delete" icon="trash"></MenuListItem>
                </ContextMenu>
            </Popup>
        </div>
    </>
);
