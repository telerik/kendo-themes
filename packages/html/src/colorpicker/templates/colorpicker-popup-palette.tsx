import { ColorEditor } from "../../coloreditor";
import { ColorPicker } from "..";

export const ColorPickerPopupPalette = (props: any) => (
    <ColorPicker
        value="fuchsia"
        opened
        popup={
            <ColorEditor
                group
                view="palette"
                color="rgba(0,0,0, 0.5)"
            />
        }
        {...props}
    />
);
