import { ChatTimestamp } from '../chat-timestamp';
import { ChatMessage } from '../chat-message';
import { ChatMessageGroup } from '../chat-message-group';
import { Button } from '../../button/button.spec';
import { ToolbarSeparator } from '../../toolbar/toolbar-separator';
import { ChatMessageToolbar } from '../templates/chat-message-toolbar';


const styles = `
    .k-chat {
        height: 500px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Chat with Message Toolbar</span>
            <span>Chat with Message Custom Toolbar</span>

             <section>
                <ChatMessageToolbar />
            </section>

            <section>
                <ChatMessageToolbar>
                    <ChatTimestamp>Day, Month 7, 2023</ChatTimestamp>
                    <ChatMessageGroup>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender">
                        <ChatMessage toolbar toolbarItems={[
                            <Button icon="copy" fillMode="flat"></Button>,
                            <Button icon="arrows-rotate-outline" fillMode="flat"></Button>,
                            <Button icon="download-light" fillMode="flat"></Button>,
                            <ToolbarSeparator></ToolbarSeparator>,
                            <Button icon="thumb-up-outline" fillMode="flat"></Button>,
                        ]} selected text="(Selected) Message with toolbar" />
                    </ChatMessageGroup>
                </ChatMessageToolbar>
            </section>
        </div>
    </>
);
