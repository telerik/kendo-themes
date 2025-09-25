import { ChatMessage, ChatMessageReference, ChatNormal, ChatMessageGroup } from '..';
import { Popup } from '../../popup';
import { MenuListItem } from '../../menu';
import { ContextMenu } from '../../context-menu';

const styles = `
    #test-area {
        max-width: 1240px;
    }

    .k-chat {
        height: 470px;
    }

    .k-animation-container:has(.receiver) {
        top: 250px;
        left: 190px;
    }

    .k-animation-container:has(.sender) {
        top: 750px;
        left: 190px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Reply message / receiver</span>
            <span>Reply message / receiver</span>
            <span>Reply message / receiver / message removed</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup>
                        <ChatMessage active text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal replied={<ChatMessageReference content={"I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input"} closeable />} >
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup author={null}>
                        <ChatMessage text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage
                            text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input"
                            additionalContent={
                            <>
                                <ChatMessageReference content={"I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input"} /></>
                            } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup receiver">
                <ContextMenu>
                    <MenuListItem first text="Reply" icon="undo" selected></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem last text="Pin" icon="pin"></MenuListItem>
                </ContextMenu>
            </Popup>

            <span>Reply message / sender</span>
            <span>Reply message / sender</span>
            <span>Reply message / sender / message removed</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender">
                        <ChatMessage active text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal replied={<ChatMessageReference type="sender" content={"I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input"} closeable />} >
                    <ChatMessageGroup type="sender" author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input" />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage
                            text="I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input"
                            additionalContent={
                            <>
                                <ChatMessageReference type="sender" content={"I really appreciate it. I’ve been trying to diversify, but I’m not sure if I’m on the right track. Would love your input"} /></>
                            } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <Popup className="k-menu-popup sender">
                <ContextMenu>
                    <MenuListItem first text="Reply" icon="undo" selected></MenuListItem>
                    <MenuListItem text="Copy" icon="copy"></MenuListItem>
                    <MenuListItem text="Pin" icon="pin"></MenuListItem>
                    <MenuListItem last text="Delete" icon="trash"></MenuListItem>
                </ContextMenu>
            </Popup>

        </div>
    </>
);
