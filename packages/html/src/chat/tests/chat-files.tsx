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
            <span>Sender - Single and multiple files</span>
            <span>Recipient - Single and multiple files</span>

            <section>
                <ChatNormal>
                    <ChatMessageGroup type="sender" avatar={null}>
                        <ChatMessage text="Text + Single file" files={
                            <FileBoxWrapper layout='vertical'>
                                <FileBox />
                            </FileBoxWrapper>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-error" deleted showButton={false} name="File deleted" size={null} status="You have deleted this file." />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Deleted file" files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox icon="file-error" deleted showButton={false} name="File deleted" size={null} status="You have deleted this file." />
                                </FileBoxWrapper>
                            </>
                        } />
                         <ChatMessage text="Looooooooooooooooooooong Text + Multiple files" files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
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
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text="Text + Single file" files={
                            <FileBoxWrapper layout='vertical'>
                                <FileBox />
                            </FileBoxWrapper>
                        } />
                        <ChatMessage text="Text + Multiple files" files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                    <FileBox icon="file-error" deleted showButton={false} name="File deleted" size={null} status="You have deleted this file." />
                                    <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
                                </div>
                            </>
                        } />
                        <ChatMessage text="Text + Deleted file" files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox icon="file-error" deleted showButton={false} name="File deleted" size={null} status="You have deleted this file." />
                                </FileBoxWrapper>
                            </>
                        } />
                        <ChatMessage text="Looooooooooooooooooooong Text + Multiple files" files={
                            <>
                                <FileBoxWrapper layout='vertical'>
                                    <FileBox />
                                    <FileBox icon="file-psd" name="File with long name" size="5MB" />
                                </FileBoxWrapper>
                                <div className="k-chat-download-button-wrapper">
                                    <IconTextButton className="k-chat-download-button" fillMode="flat" children="Download all" icon="download-light" size="small" />
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
                            <FileBoxWrapper layout='vertical'>
                                <FileBox />
                            </FileBoxWrapper>
                            </>
                        } />
                        <ChatMessage text={null} files={
                            <>
                            <FileBoxWrapper layout='vertical'>
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
                    <ChatMessageGroup avatar={null}>
                        <ChatMessage text={null} files={
                            <>
                            <FileBoxWrapper layout='vertical'>
                                <FileBox />
                            </FileBoxWrapper>
                            </>
                        } />
                        <ChatMessage text={null} files={
                            <>
                            <FileBoxWrapper layout='vertical'>
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
