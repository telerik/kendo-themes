import { classNames, optionClassNames } from '../misc';

const className = `k-input-inner`;

const states = [];

const options = {};

export type InputInnerTextareaProps = {
    value?: string;
    placeholder?: string;
    rows?: number;
};

const defaultOptions = {
    value: '',
    placeholder: ''
};

export const InputInnerTextarea = (
    props: InputInnerTextareaProps &
      React.HTMLAttributes<HTMLTextAreaElement>
) => {
    const {
        value = defaultOptions.value,
        placeholder = defaultOptions.placeholder,
        rows,
        ...other
    } = props;

    return (
        <textarea
            {...other}
            className={classNames(props.className, className, optionClassNames(className, props))}
            placeholder={placeholder}
            rows={rows}
            defaultValue={value}
        />
    );
};

InputInnerTextarea.states = states;
InputInnerTextarea.options = options;
InputInnerTextarea.className = className;

export default InputInnerTextarea;
