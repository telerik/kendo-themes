import { classNames, optionClassNames, stateClassNames, States, Size, Roundness } from '../misc';

export const SWITCH_CLASSNAME = `k-switch`;

const states = [
    States.hover,
    States.focus,
    States.disabled,
    States.checked,
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    trackRounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    thumbRounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ]
};

export type KendoSwitchOptions = {
    size?: (typeof options.size)[number] | null;
    trackRounded?: (typeof options.trackRounded)[number] | null;
    thumbRounded?: (typeof options.thumbRounded)[number] | null;
};

export type KendoSwitchProps = KendoSwitchOptions & {
    onLabel?: string;
    offLabel?: string;
};

export type KendoSwitchState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    trackRounded: Roundness.full,
    thumbRounded: Roundness.full
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
                    optionClassNames(SWITCH_CLASSNAME, {
                        rounded: trackRounded
                    })
                )}>
                {onLabel && <span className="k-switch-label-on">{onLabel}</span>}
                {offLabel && <span className="k-switch-label-off">{offLabel}</span>}
            </span>
            <span className="k-switch-thumb-wrap">
                <span
                    className={classNames(
                        'k-switch-thumb',
                        optionClassNames(SWITCH_CLASSNAME, {
                            rounded: thumbRounded
                        })
                    )}>
                </span>
            </span>
        </span>
    );
};

Switch.states = states;
Switch.options = options;
Switch.className = SWITCH_CLASSNAME;
Switch.defaultProps = defaultProps;

export default Switch;
