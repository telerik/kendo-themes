import { classNames, States, Size, Roundness, FillMode } from '../utils';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';
import { SpinButton } from '../spinbutton';

export const DATEINPUT_CLASSNAME = `k-dateinput`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoDateInputOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDateInputProps = KendoDateInputOptions & {
    value?: string;
    placeholder?: string;
    showSpinButton?: boolean;
};

export type KendoDateInputState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    showSpinButton: true
};

export const DateInput = (
    props: KendoDateInputProps &
        KendoDateInputState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        value,
        placeholder,
        size,
        rounded,
        fillMode,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        showSpinButton = defaultProps.showSpinButton,
        ...other
    } = props;


    return (
        <Input
            {...other}
            size={size}
            rounded={rounded}
            fillMode={fillMode}
            hover={hover}
            focus={focus}
            valid={valid}
            invalid={invalid}
            required={required}
            loading={loading}
            disabled={disabled}
            className={classNames(props.className, DATEINPUT_CLASSNAME)}
        >
            <InputInnerInput placeholder={placeholder} value={value} />
            <InputValidationIcon {...props} />
            <InputLoadingIcon {...props} />
            <InputClearValue {...props} />
            {showSpinButton && (
                <SpinButton
                    className="k-input-spinner"
                    size={size}
                    fillMode={fillMode}
                />
            )}
        </Input>
    );
};

DateInput.states = states;
DateInput.options = options;
DateInput.className = DATEINPUT_CLASSNAME;

export default DateInput;
