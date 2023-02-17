import { Icon } from '../icon';
import { classNames, States } from '../utils-new';

const className = `k-input-validation-icon`;

const states = [
    States.valid,
    States.invalid,
    States.disabled,
    States.loading
];

const options = {};

export type InputValidationIconState = { [K in (typeof states)[number]]?: boolean };

export const InputValidationIcon = (
    props: InputValidationIconState &
      React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        valid,
        invalid,
        disabled,
        loading } = props;

    const iconName = invalid ? 'warning' : 'check';
    const renderValidationIcon = Boolean( valid || invalid );

    if (disabled || loading || !renderValidationIcon) {
        return <></>;
    }

    return (
        <Icon className={classNames(className)} name={iconName} />
    );
};

InputValidationIcon.states = states;
InputValidationIcon.options = options;
InputValidationIcon.className = className;

export default InputValidationIcon;
