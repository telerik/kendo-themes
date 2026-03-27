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
    /** For gradient sliders in 2D canvas pickers - direction cannot be determined */
    gradientType?: '1d' | '2d';
    dir?: 'ltr' | 'rtl';
    handlePosition?: 'start' | 'end';
    trackStyle?: React.CSSProperties;
    showButtons?: boolean;
    showTicks?: boolean;
    value?: number;
    min?: number;
    max?: number;
    /** For range slider - the start value */
    startValue?: number;
    /** For range slider - the end value */
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
 * @accessibility
 * - Drag handle uses `role="slider"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
 * - Uses `tabindex="0"` on drag handle to make it focusable (removed when disabled)
 * - Must have accessible name via `aria-label`, `aria-labelledby`, or `title` on drag handle
 * - Increase/decrease buttons have `tabindex="-1"` and `title` (auxiliary controls, excluded from tab order)
 * - Vertical sliders have `aria-orientation="vertical"`
 * - Gradient sliders in 2D color pickers use `aria-orientation="undefined"` (direction indeterminate)
 * - Uses `aria-disabled="true"` on drag handle when disabled
 * - Uses `aria-readonly="true"` on drag handle when readonly
 *
 * @example
 * ```tsx
 * // Basic slider
 * <Slider value={50} min={0} max={100} aria-label="Volume" />
 *
 * // Vertical slider
 * <Slider orientation="vertical" value={75} aria-label="Brightness" />
 *
 * // 2D gradient slider (color picker canvas)
 * <Slider type="gradient" gradientType="2d" aria-label="Color selector" />
 * ```
 *
 * @wcag 4.1.2 Name, Role, Value - slider must have accessible name and value
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
 * Accessibility specification for Slider.
 */
Slider.ariaSpec = {
    selector: '.k-slider',
    rules: [
        { selector: '.k-slider .k-draghandle:not(.k-hsv-draghandle)', attribute: 'role=slider', usage: 'Sets the proper role for Slider.' },
        { selector: '.k-slider .k-draghandle:not(.k-hsv-draghandle)', attribute: 'aria-label or aria-labelledby or title', usage: 'The Slider needs an accessible name to be assigned to it.' },
        { selector: '.k-slider .k-draghandle:not(.k-hsv-draghandle)', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered only when the Slider is in a form and announces the invalid state.' },
        { selector: '.k-slider .k-draghandle:not(.k-hsv-draghandle)', attribute: 'aria-valuenow', usage: 'Specifies the currently selected value in the Slider.' },
        { selector: '.k-slider .k-draghandle:not(.k-hsv-draghandle)', attribute: 'aria-valuemin', usage: 'Specifies the minimum available value in the Slider.' },
        { selector: '.k-slider .k-draghandle:not(.k-hsv-draghandle)', attribute: 'aria-valuemax', usage: 'Specifies the maximum available value in the Slider.' },
        { selector: '.k-slider .k-draghandle:not(.k-hsv-draghandle)', attribute: 'aria-valuetext (when has text alternative)', usage: 'Specifies a human-readable text alternative to the numeric value. Provided by consuming applications.' },
        { selector: '.k-slider:not(.k-disabled) .k-draghandle:not(.k-hsv-draghandle)', attribute: 'tabindex=0', usage: 'The element must be focusable. Disabled sliders are removed from tab order.' },
        { selector: '.k-slider-vertical .k-draghandle', attribute: 'aria-orientation=vertical (when vertical)', usage: 'Present only when slider is vertical.' },
        { selector: '.k-slider.k-disabled .k-draghandle:not(.k-hsv-draghandle)', attribute: 'aria-disabled=true', usage: 'Rendered only when the Slider is disabled.' },
        { selector: '.k-slider.k-readonly .k-draghandle', attribute: 'aria-readonly=true (when readonly)', usage: 'Rendered only when the Slider is readonly. Readonly sliders remain focusable but their value cannot be changed.' },
        { selector: '.k-slider .k-button', attribute: 'tabindex=-1', usage: 'Excludes the buttons from the natural tab order. Keyboard users use arrow keys on the drag handle.' },
        { selector: '.k-slider .k-button', attribute: 'title', usage: 'Provides a tooltip describing the button action (e.g., "Decrease" or "Increase").' },
        { selector: '.k-slider .k-slider-items', attribute: 'aria-hidden=true', usage: 'Hides the tick list from assistive technologies. Tick values are redundant with the drag handle value attributes.' },
        { selector: '.k-slider .k-tick', attribute: 'role=presentation', usage: 'Removes semantic meaning from individual tick elements. Ticks are visual-only markers.' },
        { selector: '.k-slider .k-tick', attribute: 'title', usage: 'Represents the value associated with the respective tick.' },
    ]
};

export default Slider;
