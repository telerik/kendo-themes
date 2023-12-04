import { UploadFile, UploadFileMultiple, UploadFileInfo, UploadChunk, UploadBatch } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2 k-rtl">

            <span>Chunk Upload RTL</span>
            <span>Batch Upload RTL</span>

            <section>
                <UploadChunk actions status="upload" />
            </section>

            <section>
                <UploadBatch actions status="upload" />
            </section>

            <section>
                <UploadChunk status="uploading">
                    <UploadFile progress="50" status="progress" name="Document1_With_Very_Very_Very_Very_Very_Long_Name.txt" icon="file-pdf" size="225.68 KB"></UploadFile>
                    <UploadFile progress="70" status="progress" name="Document2.txt" icon="file-pdf" size="225.68 KB"></UploadFile>
                </UploadChunk>
            </section>

            <section>
                <UploadBatch status="uploading">
                    <UploadFileMultiple status="progress" fileSummary="Total: 2 files, 39.66 KB" progress="70">
                        <UploadFileInfo name="Video1_File_with_Very_Very_Very_Very_Long_Name.png" size="19.61 KB"></UploadFileInfo>
                        <UploadFileInfo name="Image2.png" size="19.85 KB"></UploadFileInfo>
                    </UploadFileMultiple>
                </UploadBatch>
            </section>

            <section>
                <UploadChunk status="done">
                    <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Image1_With_Very_Very_Very_Very_Very_Long_Name.png" icon="file-image"></UploadFile>
                    <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Image2.png" icon="file-image"></UploadFile>
                </UploadChunk>
            </section>

            <section>
                <UploadBatch status="done">
                    <UploadFileMultiple status="success" validationMsg="2 File(s) uploaded successfully" fileSummary="Total: 4 files, 39.46 KB">
                        <UploadFileInfo name="Video1_File_with_Very_Very_Very_Very_Long_Name.png" size="19.61 KB"></UploadFileInfo>
                        <UploadFileInfo name="Image2.png" size="24.34 KB"></UploadFileInfo>
                    </UploadFileMultiple>
                </UploadBatch>
            </section>

            <section>
                <UploadChunk status="failed">
                    <UploadFile status="error" validationMsg="File type not allowed." name="Movie1_With_Very_Very_Very_Very_Very_Long_Name1.mkv" icon="file-image"></UploadFile>
                    <UploadFile status="error" validationMsg="File type not allowed." name="Video2.mkv" icon="file-image"></UploadFile>
                </UploadChunk>
            </section>

            <section>
                <UploadBatch status="failed">
                    <UploadFileMultiple status="error" fileSummary="Total: 4 files, 170.22 KB" validationMsg="Invalid file(s). Please check file upload requirements." progress="70">
                        <UploadFileInfo name="Movie_With_Very_Very_Very_Very_Very_Long_Name1.mkv" size="12.61 KB"></UploadFileInfo>
                        <UploadFileInfo name="Movie1.mkv" size="12.36 KB"></UploadFileInfo>
                    </UploadFileMultiple>
                </UploadBatch>
            </section>
        </div>
    </>
);
