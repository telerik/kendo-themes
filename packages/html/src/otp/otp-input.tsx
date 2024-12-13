import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { Input, InputInnerInput } from '../input';

export const ONETIMEPASSWORDINPUT_CLASSNAME = `k-otp-input`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.readonly
];

const options = {
    size: [Size.small, Size.medium, Size.large],
    rounded: [Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.solid, FillMode.flat, FillMode.outline]
};

export type KendoOneTimePasswordInputOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoOneTimePasswordInputProps = KendoOneTimePasswordInputOptions & {
    type?: string;
    value?: string;
    placeholder?: string;
    autocomplete?: string;
};

export type KendoOneTimePasswordInputState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode,
};

export const OneTimePasswordInput = (
    props: KendoOneTimePasswordInputProps &
        KendoOneTimePasswordInputState &
        Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        type,
        value,
        placeholder,
        hover,
        focus,
        valid,
        invalid,
        required,
        disabled,
        readonly,
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
            disabled={disabled}
            readonly={readonly}
            className={classNames(props.className,
                ONETIMEPASSWORDINPUT_CLASSNAME
            )}
        >
            <InputInnerInput placeholder={placeholder} value={value} type={type} />
        </Input>
    );
};

OneTimePasswordInput.states = states;
OneTimePasswordInput.options = options;
OneTimePasswordInput.className = ONETIMEPASSWORDINPUT_CLASSNAME;
OneTimePasswordInput.defaultOptions = defaultOptions;

export default OneTimePasswordInput;
