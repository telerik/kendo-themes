import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { Textbox } from '../textbox';

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
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
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
    inputProps?: React.HTMLAttributes<HTMLInputElement>;
};

export type KendoOneTimePasswordInputState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Textbox.defaultOptions.size,
    rounded: Textbox.defaultOptions.rounded,
    fillMode: Textbox.defaultOptions.fillMode,
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
        autocomplete,
        hover,
        focus,
        valid,
        invalid,
        required,
        disabled,
        readonly,
        inputProps,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        ...other
    } = props;

    const resolvedAriaLabelledBy = inputProps?.['aria-labelledby'] ?? ariaLabelledBy;
    const resolvedAriaLabel = resolvedAriaLabelledBy
        ? undefined
        : (inputProps?.['aria-label'] ?? ariaLabel ?? 'One-time password digit');
    const resolvedAutocomplete = autocomplete ?? 'off';


    return (
        <Textbox
            {...other}
            size={size}
            rounded={rounded}
            fillMode={fillMode}
            type={type}
            value={value}
            placeholder={placeholder}
            autocomplete={resolvedAutocomplete}
            hover={hover}
            focus={focus}
            valid={valid}
            invalid={invalid}
            required={required}
            disabled={disabled}
            readonly={readonly}
            inputProps={{
                ...inputProps,
                'aria-label': resolvedAriaLabel,
                'aria-labelledby': resolvedAriaLabelledBy
            }}
            showClearButton={false}
            showValidationIcon={false}
            className={classNames(props.className,
                ONETIMEPASSWORDINPUT_CLASSNAME
            )}
        >
        </Textbox>
    );
};

OneTimePasswordInput.states = states;
OneTimePasswordInput.options = options;
OneTimePasswordInput.className = ONETIMEPASSWORDINPUT_CLASSNAME;
OneTimePasswordInput.defaultOptions = defaultOptions;

export default OneTimePasswordInput;
