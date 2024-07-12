import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon,
    InputSeparator
} from '../input';

export const TEXTBOX_CLASSNAME = `k-textbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
    States.readonly
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoTextboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoTextboxProps = KendoTextboxOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    type?: string;
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    showClearButton?: boolean;
};

export type KendoTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    showClearButton: true,
    size: Input.defaultProps.size,
    rounded: Input.defaultProps.rounded,
    fillMode: Input.defaultProps.fillMode,
    separators: true
};

export const Textbox = (
    props: KendoTextboxProps &
        KendoTextboxState &
        Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        prefix,
        suffix,
        separators = defaultProps.separators,
        type,
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
            className={classNames(props.className, TEXTBOX_CLASSNAME)}
        >
            {prefix &&
            <>
                <InputPrefix>{prefix}</InputPrefix>
                {separators && <InputSeparator/>}
            </>
            }
            <InputInnerInput placeholder={placeholder} value={value} type={type} />
            <InputValidationIcon
                valid={valid}
                invalid={invalid}
                loading={loading}
                disabled={disabled} />
            <InputLoadingIcon
                loading={loading}
                disabled={disabled} />
            { showClearButton && <InputClearValue
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
        </Input>
    );
};

Textbox.states = states;
Textbox.options = options;
Textbox.className = TEXTBOX_CLASSNAME;
Textbox.defaultProps = defaultProps;

export default Textbox;
