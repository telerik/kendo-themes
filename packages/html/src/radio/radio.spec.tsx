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
 * @accessibility
 * - Uses native `<input type="radio">` (role="radio" is implicit)
 * - Must have accessible name via `<label>`, `aria-label`, or `aria-labelledby`
 * - Native `checked` property handles checked state
 * - Uses native `disabled` attribute for disabled state
 * - Use `aria-invalid="true"` when validation fails
 * - Use `aria-describedby` to link to hint or error messages
 *
 * @example
 * ```tsx
 * // With label element
 * <RadioButton id="option1" name="options" />
 * <label htmlFor="option1">Option 1</label>
 *
 * // With aria-label
 * <RadioButton name="options" aria-label="Select option" />
 * ```
 *
 * @wcag 4.1.2 Name, Role, Value - radio must have accessible name
 * @wcag 1.3.1 Info and Relationships - label must be programmatically associated
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
 * Accessibility specification for RadioButton.
 */
RadioButton.ariaSpec = {
    selector: '.k-radio',
    rules: [
        { selector: '.k-radio', attribute: 'type=radio', usage: 'Announces the radio type of the input.' },
        { selector: '.k-radio', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'The input requires an accessible name to which it will be assigned.' },
        { selector: '.k-radio', attribute: 'checked (when checked)', usage: 'Boolean attribute that announces the checked state of the radio button.' },
        { selector: '.k-radio', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message for the radio.' },
        { selector: '.k-radio', attribute: 'disabled=disabled or aria-disabled=true (when disabled)', usage: 'Rendered only when the radio input is disabled.' },
        { selector: '.k-invalid, .ng-invalid', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered only when the radio button is in a form and announces the invalid state.' },
    ]
};

export default RadioButton;
