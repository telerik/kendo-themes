import { Icon } from '../icon';
import { classNames, States } from '../utils';

const className = `k-clear-value`;

const states = [
    States.disabled,
    States.loading,
    States.readonly,
];

const options = {};

export type InputClearValueState = { [K in (typeof states)[number]]?: boolean };
export type InputClearValueOptions = Record<string, unknown>;

export const InputClearValue = (
    props: InputClearValueOptions &
      InputClearValueState &
      React.HTMLAttributes<HTMLInputElement>
) => {
    const {
        disabled,
        loading,
        readonly,
        value } = props;

    if (disabled || readonly || loading || !value ) {
        return <></>;
    }

    return (
        <span className={classNames(props.className, className)}>
            <Icon icon="x" />
        </span>
    );
};

InputClearValue.states = states;
InputClearValue.options = options;
InputClearValue.className = className;

export default InputClearValue;
