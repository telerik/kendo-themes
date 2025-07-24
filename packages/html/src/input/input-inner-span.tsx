import { Icon } from '../icon';
import { classNames, optionClassNames } from '../misc';

const className = `k-input-inner`;

const states = [];

const options = {};

export type InputInnerSpanProps = {
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    valueIcon?: React.ReactNode;
    valueIconName?: string;
  };

export const InputInnerSpan = (
    props: InputInnerSpanProps &
      React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        value,
        placeholder,
        showValue,
        valueIcon,
        valueIconName,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(props.className, className, optionClassNames(className, props))}>
            {valueIcon}
            {!valueIcon && valueIconName && <Icon className="k-input-value-icon" icon={valueIconName} />}
            {showValue && <span className="k-input-value-text">{value ? value : placeholder}</span>}
        </span>
    );
};

InputInnerSpan.states = states;
InputInnerSpan.options = options;
InputInnerSpan.className = className;

export default InputInnerSpan;
