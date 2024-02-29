import { Slider, SliderNormal } from '../../slider';


const style = `
    #test-area {
        grid-template-columns: 100px repeat(3, 1fr);
        align-items: center;
    }

    .slider-0 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 0;
    }
    .slider-50 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 50;
    }
    .slider-100 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 100;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-bg-gray-50">
            <span></span>
            <span>Empty</span>
            <span>Not Empty</span>
            <span>Full</span>

            {[ 'normal', ...Slider.states ].map((state) => (
                <>
                    <span>{state}</span>
                    <section>
                        <SliderNormal { ...{ [state]: true }} className="slider-0" />
                    </section>

                    <section>
                        <SliderNormal { ...{ [state]: true }} className="slider-50" />
                    </section>

                    <section>
                        <SliderNormal { ...{ [state]: true }} className="slider-100" />
                    </section>
                </>
            ))}

            <span>RTL</span>
            <section>
                <SliderNormal className="slider-0" dir="rtl" />
            </section>
            <section>
                <SliderNormal className="slider-50" dir="rtl" />
            </section>
            <section>
                <SliderNormal className="slider-100" dir="rtl" />
            </section>
        </div>
    </>
);
