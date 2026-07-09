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

 * @aria {role="switch"} Announces the switch role of the element.
 * @aria {aria-label|aria-labelledby} The input requires an accessible name to which it will be assigned.
 * @aria {aria-required="true"} Rendered only when the Switch is in a form. Required because <span role="switch"> does not support the native required attribute.
 * @aria {aria-checked} Announces the checked state of the Switch.
 * @aria {aria-describedby} Points to the hint or error message for the switch.
 * @aria {aria-invalid="true"} Rendered only when the Switch is in a form and announces the invalid state.
 * @aria {tabindex="0"} The element must be focusable. Disabled switches are removed from tab order.
 * @aria {aria-disabled="true"} Rendered only when the Switch is disabled.
 * @aria {aria-readonly="true"} Rendered only when the Switch is readonly. Readonly switches remain focusable but their value cannot be changed.
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
 * @keyboard {Space} Toggles the checked state of the Switch. Works analogically to the checkbox.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#switch WAI-ARIA Specification for the Switch

 * @see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value — switch must have accessible name and proper role
 */

export default Switch;
