import { classNames } from '../misc';

const SLIDER_TICK_CLASSNAME = 'k-tick';

const states = [];

const options = {};

export type KendoSliderTickProps = {
    style?: React.CSSProperties;
    label?: boolean;
    orientation?: null | 'horizontal' | 'vertical';
    large?: boolean;
    text?: string;
};

const defaultOptions = {
    label: false
};

export const SliderTick = (
    props: KendoSliderTickProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        style,
        label = defaultOptions.label,
        orientation,
        large,
        text,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                SLIDER_TICK_CLASSNAME,
                {
                    [`k-tick-${orientation}`]: orientation,
                    'k-tick-large': large
                }
            )} style={style} >
            {label && <span className="k-label">{text}</span>}
        </li>
    );
};

SliderTick.states = states;
SliderTick.options = options;
SliderTick.className = SLIDER_TICK_CLASSNAME;
SliderTick.defaultOptions = defaultOptions;

export default SliderTick;
