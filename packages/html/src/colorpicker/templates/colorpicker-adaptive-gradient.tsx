import { ColorEditor } from "../../coloreditor";

export const ColorPickerAdaptiveGradient = ({ color, currentColor, ...other }: any) => (
    <ColorEditor
        group
        color={color}
        currentColor={currentColor}
        {...other}
    />
);
