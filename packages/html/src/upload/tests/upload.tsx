import { Upload, UploadFile, UploadFileMultiple, UploadFileInfo } from '../../upload';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Upload async status="uploading">
                    <UploadFile progress="60" status="error" validationMsg="File type not allowed." name="Video_File_with_Very_Very_Very_Very_Long_Name.jpg" icon="file-image"></UploadFile>
                    <UploadFile progress="60" status="progress" name="Document.txt" icon="file-pdf" size="225.68 KB" state="uploaded"></UploadFile>
                </Upload>
            </section>

            <section>
                <Upload async status="done">
                    <UploadFile progress="60" status="success" validationMsg="File(s) uploaded successfully." name="Image1_With_Very_Very_Very_Very_Long_Name.png" icon="file-image"></UploadFile>
                    <UploadFile progress="60" status="success" validationMsg="File(s) uploaded successfully." name="Image2.png" icon="file-image" state="uploaded"></UploadFile>
                </Upload>
            </section>

            <section>
                <Upload async status="done">
                    <UploadFileMultiple status="success" validationMsg="4 File(s) uploaded successfully" fileSummary="Total: 4 files, 170.22 KB">
                        <UploadFileInfo name="Video_File_with_Very_Very_Very_Very_Long_Name.png" size="19.61 KB"></UploadFileInfo>
                        <UploadFileInfo name="Video_File_with_Very_Very_Very_Very_Long_Name2.png" size="106.43 KB"></UploadFileInfo>
                        <UploadFileInfo name="Video3.png" size="24.34 KB"></UploadFileInfo>
                        <UploadFileInfo name="Video4.png" size="19.85 KB"></UploadFileInfo>
                    </UploadFileMultiple>
                </Upload>
            </section>

            <section>
                <Upload async status="uploading">
                    <UploadFileMultiple status="progress" fileSummary="Total: 4 files, 170.22 KB" progress="70">
                        <UploadFileInfo name="Video_File_with_Very_Very_Very_Very_Long_Name.png" size="19.61 KB"></UploadFileInfo>
                        <UploadFileInfo name="Video_File_with_Very_Very_Very_Very_Long_Name2.png" size="106.43 KB"></UploadFileInfo>
                        <UploadFileInfo name="Video4.png" size="19.85 KB"></UploadFileInfo>
                    </UploadFileMultiple>
                </Upload>
            </section>

            <section>
                <Upload async status="failed">
                    <UploadFileMultiple status="error" fileSummary="Total: 4 files, 170.22 KB" validationMsg="Invalid file(s). Please check file upload requirements." progress="70">
                        <UploadFileInfo name="Movie_With_Very_Very_Very_Very_Very_Long_Name1.mkv" size="12.61 KB"></UploadFileInfo>
                        <UploadFileInfo name="Movie2.mkv" size="12.36 KB"></UploadFileInfo>
                        <UploadFileInfo name="Image1.jpg" size="1.09 MB"></UploadFileInfo>
                        <UploadFileInfo name="Image2.jpg" size="1.09 MB"></UploadFileInfo>
                    </UploadFileMultiple>
                </Upload>
            </section>

            <section>
                <Upload async actions status="upload">
                    <UploadFile progress="60" status="success" name="Image_With_Very_Very_Very_Very_Very_Long_Name1.png" icon="file-image" size="51.23 KB"></UploadFile>
                    <UploadFile progress="60" status="success" name="Image2.jpg" icon="file-image" state="uploaded" size="106.43 KB"></UploadFile>
                </Upload>
            </section>

            <section>
                <span>Upload hovered dropzone</span>
                <Upload async empty hover></Upload>
            </section>

            <section>
                <span>Upload disabled</span>
                <Upload async empty disabled></Upload>
            </section>
        </div>
    </>
);
