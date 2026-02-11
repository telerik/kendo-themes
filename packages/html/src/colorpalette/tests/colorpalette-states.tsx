import { ColorPalette } from '../../colorpalette/colorpalette.spec';
import { ColorPaletteNormal } from '../../colorpalette/templates/colorpalette-normal';
import { ColorPaletteRow } from '../../colorpalette/colorpalette-row';
import { ColorPaletteTile } from '../../colorpalette/colorpalette-tile';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Disabled</span>
            <section>
                <ColorPaletteNormal disabled />
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
