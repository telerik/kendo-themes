import { ColorPicker } from '../../colorpicker';
import { ColorEditor } from '../../coloreditor';
import { Popup } from '../../popup';


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
                <div style={{ position: "relative" }}>
                    <ColorPicker />

                    <Popup className="k-color-picker-popup">
                        <ColorEditor group color="rgba(0,0,0, 0.5)" currentColor="fuchsia" />
                    </Popup>
                </div>
            </section>

            <section>
                <div style={{ position: "relative" }}>
                    <ColorPicker value="fuchsia" />

                    <Popup className="k-color-picker-popup">
                        <ColorEditor group view="palette" color="rgba(0,0,0, 0.5)" currentColor="fuchsia" />
                    </Popup>
                </div>

            </section>

        </div>
    </>
);
