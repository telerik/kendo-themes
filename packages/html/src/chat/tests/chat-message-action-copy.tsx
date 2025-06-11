import { ChatMessage, ChatNormal, ChatMessageGroup } from '..';
import { Popup } from '../../popup';
import { MenuListItem } from '../../menu';
import { ContextMenu } from '../../context-menu';
import { Notification } from '../../notification';
import { AnimationContainer } from '../../animation-container';

const styles = `
    .k-chat {
        height: 400px;
    }

    .k-animation-container {
        top: 210px;
        left: 250px;
    }

    .copy-notification {
        top: 300px;
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
                    <MenuListItem last text="Pin" icon="pin"></MenuListItem>
                </ContextMenu>
            </Popup>

            <AnimationContainer className="copy-notification">
                <Notification text="Message copied to clipboard." icon="copy" themeColor="dark"/>
            </AnimationContainer>
        </div>
    </>
);
