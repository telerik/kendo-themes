import { Upload, UploadFileMultiple, UploadFileInfo } from "..";

export const UploadBatch = (props) => (
    <Upload async children={
        <>
            <UploadFileMultiple fileSummary="Total: 2 files, 157.66 KB">
                <UploadFileInfo name="Video1_File_with_Very_Very_Very_Very_Long_Name.png" size="51.23 KB"></UploadFileInfo>
                <UploadFileInfo name="Image2.jpg" size="106.43 KB"></UploadFileInfo>
            </UploadFileMultiple>
        </>
    }
    {...props}>
    </Upload>
);

export default UploadBatch;
