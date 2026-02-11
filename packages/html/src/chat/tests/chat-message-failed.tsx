import { ChatMessage } from '../chat-message';
import { ChatNormal } from '../templates/chat-normal';
import { ChatMessageGroup } from '../chat-message-group';


const styles = ``;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Messages</span>
            <span>Full width messages</span>
            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender">
                        <ChatMessage failed text="Failed message with Author and Avatar." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender">
                        <ChatMessage selected status={null} failed text="(Selected) Failed message with Author, Avatar and Time." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage  failed  text="Failed message with Author." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage selected status={null} failed  text="(Selected) Failed message with Author and Time." />
                    </ChatMessageGroup>
                     <ChatMessageGroup type="sender">
                        <ChatMessage text="Message 1 with longer text." failed />
                        <ChatMessage text="Message 2." failed />
                        <ChatMessage text="Message 3." failed />
                        <ChatMessage text="M 4" failed selected status={null} />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" fullWidth>
                        <ChatMessage failed text="(Full width - Sender) Failed message with Author and Avatar. " />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" fullWidth>
                        <ChatMessage selected status={null} failed text="(Selected) (Full width - Sender) Failed message with Author, Avatar and Time. I’m sending you a file with my portfolio. I’m Full-stack developer with 10 years experience." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} fullWidth>
                        <ChatMessage  failed  text="(Full width - Sender) Failed message with Author. I’m sending you a file with my portfolio. I’m Full-stack developer with 10 years experience." />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null} fullWidth>
                        <ChatMessage selected status={null} failed  text="(Selected) (Full width - Sender) Failed message with Author and Time. I’m sending you a file with my portfolio. I’m Full-stack developer with 10 years experience." />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);

