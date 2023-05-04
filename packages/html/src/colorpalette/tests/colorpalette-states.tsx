import { ColorPalette, ColorPaletteRow, ColorPaletteTile } from '../../colorpalette';
import { PALETTEPRESETS } from '../colorpalette-presets';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Disabled</span>
            <section>
                <ColorPalette palette={PALETTEPRESETS.basic} disabled></ColorPalette>
            </section>

            <span>Item States</span>
            <section>
                <ColorPalette>
                    <ColorPaletteRow>
                        <ColorPaletteTile color="black" focus></ColorPaletteTile>
                        <ColorPaletteTile color="grey"></ColorPaletteTile>
                        <ColorPaletteTile color="red" hover></ColorPaletteTile>
                        <ColorPaletteTile color="orange"></ColorPaletteTile>
                        <ColorPaletteTile color="green" selected></ColorPaletteTile>
                        <ColorPaletteTile color="blue"></ColorPaletteTile>
                    </ColorPaletteRow>
                </ColorPalette>
            </section>

        </div>
    </>
);
