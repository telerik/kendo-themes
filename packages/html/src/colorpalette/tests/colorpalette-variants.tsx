import ReactDOM from 'react-dom/client';
import { ColorPalette } from '../../colorpalette';

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
                <ColorPalette palette="office"></ColorPalette>
            </section>

            <section>
                <ColorPalette palette="apex"></ColorPalette>
            </section>

            <section>
                <ColorPalette palette="austin"></ColorPalette>
            </section>

            <section>
                <ColorPalette palette="clarity"></ColorPalette>
            </section>

            <span>Slipstream</span>
            <span>Metro</span>
            <span>Flow</span>
            <span>Hardcover</span>

            <section>
                <ColorPalette palette="slipstream"></ColorPalette>
            </section>

            <section>
                <ColorPalette palette="metro"></ColorPalette>
            </section>

            <section>
                <ColorPalette palette="flow"></ColorPalette>
            </section>

            <section>
                <ColorPalette palette="hardcover"></ColorPalette>
            </section>

            <span>Trek</span>
            <span>Verve</span>
            <span>Basic</span>
            <span>Monochrome</span>

            <section>
                <ColorPalette palette="trek"></ColorPalette>
            </section>

            <section>
                <ColorPalette palette="verve"></ColorPalette>
            </section>

            <section>

                <ColorPalette palette="basic"></ColorPalette>
            </section>

            <section>
                <ColorPalette palette="monochrome"></ColorPalette>
            </section>

        </div>
    </>
);
