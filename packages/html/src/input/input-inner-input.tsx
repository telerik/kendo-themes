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
    /**
     * ARIA role for the input (e.g., 'combobox', 'spinbutton').
     * @aria role - Defines the input's semantic role
     */
    role?: string;
    /**
     * Indicates the input controls a popup (e.g., 'listbox', 'dialog').
     * @aria aria-haspopup - Indicates popup type
     */
    'aria-haspopup'?: 'listbox' | 'dialog' | 'menu' | 'tree' | 'grid' | boolean;
    /**
     * Whether the controlled popup is expanded/visible.
     * @aria aria-expanded - Indicates popup visibility
     */
    'aria-expanded'?: 'true' | 'false' | boolean;
    /**
     * ID of the controlled element (e.g., listbox).
     * @aria aria-controls - References controlled element
     */
    'aria-controls'?: string;
    /**
     * ID of the currently active descendant in a composite widget.
     * @aria aria-activedescendant - Tracks focused item in listbox/grid
     */
    'aria-activedescendant'?: string;
    /**
     * Autocomplete behavior for combobox pattern.
     * @aria aria-autocomplete - Indicates autocomplete type
     */
    'aria-autocomplete'?: 'list' | 'both' | 'inline' | 'none';
    /**
     * Whether the input value is invalid.
     * @aria aria-invalid - Indicates validation state
     */
    'aria-invalid'?: 'true' | 'false' | boolean;
    /**
     * Whether the input is busy loading.
     * @aria aria-busy - Indicates loading state
     */
    'aria-busy'?: 'true' | 'false' | boolean;
    /**
     * Read-only state for the input.
     */
    readOnly?: boolean;
};

const defaultOptions = {
    type: 'text',
    autocomplete: 'off',
    value: '',
    placeholder: ''
} as const;

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
