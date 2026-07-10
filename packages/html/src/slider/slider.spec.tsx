import { classNames, stateClassNames, States } from '../misc';
import { Button } from '../button';

import { KendoComponent } from '../_types/component';
import { SLIDER_FOLDER_NAME, SLIDER_MODULE_NAME } from './constants';
const SLIDER_CLASSNAME = 'k-slider';

const states = [
    States.hover,
    States.focus,
    States.active,
    States.disabled,
    States.readonly
];

const options = {};

export type KendoSliderProps = {
    type?: 'single' | 'range' | 'gradient';
    orientation?: 'horizontal' | 'vertical';
    gradientType?: '1d' | '2d';
    dir?: 'ltr' | 'rtl';
    handlePosition?: 'start' | 'end';
    trackStyle?: React.CSSProperties;
    showButtons?: boolean;
    showTicks?: boolean;
    value?: number;
    min?: number;
    max?: number;
    startValue?: number;
    endValue?: number;
};

export type KendoSliderState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    type: 'single',
    orientation: 'horizontal',
    gradientType: '1d',
    readonly: false,
    disabled: false,
    handlePosition: 'end',
    showButtons: true,
    showTicks: true,
    value: 50,
    min: 0,
    max: 100,
};

/**
 * Slider component - range input with drag handle(s).
 *

 * @aria {role="slider"} Sets the proper role for Slider.
 * @aria {aria-label|aria-labelledby|title} The Slider needs an accessible name to be assigned to it.
 * @aria {aria-invalid="true"} Rendered only when the Slider is in a form and announces the invalid state.
 * @aria {aria-valuenow} Specifies the currently selected value in the Slider.
 * @aria {aria-valuemin} Specifies the minimum available value in the Slider.
 * @aria {aria-valuemax} Specifies the maximum available value in the Slider.
 * @aria {aria-valuetext} Specifies a human-readable text alternative to the numeric value. Provided by consuming applications.
 * @aria {tabindex="0"} The element must be focusable. Disabled sliders are removed from tab order.
 * @aria {aria-orientation="vertical"} Present only when slider is vertical.
 * @aria {aria-disabled="true"} Rendered only when the Slider is disabled.
 * @aria {aria-readonly="true"} Rendered only when the Slider is readonly. Readonly sliders remain focusable but their value cannot be changed.
 * @aria {tabindex="-1"} Excludes the buttons from the natural tab order. Keyboard users use arrow keys on the drag handle.
 * @aria {title} Provides a tooltip describing the button action (e.g., "Decrease" or "Increase").
 * @aria {aria-hidden="true"} Hides the tick list from assistive technologies. Tick values are redundant with the drag handle value attributes.
 * @aria {role="presentation"} Removes semantic meaning from individual tick elements. Ticks are visual-only markers.
 * @aria {title} Represents the value associated with the respective tick.
 * @ux {Drag} The handle is dragged along the track to change the value.
 * @ux {Click} Clicking on the track moves the handle to that position.
 * @ux {Range mode} Two handles define a start and end value when range selection is enabled.
 * @ux {Tick marks} Optional tick marks indicate fixed value intervals along the track.
 * @ux {Disabled state} When disabled, the handle cannot be moved.
 */

