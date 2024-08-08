import ColorEditor from "../color-editor.spec";

export const ColorEditorPalette = (props) => (
    <ColorEditor
        view="palette"
        currentColor="fuchsia"
        {...props}
    />
);

export default ColorEditorPalette;
