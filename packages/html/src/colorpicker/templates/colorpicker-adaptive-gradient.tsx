import { ColorEditor } from "../../coloreditor/color-editor.spec";

export const ColorPickerAdaptiveGradient = ({ color, currentColor, ...other }: any) => (
    <ColorEditor
        group
        color={color}
        currentColor={currentColor}
        {...other}
    />
);