export const Slider: KendoComponent<KendoSliderProps & KendoSliderState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSliderProps &
        KendoSliderState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type = defaultOptions.type,
        orientation = defaultOptions.orientation,
        gradientType = defaultOptions.gradientType,
        readonly = defaultOptions.readonly,
        disabled = defaultOptions.disabled,
        handlePosition = defaultOptions.handlePosition,
        showButtons = defaultOptions.showButtons,
        showTicks = defaultOptions.showTicks,
        value = defaultOptions.value,
        min = defaultOptions.min,
        max = defaultOptions.max,
        startValue,
        endValue,
        hover,
        focus,
        active,
        trackStyle,
        dir,
        ...other
    } = props;

    // Determine aria-orientation based on type and gradientType
    // Note: "undefined" is a valid WAI-ARIA value for indeterminate direction
    // but React's types only allow "horizontal" | "vertical" | undefined
    // We cast to any to allow the string value "undefined" for 2D gradient sliders
    const getAriaOrientation = (): string | undefined => {
        if (type === 'gradient' && gradientType === '2d') {
            return 'undefined'; // String "undefined" for 2D color pickers
        }
        if (orientation === 'vertical') {
            return 'vertical';
        }
        return undefined; // Horizontal is the default, no need to specify
    };

    const ariaOrientation = getAriaOrientation();

    let iconIncrease;
    let iconDecrease;

    if ( orientation === 'horizontal' ) {
        iconIncrease = dir === 'rtl' ? 'chevron-left' : 'chevron-right';
        iconDecrease = dir === 'rtl' ? 'chevron-right' : 'chevron-left';
    } else if ( orientation === 'vertical' ) {
        iconIncrease = 'chevron-up';
        iconDecrease = 'chevron-down';
    }

    return (
        <div
            {...other}
            className={classNames(
                SLIDER_CLASSNAME,
                props.className,
                stateClassNames(SLIDER_CLASSNAME, {
                    readonly,
                    disabled
                }),
                {
                    [`k-slider-${orientation}`]: orientation,
                    'k-colorgradient-slider': type === 'gradient',
                }
            )} dir={dir} >
            { showButtons && <Button className="k-button-decrease" rounded="full" icon={iconDecrease} tabIndex={-1} title="Decrease" /> }
            <div className="k-slider-track-wrap">
                {
                    showTicks &&
                        <ul className="k-reset k-slider-items" aria-hidden="true">
                            {props.children}
                        </ul>
                }
                <div className="k-slider-track" style={trackStyle}>
                    <div className="k-slider-selection"></div>
                    { type === 'range' &&

                    <span className={classNames(
                        'k-draghandle',
                        'k-draghandle-start',
                        stateClassNames(SLIDER_CLASSNAME, {
                            hover,
                            focus,
                            active
                        })
                    )}
                        role="slider"
                        tabIndex={disabled ? undefined : 0}
                        aria-valuenow={startValue ?? min}
                        aria-valuemin={min}
                        aria-valuemax={endValue ?? max}
                        aria-orientation={ariaOrientation as 'horizontal' | 'vertical' | undefined}
                        aria-disabled={disabled ? 'true' : undefined}
                        aria-readonly={readonly ? 'true' : undefined}
                        aria-label={other['aria-label'] ? `${other['aria-label']} start` : 'Range start'}
                    ></span> }

                    <span className={classNames(
                        'k-draghandle',
                        `k-draghandle-${handlePosition}`,
                        stateClassNames(SLIDER_CLASSNAME, {
                            hover,
                            focus,
                            active
                        })
                    )}
                        role="slider"
                        tabIndex={disabled ? undefined : 0}
                        aria-valuenow={type === 'range' ? (endValue ?? max) : value}
                        aria-valuemin={type === 'range' ? (startValue ?? min) : min}
                        aria-valuemax={max}
                        aria-orientation={ariaOrientation as 'horizontal' | 'vertical' | undefined}
                        aria-disabled={disabled ? 'true' : undefined}
                        aria-readonly={readonly ? 'true' : undefined}
                        aria-label={type === 'range'
                            ? (other['aria-label'] ? `${other['aria-label']} end` : 'Range end')
                            : other['aria-label']}
                    ></span>
                </div>
            </div>
            { showButtons && <Button className="k-button-increase" rounded="full" icon={iconIncrease} tabIndex={-1} title="Increase" /> }
        </div>
    );
};

Slider.states = states;
Slider.options = options;
Slider.className = SLIDER_CLASSNAME;
Slider.defaultOptions = defaultOptions;
Slider.moduleName = SLIDER_MODULE_NAME;
Slider.folderName = SLIDER_FOLDER_NAME;

/**
 * @keyboard {ArrowDown or ArrowLeft} Decreases value by small step.
 * @keyboard {ArrowUp or ArrowRight} Increases value by small step.
 * @keyboard {Home} Sets value to the Min value.
 * @keyboard {End} Sets value to the Max value.
 * @keyboard {PageUp} Increases value by large step.
 * @keyboard {PageDown} Decreases value by large step.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#slider WAI-ARIA specification for slider

 * @see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value — slider must have accessible name and value
 */

export default Slider;
