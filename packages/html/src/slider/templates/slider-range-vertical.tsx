import { Slider, SliderTick } from "../../slider";

export const SliderRangeVertical = (props) => (
    <Slider
        type="range"
        orientation="vertical"
        children={
            <>
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
                <SliderTick label large text="10"/></>
        }
        {...props}>
    </Slider>
);
