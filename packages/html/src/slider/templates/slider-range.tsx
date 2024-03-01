import { Slider, SliderTick } from "../../slider";

export const SliderRange = (props) => (
    <Slider
        type="range"
        showButtons={false}
        children={
            <>
                <SliderTick className="k-first" label large text="0"/>
                <SliderTick />
                <SliderTick />
                <SliderTick />
                <SliderTick />
                <SliderTick label large text="5"/>
                <SliderTick />
                <SliderTick />
                <SliderTick />
                <SliderTick />
                <SliderTick className="k-last" label large text="10"/></>
        }
        {...props}>
    </Slider>
);
