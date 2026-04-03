import { Slider, KendoSliderProps } from '../slider.spec';
import { SliderTick } from '../slider-tick';
import { SliderNormal } from '../templates/slider-normal';
import { SliderVertical } from '../templates/slider-vertical';

const options = Slider.options;
const states = Slider.states;
const defaults = {
    ...Slider.defaultOptions,
    variant: 'horizontal',
    label: true,
};

const variants = [
    {
        name: 'horizontal',
        title: 'Horizontal',
    },
    {
        name: 'vertical',
        title: 'Vertical',
    },
];

const modifiers = [
    {
        name: 'label',
        title: 'Labels'
    },
    {
        name: 'tick',
        title: 'Ticks'
    },
    {
        name: 'button',
        title: 'Side Buttons'
    },
];

export const SliderDemo = (
    props: KendoSliderProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'button': {
                additionalProps.showButtons = mods?.[modifier] ? true : false;
                break;
            }
            case 'label': {
                additionalProps.label = mods?.[modifier] ? true : false;
                break;
            }
            case 'tick': {
                additionalProps.showTicks = mods?.[modifier] ? true : false;
                break;
            }
        }
    });

    const { label = true, showButtons, showTicks } = additionalProps;
    const style = { "--kendo-slider-start": 0, "--kendo-slider-end": 60 } as React.CSSProperties;

    switch (variant) {
        case 'vertical':
            return (
                <SliderVertical showTicks={showTicks} showButtons={showButtons} style={{ height: "300px", ...style }} {...other}>
                    <SliderTick label={label} large orientation="vertical" text="0" style={{ position: "absolute", bottom: "0%" }} />
                    <SliderTick label={label} large orientation="vertical" text="2" style={{ position: "absolute", bottom: "25%" }} />
                    <SliderTick label={label} large orientation="vertical" text="4" style={{ position: "absolute", bottom: "50%" }} />
                    <SliderTick label={label} large orientation="vertical" text="6" style={{ position: "absolute", bottom: "75%" }} />
                    <SliderTick label={label} large orientation="vertical" text="8" style={{ position: "absolute", bottom: "100%" }} />
                </SliderVertical>
            );
        case 'horizontal':
        default:
            return (
                <SliderNormal showTicks={showTicks} showButtons={showButtons} style={{ width: "400px", ...style }} {...other}>
                    <SliderTick label={label} large orientation="horizontal" text="0" style={{ position: "absolute", left: "0%" }} />
                    <SliderTick label={label} large orientation="horizontal" text="2" style={{ position: "absolute", left: "25%" }} />
                    <SliderTick label={label} large orientation="horizontal" text="4" style={{ position: "absolute", left: "50%" }} />
                    <SliderTick label={label} large orientation="horizontal" text="6" style={{ position: "absolute", left: "75%" }} />
                    <SliderTick label={label} large orientation="horizontal" text="8" style={{ position: "absolute", left: "100%" }} />
                </SliderNormal>
            );
    }
}


SliderDemo.options = options;
SliderDemo.states = states;
SliderDemo.variants = variants;
SliderDemo.defaultOptions = defaults;
SliderDemo.modifiers = modifiers;
SliderDemo.className = Slider.className;

export default SliderDemo;

