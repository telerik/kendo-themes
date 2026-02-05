import { classNames, optionClassNames } from '../misc';

const className = `k-input-inner`;

const states = [];

const options = {};

export type InputInnerInputProps = {
    value?: string;
    type?: string;
    placeholder?: string;
    autocomplete?: string;
    min?: number;
    max?: number;
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
        required,
        invalid,
        min,
        max,
        ...other
    } = props;

    return (
        <input
            type={type}
            disabled={disabled}
            required={required}
            className={classNames(props.className, className, optionClassNames(className, props))}
            placeholder={placeholder}
            autoComplete={autocomplete}
            defaultValue={value}
            aria-label={props['aria-label'] || 'Textbox'}
            aria-required={required ? 'true' : undefined}
            aria-invalid={invalid ? 'true' : undefined}
            aria-disabled={disabled ? 'true' : undefined}
            aria-describedby={props['aria-describedby']}
            aria-valuenow={props['aria-valuenow']}
            aria-valuemin={min}
            aria-valuemax={max}
            {...other}
        />
    );
};

InputInnerInput.states = states;
InputInnerInput.options = options;
InputInnerInput.className = className;

export default InputInnerInput;
