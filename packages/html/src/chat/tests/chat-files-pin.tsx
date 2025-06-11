import { ChatHeader, ChatNormal, ChatMessage, ChatFileWrapper, ChatFile, ChatMessageReference, ChatMessageGroup } from '..';
import { Popup } from '../../popup';
import { MenuListItem } from '../../menu';
import { ContextMenu } from '../../context-menu';

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
                                <ChatFileWrapper>
                                    <ChatFile />
                                </ChatFileWrapper>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal pinned={<ChatMessageReference pinned content={<ChatFile />} closeable />}>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile />
                                </ChatFileWrapper>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal header={<ChatHeader>Alex</ChatHeader>}
                    pinned={<ChatMessageReference pinned content={<ChatFile />} closeable />}>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile />
                                </ChatFileWrapper>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup receiver">
                <ContextMenu>
                    <MenuListItem first text="Download" icon="download"></MenuListItem>
                    <MenuListItem text="Pin" icon="pin" selected></MenuListItem>
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
                            <ChatFileWrapper>
                                <ChatFile />
                            </ChatFileWrapper>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal pinned={<ChatMessageReference type="sender" pinned content={<ChatFile />} closeable />}>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage files={
                            <ChatFileWrapper>
                                <ChatFile />
                            </ChatFileWrapper>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal header={<ChatHeader>Alex</ChatHeader>}
                    pinned={<ChatMessageReference type="sender" pinned content={<ChatFile />} closeable />}>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage files={
                            <ChatFileWrapper>
                                <ChatFile />
                            </ChatFileWrapper>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup sender">
                <ContextMenu>
                    <MenuListItem first text="Download" icon="download"></MenuListItem>
                    <MenuListItem text="Pin" icon="pin" selected></MenuListItem>
                    <MenuListItem last text="Delete" icon="trash"></MenuListItem>
                </ContextMenu>
            </Popup>
        </div>
    </>
);
