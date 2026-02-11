import { ColorEditor } from "../../coloreditor/color-editor.spec";
import { ColorPicker } from "../colorpicker.spec";

export const ColorPickerPopupGradient = ({ value, color, currentColor, ...other }: any) => (
    <ColorPicker
        value={value}
        opened
        popup={
            <ColorEditor
                group
                color={color}
                currentColor={currentColor}
            />
        }
        {...other}
    />
);
