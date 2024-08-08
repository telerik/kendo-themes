import { classNames, stateClassNames, States } from '../misc';
import { SliderGradientVertical } from '../slider';
import { ColorInput } from './color-input';
import { ColorContrast } from './color-contrast';

const COLOR_GRADIENT_CLASSNAME = 'k-colorgradient';

const states = [
    States.hover,
    States.focus,
    States.readonly,
    States.disabled,
];

const options = {};

export type KendoColorGradientProps = {
    mode?: 'rgba' | 'rgb' | 'hsva' | 'hsv' | 'hex';
    dir?: 'ltr' | 'rtl';
    contrast?: boolean;
    hoverHandle?: boolean;
    focusHandle?: boolean;
    gradientStyle?: React.CSSProperties;
    dragHandleStyle?: React.CSSProperties;
    alphaStyle?: React.CSSProperties;
};

export type KendoColorGradientState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    mode: 'rgba',
    readonly: false,
    disabled: false,
    contrast: false,
    gradientStyle: { background: "rgb(255, 0, 0 )" },
    dragHandleStyle: { top: "50px", left: "73px" },
    alphaStyle: { background: "linear-gradient(to top, transparent, rgb(255, 0, 0))" }
};

export const ColorGradient = (
    props: KendoColorGradientProps &
        KendoColorGradientState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        mode = defaultOptions.mode,
        readonly = defaultOptions.readonly,
        disabled = defaultOptions.disabled,
        gradientStyle = defaultOptions.gradientStyle,
        dragHandleStyle = defaultOptions.dragHandleStyle,
        alphaStyle = defaultOptions.alphaStyle,
        contrast = defaultOptions.contrast,
        dir,
        hover,
        focus,
        hoverHandle,
        focusHandle,
    } = props;

    return (
        <div className={classNames(
            props.className,
            COLOR_GRADIENT_CLASSNAME,
            stateClassNames(COLOR_GRADIENT_CLASSNAME, {
                hover,
                focus,
                readonly,
                disabled
            })
        )} dir={dir}>
            <div className="k-colorgradient-canvas k-hstack">
                <div className="k-hsv-rectangle" style={gradientStyle}>
                    <div className="k-hsv-gradient">
                        <div className={classNames(
                            'k-hsv-draghandle',
                            'k-draghandle',
                            {
                                'k-hover': hoverHandle,
                                'k-focus': focusHandle
                            }
                        )} style={dragHandleStyle} ></div>
                    </div>
                </div>
                <div className="k-hsv-controls k-hstack">
                    <SliderGradientVertical className="k-hue-slider" hover={hoverHandle} focus={focusHandle} />
                    {
                        mode !== 'rgb' && mode !== 'hsv' && <SliderGradientVertical className="k-alpha-slider" hover={hoverHandle} focus={focusHandle} trackStyle={alphaStyle}/>
                    }
                </div>
            </div>
            <ColorInput mode={props.mode} />
            { contrast && <ColorContrast /> }
        </div>
    );
};

ColorGradient.states = states;
ColorGradient.options = options;
ColorGradient.className = COLOR_GRADIENT_CLASSNAME;
ColorGradient.defaultOptions = defaultOptions;

export default ColorGradient;
