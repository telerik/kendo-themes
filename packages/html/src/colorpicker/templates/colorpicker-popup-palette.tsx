import { ColorEditor } from "../../coloreditor";
import { ColorPicker } from "..";

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
