import ColorEditor from "../color-editor.spec";

export const ColorEditorGroup = (props) => (
    <ColorEditor
        group
        currentColor="fuchsia"
        {...props}
    />
);

export default ColorEditorGroup;
