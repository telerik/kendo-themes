import { ColorPaletteNormal } from '../../colorpalette';
import { PALETTEPRESETS } from '../colorpalette-presets';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Office</span>
            <span>Apex</span>
            <span>Austin</span>
            <span>Clarity</span>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.office}></ColorPaletteNormal>
            </section>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.apex}></ColorPaletteNormal>
            </section>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.austin}></ColorPaletteNormal>
            </section>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.clarity}></ColorPaletteNormal>
            </section>

            <span>Slipstream</span>
            <span>Metro</span>
            <span>Flow</span>
            <span>Hardcover</span>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.slipstream}></ColorPaletteNormal>
            </section>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.metro}></ColorPaletteNormal>
            </section>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.flow}></ColorPaletteNormal>
            </section>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.hardcover}></ColorPaletteNormal>
            </section>

            <span>Trek</span>
            <span>Verve</span>
            <span>Basic</span>
            <span>Monochrome</span>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.trek}></ColorPaletteNormal>
            </section>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.verve}></ColorPaletteNormal>
            </section>

            <section>

                <ColorPaletteNormal palette={PALETTEPRESETS.basic}></ColorPaletteNormal>
            </section>

            <section>
                <ColorPaletteNormal palette={PALETTEPRESETS.monochrome}></ColorPaletteNormal>
            </section>

            <span>Custom</span>
            <span></span>
            <span></span>
            <span></span>

            <section>
                <ColorPaletteNormal palette={[ "#37399b", "#a81c85", "#0ab3cc", "#2f7d20", "#a21616" ]}></ColorPaletteNormal>
            </section>
        </div>
    </>
);
