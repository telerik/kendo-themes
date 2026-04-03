import { FileBoxWrapper } from "../file-box-wrapper.spec";
import { FileBox } from "../file-box.spec";

export const FileBoxMultiple = (props) => (
    <FileBoxWrapper {...props}>
        <FileBox tabIndex={0} />
        <FileBox icon="file-image" name="Photo.png" size="5MB" tabIndex={-1} />
        <FileBox icon="file-txt" name="Notes.txt" size="1KB" tabIndex={-1} />
    </FileBoxWrapper>
);
