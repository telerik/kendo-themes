import { PromptBoxLineModeMulti } from '../templates/prompt-box-multi';
import { IconButton } from '../../button/templates/icon-button';
import { FileBox } from "../../file-box/file-box.spec";
import { FileBoxWrapper } from "../../file-box/file-box-wrapper.spec";

const styles = `
    #test-area {
        width: 700px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>Multiline mode with attachment button</span>

             <div>
                <PromptBoxLineModeMulti
                    placeholder="Type a message"
                    endAffix={<>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                        <div className="k-spacer"></div>
                    </>}
                />
            </div>

            <span>Attachments in header</span>
             <div>
                <PromptBoxLineModeMulti
                    placeholder="Type a message"
                    header={<>
                        <FileBoxWrapper scrollingPosition="start">
                            <FileBox removeButton></FileBox>
                            <FileBox icon="file-psd" name="File with long name" size="5MB" removeButton></FileBox>
                            <FileBox icon="file-txt" name="Another file with longer name" removeButton></FileBox>
                            <FileBox icon="file-csv" name="Another file with even longer name" size="5MB" removeButton></FileBox>
                        </FileBoxWrapper>
                    </>}
                    endAffix={<>
                        <IconButton icon="paperclip-outline-alt-right" size="small" fillMode="flat" />
                        <div className="k-spacer"></div>
                    </>}
                />
            </div>


        </div>
    </>
);
