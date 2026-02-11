import { ColorEditor } from "../../coloreditor/color-editor.spec";
import { ColorPicker } from "../colorpicker.spec";

export const ColorPickerPopupPalette = ({ value = "fuchsia", color = "fuchsia", currentColor = "fuchsia", ...other }: any) => (
    <ColorPicker
        value={value}
        opened
        popup={
            <ColorEditor
                group
                view="palette"
                color={color}
                currentColor={currentColor}
            />
        }
        {...other}
    />
);
