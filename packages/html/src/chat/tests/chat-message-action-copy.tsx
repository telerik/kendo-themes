import { ChatMessage } from '../chat-message';
import { ChatNormal } from '../templates/chat-normal';
import { ChatMessageGroup } from '../chat-message-group';
import { Popup } from '../../popup/popup.spec';
import { MenuListItem } from '../../menu/menu-list-item.spec';
import { ContextMenu } from '../../context-menu/context-menu.spec';
import { Notification } from '../../notification/notification.spec';
import { AnimationContainer } from '../../animation-container/animation-container.spec';

const styles = `
    .k-chat {
        height: 400px;
    }

    .k-animation-container {
        top: 210px;
        left: 250px;
    }

    .copy-notification {
        top: 270px;
        left: 700px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Copy command - selected</span>
            <span>Message copied to clipboard</span>

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
                <ChatNormal>
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

            <Popup className="k-menu-popup">
                <ContextMenu>
                    <MenuListItem first text="Reply" icon="undo"></MenuListItem>
                    <MenuListItem text="Copy" icon="copy" selected></MenuListItem>
                    <MenuListItem last text="Pin" icon="pin-outline"></MenuListItem>
                </ContextMenu>
            </Popup>

            <AnimationContainer className="copy-notification">
                <Notification text="Message copied to clipboard." icon="copy" themeColor="dark"/>
            </AnimationContainer>
        </div>
    </>
);
