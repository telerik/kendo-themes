import { classNames, optionClassNames, stateClassNames, States, Size } from '../utils-new';

export const SWITCH_CLASSNAME = `k-switch`;

const states = [
    States.hover,
    States.focus,
    States.disabled,
    States.checked,
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoSwitchOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoSwitchProps = KendoSwitchOptions & {
    onLabel?: string;
    offLabel?: string;
    trackRounded?: null | "sm" | "md" | "lg" | "full";
    thumbRounded?: null | "sm" | "md" | "lg" | "full";
};

export type KendoSwitchState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    trackRounded: "full",
    thumbRounded: "full"
};

export const Switch = (
    props: KendoSwitchProps &
        KendoSwitchState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        checked,
        onLabel,
        offLabel,
        size = defaultProps.size,
        trackRounded = defaultProps.trackRounded,
        thumbRounded = defaultProps.thumbRounded,
        hover,
        focus,
        disabled,
        ...other
    } = props;

    return (

        <span
            {...other}
            className={classNames(
                props.className,
                SWITCH_CLASSNAME,
                optionClassNames(SWITCH_CLASSNAME, {
                    size,
                }),
                stateClassNames(SWITCH_CLASSNAME, {
                    hover,
                    focus,
                    disabled,
                }),
                {
                    [`${SWITCH_CLASSNAME}-on`]: checked,
                    [`${SWITCH_CLASSNAME}-off`]: !checked,
                }
            )}>
            <span
                className={classNames(
                    'k-switch-track',
                    {
                        [`k-rounded-${trackRounded}`]: trackRounded
                    }
                )}>
                {onLabel && <span className="k-switch-label-on">{onLabel}</span>}
                {offLabel && <span className="k-switch-label-off">{offLabel}</span>}
            </span>
            <span className="k-switch-thumb-wrap">
                <span
                    className={classNames(
                        'k-switch-thumb',
                        {
                            [`k-rounded-${thumbRounded}`]: thumbRounded
                        }
                    )}>
                </span>
            </span>
        </span>
    );
};

Switch.states = states;
Switch.options = options;
Switch.className = SWITCH_CLASSNAME;

export default Switch;
