import { ColorEditor } from "../../coloreditor";
import { ColorPicker } from "..";

export const ColorPickerPopupGradient = (props: any) => (
    <ColorPicker
        opened
        popup={
            <ColorEditor
                group
                color="rgba(0,0,0, 0.5)"
            />
        }
        {...props}
    />
);
