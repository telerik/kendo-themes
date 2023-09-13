import { ColorPaletteNormal, ColorPaletteRow, ColorPaletteTile } from '../../colorpalette';
import { PALETTEPRESETS } from '../colorpalette-presets';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Disabled</span>
            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.basic} disabled></ColorPaletteNormal>
            </section>

            <span>Item States</span>
            <section>
                <ColorPaletteNormal>
                    <ColorPaletteRow>
                        <ColorPaletteTile color="black" focus></ColorPaletteTile>
                        <ColorPaletteTile color="grey"></ColorPaletteTile>
                        <ColorPaletteTile color="red" hover></ColorPaletteTile>
                        <ColorPaletteTile color="orange"></ColorPaletteTile>
                        <ColorPaletteTile color="green" selected></ColorPaletteTile>
                        <ColorPaletteTile color="blue"></ColorPaletteTile>
                    </ColorPaletteRow>
                </ColorPaletteNormal>
            </section>

        </div>
    </>
);
