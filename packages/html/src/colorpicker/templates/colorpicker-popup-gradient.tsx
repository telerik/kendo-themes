import { ColorEditor } from "../../coloreditor";
import { ColorPicker } from "..";

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

export default ColorPickerPopupGradient;
