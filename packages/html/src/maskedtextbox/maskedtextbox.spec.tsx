import { classNames, States } from '../utils-new';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';

export const MASKEDTEXTBOX_CLASSNAME = `k-maskedtextbox`;

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
    size: [ "small", "medium", "large" ],
    rounded: [ "small", "medium", "large", "full" ],
    fillMode: [ "solid", "flat", "outline" ],
};

export type KendoMaskedTextboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoMaskedTextboxProps = KendoMaskedTextboxOptions & {
    type?: string;
    value?: string;
    placeholder?: string;
    showClearButton?: boolean;
};

export type KendoMaskedTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    showClearButton: true
};

export const MaskedTextbox = (
    props: KendoMaskedTextboxProps &
        KendoMaskedTextboxState &
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
            className={classNames(props.className, MASKEDTEXTBOX_CLASSNAME)}
        >
            <InputInnerInput placeholder={placeholder} value={value} />
            <InputValidationIcon {...props} />
            <InputLoadingIcon {...props} />
            { showClearButton && <InputClearValue {...props} /> }
        </Input>
    );
};

MaskedTextbox.states = states;
MaskedTextbox.options = options;
MaskedTextbox.className = MASKEDTEXTBOX_CLASSNAME;

export default MaskedTextbox;
