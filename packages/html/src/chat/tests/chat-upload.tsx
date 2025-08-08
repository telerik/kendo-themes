import { ChatNormal, ChatUpload } from '..';
import { Dialog } from '../../dialog';
import { Button } from '../../button';
import { Dropzone } from '../../dropzone';
import { Upload, UploadFile } from '../../upload';

const styles = `
    #test-area {
        max-width: 1240px;
    }

    .k-dialog {
        max-height: 466px;
        width: 80%;
        max-width: 600px;
    }

    section {
        height: 500px;
        transform: translate( 0, 0 );
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Dialog Upload -  Upload single file</span>
            <span></span>

            <section>
                <ChatUpload />
            </section>

            <section>
            </section>

            <span>Dialog Upload -  Single file uploaded</span>
            <span>Dialog Upload -  Multiple files uploaded</span>

            <section>
                <ChatNormal />
                <Dialog className="k-chat-upload" title='Upload file(s)' actions={[ 'x' ]} actionButtons={
                        <>
                            <Button themeColor="primary">Upload</Button>
                            <Button>Cancel</Button>
                        </>
                    }>
                    <Dropzone />
                    <Upload status="upload">
                        <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Document.txt" icon="file-pdf"></UploadFile>
                    </Upload>
                </Dialog>
            </section>

            <section>
                <ChatNormal />
                <Dialog className="k-chat-upload" title='Upload file(s)' actions={[ 'x' ]} actionButtons={
                        <>
                            <Button themeColor="primary">Upload</Button>
                            <Button>Cancel</Button>
                        </>
                    }>
                    <Dropzone />
                    <Upload status="upload">
                        <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Document.txt" icon="file-pdf"></UploadFile>
                        <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Document.txt" icon="file-pdf"></UploadFile>
                        <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Document.txt" icon="file-pdf"></UploadFile>
                        <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Document.txt" icon="file-pdf"></UploadFile>
                    </Upload>
                </Dialog>
            </section>
        </div>
    </>
);
