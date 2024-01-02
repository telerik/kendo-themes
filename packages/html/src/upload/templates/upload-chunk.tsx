import { UploadFile, Upload } from "..";

export const UploadChunk = (props) => (
    <Upload async children={[
        <>
            <UploadFile name="Image_With_Very_Very_Very_Very_Very_Long_Name1.png" icon="file-image" size="51.23 KB"></UploadFile>
            <UploadFile name="Image2.jpg" icon="file-image" size="106.43 KB"></UploadFile>
        </>
    ]}
    {...props}>
    </Upload>
);
