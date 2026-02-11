import { ChatMessage } from '../chat-message';
import { ChatNormal } from '../templates/chat-normal';
import { ChatMessageGroup } from '../chat-message-group';
import { Popup } from '../../popup/popup.spec';
import { MenuListItem } from '../../menu/menu-list-item.spec';
import { ContextMenu } from '../../context-menu/context-menu.spec';

const styles = `
    #test-area {
        max-width: 1240px;
    }

    .k-chat {
        height: 500px;
    }

    .k-animation-container {
        top: 250px;
        left: 150px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Delete command - selected</span>
            <span>Delete message / remove indication / sender</span>
            <span>Delete message / remove indication / receiver</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup author={null}>
                        <ChatMessage text="Sure. Send it over whenever you are ready!" />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage active text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup author={null}>
                        <ChatMessage text="Sure. Send it over whenever you are ready!" />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage removed text="You removed this message." />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatMessageGroup author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage text="Sure. Send it over whenever you are ready!" />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage removed text="This message was removed by its sender." />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup">
                <ContextMenu>
                    <MenuListItem first text="Reply" icon="undo"></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem text="Pin" icon="pin-outline"></MenuListItem>
                    <MenuListItem last text="Delete" icon="trash" selected></MenuListItem>
                </ContextMenu>
            </Popup>
        </div>
    </>
);
