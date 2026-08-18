import { classNames, optionClassNames } from '../misc';

const className = `k-input-inner`;

const states = [];

const options = {};

export type InputInnerInputProps = {
    value?: string;
    type?: string;
    placeholder?: string;
    autocomplete?: string;
    disabled?: boolean;
    role?: string;
    'aria-haspopup'?: 'listbox' | 'dialog' | 'menu' | 'tree' | 'grid' | boolean;
    'aria-expanded'?: 'true' | 'false' | boolean;
    'aria-controls'?: string;
    'aria-activedescendant'?: string;
    'aria-autocomplete'?: 'list' | 'both' | 'inline' | 'none';
    'aria-invalid'?: 'true' | 'false' | boolean;
    'aria-busy'?: 'true' | 'false' | boolean;
    readOnly?: boolean;
};

const defaultOptions = {
    type: 'text',
    autocomplete: 'off',
    value: '',
    placeholder: ''
} as const;

/**
 * @aria {role} Semantic role of the input (e.g., "combobox", "spinbutton").
 * @aria {aria-haspopup} Type of popup the input controls.
 * @aria {aria-expanded} Whether the controlled popup is visible.
 * @aria {aria-controls} ID of the controlled element (e.g., listbox).
 * @aria {aria-activedescendant} ID of the focused item in a listbox/grid popup.
 * @aria {aria-autocomplete} Autocomplete behavior for combobox pattern.
 * @aria {aria-invalid} Indicates the input value is invalid.
 * @aria {aria-busy} Indicates loading state.
 */
export const InputInnerInput = (
    props: InputInnerInputProps &
      React.HTMLAttributes<HTMLInputElement>
) => {
    const {
        value = defaultOptions.value,
        type = defaultOptions.type,
        placeholder = defaultOptions.placeholder,
        autocomplete = defaultOptions.autocomplete,
        disabled,
        readOnly,
        ...other
    } = props;

    return (
        <input
            {...other}
            type={type}
            className={classNames(props.className, className, optionClassNames(className, props))}
            placeholder={placeholder}
            autoComplete={autocomplete}
            defaultValue={value}
            disabled={disabled || undefined}
            readOnly={readOnly || undefined}
        />
    );
};

InputInnerInput.states = states;
InputInnerInput.options = options;
InputInnerInput.className = className;

export default InputInnerInput;
