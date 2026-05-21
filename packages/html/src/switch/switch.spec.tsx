import { classNames, optionClassNames, stateClassNames, States, Size, Roundness } from '../misc';

import { KendoComponent } from '../_types/component';
import { SWITCH_FOLDER_NAME, SWITCH_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const SWITCH_CLASSNAME = `k-switch`;

const states = [
    States.hover,
    States.focus,
    States.disabled,
    States.readonly,
    States.checked,
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    trackRounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    thumbRounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ]
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

const defaultOptions = {};

/**
 * Switch component - toggle switch for binary choices.
 *
 * @accessibility
 * - Uses `role="switch"` to announce the switch role
 * - Uses `aria-checked` to announce the checked state
 * - Uses `tabindex="0"` to make the element focusable (removed when disabled)
 * - Must have accessible name via `aria-label` or label association
 * - Uses `aria-disabled="true"` when disabled (removed from tab order)
 * - Uses `aria-readonly="true"` when readonly (remains focusable but value cannot change)
 *
 * @example
 * ```tsx
 * // With aria-label
 * <Switch aria-label="Enable notifications" />
 *
 * // Readonly switch
 * <Switch aria-label="Feature enabled" readonly checked />
 *
 * // With external label
 * <label id="switch-label">Dark mode</label>
 * <Switch aria-labelledby="switch-label" />
 * ```
 *
 * @wcag 4.1.2 Name, Role, Value - switch must have accessible name and proper role
 */
export const Switch: KendoComponent<KendoSwitchProps & KendoSwitchState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoSwitchProps &
        KendoSwitchState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        checked,
        onLabel,
        offLabel,
        size,
        trackRounded,
        thumbRounded,
        hover,
        focus,
        disabled,
        readonly,
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
                    readonly,
                }),
                {
                    [`${SWITCH_CLASSNAME}-on`]: checked,
                    [`${SWITCH_CLASSNAME}-off`]: !checked,
                }
            )}
            role="switch"
            aria-checked={checked ? 'true' : 'false'}
            tabIndex={disabled ? undefined : 0}
            aria-disabled={disabled ? 'true' : undefined}
            aria-readonly={readonly ? 'true' : undefined}
        >
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
Switch.defaultOptions = defaultOptions;
Switch.moduleName = SWITCH_MODULE_NAME;
Switch.folderName = SWITCH_FOLDER_NAME;

Switch.ariaSpec = a11ySpec.ariaSpec;

export default Switch;
