import { Slider } from "../../slider";

export const SliderGradient = (props) => (
    <Slider
        type="gradient"
        showButtons={false}
        showTicks={false}
        {...props}
        aria-label={props['aria-label'] || "Color slider"}
    />
);
