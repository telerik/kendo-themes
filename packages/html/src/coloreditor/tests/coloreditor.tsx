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

            <span>ColorEditor Gradient</span>
            <span>ColorEditor Gradient Group View</span>

            <section>
                <ColorEditorNormal color="rgba(0,0,0, 0.5)" />
            </section>

            <section>
                <ColorEditorGroup color="rgba(0,0,0, 0.5)" />
            </section>

            <span>ColorEditor Palette</span>
            <span>ColorEditor Palette Group View</span>

            <section>
                <ColorEditorPalette color="rgba(0,0,0, 0.5)" />
            </section>

            <section>
                <ColorEditorPaletteGroup color="rgba(0,0,0, 0.5)" />
            </section>
        </div>
    </>
);
