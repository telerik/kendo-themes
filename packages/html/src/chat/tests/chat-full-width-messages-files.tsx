import { ChatNormal, ChatMessage, ChatFileWrapper, ChatFile, ChatMessageGroup } from '..';


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
        <div id="test-area" className="k-d-grid">

            <span>Message with full width - files - Sender</span>
            <section>
                <ChatNormal>
                    <ChatMessageGroup fullWidth type="sender" avatar={null} author={null}>
                        <ChatMessage files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                            </>
                        }/>
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <span>Message with full width - files - Receiver</span>
            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null} author={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null} fullWidth author={null}>
                        <ChatMessage files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                            </>
                        }/>
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
        </div>
    </>
);
