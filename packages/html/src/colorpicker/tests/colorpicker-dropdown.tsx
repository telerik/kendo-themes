import { ColorPicker } from '../../colorpicker';
import { ColorEditor } from '../../coloreditor';


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

                    <div className="k-animation-container k-animation-container-shown" style={{ position: "relative", width: "min-content" }}>
                        <div className="k-child-animation-container">
                            <div className="k-popup k-color-picker-popup">
                                <ColorEditor group color="rgba(0,0,0, 0.5)" currentColor="fuchsia" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div style={{ position: "relative" }}>
                    <ColorPicker value="fuchsia" />

                    <div className="k-animation-container k-animation-container-shown">
                        <div className="k-child-animation-container">
                            <div className="k-popup k-color-picker-popup">
                                <ColorEditor group view="palette" color="rgba(0,0,0, 0.5)" currentColor="fuchsia" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    </>
);
