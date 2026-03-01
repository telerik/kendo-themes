import { FileBoxWrapper } from "../file-box-wrapper.spec";
import { FileBox } from "../file-box.spec";

export const FileBoxNoButton = (props) => (
    <FileBoxWrapper {...props}>
        <FileBox showButton={false} />
    </FileBoxWrapper>
);
