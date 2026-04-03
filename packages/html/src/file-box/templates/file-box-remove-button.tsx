import { FileBoxWrapper } from "../file-box-wrapper.spec";
import { FileBox } from "../file-box.spec";

export const FileBoxRemoveButton = (props) => (
    <FileBoxWrapper {...props}>
        <FileBox removeButton />
    </FileBoxWrapper>
);
