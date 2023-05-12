import { ColorEditor } from '../../coloreditor';


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

            <span>ColorGradient View</span>
            <span>ColorPalette View</span>

            <section>
                <ColorEditor group color="rgba(0,0,0, 0.5)" />
            </section>

            <section>
                <ColorEditor group view="palette" color="rgba(0,0,0, 0.5)" />
            </section>

        </div>
    </>
);
