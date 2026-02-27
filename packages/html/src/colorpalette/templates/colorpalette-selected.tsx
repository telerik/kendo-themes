import ColorPalette from "../colorpalette.spec";
import { ColorPaletteRow } from "../colorpalette-row";
import { ColorPaletteTile } from "../colorpalette-tile";

export const ColorPaletteSelected = (props) => (
    <ColorPalette {...props}>
        <ColorPaletteRow>
            <ColorPaletteTile color="#ff0000" />
            <ColorPaletteTile color="#ff5252" />
            <ColorPaletteTile color="#ff6666" selected />
            <ColorPaletteTile color="#ff8080" />
        </ColorPaletteRow>
        <ColorPaletteRow>
            <ColorPaletteTile color="#00ff00" />
            <ColorPaletteTile color="#52ff52" />
            <ColorPaletteTile color="#66ff66" />
            <ColorPaletteTile color="#80ff80" />
        </ColorPaletteRow>
    </ColorPalette>
);
