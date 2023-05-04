import { Slider, SliderTick } from '../../slider';


const style = `
    #test-area {
        grid-template-columns: 100px 1fr 1fr 1fr;
        align-items: center;
    }

    .k-slider-0 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 0;
    }
    .k-slider-50 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 50;
    }
    .k-slider-100 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 100;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Empty</span>
            <span>Not Empty</span>
            <span>Full</span>

            <span>Normal</span>
            <section>
                <Slider className="k-slider-0">
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>
            <section>
                <Slider className="k-slider-50" hover>
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>
            <section>
                <Slider className="k-slider-100" focus>
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>


            <span>Disabled</span>
            <section>
                <Slider className="k-slider-0" disabled>
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>
            <section>
                <Slider className="k-slider-50" disabled>
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>
            <section>
                <Slider className="k-slider-100" disabled>
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>

            <span>Readonly</span>
            <section>
                <Slider className="k-slider-0" readonly>
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>
            <section>
                <Slider className="k-slider-50" readonly>
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>
            <section>
                <Slider className="k-slider-100" readonly>
                    <SliderTick label large text="0"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="5"/>
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick />
                    <SliderTick label large text="10"/>
                </Slider>
            </section>

        </div>
    </>
);
