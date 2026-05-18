import { ChatMessage, ChatMessageReference, ChatNormal, ChatMessageGroup } from '..';
import { Popup } from '../../popup';
import { MenuListItem } from '../../menu';
import { ContextMenu } from '../../context-menu';

const styles = `
    #test-area {
        max-width: 1240px;
    }

    .k-chat {
        height: 400px;
    }

    .k-animation-container:has(.receiver) {
        top: 200px;
        left: 190px;
    }

    .k-animation-container:has(.sender) {
        top: 650px;
        left: 190px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Pin message / receiver</span>
            <span>Pin message / receiver</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup author={null}>
                        <ChatMessage active text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal pinned={<ChatMessageReference pinned content={"I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input"} closeable />}>
                    <ChatMessageGroup author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup author={null}>
                        <ChatMessage text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup receiver">
                <ContextMenu>
                    <MenuListItem first text="Reply" icon="undo"></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem last text="Pin" icon="pin" selected></MenuListItem>
                </ContextMenu>
            </Popup>

            <span>Pin message / sender</span>
            <span>Pin message / sender</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" author={null}>
                        <ChatMessage active text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal pinned={<ChatMessageReference pinned type="sender" content={"I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input"} closeable />}>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup sender">
                <ContextMenu>
                    <MenuListItem first text="Reply" icon="undo"></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem text="Pin" icon="pin" selected></MenuListItem>
                    <MenuListItem last text="Delete" icon="trash"></MenuListItem>
                </ContextMenu>
            </Popup>

        </div>
    </>
);
