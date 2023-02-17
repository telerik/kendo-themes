import { classNames, optionClassNames } from '../utils-new';

const className = `k-input-inner`;

const states = [];

const options = {};

export type InputInnerInputProps = {
    value?: string;
    type?: string;
    placeholder?: string;
    autocomplete?: string;
};

const defaultProps = {
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
        value = defaultProps.value,
        type = defaultProps.type,
        placeholder = defaultProps.placeholder,
        autocomplete = defaultProps.autocomplete,
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
        />
    );
};

InputInnerInput.states = states;
InputInnerInput.options = options;
InputInnerInput.className = className;

export default InputInnerInput;
