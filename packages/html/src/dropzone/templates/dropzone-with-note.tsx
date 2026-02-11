import { Dropzone } from '../dropzone.spec';

export const DropzoneWithNote = (props) =>
    <Dropzone
        note="Only JPEG, PNG and SVG files are allowed."
        {...props}
    />;
