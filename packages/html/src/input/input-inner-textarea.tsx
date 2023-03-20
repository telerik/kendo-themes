import { classNames, optionClassNames } from '../utils';

const defaultProps = {
    value: '',
    placeholder: ''
};

const className = `k-input-inner`;

const states = [];

const options = {};

export type InputInnerTextareaProps = {
    value?: string;
    placeholder?: string;
    rows?: number;
};

export const InputInnerTextarea = (
    props: InputInnerTextareaProps &
      React.HTMLAttributes<HTMLTextAreaElement>
) => {
    const {
        value = defaultProps.value,
        placeholder = defaultProps.placeholder,
        rows,
        ...other
    } = props;

    return (
        <textarea
            {...other}
            className={classNames(props.className, className, optionClassNames(className, props))}
            placeholder={placeholder}
            rows={rows}>
            {value}
        </textarea>
    );
};

InputInnerTextarea.states = states;
InputInnerTextarea.options = options;
InputInnerTextarea.className = className;

export default InputInnerTextarea;
