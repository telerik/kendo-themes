import { classNames, stateClassNames, States, Size, optionClassNames } from '../misc';
import { SliderGradientVertical, SliderGradient } from '../slider';
import { ColorInput } from './color-input';
import { ColorContrast } from './color-contrast';

import { KendoComponent } from '../_types/component';
import { COLORGRADIENT_FOLDER_NAME, COLORGRADIENT_MODULE_NAME } from './constants';
const COLOR_GRADIENT_CLASSNAME = 'k-colorgradient';

const states = [
    States.hover,
    States.focus,
    States.readonly,
    States.disabled,
];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoColorGradientOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoColorGradientProps = KendoColorGradientOptions & {
    mode?: 'rgba' | 'rgb' | 'hsva' | 'hsv' | 'hex';
    dir?: 'ltr' | 'rtl';
    contrast?: boolean;
    hoverHandle?: boolean;
    focusHandle?: boolean;
    gradientStyle?: React.CSSProperties;
    dragHandleStyle?: React.CSSProperties;
    alphaStyle?: React.CSSProperties;
    alphaStyleHorizontal?: React.CSSProperties;
    canvasOrientation?: 'horizontal' | 'vertical';
};

export type KendoColorGradientState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    mode: 'rgba',
    readonly: false,
    disabled: false,
    contrast: false,
    gradientStyle: { background: "rgb(255, 0, 0 )" },
    dragHandleStyle: { top: "50px", left: "73px" },
    alphaStyle: { background: "linear-gradient(to top, transparent, rgb(255, 0, 0))" },
    alphaStyleHorizontal: { background: "linear-gradient(to right, transparent, rgb(255, 0, 0))" },
    canvasOrientation: 'horizontal'
};

export const ColorGradient: KendoComponent<KendoColorGradientProps & KendoColorGradientState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoColorGradientProps &
        KendoColorGradientState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        mode = defaultOptions.mode,
        readonly = defaultOptions.readonly,
        disabled = defaultOptions.disabled,
        gradientStyle = defaultOptions.gradientStyle,
        dragHandleStyle = defaultOptions.dragHandleStyle,
        alphaStyle = defaultOptions.alphaStyle,
        alphaStyleHorizontal = defaultOptions.alphaStyleHorizontal,
        contrast = defaultOptions.contrast,
        dir,
        hover,
        focus,
        hoverHandle,
        focusHandle,
        canvasOrientation = defaultOptions.canvasOrientation,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                COLOR_GRADIENT_CLASSNAME,
                optionClassNames(COLOR_GRADIENT_CLASSNAME, {size}),
                stateClassNames(COLOR_GRADIENT_CLASSNAME, {
                    hover,
                    focus,
                    readonly,
                    disabled
                })
            )} dir={dir}>
            {
                !canvasOrientation || canvasOrientation === 'horizontal' &&
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
            }
            {
                canvasOrientation === 'vertical' &&
                <div className="k-colorgradient-canvas k-vstack">
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
                    <div className="k-hsv-controls k-vstack">
                        <SliderGradient className="k-hue-slider" hover={hoverHandle} focus={focusHandle} />
                        {
                            mode !== 'rgb' && mode !== 'hsv' && <SliderGradient className="k-alpha-slider" hover={hoverHandle} focus={focusHandle} trackStyle={alphaStyleHorizontal}/>
                        }
                    </div>
                </div>
            }

            <ColorInput mode={props.mode} size={size}/>
            { contrast && <ColorContrast /> }
        </div>
    );
};

ColorGradient.states = states;
ColorGradient.options = options;
ColorGradient.className = COLOR_GRADIENT_CLASSNAME;
ColorGradient.defaultOptions = defaultOptions;
ColorGradient.moduleName = COLORGRADIENT_MODULE_NAME;
ColorGradient.folderName = COLORGRADIENT_FOLDER_NAME;

export default ColorGradient;
