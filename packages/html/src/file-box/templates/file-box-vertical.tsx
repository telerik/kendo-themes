import { FileBoxWrapper } from "../file-box-wrapper.spec";
import { FileBox } from "../file-box.spec";

export const FileBoxVertical = (props) => (
    <FileBoxWrapper layout="vertical" {...props}>
        <FileBox tabIndex={0} />
        <FileBox icon="file-image" name="Photo.png" size="5MB" tabIndex={-1} />
    </FileBoxWrapper>
);
