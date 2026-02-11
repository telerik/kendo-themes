import { ColorEditor } from "../../coloreditor/color-editor.spec";

export const ColorPickerAdaptivePalette = ({ color, currentColor, ...other }: any) => (
    <ColorEditor
        group
        view="palette"
        color={color}
        currentColor={currentColor}
        {...other}
    />
);
