import { classNames, optionClassNames, stateClassNames, States, Size, Roundness } from '../misc';

import { KendoComponent } from '../_types/component';
import { CHECKBOX_FOLDER_NAME, CHECKBOX_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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
    /** @aria role override for the wrapper span (e.g., role="none" in Treeview context) */
    wrapperRole?: string;
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
        wrapperRole,
        ...other
    } = props;

    return (
        <span className="k-checkbox-wrap" role={wrapperRole}>
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

Checkbox.ariaSpec = a11ySpec.ariaSpec;

export default Checkbox;
