import { ChatMessage, ChatNormal, ChatMessageGroup } from '..';
import { Popup } from '../../popup';
import { MenuListItem } from '../../menu';
import { ContextMenuNormal } from '../../context-menu';

const styles = `
    .k-chat {
        height: 400px;
    }

    .k-animation-container {
        top: 160px;
        left: 100px;
    }

    .k-animation-container:has(.receiver-popup) {
        top: 200px;
        left: 700px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Message context menu / Sender</span>
            <span>Message context menu / Receiver</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage active text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
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

            <Popup className="k-menu-popup">
                <ContextMenuNormal>
                    <MenuListItem first text="Reply" icon="undo"></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem text="Pin" icon="pin"></MenuListItem>
                    <MenuListItem last text="Delete" icon="trash"></MenuListItem>
                </ContextMenuNormal>
            </Popup>

            <Popup className="k-menu-popup receiver-popup">
                <ContextMenuNormal>
                    <MenuListItem first text="Reply" icon="undo"></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem last text="Pin" icon="pin"></MenuListItem>
                </ContextMenuNormal>
            </Popup>
        </div>
    </>
);
