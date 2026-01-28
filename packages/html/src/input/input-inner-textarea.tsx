import { classNames, optionClassNames } from '../misc';

const className = `k-input-inner`;

const states = [];

const options = {};

export type InputInnerTextareaProps = {
    value?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
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
        className: customClassName,
        ...other
    } = props;

    return (
        <textarea
            {...other}
            className={classNames(customClassName, className, optionClassNames(className, props))}
            placeholder={placeholder}
            rows={rows}
            defaultValue={value}
            aria-label={props['aria-label'] || 'Textarea'}
            aria-multiline="true"
        />
    );
};

InputInnerTextarea.states = states;
InputInnerTextarea.options = options;
InputInnerTextarea.className = className;

export default InputInnerTextarea;
