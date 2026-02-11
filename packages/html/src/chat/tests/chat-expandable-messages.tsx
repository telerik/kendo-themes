import { ChatMessage } from '../chat-message';
import { ChatNormal } from '../templates/chat-normal';
import { ChatTimestamp } from '../chat-timestamp';
import { ChatMessageGroup } from '../chat-message-group';


const styles = `
    .k-chat {
        min-height: 200px;
    }

    .chat-ai .k-chat {
        min-height: 700px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Message-collapsed - Sender</span>
            <span>Message-collapsed - Receiver</span>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable expanded={false} />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable expanded={false} />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <span>Message-expanded - Sender</span>
            <span>Message-expanded - Receiver</span>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable expanded />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable expanded />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
