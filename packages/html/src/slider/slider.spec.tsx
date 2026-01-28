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
    dir?: 'ltr' | 'rtl';
    handlePosition?: 'start' | 'end';
    trackStyle?: React.CSSProperties;
    showButtons?: boolean;
    showTicks?: boolean;
};

export type KendoSliderState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    type: 'single',
    orientation: 'horizontal',
    readonly: false,
    disabled: false,
    handlePosition: 'end',
    showButtons: true,
    showTicks: true
};

export const Slider: KendoComponent<KendoSliderProps & KendoSliderState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSliderProps &
        KendoSliderState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type = defaultOptions.type,
        orientation = defaultOptions.orientation,
        readonly = defaultOptions.readonly,
        disabled = defaultOptions.disabled,
        handlePosition = defaultOptions.handlePosition,
        showButtons = defaultOptions.showButtons,
        showTicks = defaultOptions.showTicks,
        hover,
        focus,
        active,
        trackStyle,
        dir,
        ...other
    } = props;

    let iconIncrease;
    let iconDecrease;

    if ( orientation === 'horizontal' ) {
        iconIncrease = dir === 'rtl' ? 'caret-alt-left' : 'caret-alt-right';
        iconDecrease = dir === 'rtl' ? 'caret-alt-right' : 'caret-alt-left';
    } else if ( orientation === 'vertical' ) {
        iconIncrease = 'caret-alt-up';
        iconDecrease = 'caret-alt-down';
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
            { showButtons && <Button className="k-button-decrease" rounded="full" icon={iconDecrease} aria-hidden="true" tabIndex={-1} /> }
            <div className="k-slider-track-wrap">
                {
                    showTicks &&
                        <ul className="k-reset k-slider-items">
                            {props.children}
                        </ul>
                }
                <div className="k-slider-track" style={trackStyle}>
                    <div className="k-slider-selection"></div>
                    { type === 'range' &&

                    <span
                        role="slider"
                        aria-label="Range start"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuetext="0 - 50"
                        aria-orientation={orientation === 'vertical' ? 'vertical' : undefined}
                        aria-readonly={readonly ? 'true' : undefined}
                        aria-disabled={disabled ? 'true' : undefined}
                        tabIndex={0}
                        className={classNames(
                        'k-draghandle',
                        'k-draghandle-start',
                        stateClassNames(SLIDER_CLASSNAME, {
                            hover,
                            focus,
                            active
                        })
                    )}></span> }

                    <span
                        role="slider"
                        aria-label="Value"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuetext={type === 'range' ? '0 - 50' : '50'}
                        aria-orientation={orientation === 'vertical' ? 'vertical' : undefined}
                        aria-readonly={readonly ? 'true' : undefined}
                        aria-disabled={disabled ? 'true' : undefined}
                        tabIndex={0}
                        className={classNames(
                        'k-draghandle',
                        `k-draghandle-${handlePosition}`,
                        stateClassNames(SLIDER_CLASSNAME, {
                            hover,
                            focus,
                            active
                        })
                    )}></span>
                </div>
            </div>
            { showButtons && <Button className="k-button-increase" rounded="full" icon={iconIncrease} aria-hidden="true" tabIndex={-1} /> }
        </div>
    );
};

Slider.states = states;
Slider.options = options;
Slider.className = SLIDER_CLASSNAME;
Slider.defaultOptions = defaultOptions;
Slider.moduleName = SLIDER_MODULE_NAME;
Slider.folderName = SLIDER_FOLDER_NAME;

export default Slider;
