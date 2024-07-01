import { Slider } from "../../slider";

export const SliderGradientVertical = (props) => (
    <Slider
        type="gradient"
        orientation="vertical"
        showButtons={false}
        showTicks={false}
        {...props}>
    </Slider>
);

export default SliderGradientVertical;
