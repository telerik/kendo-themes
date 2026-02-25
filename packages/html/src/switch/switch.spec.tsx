import { classNames, optionClassNames, stateClassNames, States, Size, Roundness } from '../misc';

import { KendoComponent } from '../_types/component';
import { SWITCH_FOLDER_NAME, SWITCH_MODULE_NAME } from './constants';
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

/**
 * Accessibility specification for Switch.
 */
Switch.ariaSpec = {
    selector: '.k-switch',
    rules: [
        { selector: '.k-switch', attribute: 'role=switch', usage: 'Announces the switch role of the element.' },
        { selector: '.k-switch', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'The input requires an accessible name to which it will be assigned.' },
        { selector: '.k-switch', attribute: 'aria-required=true (when required)', usage: 'Rendered only when the Switch is in a form. Required because <span role="switch"> does not support the native required attribute.' },
        { selector: '.k-switch', attribute: 'aria-checked', usage: 'Announces the checked state of the Switch.' },
        { selector: '.k-switch', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message for the switch.' },
        { selector: '.k-switch', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered only when the Switch is in a form and announces the invalid state.' },
        { selector: '.k-switch:not(.k-disabled)', attribute: 'tabindex=0', usage: 'The element must be focusable. Disabled switches are removed from tab order.' },
        { selector: '.k-switch.k-disabled', attribute: 'aria-disabled=true', usage: 'Rendered only when the Switch is disabled.' },
        { selector: '.k-switch.k-readonly', attribute: 'aria-readonly=true (when readonly)', usage: 'Rendered only when the Switch is readonly. Readonly switches remain focusable but their value cannot be changed.' },
    ]
};

export default Switch;
