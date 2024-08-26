import ColorEditor from "../color-editor.spec";

export const ColorEditorPaletteGroup = (props) => (
    <ColorEditor
        view="palette"
        group
        currentColor="fuchsia"
        {...props}
    />
);

export default ColorEditorPaletteGroup;
