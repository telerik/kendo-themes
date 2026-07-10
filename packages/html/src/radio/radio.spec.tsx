import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { RADIO_FOLDER_NAME, RADIO_MODULE_NAME } from './constants';
export const RADIOBUTTON_CLASSNAME = `k-radio`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.checked
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type RadioButtonProps = RadioButtonOptions & {
    id?: string;
};

export type RadioButtonState = { [K in (typeof states)[number]]?: boolean };

export type RadioButtonOptions = {
  size?: (typeof options.size)[number] | null;
};

const defaultOptions = {};

/**
 * RadioButton component - native radio input element.
 *

 * @aria {type="radio"} Announces the radio type of the input.
 * @aria {aria-label|aria-labelledby} The input requires an accessible name to which it will be assigned.
 * @aria {checked} Boolean attribute that announces the checked state of the radio button.
 * @aria {aria-describedby} Points to the hint or error message for the radio.
 * @aria {aria-disabled="true"} Rendered only when the radio input is disabled.
 * @aria {aria-invalid="true"} Rendered only when the radio button is in a form and announces the invalid state.
 * @ux {Exclusive selection} Selecting a radio button deselects all others in the group.
 * @ux {Label} An associated label describes the option the radio button represents.
 * @ux {Disabled state} When disabled, the radio button is non-interactive.
 */
export const RadioButton: KendoComponent<RadioButtonProps & RadioButtonState & React.HTMLAttributes<HTMLInputElement>> = (
    props: RadioButtonProps & RadioButtonState & React.HTMLAttributes<HTMLInputElement>
) => {
    const {
        id,
        checked,
        hover,
        focus,
        disabled,
        invalid,
        valid,
        required,
        size,
        ...other
    } = props;

    return (
        <span className="k-radio-wrap">
            <input
                {...other}
                id={id}
                type="radio"
                checked={checked}
                required={required}
                disabled={disabled || undefined}
                aria-invalid={invalid ? 'true' : undefined}
                className={classNames(
                    props.className,
                    RADIOBUTTON_CLASSNAME,
                    optionClassNames(RADIOBUTTON_CLASSNAME, { size }),
                    stateClassNames(RADIOBUTTON_CLASSNAME, { hover, focus, disabled, invalid, valid, checked }),
                )}
            />
        </span>
    );
};

RadioButton.states = states;
RadioButton.options = options;
RadioButton.className = RADIOBUTTON_CLASSNAME;
RadioButton.defaultOptions = defaultOptions;
RadioButton.moduleName = RADIO_MODULE_NAME;
RadioButton.folderName = RADIO_FOLDER_NAME;

/**
 * @keyboard {ArrowUp or ArrowLeft} Moves focus to the previous button and selects it. If the first button is focused, moves focus to the last.
 * @keyboard {ArrowDown or ArrowRight} Moves the focus to the next button and selects it. If the last button is focused, moves the focus to the first one.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/radio/ WAI-ARIA Authoring Practices: Radio Group Pattern

 * @see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value — radio must have accessible name
 * @see https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html WCAG 1.3.1 Info and Relationships — label must be programmatically associated
 */

export default RadioButton;
