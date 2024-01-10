import { classNames, stateClassNames, States } from '../misc';
import { Button } from '../button';

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

const defaultProps = {
    type: 'single',
    orientation: 'horizontal',
    readonly: false,
    disabled: false,
    handlePosition: 'end',
    showButtons: true,
    showTicks: true
};

export const Slider = (
    props: KendoSliderProps &
        KendoSliderState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        type = defaultProps.type,
        orientation = defaultProps.orientation,
        readonly = defaultProps.readonly,
        disabled = defaultProps.disabled,
        handlePosition = defaultProps.handlePosition,
        showButtons = defaultProps.showButtons,
        showTicks = defaultProps.showTicks,
        hover,
        focus,
        active,
        trackStyle,
        dir
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
        <div className={classNames(
            SLIDER_CLASSNAME,
            props.className,
            stateClassNames(SLIDER_CLASSNAME, {
                readonly,
                disabled
            }),
            {
                [`k-slider-${orientation}`]: orientation,
                'k-colorgradient-slider': type === 'gradient',
                'k-range-slider': type === 'range'
            }
        )} dir={dir} >
            { showButtons && <Button className="k-button-decrease" rounded="full" icon={iconDecrease} /> }
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

                    <span className={classNames(
                        'k-draghandle',
                        'k-draghandle-start',
                        stateClassNames(SLIDER_CLASSNAME, {
                            hover,
                            focus,
                            active
                        })
                    )}></span> }

                    <span className={classNames(
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
            { showButtons && <Button className="k-button-increase" rounded="full" icon={iconIncrease} /> }
        </div>
    );
};

Slider.states = states;
Slider.options = options;
Slider.className = SLIDER_CLASSNAME;
Slider.defaultProps = defaultProps;

export default Slider;
