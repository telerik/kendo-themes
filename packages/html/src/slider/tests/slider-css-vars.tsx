import { Slider, SliderTick } from '../../slider';


const style = `
    .k-slider-horizontal {
        width: 100%;
    }
    .k-slider-vertical {
        height: 300px;
    }

    .k-slider {
        --kendo-slider-start: 0;
        --kendo-slider-end: 60;
    }
    .k-range-slider {
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
                <Slider>
                    <SliderTick label large text="0"/>
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
                    <SliderTick label large text="100"/>
                </Slider>
            </section>
            <section>
                <Slider type="range">
                    <SliderTick label large text="0"/>
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
                    <SliderTick label large text="100"/>
                </Slider>
            </section>
            <section dir="rtl">
                <Slider dir="rtl">
                    <SliderTick label large text="0"/>
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
                    <SliderTick label large text="100"/>
                </Slider>
            </section>
            <section dir="rtl">
                <Slider type="range" dir="rtl">
                    <SliderTick label large text="0"/>
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
                    <SliderTick label large text="100"/>
                </Slider>
            </section>


            <section>
                <Slider orientation="vertical">
                    <SliderTick label large text="0"/>
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
                    <SliderTick label large text="100"/>
                </Slider>
            </section>
            <section>
                <Slider type="range" orientation="vertical">
                    <SliderTick label large text="0"/>
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
                    <SliderTick label large text="100"/>
                </Slider>
            </section>
            <section dir="rtl">
                <Slider orientation="vertical" dir="rtl">
                    <SliderTick label large text="0"/>
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
                    <SliderTick label large text="100"/>
                </Slider>
            </section>
            <section dir="rtl">
                <Slider type="range" orientation="vertical" dir="rtl">
                    <SliderTick label large text="0"/>
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
                    <SliderTick label large text="100"/>
                </Slider>
            </section>

        </div>
    </>
);
