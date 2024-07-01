import { Dropzone } from "..";

export const DropzoneWithNote = (props) =>
    <Dropzone
        note="Only JPEG, PNG and SVG files are allowed."
        {...props}
    />;

export default DropzoneWithNote;
