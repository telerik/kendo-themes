import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon,
    InputSuffix,
    InputPrefix,
    InputSeparator
} from '../input';
import { SpinButton } from '../spinbutton';


export const NUMERICTEXTBOX_CLASSNAME = `k-numerictextbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.loading,
    States.required,
    States.disabled,
    States.readonly
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoNumericTextboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoNumericTextboxProps = KendoNumericTextboxOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    separators?: boolean;
    value?: string;
    placeholder?: string;
    showSpinButton?: boolean;
    showClearButton?: boolean;
};

export type KendoNumericTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    showSpinButton: true,
    showClearButton: true,
    size: Input.defaultProps.size,
    rounded: Input.defaultProps.rounded,
    fillMode: Input.defaultProps.fillMode,
    separators: true
};

export const NumericTextbox = (
    props: KendoNumericTextboxProps &
        KendoNumericTextboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
        separators = defaultProps.separators,
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
        readonly,
        showClearButton = defaultProps.showClearButton,
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
            readonly={readonly}
            className={classNames(props.className, NUMERICTEXTBOX_CLASSNAME)}
        >
            {prefix &&
                <>
                    <InputPrefix>{prefix}</InputPrefix>
                    {separators && <InputSeparator/>}
                </>
            }
            <InputInnerInput placeholder={placeholder} value={value} />
            <InputValidationIcon
                valid={valid}
                invalid={invalid}
                loading={loading}
                disabled={disabled} />
            <InputLoadingIcon
                loading={loading}
                disabled={disabled} />
            {showClearButton && <InputClearValue
                loading={loading}
                disabled={disabled}
                readonly={readonly}
                value={value} />}
            {suffix &&
                <>
                    {separators && <InputSeparator/>}
                    <InputSuffix>{suffix}</InputSuffix>
                </>
            }
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

NumericTextbox.states = states;
NumericTextbox.options = options;
NumericTextbox.className = NUMERICTEXTBOX_CLASSNAME;
NumericTextbox.defaultProps = defaultProps;

export default NumericTextbox;
