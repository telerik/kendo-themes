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


import { KendoComponent } from '../_types/component';
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
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    value?: string;
    placeholder?: string;
    showSpinButton?: boolean;
    showClearButton?: boolean;
};

export type KendoNumericTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showSpinButton: true,
    showClearButton: true,
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode,
    separators: true
};

export const NumericTextbox: KendoComponent<KendoNumericTextboxProps & KendoNumericTextboxState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoNumericTextboxProps &
        KendoNumericTextboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        separators = defaultOptions.separators,
        showClearButton = defaultOptions.showClearButton,
        showSpinButton = defaultOptions.showSpinButton,
        prefix,
        suffix,
        value,
        placeholder,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
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
NumericTextbox.defaultOptions = defaultOptions;

export default NumericTextbox;
