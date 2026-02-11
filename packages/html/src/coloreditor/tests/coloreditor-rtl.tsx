import { ColorEditorNormal } from '../../coloreditor/templates/coloreditor-normal';
import { ColorEditorPalette } from '../../coloreditor/templates/coloreditor-palette';
import { ColorEditorGroup } from '../../coloreditor/templates/coloreditor-group';
import { ColorEditorPaletteGroup } from '../../coloreditor/templates/coloreditor-palette-group';


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
