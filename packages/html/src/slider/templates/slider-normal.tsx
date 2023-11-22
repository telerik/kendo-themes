import { Slider, SliderTick } from "../../slider";

export const SliderNormal = (props) => (
    <Slider children={
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
