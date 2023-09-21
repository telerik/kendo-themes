import { ColorPickerPopupPalette, ColorPickerPopupGradient } from '..';


const styles = `
    #test-area {
        justify-items: start;
    }
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>ColorPicker With ColorGradient View</span>
            <span>ColorPicker With ColorPalette View</span>

            <section>
                <ColorPickerPopupGradient />
            </section>

            <section>
                <ColorPickerPopupPalette />
            </section>

        </div>
    </>
);
