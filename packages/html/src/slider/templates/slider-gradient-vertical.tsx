import { Slider } from "../../slider/slider.spec";

export const SliderGradientVertical = (props) => (
    <Slider
        type="gradient"
        orientation="vertical"
        showButtons={false}
        showTicks={false}
        {...props}>
    </Slider>
);
