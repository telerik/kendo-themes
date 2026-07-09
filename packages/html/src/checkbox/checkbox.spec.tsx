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
    wrapperRole?: string;
};

export type CheckboxState = { [K in (typeof states)[number]]?: boolean };

export type CheckboxOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
};

const defaultOptions = {};

/**
 * @aria {aria-label|aria-labelledby} The input requires an accessible name to which it will be assigned.
 * @aria {aria-checked="true"|\"false"|\"mixed"} For native checkboxes the checked state is handled by the browser. aria-checked is used for custom implementations.
 * @aria {aria-describedby} Points to the hint or error message for the checkbox.
 * @aria {aria-disabled="true"} For native checkboxes use the HTML disabled attribute. aria-disabled for custom implementations.
 * @aria {role} override for the wrapper span (e.g., role="none" in Treeview context)
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

/**
 * @keyboard {Space} Toggles the checked state. Regardless of the indeterminate state, the key always considers the `Value` of the CheckBox.
 * @keyboard {Shift + Tab} Moves focus to the previous checkbox.
 * @keyboard {ArrowDown or ArrowRight} Moves focus to the next checkbox.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/ WAI-ARIA Authoring Practices: CheckBox Pattern
 */

export default Checkbox;
