import { SliderNormal, SliderVertical, SliderTick } from '../../slider';


const style = `
    .k-slider-horizontal {
        width: 1px;
        width: 100%;
    }
    .k-slider-vertical {
        height: 300px;
    }

    .k-slider-items {
        position: relative;
    }

    .k-slider-horizontal .k-slider-track .k-slider-selection {
        width: 33%;
    }

    .k-slider-horizontal .k-slider-track .k-draghandle-end {
        left: 33%;
        z-index: 1;
    }

    .k-slider-vertical .k-slider-track .k-slider-selection {
        bottom: 0;
        height: 33%;
    }

    .k-slider-vertical .k-slider-track .k-draghandle-end {
        bottom: 33%;
        z-index: 1;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <SliderNormal>
                    <SliderTick label large orientation="horizontal" text="0" style={{ zIndex: 1, position: "absolute", left: "0%" }}/>
                    <SliderTick label large orientation="horizontal" text="33" style={{ zIndex: 1, position: "absolute", left: "33%" }}/>
                    <SliderTick label large orientation="horizontal" text="50" style={{ zIndex: 1, position: "absolute", left: "50%" }}/>
                    <SliderTick label large orientation="horizontal" text="75" style={{ zIndex: 1, position: "absolute", left: "75%" }}/>
                    <SliderTick label large orientation="horizontal" text="100" style={{ zIndex: 1, position: "absolute", left: "100%" }}/>
                </SliderNormal>
            </section>

            <section style={{ justifySelf: "center" }} >
                <SliderVertical>
                    <SliderTick label large orientation="vertical" text="0" style={{ zIndex: 1, position: "absolute", bottom: "0%" }}/>
                    <SliderTick label large orientation="vertical" text="33" style={{ zIndex: 1, position: "absolute", bottom: "33%" }}/>
                    <SliderTick label large orientation="vertical" text="50" style={{ zIndex: 1, position: "absolute", bottom: "50%" }}/>
                    <SliderTick label large orientation="vertical" text="75" style={{ zIndex: 1, position: "absolute", bottom: "75%" }}/>
                    <SliderTick label large orientation="vertical" text="100" style={{ zIndex: 1, position: "absolute", bottom: "100%" }}/>
                </SliderVertical>
            </section>

        </div>
    </>
);
