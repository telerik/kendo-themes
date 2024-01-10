import { Slider, SliderTick } from "../../slider";

export const SliderGradientVertical = (props) => (
    <Slider
        type="gradient"
        orientation="vertical"
        showButtons={false}
        showTicks={false}
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
