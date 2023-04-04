import ReactDOM from 'react-dom/client';
import { ColorPalette } from '../../colorpalette';
import { PALETTEPRESETS } from '../colorpalette-presets';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Office</span>
            <span>Apex</span>
            <span>Austin</span>
            <span>Clarity</span>

            <section>
                <ColorPalette palette={PALETTEPRESETS.office}></ColorPalette>
            </section>

            <section>
                <ColorPalette palette={PALETTEPRESETS.apex}></ColorPalette>
            </section>

            <section>
                <ColorPalette palette={PALETTEPRESETS.austin}></ColorPalette>
            </section>

            <section>
                <ColorPalette palette={PALETTEPRESETS.clarity}></ColorPalette>
            </section>

            <span>Slipstream</span>
            <span>Metro</span>
            <span>Flow</span>
            <span>Hardcover</span>

            <section>
                <ColorPalette palette={PALETTEPRESETS.slipstream}></ColorPalette>
            </section>

            <section>
                <ColorPalette palette={PALETTEPRESETS.metro}></ColorPalette>
            </section>

            <section>
                <ColorPalette palette={PALETTEPRESETS.flow}></ColorPalette>
            </section>

            <section>
                <ColorPalette palette={PALETTEPRESETS.hardcover}></ColorPalette>
            </section>

            <span>Trek</span>
            <span>Verve</span>
            <span>Basic</span>
            <span>Monochrome</span>

            <section>
                <ColorPalette palette={PALETTEPRESETS.trek}></ColorPalette>
            </section>

            <section>
                <ColorPalette palette={PALETTEPRESETS.verve}></ColorPalette>
            </section>

            <section>

                <ColorPalette palette={PALETTEPRESETS.basic}></ColorPalette>
            </section>

            <section>
                <ColorPalette palette={PALETTEPRESETS.monochrome}></ColorPalette>
            </section>

            <span>Custom</span>
            <span></span>
            <span></span>
            <span></span>

            <section>
                <ColorPalette palette={[ "#37399b", "#a81c85", "#0ab3cc", "#2f7d20", "#a21616" ]}></ColorPalette>
            </section>
        </div>
    </>
);
