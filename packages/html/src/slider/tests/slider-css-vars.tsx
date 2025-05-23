import { SliderNormal, SliderVertical, SliderRange, SliderRangeVertical, SliderTick } from '../../slider';


const style = `
    .k-slider-horizontal {
        width: 100%;
    }
    .k-slider-vertical {
        height: 300px;
    }

    .slider-normal {
        --kendo-slider-start: 0;
        --kendo-slider-end: 60;
    }
    .slider-range {
        --kendo-slider-start: 20;
        --kendo-slider-end: 60;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4 k-bg-gray-50">

            <span>Single</span>
            <span>Range</span>
            <span>Single RTL</span>
            <span>Range RTL</span>


            <section>
                <SliderNormal className="slider-normal">
                    <SliderTick className="k-first" label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="25"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="50"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="75"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick className="k-last" label large text="100"/>
                </SliderNormal>
            </section>
            <section>
                <SliderRange className="slider-range">
                    <SliderTick className="k-first" label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="25"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="50"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="75"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick className="k-last" label large text="100"/>
                </SliderRange>
            </section>
            <section dir="rtl">
                <SliderNormal className="slider-normal" dir="rtl">
                    <SliderTick className="k-first" label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="25"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="50"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="75"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick className="k-last" label large text="100"/>
                </SliderNormal>
            </section>
            <section dir="rtl">
                <SliderRange className="slider-range" dir="rtl">
                    <SliderTick className="k-first" label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="25"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="50"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="75"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick className="k-last" label large text="100"/>
                </SliderRange>
            </section>


            <section>
                <SliderVertical className="slider-normal">
                    <SliderTick className="k-first" label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="25"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="50"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="75"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick className="k-last" label large text="100"/>
                </SliderVertical>
            </section>
            <section>
                <SliderRangeVertical className="slider-range">
                    <SliderTick className="k-first" label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="25"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="50"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="75"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick className="k-last" label large text="100"/>
                </SliderRangeVertical>
            </section>
            <section dir="rtl">
                <SliderVertical className="slider-normal" dir="rtl">
                    <SliderTick className="k-first" label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="25"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="50"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="75"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick className="k-last" label large text="100"/>
                </SliderVertical>
            </section>
            <section dir="rtl">
                <SliderRangeVertical dir="rtl" className="slider-range">
                    <SliderTick className="k-first" label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="25"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="50"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="75"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick className="k-last" label large text="100"/>
                </SliderRangeVertical>
            </section>

        </div>
    </>
);
