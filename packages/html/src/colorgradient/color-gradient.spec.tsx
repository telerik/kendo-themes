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
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
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

/**
 * @aria {role="textbox"} The focusable wrapper should be considered a textbox with a value that could be submitted.
 * @aria {aria-label|aria-labelledby} The component needs an accessible name including the currently selected value.
 * @aria {tabindex="0"} The element must be focusable.
 * @aria {aria-disabled="true"} Rendered only when the ColorGradient is disabled.
 * @aria {role="slider"} The 2D draghandle must have slider role for ARIA-allowed attributes.
 * @aria {aria-orientation="undefined"} The implicit orientation for the slider must be removed for the 2D handle.
 * @aria {aria-label} Must provide information about the purpose of the slider and the currently selected color.
 * @aria {aria-valuetext} Must specify the values on both X and Y axis.
 * @aria {aria-valuenow} Required by the slider role.
 * @aria {aria-valuemin} Required by the slider role.
 * @aria {aria-valuemax} Required by the slider role.
 * @aria {aria-label} Must provide the name of the channel (red, green, blue, or alpha).
 */
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
        role: roleProp,
        tabIndex: tabIndexProp,
        ...other
    } = props;

    return (
        <div
            {...other}
            role={roleProp ?? 'textbox'}
            aria-label={roleProp === 'none' ? undefined : 'Color gradient'}
            tabIndex={tabIndexProp ?? 0}
            aria-disabled={disabled ? 'true' : undefined}
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
                            )} style={dragHandleStyle}
                            role="slider"
                            aria-orientation={"undefined" as React.AriaAttributes['aria-orientation']}
                            aria-label="Color well with two-dimensional slider for selecting saturation and lightness"
                            aria-valuetext="X: 73, Y: 50"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            ></div>
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
                            )} style={dragHandleStyle}
                            role="slider"
                            aria-orientation={"undefined" as React.AriaAttributes['aria-orientation']}
                            aria-label="Color well with two-dimensional slider for selecting saturation and lightness"
                            aria-valuetext="X: 73, Y: 50"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            ></div>
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

/**
 * @keyboard {Enter} Activates inner ColorGradient navigation.
 * @keyboard {Tab} Navigates to the next focusable element on the page.
 * @keyboard {Shift + Tab} Navigates to the previous focusable element on the page.
 * @keyboard {Escape} Moves focus back to wrapper element. Deactivates inner ColorGradient navigation.
 * @keyboard {Tab} Navigates to the next focusable element in the ColorGradient. If current focus is on the last element, moves focus to the first focusable item in the component.
 * @keyboard {Shift + Tab} Navigates to the previous focusable element in the ColorGradient. If current focus is on the first element, moves focus to the last focusable item in the component.
 * @keyboard {Enter} For button items, ColorGradient executes the currently focused button action.
 * @keyboard {ArrowUp} Moves slider up by large step.
 * @keyboard {ArrowDown} Moves slider down by large step.
 * @keyboard {ArrowLeft} Moves slider left by large step.
 * @keyboard {ArrowRight} Moves slider right by large step.
 * @keyboard {Shift + ArrowUp} Moves slider up by small step.
 * @keyboard {Shift + ArrowDown} Moves slider down by small step.
 * @keyboard {Shift + ArrowLeft} Moves slider left by small step.
 * @keyboard {Shift + ArrowRight} Moves slider right by small step.
 */

export default ColorGradient;
