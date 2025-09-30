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
            <span>Sender - Files with horizontal layout</span>
            <span>Recipient - Files with horizontal layout</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text={null} files={
                            <>
                                <ChatFileWrapper layout="horizontal">
                                    <ChatFile />
                                    <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <ChatFileWrapper layout="horizontal">
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
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text={null} files={
                            <>
                                <ChatFileWrapper layout="horizontal">
                                    <ChatFile />
                                    <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <ChatFileWrapper layout="horizontal">
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

            <span>Sender - Files with wrapping layout</span>
            <span>Recipient - Files with wrapping layout</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text={null} files={
                            <>
                                <ChatFileWrapper layout="wrap">
                                    <ChatFile />
                                    <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <ChatFileWrapper layout="wrap">
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
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage />
                    </ChatMessageGroup>
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text={null} files={
                            <>
                                <ChatFileWrapper layout="wrap">
                                    <ChatFile />
                                    <ChatFile icon="file-psd" name="File with long name" size="5MB" />
                                    <ChatFile icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </ChatFileWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <ChatFileWrapper layout="wrap">
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
