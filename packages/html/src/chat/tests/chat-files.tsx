import { ChatNormal, ChatMessage, ChatFileWrapper, ChatFile, ChatMessageGroup } from '..';
import { IconTextButton } from '../../button';

const styles = `
    #test-area {
        max-width: 1240px;
    }

    .k-chat {
        min-height: 500px;
        min-width: auto;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Sender - Single and multiple files</span>
            <span>Recipient - Single and multiple files</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text="Text + Single file" files={
                            <ChatFileWrapper>
                                <ChatFile />
                            </ChatFileWrapper>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                    <ChatFile icon="file-error" deleted showButton={false} name="File deleted" size={null} status="You have deleted this file." />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Deleted file" files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile icon="file-error" deleted showButton={false} name="File deleted" size={null} status="You have deleted this file." />
                                </ChatFileWrapper>
                            </>
                        } />
                         <ChatMessage text="Looooooooooooooooooooong Text + Multiple files" files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                </ChatFileWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                                </div>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <section>
                <ChatNormal>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text="Text + Single file" files={
                            <ChatFileWrapper>
                                <ChatFile />
                            </ChatFileWrapper>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                    <ChatFile icon="file-error" deleted showButton={false} name="File deleted" size={null} status="You have deleted this file." />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Deleted file" files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile icon="file-error" deleted showButton={false} name="File deleted" size={null} status="You have deleted this file." />
                                </ChatFileWrapper>
                            </>
                        } />
                        <ChatMessage text="Looooooooooooooooooooong Text + Multiple files" files={
                            <>
                                <ChatFileWrapper>
                                    <ChatFile />
                                    <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                </ChatFileWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                                </div>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

            <span>Sender - files only (without text)</span>
            <span>Recipient - files only (without text)</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text={null} files={
                            <>
                            <ChatFileWrapper>
                                <ChatFile />
                            </ChatFileWrapper>
                            </>
                        } />
                        <ChatMessage text={null} files={
                            <>
                            <ChatFileWrapper>
                                <ChatFile />
                                <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                            </ChatFileWrapper>
                            <div className="k-chat-download-button-wrapper">
                                <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                            </div>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>
            <section>
                <ChatNormal>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text={null} files={
                            <>
                            <ChatFileWrapper>
                                <ChatFile />
                            </ChatFileWrapper>
                            </>
                        } />
                        <ChatMessage text={null} files={
                            <>
                            <ChatFileWrapper>
                                <ChatFile />
                                <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                            </ChatFileWrapper>
                            <div className="k-chat-download-button-wrapper">
                                <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                            </div>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
