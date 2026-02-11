import { ChatNormal } from '../templates/chat-normal';
import { ChatMessage } from '../chat-message';
import { ChatMessageGroup } from '../chat-message-group';
import { ChatTimestamp } from '../chat-timestamp';
import { FileBoxWrapper } from '../../file-box/file-box-wrapper.spec';
import { FileBox } from '../../file-box/file-box.spec';

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
            <span>Message-expanded - files - Sender</span>
            <span>Message-expanded - files - Receiver</span>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup avatar={null} type="sender">
                        <ChatMessage text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable expanded
                            files={
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB"></FileBox>
                                </FileBoxWrapper>
                            }
                        />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable expanded
                            files={
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB"></FileBox>
                                </FileBoxWrapper>
                            }
                        />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <span>Message-collapsed - files - Sender</span>
            <span>Message-collapsed - files - Receiver</span>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup avatar={null} type="sender">
                        <ChatMessage text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable
                            files={
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB"></FileBox>
                                </FileBoxWrapper>
                            }
                        />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatTimestamp>6/9/2025 3:42 AM</ChatTimestamp>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text="Compare the top 3 AI tools for an image-generation (like Midjourney, DALL·E, and Adobe Firefly). List their pricing, main features." expandable
                            files={
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB"></FileBox>
                                </FileBoxWrapper>
                            }
                        />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
        </div>
    </>
);
