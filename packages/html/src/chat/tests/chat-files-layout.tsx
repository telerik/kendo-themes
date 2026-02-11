import { ChatNormal } from '../templates/chat-normal';
import { ChatMessage } from '../chat-message';
import { ChatMessageGroup } from '../chat-message-group';
import { IconTextButton } from '../../button/templates/icon-text-button';
import { FileBoxWrapper } from '../../file-box/file-box-wrapper.spec';
import { FileBox } from '../../file-box/file-box.spec';

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
                                <FileBoxWrapper>
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <FileBoxWrapper>
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
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
                                <FileBoxWrapper>
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <FileBoxWrapper>
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
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
                                <FileBoxWrapper layout="wrap">
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <FileBoxWrapper layout="wrap">
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
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
                                <FileBoxWrapper layout="wrap">
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <FileBoxWrapper layout="wrap">
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
                                </div>
                            </>
                        } />
                    </ChatMessageGroup>
                </ChatNormal>
            </section>

        </div>
    </>
);
