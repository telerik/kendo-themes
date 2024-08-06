import { classNames, optionClassNames } from '../misc';

const className = `k-input-inner`;

const states = [];

const options = {};

export type InputInnerInputProps = {
    value?: string;
    type?: string;
    placeholder?: string;
    autocomplete?: string;
};

export const InputInnerInput = (
    props: InputInnerInputProps &
      React.HTMLAttributes<HTMLInputElement>
) => {
    const {
        type = 'text',
        autocomplete = 'off',
        value = '',
        placeholder = '',
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
