import { Slider } from "../../slider";

export const SliderGradientVertical = (props) => (
    <Slider
        type="gradient"
        orientation="vertical"
        showButtons={false}
        showTicks={false}
        {...props}
        aria-label={props['aria-label'] || "Color slider"}
    />
);
