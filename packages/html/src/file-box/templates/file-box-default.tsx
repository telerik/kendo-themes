import { FileBoxWrapper } from "../file-box-wrapper.spec";
import { FileBox } from "../file-box.spec";

export const FileBoxDefault = (props) => (
    <FileBoxWrapper {...props}>
        <FileBox />
    </FileBoxWrapper>
);
