import { ImageEditor } from "..";
import { ImageEditorPlaceholder } from "../imageeditor-placeholder";

export const ImageEditorNormal = (props: any) => (
    <ImageEditor
        placeholder={
            <ImageEditorPlaceholder
                icon="image-add"
                title="Ready to create?"
                text="Upload a JPEG, PNG, or WebP file to unlock the full capabilities of ImageEditor."
                buttonText="Upload Image"
            />
        }
        {...props} />
);
