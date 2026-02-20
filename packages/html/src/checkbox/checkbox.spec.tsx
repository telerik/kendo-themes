import { classNames, optionClassNames, stateClassNames, States, Size, Roundness } from '../misc';

import { KendoComponent } from '../_types/component';
import { CHECKBOX_FOLDER_NAME, CHECKBOX_MODULE_NAME } from './constants';
export const CHECKBOX_CLASSNAME = `k-checkbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.checked,
    States.indeterminate
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ]
};

export type CheckboxProps = CheckboxOptions & {
    id?: string;
};

export type CheckboxState = { [K in (typeof states)[number]]?: boolean };

export type CheckboxOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
};

const defaultOptions = {};

/**
 * Checkbox component - native checkbox input element.
 *
 * @accessibility
 * - Uses native `<input type="checkbox">` (role="checkbox" is implicit)
 * - Must have accessible name via `<label>`, `aria-label`, or `aria-labelledby`
 * - Native `checked` property handles checked state
 * - Uses native `disabled` attribute for disabled state
 * - Use `aria-invalid="true"` when validation fails
 *
 * @example
 * ```tsx
 * // With label element
 * <Checkbox id="agree" />
 * <label htmlFor="agree">I agree</label>
 *
 * // With aria-label
 * <Checkbox aria-label="Subscribe to newsletter" />
 * ```
 *
 * @wcag 4.1.2 Name, Role, Value - checkbox must have accessible name
 * @wcag 1.3.1 Info and Relationships - label must be programmatically associated
 */
export const Checkbox: KendoComponent<CheckboxProps & CheckboxState & React.HTMLAttributes<HTMLInputElement>> = (
    props: CheckboxProps & CheckboxState & React.HTMLAttributes<HTMLInputElement>
) => {
    const {
        id,
        checked,
        indeterminate,
        hover,
        focus,
        disabled,
        invalid,
        valid,
        required,
        size,
        rounded,
        ...other
    } = props;

    return (
        <span className="k-checkbox-wrap">
            <input
                {...other}
                id={id}
                type="checkbox"
                defaultChecked={checked}
                required={required}
                disabled={disabled || undefined}
                aria-invalid={invalid ? 'true' : undefined}
                className={classNames(
                    props.className,
                    CHECKBOX_CLASSNAME,
                    optionClassNames(CHECKBOX_CLASSNAME, { size, rounded }),
                    stateClassNames(CHECKBOX_CLASSNAME, { hover, focus, disabled, invalid, valid, indeterminate, checked }),
                )}
            />
        </span>
    );
};

Checkbox.states = states;
Checkbox.options = options;
Checkbox.className = CHECKBOX_CLASSNAME;
Checkbox.defaultOptions = defaultOptions;
Checkbox.moduleName = CHECKBOX_MODULE_NAME;
Checkbox.folderName = CHECKBOX_FOLDER_NAME;

/**
 * Accessibility specification for Checkbox.
 */
Checkbox.ariaSpec = {
    selector: '.k-checkbox',
    rules: [
        { selector: '.k-checkbox', attribute: 'role=checkbox or type=checkbox', usage: 'Announces the checkbox role of the element.' },
        { selector: '.k-checkbox', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'The input requires an accessible name to which it will be assigned.' },
        { selector: '.k-checkbox', attribute: 'aria-checked=true/false/mixed or checked', usage: 'For native checkboxes the checked state is handled by the browser. aria-checked is used for custom implementations.' },
        { selector: '.k-checkbox', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message for the checkbox.' },
        { selector: '.k-checkbox', attribute: 'disabled or aria-disabled=true (when disabled)', usage: 'For native checkboxes use the HTML disabled attribute. aria-disabled for custom implementations.' },
        { selector: '.k-invalid, .ng-invalid', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered only when the CheckBox is in a form and announces the invalid state.' },
    ]
};

export default Checkbox;
