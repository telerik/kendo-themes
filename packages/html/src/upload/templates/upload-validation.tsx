import { UploadFile, Upload } from "..";

export const UploadValidation = (props) => (
    <Upload async children={
        <>
            <UploadFile name="Invalid_File.exe" icon="file" size="51.23 KB" validationMsg="File type not allowed"></UploadFile>
            <UploadFile name="Image2.jpg" icon="file-image" size="106.43 KB"></UploadFile>
        </>
    }
    {...props}>
    </Upload>
);
