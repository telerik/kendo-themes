import { ColorEditorNormal, ColorEditorPalette, ColorEditorGroup, ColorEditorPaletteGroup } from '../../coloreditor';


const styles = `
    .k-hue-slider {
        --kendo-slider-start: 0;
        --kendo-slider-end: 0;
    }
    .k-alpha-slider {
        --kendo-slider-start: 0;
        --kendo-slider-end: 100;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>ColorEditor Gradient RTL</span>
            <span>ColorEditor Gradient Group View RTL</span>

            <section>
                <ColorEditorNormal dir="rtl" color="rgba(0,0,0, 0.5)" />
            </section>

            <section>
                <ColorEditorGroup dir="rtl" color="rgba(0,0,0, 0.5)" />
            </section>

            <span>ColorEditor Palette RTL</span>
            <span>ColorEditor Palette Group View RTL</span>

            <section>
                <ColorEditorPalette dir="rtl" color="rgba(0,0,0, 0.5)" />
            </section>

            <section>
                <ColorEditorPaletteGroup dir="rtl" color="rgba(0,0,0, 0.5)" />
            </section>
        </div>
    </>
);
