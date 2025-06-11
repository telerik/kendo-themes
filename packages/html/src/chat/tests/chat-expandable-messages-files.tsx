import { ChatNormal, ChatMessage, ChatFileWrapper, ChatFile, ChatMessageGroup, ChatTimestamp } from '..';


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
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
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
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
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
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
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
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                            }
                        />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
        </div>
    </>
);
