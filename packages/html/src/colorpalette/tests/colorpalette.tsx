import { ColorPaletteNormal } from '../../colorpalette';
import { PALETTEPRESETS } from '../colorpalette-presets';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>ColorPalette</span>
            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.basic}></ColorPaletteNormal>
            </section>

        </div>
    </>
);
