import { PALETTEPRESETS } from "../colorpalette-presets";
import ColorPalette from "../colorpalette.spec";

export const ColorPaletteDisabled = (props) => <ColorPalette disabled={true} palette={PALETTEPRESETS.basic} {...props} />;
